import { addComment, getCommentsForArticle, getSingleArticle } from "../data/news.js";
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



// export async function detailsPage(ctx) {

//     const userData = getUserData();
//     const userId = userData?._id;
//     const userUsername = userData?.username;
//     const id = ctx.params.newsId;
    
//     const article = await getSingleArticle(id);
    
//  // ctx.render(detailsTemplate(article, comments));

//     if(userData && userId == article.ownerId) {
//         article.canEdit = true;
//     };

//    async function renderPage() {
//         const comments = await getCommentsForArticle(id);
//         ctx.render(detailsTemplate(article, comments, userData));
//         addCommentButton();
//     };
    

//    const addCommentButton = () => { document.getElementById("add-comment-button").addEventListener('click', async function() {
//         const commentText = document.getElementById("new-comment").value.trim();
//         try {
//              await addComment(id,userId, userUsername, commentText);
//              comments.push({ username: userUsername, commentText });
//             document.getElementById("new-comment").value = "";
//             renderPage();
//         } catch (error) {
//             console.log(error);
//         }

//     }) };

//      renderPage();
// }

export async function detailsPage(ctx) {
    const userData = getUserData();
    const userId = userData?._id;
    const userUsername = userData?.username;
    const id = ctx.params.newsId;
    
    const article = await getSingleArticle(id);
    let comments = article.comments || [];

    if (userData && userId === article.ownerId) {
        article.canEdit = true;
    }
      
    ctx.render(detailsTemplate(article, comments, userData));
     async function renderPage() {
        const articleComments = await getCommentsForArticle(id);
        comments = articleComments;
        ctx.render(detailsTemplate(article, comments, userData));
    };

    const addCommentButtonListener = () => {
        document.getElementById("add-comment-button").addEventListener('click', async function () {
            const commentText = document.getElementById("new-comment").value.trim();

            try {
                await addComment(id, userId, userUsername, commentText);
                document.getElementById("new-comment").value = "";
                comments.push({ username: userUsername, commentText });
                renderPage();
            } catch (error) {
                console.log(error.message);
                alert("Failed to add comment.");
            }
        });
    };
    addCommentButtonListener();
    renderPage(); 
}