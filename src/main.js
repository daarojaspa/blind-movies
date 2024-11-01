require('dotenv') .config()
async function  getTrandingHome(){
const Url= 'https://api.themoviedb.org/3/trending/movie/week?api_key=';
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
getTrandingHome();