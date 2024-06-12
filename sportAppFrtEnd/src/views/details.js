import { getSingleArticle } from "../data/news.js";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../utils.js";


const detailsTemplate = (article) => html`

<body>
    <div class="article-container">
        <div class="article-image">
            <img src=${article.image} alt="Article Image">
        </div>
        <div class="article-content">
            <h1 class="article-title">${article.title}</h1>
            <p class="article-description">${article.matchDescrp}</p>
            ${article.canEdit ? html `
            <div class="article-buttons">
            <button id="edit-article-button">Edit</button>
            <button id="delete-article-button">Delete</button>
        </div>
            ` : null}
    </div>
    <div class="comment-section">
    <h2>Comments</h2>
    <div id="comments-container"></div>
    <textarea id="new-comment" placeholder="Add a comment..."></textarea>
    <button id="add-comment-button">Add Comment</button>
</div>
</body>
`;


export async function detailsPage(ctx) {

    const userData = getUserData();
    const userId = userData?._id;
    const id = ctx.params.newsId;

    const article = await getSingleArticle(id);

    if(userData && userId == article.ownerId) {
        article.canEdit = true;
    };

    ctx.render(detailsTemplate(article));

}