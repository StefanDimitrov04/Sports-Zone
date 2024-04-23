import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/auth.js";
import { createSubmitHandler } from "../utils.js";

const loginTemplate = (onLogin) => html `

<div class="login-container">
<form id="loginForm" @submit=${onLogin}>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required>
  </div>
  <button type="submit">Login</button>
</form>
<div class="register-link">
  <p>Not registered? <a href="/register">Register here</a></p>
</div>
</div>
`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({email, password}, form) {
         await login(email, password);
         form.reset();
         ctx.page.redirect('/');
    }
}