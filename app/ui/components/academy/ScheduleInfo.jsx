import "@/app/ui/styles/academy/ScheduleInfo.css";

export default function ScheduleInfo() {
  return (
    <div className="schedule-card">
      <h3 className="schedule-title">Πληροφορίες Προπονήσεων</h3>

      <ul className="schedule-list">
        <li>
          Σε περίπτωση άλλων δραστηριοτήτων μπορεί να γίνει συνδυασμός
          προπονήσεων σε συνεργασία με τον υπεύθυνο ακαδημιών.
        </li>
        <li>
          Επιπλέον μπορεί να γίνει και συνδυασμός γυμναστηρίων προπόνησης.
        </li>
        <li>
          Τα αγωνιστικά τμήματα ενημερώνονται από τους προπονητές για επιπλέον
          προπονήσεις και για την τοποθεσία προπόνησης.
        </li>
      </ul>
    </div>
  );
}
