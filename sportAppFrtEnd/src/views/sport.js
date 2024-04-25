import { html } from "../../node_modules/lit-html/lit-html.js";
import { getNewsForSport } from "../data/news.js";

const sportTemplate = (news) => html`
      
       ${news.length > 0 ? news.map(sportCard) : html`There arent any news!`}
    
        <aside class="standing-section">
          <h2>League Standings</h2>
          <select id="leagueSelect">
            <option value="france">France</option>
            <option value="bulgaria">Bulgaria</option>
            <option value="england">England</option>
            <option value="spain">Spain</option>
            <option value="germany">Germany</option>
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
              <!-- Table data will be populated dynamically -->
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


export async function sportPage(ctx) {
    const sportName = ctx.params.sport;
  const sport = await getNewsForSport(sportName);
    ctx.render(sportTemplate(sport));
}