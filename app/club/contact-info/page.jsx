import "@/app/ui/styles/club/ContactPage.css";
import ContactInfo from "@/app/ui/components/club/ContactInfo";
import ContactForm from "@/app/ui/components/club/ContactForm";

export const metadata = {
  title: "Επικοινωνία-ΑΣ Γιάννενα Βόλεϊ",

  description: "Επικοινωνήστε με την ομάδα του ΑΣ Γιάννενα",

  keywords: [
    "ΑΣ Γιάννενα",
    "Επικοινωνία",
    "Τηλέφωνο",
    "Email",
    "Βόλεϊ",
    "Ιωάννινα",
  ],
};

export default function ContactPage() {
  return (
    <div className="contact-container">
      <ContactInfo />

      <ContactForm />
    </div>
  );
}
