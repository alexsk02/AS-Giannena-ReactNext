"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "@/app/ui/styles/article/ArticlePagination.css";

export default function ArticlePagination({ articles }) {
  const articlesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const visibleArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage,
  );

  return (
    <>
      <div className="articles-container">
        {visibleArticles.map((article) => (
          <div key={article.id} className="article-card">
            <img
              src={article.coverImage.url}
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
    </>
  );
}
