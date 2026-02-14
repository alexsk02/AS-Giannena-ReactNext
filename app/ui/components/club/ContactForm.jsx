import "@/app/ui/styles/club/ContactForm.css";

export default function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Αποστολή Μηνύματος</h2>
      <form action="https://formspree.io/f/xanjzoae" method="POST">
        <input type="text" name="name" placeholder="Ονοματεπώνυμο" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Θέμα" />
        <textarea name="message" rows="5" placeholder="Μήνυμα..." required />
        <button type="submit">Αποστολή</button>
      </form>
    </div>
  );
}
