import  page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "./utils.js";
import { layoutTemplate } from "./views/layout.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { getNewsForSport } from "./data/news.js";
import { sportPage } from "./views/sport.js";
import { detailsPage } from "./views/details.js";
import { logout } from "./data/auth.js";
import { editPage } from "./views/edit.js";

const root = document.body;

page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', () => {
  logout();
  page.redirect('/');
});
page('/create', createPage);
page('/home/:sport',sportPage);
page('/:newsId/details', detailsPage);
page('/:newsId/details/edit', editPage);

page.start();

function decorateContext(ctx, next) {
   ctx.render = renderView;
  next();
};


async function renderView(newsData) {
    const userData = getUserData();
    const content = newsData;
    render(layoutTemplate(userData, content), root);
}

  