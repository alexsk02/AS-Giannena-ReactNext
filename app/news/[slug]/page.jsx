"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import React from "react";
import "../../styles/ArticlePage.css";

function renderText(children) {
  return children.map((child, i) => {
    if (child.type === "image" && child.image && child.image.url) {
      const inlineImgUrl = child.image.url.startsWith("http")
        ? child.image.url
        : `https://as-giannena-strapibackend.onrender.com${child.image.url}`;
      console.log("Rendering inline image with URL:", inlineImgUrl);
      return (
        <img
          key={i}
          src={inlineImgUrl}
          alt={child.image.alternativeText || "inline image"}
          className="article-inline-image"
          style={{ maxWidth: "100%", height: "auto", margin: "1em 0" }}
        />
      );
    }

    if (child.type === "link" && child.url) {
      return (
        <a
          key={i}
          href={child.url}
          target="_blank"
          rel="noopener noreferrer"
          className="article-link"
        >
          {renderText(child.children || [])}
        </a>
      );
    }

    let text = child.text;

    if (child.bold) {
      text = <strong>{text}</strong>;
    }

    if (child.italic) {
      text = <em>{text}</em>;
    }

    if (child.underline) {
      text = <u>{text}</u>;
    }

    return <React.Fragment key={i}>{text}</React.Fragment>;
  });
}

function renderBlocks(blocks) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "paragraph":
        return <p key={i}>{renderText(block.children)}</p>;

      case "image":
        const imgUrl =
          block.image && block.image.url
            ? block.image.url.startsWith("http")
              ? block.image.url
              : `http://localhost:1337${block.image.url}`
            : (block.url &&
                (block.url.startsWith("http")
                  ? block.url
                  : `http://localhost:1337${block.url}`)) ||
              block.src;

        console.log("Rendering image with URL:", imgUrl);

        return (
          <img
            key={i}
            src={imgUrl}
            alt={
              (block.image && block.image.alternativeText) ||
              block.alt ||
              "article image"
            }
            className="article-inline-image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        );

      case "list":
        if (block.format === "unordered") {
          return (
            <ul key={i}>
              {block.children.map((item, j) => (
                <li key={j}>{renderText(item.children)}</li>
              ))}
            </ul>
          );
        } else if (block.format === "ordered") {
          return (
            <ol key={i}>
              {block.children.map((item, j) => (
                <li key={j}>{renderText(item.children)}</li>
              ))}
            </ol>
          );
        }
        return null;

      default:
        return null;
    }
  });
}
function extractDescription(blocks, maxLength = 160) {
  if (!Array.isArray(blocks)) return "";

  let text = "";

  for (const block of blocks) {
    if (block.type === "paragraph" && block.children) {
      for (const child of block.children) {
        if (child.text) {
          text += child.text + " ";
        }
      }
    }

    if (text.length >= maxLength) break;
  }

  return (
    text
      .trim()
      .slice(0, maxLength)
      .replace(/\s+\S*$/, "") + "..."
  );
}

// ---------- MAIN PAGE ----------
export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    async function loadArticle() {
      const res = await fetch(
        `https://as-giannena-strapibackend.onrender.com/api/articles?filters[slug][$eq]=${slug}&populate=coverImage`
      );

      const data = await res.json();

      if (!data.data || data.data.length === 0) {
        setArticle("NOT_FOUND");
        return;
      }

      const item = data.data[0];

      setArticle({
        id: item.id,
        title: item.title,
        slug: item.slug,
        date: item.date,
        content: item.content,
        coverImage: item.coverImage?.url || "",
      });
    }

    loadArticle();
  }, [slug]);

  if (article === null) return <p>Φόρτωση...</p>;
  if (article === "NOT_FOUND") return <p>Άρθρο δεν βρέθηκε.</p>;
  const description = extractDescription(article.content);

  const coverImgUrl = article.coverImage.startsWith("http")
    ? article.coverImage
    : `https://as-giannena-strapibackend.onrender.com${article.coverImage}`;

  return (
    <div className="article-page">
      <title>{article.title}</title>

      <h1 className="article-title">{article.title}</h1>

      <p className="article-date">
        {new Date(article.date).toLocaleDateString("el-GR")}
      </p>

      {article.coverImage && (
        <img className="article-image" src={coverImgUrl} alt={article.title} />
      )}

      <div className="article-content">{renderBlocks(article.content)}</div>
    </div>
  );
}
