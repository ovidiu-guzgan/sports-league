import { api } from "../api/axios";
import type { Season } from "../models/season.model";

export const getSeasonBadge = async (leagueId: string): Promise<string | null> => {
	const res = await api.get(`/search_all_seasons.php?badge=1&id=${leagueId}`);
	const seasons: Season[] = res.data.seasons || [];
	return seasons[0]?.strBadge || null;
};
