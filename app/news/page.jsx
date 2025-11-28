"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "../styles/News.css";

const articlesPerPage = 4;

export default function News() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(
          "https://as-giannena-strapibackend.onrender.com/api/articles?populate=coverImage"
        );
        const data = await response.json();
        console.log("Raw Strapi response:", data);

        // Data is in data.data, each article is an object with needed fields directly
        const parsedArticles = data.data.map((item) => {
          const article = item; // your data shape is flat inside data[i]
          return {
            id: article.id,
            title: article.title,
            category: article.category,
            slug: article.slug,
            date: article.date,
            content: article.content,
            coverImage: article.coverImage?.url || "", // prepend backend URL if needed
          };
        });

        setArticles(
          parsedArticles.sort((a, b) => new Date(b.date) - new Date(a.date))
        );
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    }

    fetchArticles();
  }, []);

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const visibleArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  return (
    <div className="news-page">
      <title>Νέα-ΑΣ Γιάννενα Βόλεϊ</title>
      <meta
        name="description"
        content="Δείτε τα τελευταία νέα του ΑΣ Γιάννενα."
      />
      <meta name="keywords" content="ΑΣ Γιάννενα, Νέα, Βόλεϊ" />
      <h1 className="page-title">Νέα Ομάδας</h1>

      <div className="articles-container">
        {visibleArticles.map((article) => (
          <div key={article.id} className="article-card">
            <img
              src={article.coverImage}
              alt={article.title}
              className="article-image"
            />
            <div className="article-info">
              <p className="article-category">{article.category}</p>
              <h2 className="article-title">
                <Link href={`/news/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="article-date">
                {new Date(article.date).toLocaleDateString("el-GR")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Προηγούμενη
        </button>

        <span className="pagination-info">
          Σελίδα {currentPage} από {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Επόμενη
        </button>
      </div>
    </div>
  );
}
