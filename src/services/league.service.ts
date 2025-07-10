import { api } from "../api/axios";
import type { League } from "../models/league.model";

export const getAllLeagues = async (): Promise<League[]> => {
	const res = await api.get("/all_leagues.php");
	return res.data.leagues;
};
