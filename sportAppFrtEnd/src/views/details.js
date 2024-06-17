import { addComment, getSingleArticle } from "../data/news.js";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../utils.js";


const detailsTemplate = (article, comments, userData) => html`

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
            <a href="/${article._id}/details/edit" class="edit-article-button">Edit</a>
            <button id="delete-article-button">Delete</button>
        </div>
            ` : null}
    </div>
    <div class="comment-section">
    <h2>Comments</h2>
    <div id="comments-container">
    ${comments && comments.length > 0 ? comments.map(comment => html`
        <div class="comment">
            <strong>${comment.username}</strong>: ${comment.commentText}
        </div>
        `) : html`<h1>No comments yet!</h1>`}
    </div>
    ${userData ? html`
        <textarea id="new-comment" placeholder="Add a comment..."></textarea>
        <button id="add-comment-button">Add Comment</button>
        ` : html ``}
</div>
</body>
`;



export async function detailsPage(ctx) {

    const userData = getUserData();
    const userId = userData?._id;
    const userUsername = userData?.username;
    const id = ctx.params.newsId;
    
    const article = await getSingleArticle(id);
    const comments = article.comments;
    ctx.render(detailsTemplate(article, comments));

    if(userData && userId == article.ownerId) {
        article.canEdit = true;
    };

    const renderPage = () => {
        ctx.render(detailsTemplate(article, comments, userData));
        addCommentButton();
    };
    

   const addCommentButton = () => { document.getElementById("add-comment-button").addEventListener('click', async function() {
        const commentText = document.getElementById("new-comment").value.trim();
        try {
            const comment = await addComment(id,userId, userUsername, commentText);
            comments.push({username: userUsername, commentText});
            document.getElementById("new-comment").value = "";
            renderPage();
        } catch (error) {
            console.log(error.message);
        }

    }) };

    renderPage();

}