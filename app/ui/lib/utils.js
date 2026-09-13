import React from "react";

export async function Fetch_Standings(team) {
  const response = await fetch(
    `https://as-giannena-strapibackend.onrender.com/api/${team}?populate=logo`,
    {
      next: { revalidate: 3600 },
    },
  );
  const data = await response.json();

  const teams = data.data.sort((a, b) => {
    // Helper to calculate ratios safely (avoiding division by zero)
    const getSetRatio = (t) => {
      const against = Number(t.setsAgainst) || 0;
      const forSets = Number(t.setsFor) || 0;
      return against === 0 ? forSets : forSets / against;
    };

    const getPointRatio = (t) => {
      const against = Number(t.pointsAgainst) || 0;
      const forPts = Number(t.pointsFor) || 0;
      return against === 0 ? forPts : forPts / against;
    };

    // Calculate Criteria 1: 2 * wins + 1 * loses
    const pointsA = 2 * (Number(a.wins) || 0) + 1 * (Number(a.loses) || 0);
    const pointsB = 2 * (Number(b.wins) || 0) + 1 * (Number(b.loses) || 0);

    // 1st Criterion: Match record points (2 for win, 1 for loss)
    if (pointsB !== pointsA) {
      return pointsB - pointsA;
    }

    // 2nd Criterion: Score points (3 for 3-0/3-1, 2 for 3-2, 1 for 2-3, 0 for 1-3/0-3)
    const scorePtsA = Number(a.points) || 0;
    const scorePtsB = Number(b.points) || 0;
    if (scorePtsB !== scorePtsA) {
      return scorePtsB - scorePtsA;
    }

    // 3rd Criterion: Set ratio (setsFor / setsAgainst)
    const setRatioA = getSetRatio(a);
    const setRatioB = getSetRatio(b);
    if (setRatioB !== setRatioA) {
      return setRatioB - setRatioA;
    }

    // 4th Criterion: Point ratio (pointsFor / pointsAgainst)
    const pointRatioA = getPointRatio(a);
    const pointRatioB = getPointRatio(b);
    return pointRatioB - pointRatioA;
  });

  return teams;
}

export async function Fetch_Matches(team, match) {
  const [response_team, response_match] = await Promise.all([
    fetch(
      `https://as-giannena-strapibackend.onrender.com/api/${team}?populate=logo`,
      { next: { revalidate: 3600 } },
    ),
    fetch(
      `https://as-giannena-strapibackend.onrender.com/api/${match}?populate=*&pagination[limit]=100`,
      { next: { revalidate: 3600 } },
    ),
  ]);

  const teams = await response_team.json();
  const matches = await response_match.json();
  return [teams.data, matches.data];
}

export async function Fetch_Articles(category) {
  const response = await fetch(
    "https://as-giannena-strapibackend.onrender.com/api/articles?populate=coverImage",
    { next: { revalidate: 3600 } },
  );

  const data = await response.json();

  let articles = data.data;

  if (category) {
    articles = articles.filter((article) => article.category === category);
  }

  articles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));

  return articles;
}

export async function Fetch_UpcomingMatches() {
  const categories = [
    { name: "Γυναίκες", endpoint: "women-matches" },
    { name: "Άνδρες", endpoint: "men-matches" },
  ];

  const now = new Date();
  const results = [];

  for (const cat of categories) {
    const res = await fetch(
      `https://as-giannena-strapibackend.onrender.com/api/${cat.endpoint}?populate=*&pagination[limit]=100`,
      { next: { revalidate: 3600 } },
    );
    const data = await res.json();

    const matches = data.data.map((item) => ({
      id: item.id,
      homeTeam: item.homeTeam?.name,
      awayTeam: item.awayTeam?.name,
      date: new Date(item.date),
      matchday: item.matchday,
      category: cat.name,
    }));

    const upcoming = matches
      .filter(
        (m) =>
          m.date > now &&
          (m.homeTeam === "ΑΣ Γιάννενα" || m.awayTeam === "ΑΣ Γιάννενα"),
      )
      .sort((a, b) => a.date - b.date);

    if (upcoming.length > 0) results.push(upcoming[0]);
  }

  return results;
}

export async function Fetch_ArticleContent(slug) {
  const res = await fetch(
    `https://as-giannena-strapibackend.onrender.com/api/articles?filters[slug][$eq]=${slug}&populate=coverImage`,
    { next: { revalidate: 3600 } },
  );

  if (!res.ok) {
    console.error("Failed to fetch article:", res.status);
    return null;
  }

  const data = await res.json();

  if (!data.data || data.data.length === 0) return null;

  const item = data.data[0];

  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    date: item.date,
    content: item.content,
    coverImage: item.coverImage?.url || "",
  };
}

export function filterMatchesByMatchday(matches, selectedMatchday) {
  return matches
    .filter((m) => m.matchday === selectedMatchday)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

export function getTeamLogo(teams, teamName) {
  return teams.find((t) => t.name === teamName)?.logo.url || "";
}

export function formatMatchDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("el-GR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatMatchTime(dateStr) {
  return new Date(dateStr).toLocaleTimeString("el-GR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Athens",
  });
}

