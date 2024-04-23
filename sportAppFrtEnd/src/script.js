import  page  from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "./utils.js";
import { layoutTemplate } from "./views/layout.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";

const root = document.body;

page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);

page.start();

function decorateContext(ctx, next) {
   ctx.render = renderView;
  next();
};

function renderView(content) {
  const userData = getUserData();

  render(layoutTemplate(userData, content), root);
}


// document.addEventListener('DOMContentLoaded', function() {
//     const leagueSelect = document.getElementById('leagueSelect');
//     const standingTable = document.getElementById('standingTable').getElementsByTagName('tbody')[0];
  
//     leagueSelect.addEventListener('change', function() {
//       const selectedLeague = leagueSelect.value;
  
//       // You can fetch the league standings data from a server based on the selected league
//       // For demonstration purposes, I'll just use dummy data here
//       const dummyData = {
//         france: [
//           { position: 1, clubName: 'Club A', points: 30, matchesPlayed: 15 },
//           { position: 2, clubName: 'Club B', points: 28, matchesPlayed: 15 },
//           // Add more data for other clubs
//         ],
//         bulgaria: [
//           { position: 1, clubName: 'Club X', points: 25, matchesPlayed: 12 },
//           { position: 2, clubName: 'Club Y', points: 22, matchesPlayed: 12 },
//           // Add more data for other clubs
//         ],
//         // Add data for other leagues
//       };
  
//       // Clear the existing table rows
//       standingTable.innerHTML = '';
  
//       // Populate the table with data for the selected league
//       dummyData[selectedLeague].forEach(function(team) {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//           <td>${team.position}</td>
//           <td>${team.clubName}</td>
//           <td>${team.points}</td>
//           <td>${team.matchesPlayed}</td>
//         `;
//         standingTable.appendChild(row);
//       });
//     });
  
//     // Trigger change event to populate the table initially
//     leagueSelect.dispatchEvent(new Event('change'));
//   });
  