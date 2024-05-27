import { get, post } from "./api.js"

const endpoints = {
   home: "/news/home", 
   create: "/news/create",
   getSingleArt: "/news/"
}


export async function getAllNews() { 
    const news = await get(endpoints.home);
    return news;
 };


 export async function createArticle(data) {
    const article = await post(endpoints.create, data);
    return article;
 }

 export async function getNewsForSport(sport) {
    const newsForSport = await get(`/news/home/${sport}`);
    return newsForSport;
 }

 export async function getSingleArticle(id) {
   const data = await get(`${endpoints.getSingleArt}${id}`);
   return data;

 }