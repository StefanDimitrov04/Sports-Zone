import { get, post, put } from "./api.js"

const endpoints = {
   home: "/news/home", 
   create: "/news/create",
   getSingleArt: "/news/",
   addComment: "/news",
}


export async function getAllNews() { 
    const news = await get(endpoints.home);
    return news;
 };


 export async function createArticle(data) {
    const article = await post(endpoints.create, data);
    return article;
 }

 export async function addComment(newsId, userId, username, commentText) {   
   try {
      const comment = await post(`${endpoints.addComment}/${newsId}/comment`, {newsId, userId, username, commentText});
      return comment;
      
   } catch (error) {
      console.log(error);
   }
};

 export async function getNewsForSport(sport) {
    const newsForSport = await get(`/news/home/${sport}`);
    return newsForSport;
 }

 export async function getSingleArticle(id) {
   const data = await get(`${endpoints.getSingleArt}${id}`);
   return data;
};

export async function getCommentsForArticle(id) {
   const commentsForArticle = await get(`/news/${id}/comments`);
   return commentsForArticle;
}

export async function editArticle(id, {sport, title, matchDescrp, image}) {
   const articleEdit = await put(`/news/${id}/edit`, {sport, title, matchDescrp, image});
   return articleEdit;
}

export async function getLastComments() {
   const last5Comments = await get('/news/latest-comments');
   return last5Comments;
}