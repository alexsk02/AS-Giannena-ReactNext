import { Fetch_Articles } from "@/app/ui/lib/utils";
import ArticlePagination from "@/app/ui/components/article/ArticlePagination";

export default async function News({ category }) {
  const articles = await Fetch_Articles(category);

  return <ArticlePagination articles={articles} />;
}
