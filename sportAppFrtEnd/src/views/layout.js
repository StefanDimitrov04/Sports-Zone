import { html } from "../../node_modules/lit-html/lit-html.js";
import { getNewsForSport } from "../data/news.js";

export const layoutTemplate = (userData, content) => html `
<header>

<a href="/"><h1>Sports News</h1></a>
    <nav>
      <ul>
        <li class="dropdown">
          <a href="#">Sports</a>
          <div class="dropdown-content">
            <a href="/home/Basketball">Basketball</a>
            <a href="/home/Football">Football</a>
            <a href="/home/Tennis">Tennis</a>
            <a href="/home/Volleyball">Volleyball</a>
          </div>
        </li>  
        ${!userData ? html`
        
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </nav>
        ` : html`
          <li><a href="/create">Create Article</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>
        `}

  </header>
   <main> ${content} </main>

    <footer class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h2>About Us</h2>
        <p>We provide the latest news and updates on various sports, including Football, Basketball, Tennis, and more.</p>
      </div>
      <div class="footer-section contact">
        <h2>Contact Us</h2>
        <p>Email: s.dimitrov2004@gmail.com</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Sports News. All rights reserved.</p>
    </div>
  </footer>
`;




