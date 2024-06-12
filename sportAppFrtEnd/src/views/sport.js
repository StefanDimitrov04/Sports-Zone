import { html } from "../../node_modules/lit-html/lit-html.js";
import { getNewsForSport } from "../data/news.js";
import {getLeague} from "../data/league.js";

const sportTemplate = (news, standings) => html`
      
       ${news.length > 0 ? news.map(sportCard) : html`There arent any news!`}
    
        <aside class="standing-section">
          <h2>League Standings</h2>
          <select id="leagueSelect">
            <option value="France">France</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="England">England</option>
            <option value="Spain">Spain</option>
            <option value="Germany">Germany</option>
          </select>
          <table id="standingTable">
            <thead>
              <tr>
                <th>POS</th>
                <th>CLUB</th>
                <th>PTS</th>
                <th>MP</th>
              </tr>
            </thead>
            <tbody>
              ${standings ? standings.map(standingRow) : html`<tr><td colspan="4">Select a league to see standings.</td></tr>`}
            </tbody>
          </table>
        </aside>
     
    `;

    const sportCard = (sport) => html`
    <div class="news-section">
    <article class="big-news">
      <h2>${sport.title}</h2>
      <p>${sport.matchDescrp}</p>
      <img src="${sport.image}" alt="${sport.title}">
    </article>
  </div>
    `

    const standingRow = (team, index) => html`
    <tr>
        <td>${index + 1}</td>
        <td>${team.clubName}</td>
        <td>${team.clubPoints}</td>
        <td>${team.matchesPlayed}</td>
    </tr>
    `


    export async function sportPage(ctx) {
      const sportName = ctx.params.sport;
      const news = await getNewsForSport(sportName);
      let standings = null;
      ctx.render(sportTemplate(news));
    
      document.getElementById("leagueSelect").addEventListener('change', async function() {
        const country = this.value;
    
        try {
          const league = await getLeague(sportName, country);
          standings = league.teams;
        } catch (error) {
          standings = null;
        }
    
        ctx.render(sportTemplate(news, standings));
      });
    }