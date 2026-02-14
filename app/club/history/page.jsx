import "@/app/ui/styles/club/HistoryPage.css";
import HistoryTimeline from "@/app/ui/components/club/HistoryTimeline";
import HistoryText from "@/app/ui/components/club/HistoryText";

export const metadata = {
  title: "Ιστορία-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε την ιστορία του ΑΣ Γιάννενα.",

  keywords: [
    "ΑΣ Γιάννενα",
    "Ιστορία",
    "Παρελθόν",
    "Ίδρυση",
    "Βόλεϊ",
    "Ιωάννινα",
  ],
};

export default function History() {
  return (
    <div className="history-container">
      <div className="history-text">
        <div className="history-page">
          <HistoryText />
          <hr className="divider" />
          <HistoryTimeline />
        </div>
      </div>
    </div>
  );
}
