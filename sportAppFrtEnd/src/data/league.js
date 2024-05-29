// const response = await fetch(`/league/${country}`);

import { get } from "./api.js";

const endpoints = {
    leagueCountry: '/league',
};

export async function getLeague(country) {
    const league = await get(`${endpoints.leagueCountry}/${country}`);
    return league;
}