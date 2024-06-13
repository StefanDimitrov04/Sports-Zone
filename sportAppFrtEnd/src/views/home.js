import { html } from "../../node_modules/lit-html/lit-html.js";
import { getLeague } from "../data/league.js";
import { getAllNews, getNewsForSport } from "../data/news.js";

const homeTemplate = (news, standings) => html`
      
       ${news.length > 0 ? news.map(newsCard) : html`There arent any news!`}
    
        <aside class="standing-section">
    <h2>League Standings</h2>
    <div class="table-container">
      <div class="sport-buttons">
        <button class="sport-button" data-sport="Volleyball">Volleyball</button>
        <button class="sport-button" data-sport="Football">Football</button>
        <button class="sport-button" data-sport="Tennis">Tennis</button>
        <button class="sport-button" data-sport="Basketball">Basketball</button>
    </div>
        <select id="leagueSelect">
        <option value="Bulgaria">Bulgaria</option>
            <option value="France">France</option>
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
    </div>
</aside>
     
    `;

  const newsCard = (news) => html`
  <div class="news-section">
    <article class="big-news">
      <a href="/${news._id}/details"><h2>${news.title}</h2></a>
      <div class="news-content">
        <img src="${news.image}" alt="${news.title}">
        <p>${news.matchDescrp.slice(0, 150) + '...'}</p>
        <div class="full-text-overlay">
          <p>${news.matchDescrp.slice(0, 300) + '...'}</p>
        </div>
      </div>
    </article>
  </div>
`;

    const standingRow = (team, index) => html`
    <tr>
        <td>${index + 1}</td>
        <td>${team.clubName}</td>
        <td>${team.clubPoints}</td>
        <td>${team.matchesPlayed}</td>
    </tr>
    `


export async function homePage(ctx) {
  const news = await getAllNews();
  
  let selectedSport = "Football";
  let selectedCountry = "Bulgaria";
  let standings = null;


 const renderStandings = async () => {
    try {
      const league = await getLeague(selectedSport,selectedCountry);
      standings = league.teams;
    } catch (error) {
      standings = null;
    }
    ctx.render(homeTemplate(news, standings));
  }

  ctx.render(homeTemplate(news, standings));
  await renderStandings();

    document.getElementById('leagueSelect').addEventListener('change', async function() {
      
       selectedCountry = this.value;
       await renderStandings();
          
    })

    document.querySelectorAll('.sport-button').forEach(btn => {
      btn.addEventListener('click', async function () {
         selectedSport = this.getAttribute('data-sport');
         await renderStandings();
      })
    })
  };