//import { API_KEYS } from "./secret";
//console.log(process.env.API_KEY)
async function  getTrandingHome(){
    const request=await fetch(Url);
    const data= await request.json();
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

async function getCategories(){
    const request=await fetch(Url);
    const data= await request.json();
    const categories=data.genres
    categories.forEach(
        (category) =>{

                const previewCategoriesContainer= document.querySelector('#categoriesPreview .categoriesPreview-list')
                const categoryContainer=document.createElement('div');
                categoryContainer.classList.add('category-container');
                const header=document.createElement('h3');
                header.classList.add('category-title')
                header.setAttribute('id','id'+category.id)
                const headerText=document.createTextNode(category.name);
                header.appendChild(headerText);
                categoryContainer.appendChild(header);
                previewCategoriesContainer.appendChild(categoryContainer);
                
               }
    );

}
getTrandingHome();
getCategories();