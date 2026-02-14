import FacilitiesInfo from "@/app/ui/components/club/FacilitiesInfo";
import "@/app/ui/styles/club/FacilitiesPage.css";

export const metadata = {
  title: "Εγκαταστάσεις-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε τις εγκαταστάσεις του ΑΣ Γιάννενα",

  keywords: ["ΑΣ Γιάννενα", "Εγκαταστάσεις", "Βόλεϊ", "Ιωάννινα"],
};

export default function Facilities() {
  return (
    <div className="facilities-container">
      <FacilitiesInfo />
    </div>
  );
}
