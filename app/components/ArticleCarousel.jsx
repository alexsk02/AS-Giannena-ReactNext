import { useState, useEffect } from "react";
import Link from "next/link";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/ArticleCarousel.css";

export default function ArticleCarousel() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(
          "https://as-giannena-strapibackend.onrender.com/api/articles?populate=coverImage"
        );
        const data = await response.json();

        const parsedArticles = data.data.map((item) => {
          const article = item;
          return {
            id: article.id,
            title: article.title,
            category: article.category,
            slug: article.slug,
            date: article.date,
            content: article.content,
            coverImage: article.coverImage?.url || "",
          };
        });

        const sortedArticles = parsedArticles
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 4);

        setArticles(sortedArticles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    }

    fetchArticles();
  }, []);

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + articles.length) % articles.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  if (articles.length === 0) return null;

  const currentArticle = articles[currentIndex];

  return (
    <div className="news-carousel-wrapper">
      <h2 className="news-carousel-title">Τελευταία Νέα</h2>
      <div className="news-carousel-container">
        <button className="news-carousel-btn" onClick={goToPrev}>
          <FaChevronLeft />
        </button>

        <div className="news-carousel-card">
          <img
            src={currentArticle.coverImage}
            alt={currentArticle.title}
            className="news-carousel-image"
          />
          <div className="news-carousel-info">
            <p className="news-carousel-category">{currentArticle.category}</p>
            <h3 className="news-carousel-article-title">
              <Link href={`/news/${currentArticle.slug}`}>
                {currentArticle.title}
              </Link>
            </h3>
            <p className="news-carousel-date">
              {new Date(currentArticle.date).toLocaleDateString("el-GR")}
            </p>
          </div>
        </div>

        <button className="news-carousel-btn" onClick={goToNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
