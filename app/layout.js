import Navbar from "@/app/ui/components/navbar/Navbar";
import Footer from "@/app/ui/components/footer/Footer";
import ScrollToTop from "./ScrollToTop";
import "@/app/ui/styles/global/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body>
        <Navbar />
        <ScrollToTop />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
