import { html } from "../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (userData, content) => html `
<header>

<a href="/"><h1>Sports News</h1></a>
    <nav>
      <ul>
        <li class="dropdown">
          <a href="#">Sports</a>
          <div class="dropdown-content">
            <a href="#">Basketball</a>
            <a href="#">Football</a>
            <a href="#">Tennis</a>
            <a href="#">Volleyball</a>
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
`;