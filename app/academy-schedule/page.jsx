import "../styles/Academy-Schedule.css";
import schedule_3o from "@/public/schedule_3o.jpg";
import schedule_6o from "@/public/schedule_6o.jpg";

export default function AcademySchedule() {
  return (
    <div className="academy-schedule-page">
      <title>Ακαδημία Πρόγραμμα-ΑΣ Γιάννενα Βόλεϊ</title>
      <meta
        name="description"
        content="Δείτε το πρόγραμμα των ακαδημιών του ΑΣ Γιάννενα."
      />
      <meta
        name="keywords"
        content="ΑΣ Γιάννενα, Ακαδημία, Πρόγραμμα, Βόλεϊ, Ιωάννινα"
      />
      <h1 className="page-title-text">Πρόγραμμα Ακαδημιών 2025-26</h1>

      <div className="schedule-images">
        <img
          src={schedule_3o.src}
          alt="Πρόγραμμα 3ο Γυμνάσιο"
          className="schedule-image"
        />
        <img
          src={schedule_6o.src}
          alt="Πρόγραμμα 6ο Γυμνάσιο"
          className="schedule-image"
        />
      </div>

      <div className="schedule-text">
        <p>
          Σε περίπτωση άλλων δραστηριοτήτων μπορεί να γίνει συνδυασμός
          προπονήσεων σε συνεργασία με τον υπεύθυνο ακαδημιών.
        </p>
        <p>Επιπλέον μπορεί να γίνει και συνδυασμός γυμναστηρίων προπόνησης.</p>
        <p>
          Τα αγωνιστικά τμήματα ενημερώνονται από τους προπονητές για επιπλέον
          προπονήσεις και για την τοποθεσία προπόνησης.
        </p>
      </div>
    </div>
  );
}
