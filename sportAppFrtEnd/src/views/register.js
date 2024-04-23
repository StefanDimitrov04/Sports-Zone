import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/auth.js";
import { createSubmitHandler } from "../utils.js";


const registerTemplate = (onRegister) => html`
<div class="register-container">
    <form id="registerForm" @submit=${onRegister}>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
      </div>
      <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input type="password" id="repeatPassword" name="repeatPassword" required>
      </div>
      <button type="submit">Register</button>
    </form>
    <div class="login-link">
      <p>Already registered? <a href="/login">Login here</a></p>
    </div>
  </div>
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister(data) {
      const {email, username, password, repeatPassword} = data;
       if(email == " " || username == " " || password == " ") {
        throw new Error('All fields are required');
       };

       if(password !== repeatPassword) {
        throw new Error("Passwords missmatch!");
       };

       await register(email, password, username);
       ctx.page.redirect('/');
    }
}