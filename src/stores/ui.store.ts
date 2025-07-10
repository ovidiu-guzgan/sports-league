import { defineStore } from "pinia";
import { getSeasonBadge, getAllLeagues } from "../services";
import type { League } from "../models";

export const useUIStore = defineStore("ui", {
	state: () => ({
		searchQuery: null as string | null,
		selectedSport: null as string | null,
		loadedBadges: {} as Record<string, string | null>,
		leagues: [] as League[],
	}),
	getters: {
		sortedLeagues: (state) => [...state.leagues].sort((a, b) => a.strLeague.localeCompare(b.strLeague)),
		filteredLeagues: (state) => {
			const search = state.searchQuery?.toLowerCase() || "";
			const selectedSport = state.selectedSport?.toLowerCase() || "";

			return state.leagues?.filter(({ strLeague, strSport, strLeagueAlternate }) => {
				const matchesSearch = [strLeague, strSport, strLeagueAlternate]
					.filter(Boolean)
					.some((field) => field!.toLowerCase().includes(search));

				const matchesSport = !selectedSport || strSport.toLowerCase() === selectedSport;
				return matchesSearch && matchesSport;
			});
		},
		availableSports: (state) => {
			if (!state.leagues) return [];

			const set = new Set<string>();
			state.leagues?.forEach((l) => {
				if (l?.strSport) {
					set.add(l.strSport);
				}
			});

			return Array.from(set).sort();
		},
	},
	actions: {
		resetFilters() {
			this.searchQuery = "";
			this.selectedSport = "";
		},

		async fetchBadge(leagueId: string): Promise<string | null> {
			if (this.loadedBadges?.[leagueId]) {
				return this.loadedBadges?.[leagueId];
			}

			const badge = await getSeasonBadge(leagueId);
			this.loadedBadges[leagueId] = badge;
			return badge;
		},

		async fetchLeagues(clearExistingData?: boolean): Promise<League[]> {
			if (!clearExistingData && this.leagues?.length) return this.leagues;

			try {
				this.leagues = await getAllLeagues();
			} catch (err) {
				console.error("Failed to fetch leagues", err);
			}
			return this.leagues;
		},
	},
});
