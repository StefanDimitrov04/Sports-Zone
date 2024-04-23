import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html`
      
        <div class="news-section">
          <article class="big-news">
            <h2>Latest Big News</h2>
            <p>This is the latest big news article.</p>
          </article>
    
          <article class="small-news">
            <h2>Small News 1</h2>
            <p>This is a small news article.</p>
          </article>
    
          <article class="small-news">
            <h2>Small News 2</h2>
            <p>This is a small news article.</p>
          </article>
    
          <article class="small-news">
            <h2>Small News 3</h2>
            <p>This is a small news article.</p>
          </article>
    
          <article class="small-news">
            <h2>Small News 4</h2>
            <p>This is a small news article.</p>
          </article>
        </div>
    
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


export function homePage(ctx) {
    ctx.render(homeTemplate());
}