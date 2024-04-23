import {html} from "../../node_modules/lit-html/lit-html.js";

const createArticleLayout = () => html
`
<div class="create-article-container">
        <h1>Create New Article</h1>
        <form id="createArticleForm" enctype="multipart/form-data">
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
                <textarea id="description" name="description" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="image">Article Image</label>
                <input type="file" id="image" name="image" accept="image/*" required>
            </div>
            <button type="submit">Create Article</button>
        </form>
    </div>
`;

export function createPage(ctx) {
    ctx.render(createArticleLayout());
}