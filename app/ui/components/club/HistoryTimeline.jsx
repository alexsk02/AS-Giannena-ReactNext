import "@/app/ui/styles/club/HistoryTimeline.css";
import { historyData } from "@/app/ui/data/history";

export default function HistoryTimeline() {
  return (
    <div className="timeline-container">
      <h2>Ιστορική Αναδρομή</h2>
      <div className="timeline">
        {historyData.map((entry, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-year">{entry.year}</div>
            <ul className="timeline-events">
              {entry.events.map((event, i) => (
                <li key={i}>{event}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
