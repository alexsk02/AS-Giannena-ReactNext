"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "@/app/ui/styles/home/ArticleCarousel.css";

export default function ArticleCarousel({ articles }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const sortedArticles = articles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + sortedArticles.length) % sortedArticles.length,
    );
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sortedArticles.length);
  }, [sortedArticles.length]);

  useEffect(() => {
    // Don't start timer if 1 or 0 articles, or if user is hovering
    if (sortedArticles.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, sortedArticles.length, goToNext]);

  if (sortedArticles.length === 0) return null;

  const currentArticle = sortedArticles[currentIndex];

  return (
    <div className="news-carousel-wrapper">
      <h2 className="news-carousel-title">Τελευταία Νέα</h2>
      <div
        className="news-carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="news-carousel-btn" onClick={goToPrev}>
          <FaChevronLeft />
        </button>

        <div className="news-carousel-card">
          <img
            src={currentArticle.coverImage.url}
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
