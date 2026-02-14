import RegistrationInfo from "@/app/ui/components/academy/RegistrationInfo";
import { flyer } from "@/public/academy";
import "@/app/ui/styles/academy/RegisterPage.css";

export const metadata = {
  title: "Εγγραφή Ακαδημία-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε πληροφορίες σχετικά με την εγγραφή σας στην ακαδημία του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Ακαδημία", "Εγγραφή", "Βόλεϊ", "Ιωάννινα"],
};

export default function AcademyRegister() {
  return (
    <div className="academy-register-page">
      <h1 className="academy-register-title">Εγγραφή</h1>

      <div className="academy-register-flyer-container">
        <img
          src={flyer.src}
          alt="Flyer Εγγραφής"
          className="academy-register-flyer-image"
          width={400}
          height={500}
        />
      </div>

      <RegistrationInfo />
    </div>
  );
}
