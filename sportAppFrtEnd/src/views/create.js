import {html} from "../../node_modules/lit-html/lit-html.js";
import { createArticle } from "../data/news.js";
import { createSubmitHandler } from "../utils.js";

const createArticleLayout = (onCreate) => html
`
<div class="create-article-container">
        <h1>Create New Article</h1>
        <form id="createArticleForm" enctype="multipart/form-data" @submit=${onCreate}>
            <div class="form-group">
                <label for="sport">Sport</label>
                <input type="text" id="sport" name="sport" required>
            </div>
            <div class="form-group">
                <label for="title">Article Title</label>
                <input type="text" id="title" name="title" required>
            </div>
            <div class="form-group">
                <label for="description">Article Description</label>
                <textarea id="description" name="matchDescrp" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="image">Article Image</label>
                <input type="text" id="image" name="image" required>
            </div>
            <button type="submit">Create Article</button>
        </form>
    </div>
`;

export function createPage(ctx) {
    ctx.render(createArticleLayout(createSubmitHandler(onCreate)));

    async function onCreate({
        sport,
        title,
        matchDescrp,
        image,
    }) { 

        if([sport, title, matchDescrp, image].some(f => f == '')) {
            throw new Error('All fields are required!');
        }

        const article = await createArticle({sport, title, matchDescrp, image});
        ctx.page.redirect('/');

    }
}