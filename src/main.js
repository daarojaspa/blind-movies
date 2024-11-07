
import { API_KEYS } from "./secret.js";
const api= axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers:{'Content-Type':'applications/jason;charset=utf-8',},
    params:{'api_key':API_KEYS

    }
})
export function fillingWithMovies(htmlsection,apiMoviesArray){
htmlsection.innerHTML=''


apiMoviesArray.forEach(movie=> {
    const movieContainer=document.createElement('div')
        movieContainer.classList.add("movie-container");
            const movieImg=document.createElement('img');
            movieImg.classList.add('movie-img');
            movieImg.setAttribute('alt',movie.title)
            movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300'+movie.poster_path)
            movieContainer.appendChild(movieImg);
        htmlsection.appendChild(movieContainer);
        });
}
export async function  getTrandingHome(){
// charge de traiding movies on the home 
    const {data}= await api('trending/movie/week');
    const movies = data.results;
    fillingWithMovies(trendingMoviesPreviewList,movies)
}

export async function getCategories(){
    //charche all categories in the api on home
    const {data}= await api('genre/movie/list');    
    const categories=data.genres;
    categoriesPreviewList.innerHTML='';
    categories.forEach(
        (category) =>{

                const categoryContainer=document.createElement('div');
                categoryContainer.classList.add('category-container');
                const header=document.createElement('h3');
                header.classList.add('category-title')
                header.setAttribute('id','id'+category.id) //depending on this propertie we will get a diferent color
                header.addEventListener('click',()=> {
                    location.hash='#category='+category.id+'-'+category.name
                })
                const headerText=document.createTextNode(category.name);
                header.appendChild(headerText);
                categoryContainer.appendChild(header);
                categoriesPreviewList.appendChild(categoryContainer);
               }
    );

}
//exported functions are call in navigator
export async function  getMoviesByCategory(id){
    // charge the movies of a spesific category
        const {data}= await api('discover/movie',{
            params:{with_genres:id,}
        });
        console.log(data)
        const movies=data.results;
        console.log(movies)
        fillingWithMovies(genericSection, movies)
 
    }

    export async function  getMoviesBySearch(query){
        // charge the movies of a spesific category
            const {data}= await api('search/movie',{
                params:{query,}
            });
            const movies=data.results;
            console.log(movies)
            fillingWithMovies(genericSection, movies)
     
        }
    
    