export function getAllMatchdays(matches) {
  // Extract unique, non-null/non-empty matchday values
  const unique = [
    ...new Set(
      matches
        .map((m) => m?.matchday?.trim())
        .filter((md) => md != null && md !== ""),
    ),
  ];

  // Specific order weight map for playoff / tournament phases
  const stageWeights = {
    "Φάση των 16": 1000,
    Προημιτελικά: 1001,
    Ημιτελικά: 1002,
    "Μικρός Τελικός": 1003,
    Τελικός: 1004,
  };

  return unique.sort((a, b) => {
    const weightA = stageWeights[a];
    const weightB = stageWeights[b];

    // 1. If both are playoff/knockout stages, sort by stage weights
    if (weightA != null && weightB != null) {
      return weightA - weightB;
    }
    // 2. Playoff stages always go after regular matchdays
    if (weightA != null) return 1;
    if (weightB != null) return -1;

    // 3. For regular matchdays, check if numbers exist (e.g. "1η Αγωνιστική" vs "10η Αγωνιστική")
    const numA = parseInt(a.match(/\d+/)?.[0], 10);
    const numB = parseInt(b.match(/\d+/)?.[0], 10);

    const hasNumA = !isNaN(numA);
    const hasNumB = !isNaN(numB);

    if (hasNumA && hasNumB) {
      return numA - numB;
    }
    if (hasNumA) return -1;
    if (hasNumB) return 1;

    // 4. Fallback: Greek alphabetical sort for any other strings
    return a.localeCompare(b, "el");
  });
}
export function getRecentMatchday(matches) {
  const allMatchdays = getAllMatchdays(matches);

  if (allMatchdays.length === 0) return;

  const now = new Date();

  const matchesByDay = allMatchdays.map((md) => {
    const dayMatches = matches.filter((m) => m.matchday === md);
    const hasStarted = dayMatches.some((m) => new Date(m.date) <= now);
    const allPast = dayMatches.every((m) => new Date(m.date) <= now);
    return { matchday: md, hasStarted, allPast };
  });

  const current = matchesByDay.find((m) => m.hasStarted && !m.allPast);
  const upcoming = matchesByDay.find((m) => !m.hasStarted);

  if (current) return current.matchday;
  if (upcoming) return upcoming.matchday;
  return matchesByDay.at(-1)?.matchday ?? "";
}

export function formatMatchdaysForDropdown(matchdays) {
  return matchdays.map((md) => {
    if (md.startsWith("Αγωνιστική")) {
      const parts = md.split(" ");
      return `${parts[1]} ${parts[0]}`;
    }
    return md;
  });
}

export function renderText(children) {
  return children.map((child, i) => {
    if (child.type === "image" && child.image && child.image.url) {
      const inlineImgUrl = child.image.url.startsWith("http")
        ? child.image.url
        : `https://as-giannena-strapibackend.onrender.com${child.image.url}`;
      return (
        <img
          key={i}
          src={inlineImgUrl}
          alt={child.image.alternativeText || "inline image"}
          className="article-inline-image"
          style={{ maxWidth: "100%", height: "auto", margin: "1em 0" }}
        />
      );
    }

    if (child.type === "link" && child.url) {
      return (
        <a
          key={i}
          href={child.url}
          target="_blank"
          rel="noopener noreferrer"
          className="article-link"
        >
          {renderText(child.children || [])}
        </a>
      );
    }

    let text = child.text;

    if (child.bold) {
      text = <strong>{text}</strong>;
    }

    if (child.italic) {
      text = <em>{text}</em>;
    }

    if (child.underline) {
      text = <u>{text}</u>;
    }

    return <React.Fragment key={i}>{text}</React.Fragment>;
  });
}

export function renderBlocks(blocks) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "paragraph":
        return <p key={i}>{renderText(block.children)}</p>;

      case "image":
        const imgUrl =
          block.image && block.image.url
            ? block.image.url.startsWith("http")
              ? block.image.url
              : `https://as-giannena-strapibackend.onrender.com${block.image.url}`
            : (block.url &&
                (block.url.startsWith("http")
                  ? block.url
                  : `https://as-giannena-strapibackend.onrender.com${block.url}`)) ||
              block.src;

        return (
          <img
            key={i}
            src={imgUrl}
            alt={
              (block.image && block.image.alternativeText) ||
              block.alt ||
              "article image"
            }
            className="article-inline-image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        );

      case "list":
        if (block.format === "unordered") {
          return (
            <ul key={i}>
              {block.children.map((item, j) => (
                <li key={j}>{renderText(item.children)}</li>
              ))}
            </ul>
          );
        } else if (block.format === "ordered") {
          return (
            <ol key={i}>
              {block.children.map((item, j) => (
                <li key={j}>{renderText(item.children)}</li>
              ))}
            </ol>
          );
        }
        return null;

      default:
        return null;
    }
  });
}

export function extractDescription(blocks, maxLength = 160) {
  if (!Array.isArray(blocks)) return "";

  let text = "";

  for (const block of blocks) {
    if (block.type === "paragraph" && block.children) {
      for (const child of block.children) {
        if (child.text) {
          text += child.text + " ";
        }
      }
    }

    if (text.length >= maxLength) break;
  }

  return (
    text
      .trim()
      .slice(0, maxLength)
      .replace(/\s+\S*$/, "") + "..."
  );
}

export function Match({ teamA, teamB, scoreA = [], scoreB = [] }) {
  return (
    <div className="match-bracket">
      <div className="match-bracket-content">
        <div className="teams-bracket">
          <div className="team-bracket">{teamA}</div>
          <div className="team-bracket">{teamB}</div>
        </div>

        <div
          className={`scores-column ${scoreA.length > 1 ? "multi-score" : ""}`}
        >
          <div className="score-bracket-row">
            {scoreA.map((s, i) => (
              <span key={i} className="score-bracket">
                {s}
              </span>
            ))}
          </div>

          <div className="score-bracket-divider" />

          <div className="score-bracket-row">
            {scoreB.map((s, i) => (
              <span key={i} className="score-bracket">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
