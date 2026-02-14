import { Fetch_Matches } from "@/app/ui/lib/utils";
import MatchdaySelector from "./MatchdaySelector";

export default async function Schedule({ team, match }) {
  const [teams_res, matches_res] = await Fetch_Matches(team, match);

  return <MatchdaySelector teams={teams_res} matches={matches_res} />;
}
