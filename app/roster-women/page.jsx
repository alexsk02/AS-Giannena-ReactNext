import Roster from "../components/Roster";

function Team() {
  return (
    <>
      <title>ΑΣ Γιάννενα Βόλεϊ- Ρόστερ</title>
      <meta
        name="description"
        content="Δείτε το ρόστερ της γυναικείας ομάδας του ΑΣ Γιάννενα."
      />
      <meta
        name="keywords"
        content="ΑΣ Γιάννενα, Ρόστερ, Ομάδα, Γυναίκες, Βόλεϊ"
      />

      {/*<Roster />*/}

      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          marginTop: "3rem",
          marginBottom: "2rem",
          color: "#222",
        }}
      >
        Ρόστερ Γυναικών
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#555",
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      >
        Σε αναμονή
      </p>
    </>
  );
}

export default Team;
