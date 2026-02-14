import {
  renderBlocks,
  extractDescription,
  Fetch_ArticleContent,
} from "@/app/ui/lib/utils";
import "@/app/ui/styles/article/ArticlePage.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await Fetch_ArticleContent(slug);

  if (!article) {
    return {
      title: "Άρθρο δεν βρέθηκε",
    };
  }

  const description = extractDescription(article.content);

  const coverImgUrl = article.coverImage.startsWith("http")
    ? article.coverImage
    : `https://as-giannena-strapibackend.onrender.com${article.coverImage}`;

  return {
    title: article.title,
    description: description,
    openGraph: {
      locale: "el_GR",
      type: "article",
      url: `https://asgiannena-volley.gr/news/${slug}`,
      siteName: "ΑΣ Γιάννενα",

      title: article.title,
      description: description,

      images: coverImgUrl
        ? [
            {
              url: coverImgUrl,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: description,
      images: coverImgUrl ? [coverImgUrl] : [],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await Fetch_ArticleContent(slug);

  const coverImgUrl = article.coverImage.startsWith("http")
    ? article.coverImage
    : `https://as-giannena-strapibackend.onrender.com${article.coverImage}`;

  if (!article) return <p>Άρθρο δεν βρέθηκε.</p>;

  return (
    <div className="article-content-page">
      <h1 className="article-content-title">{article.title}</h1>

      <p className="article-content-date">
        {new Date(article.date).toLocaleDateString("el-GR")}
      </p>

      {article.coverImage && (
        <img
          className="article-content-image"
          src={coverImgUrl}
          alt={article.title}
        />
      )}

      <div className="article-content">{renderBlocks(article.content)}</div>
    </div>
  );
}
