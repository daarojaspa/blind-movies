const prueva ='jojo'
import { API_KEYS } from "./secret.js";
const api= axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers:{'Content-Type':'applications/jason;charset=utf-8',},
    params:{'api_key':API_KEYS

    }
})
export async function  getTrandingHome(){
// charge de traiding movies on the home 
    const {data}= await api('trending/movie/week');
    const movies = data.results;
    console.log(data,movies);
    movies.forEach(movie=> {
    const movieContainer=document.createElement('div')
        movieContainer.classList.add("movie-container");
            const movieImg=document.createElement('img');
            movieImg.classList.add('movie-img');
            movieImg.setAttribute('alt',movie.title)
            movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300'+movie.poster_path)
            const moviesPrevewTrandingSection=document.querySelector('#trendingPreview .trendingPreview-movieList');
            movieContainer.appendChild(movieImg);
            moviesPrevewTrandingSection.appendChild(movieContainer);
        });
}

export async function getCategories(){
    //charche all categories in the api on home
    const {data}= await api('genre/movie/list');    
    const categories=data.genres
    categories.forEach(
        (category) =>{

                const previewCategoriesContainer= document.querySelector('#categoriesPreview .categoriesPreview-list')
                const categoryContainer=document.createElement('div');
                categoryContainer.classList.add('category-container');
                const header=document.createElement('h3');
                header.classList.add('category-title')
                header.setAttribute('id','id'+category.id) //depending on this propertie we will get a diferent color
                const headerText=document.createTextNode(category.name);
                header.appendChild(headerText);
                categoryContainer.appendChild(header);
                previewCategoriesContainer.appendChild(categoryContainer);
               }
    );

}
//exported functions are call in navigator