import { html } from "../../node_modules/lit-html/lit-html.js";
import { editArticle, getSingleArticle } from "../data/news.js";
// import { getArticle, updateArticle } from "../data/news.js";
import { createSubmitHandler } from "../utils.js";

const editArticleLayout = (article, onSave) => html`
    <div class="edit-article-container">
        <h1>Edit Article</h1>
        <form id="editArticleForm" @submit=${onSave}>
            <div class="form-group">
                <label for="sport">Sport</label>
                <input type="text" id="sport" name="sport" .value=${article.sport} required>
            </div>
            <div class="form-group">
                <label for="title">Article Title</label>
                <input type="text" id="title" name="title" .value=${article.title} required>
            </div>
            <div class="form-group">
                <label for="description">Article Description</label>
                <textarea id="description" name="matchDescrp" rows="4" .value=${article.matchDescrp} required></textarea>
            </div>
            <div class="form-group">
                <label for="image">Article Image</label>
                <input type="text" id="image" name="image" .value=${article.image} required>
            </div>
            <button type="submit">Save Changes</button>
        </form>
    </div>
`;

export async function editPage(ctx) {

    const articleId = ctx.params.newsId;
    const article = await getSingleArticle(articleId);

    ctx.render(editArticleLayout(article, createSubmitHandler(onSave)));
    async function onSave({sport, title, matchDescrp, image}) {
        sport = sport.trim();
        title = title.trim();
        matchDescrp = matchDescrp.trim();
        image = image.trim();

         if([sport, title, matchDescrp, image].some(f => f == "")) {
            alert("All fiedls are required!");
         };

         try {
            await editArticle(articleId, {sport, title, matchDescrp, image});
            ctx.page.redirect(`/${articleId}/details`);
         } catch (error) {
            console.log(error);
         }
    }
}