import "@/app/ui/styles/academy/SchedulePage.css";
import ScheduleInfo from "@/app/ui/components/academy/ScheduleInfo";
import { schedule_3o, schedule_6o } from "@/public/academy";

export const metadata = {
  title: "Ακαδημία Πρόγραμμα-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε το πρόγραμμα των ακαδημιών του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Ακαδημία", "Πρόγραμμα", "Βόλεϊ", "Ιωάννινα"],
};

export default function AcademySchedule() {
  return (
    <div className="academy-schedule-page">
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

      <ScheduleInfo />
    </div>
  );
}
