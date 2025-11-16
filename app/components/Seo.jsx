// components/SEO.jsx
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
}
