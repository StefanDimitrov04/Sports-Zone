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
   const comment = await post(`${endpoints.addComment}/${newsId}/comment`, {userId, username, commentText});
   return comment;
};

 export async function getNewsForSport(sport) {
    const newsForSport = await get(`/news/home/${sport}`);
    return newsForSport;
 }

 export async function getSingleArticle(id) {
   const data = await get(`${endpoints.getSingleArt}${id}`);
   return data;
};

export async function editArticle(id, {sport, title, matchDescrp, image}) {
   const articleEdit = await put(`/news/${id}/edit`, {sport, title, matchDescrp, image});
   return articleEdit;
}