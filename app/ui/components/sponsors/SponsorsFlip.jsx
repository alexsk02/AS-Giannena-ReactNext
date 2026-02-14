import "@/app/ui/styles/sponsors/SponsorsFlip.css";

export default function SponsorsFlip() {
  return (
    <>
      <div className="sponsorship-text">
        <p>
          Μπορείτε να δείτε το φυλλάδιο της Αθλητικής Χορηγίας του ΑΣ Γιάννενα{" "}
          <a
            href="/files/ΑΘΛΗΤΙΚΗ-ΧΟΡΗΓΙΑ_ΑΣ-ΓΙΑΝΝΕΝΑ_2025-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ΕΔΩ
          </a>
          .
        </p>
      </div>

      <div className="anyflip-embed">
        <iframe
          title="Χορηγικό Φυλλάδιο"
          src="https://online.anyflip.com/tjwod/aafj/index.html"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
