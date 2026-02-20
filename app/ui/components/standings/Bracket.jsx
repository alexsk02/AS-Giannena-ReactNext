import "@/app/ui/styles/standings/Bracket.css";
import { Match } from "@/app/ui/lib/utils";

export default function Bracket({
  matches,
  startFrom = "quarterfinals",
  showThirdPlace = true,
  winsPerRound = {
    quarterfinals: 2,
    semifinals: 2,
    final: 1,
    thirdPlace: 1,
  },
}) {
  const showQuarterfinals = startFrom === "quarterfinals";
  const formatTitle = (baseTitle, wins) => {
    if (!wins) return baseTitle;

    const label = wins === 1 ? "Νίκη" : "Νίκες";
    return `${baseTitle} (${wins} ${label})`;
  };

  return (
    <div className="bracket-wrapper">
      <div className="bracket-scale">
        {showQuarterfinals && matches.quarterfinals && (
          <div className="round qf">
            <h3>{formatTitle("Προημιτελικά", winsPerRound.quarterfinals)}</h3>
            {matches.quarterfinals.map((match, i) => (
              <Match key={i} {...match} />
            ))}
          </div>
        )}

        {matches.semifinals && (
          <div className="round sf">
            <h3>{formatTitle("Ημιτελικά", winsPerRound.semifinals)}</h3>

            {matches.semifinals.map((match, i) => (
              <div
                key={i}
                className="sf-match-wrapper"
                style={{
                  marginTop:
                    startFrom === "quarterfinals" && i === 0
                      ? "105px"
                      : "100px",
                }}
              >
                <Match {...match} />
              </div>
            ))}
          </div>
        )}

        {matches.final && (
          <div className="round final">
            <h3>{formatTitle("Τελικός", winsPerRound.final)}</h3>

            <div
              className="final-match-wrapper"
              style={{
                marginTop: startFrom === "quarterfinals" ? "255px" : "250px",
              }}
            >
              <Match {...matches.final} />
            </div>
            {showThirdPlace && matches.thirdPlace && (
              <>
                <div className="offset final-offset-middle" />
                <h4>
                  {formatTitle("Μικρός Τελικός", winsPerRound.thirdPlace)}
                </h4>
                <Match {...matches.thirdPlace} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
