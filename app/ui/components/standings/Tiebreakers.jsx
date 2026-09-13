import "@/app/ui/styles/standings/Tiebreakers.css";

export default function Tiebreakers() {
  return (
    <div className="tiebreaker-card">
      <h3 className="tiebreaker-title">Κριτήρια Ισοβαθμίας</h3>
      <ul className="tiebreaker-list">
        <li>
          <span className="criterion-badge">1ο Κριτήριο</span>
          <strong>Βαθμοί</strong> (2 βαθμοί για νίκη, 1 βαθμός για ήττα).
        </li>
        <li>
          <span className="criterion-badge">2ο Κριτήριο</span>
          <strong>Πόντοι</strong> (Τρόπος Νίκης/Ήττας):
          <div className="tiebreaker-subpoints">
            <span>
              • <strong>3 Πόντοι:</strong> Νίκη με 3-0 ή 3-1 σετ
            </span>
            <span>
              • <strong>2 Πόντοι:</strong> Νίκη με 3-2 σετ
            </span>
            <span>
              • <strong>1 Πόντος:</strong> Ήττα με 2-3 σετ
            </span>
            <span>
              • <strong>0 Πόντοι:</strong> Ήττα με 1-3 ή 0-3 σετ
            </span>
          </div>
        </li>
        <li>
          <span className="criterion-badge">3ο Κριτήριο</span>
          <strong>Συντελεστής Σετ</strong> (Λόγος Σετ Υπέρ / Σετ Κατά).
        </li>
        <li>
          <span className="criterion-badge">4ο Κριτήριο</span>
          <strong>Συντελεστής Πόντων</strong> (Λόγος Πόντων Υπέρ / Πόντων Κατά).
        </li>
      </ul>
    </div>
  );
}
