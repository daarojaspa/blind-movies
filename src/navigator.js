import { getCategories,getTrandingHome } from "./main.js";
window.addEventListener('DOMContentLoaded',navigator,false);
window.addEventListener('hashchange',navigator ,false);

searchFormBtn.addEventListener('click',()=>{location.hash='#search='})
arrowBtn.addEventListener('click',()=>{location.hash='home'})
function map(){
    //validates the  hash  on a list of options for the switch case on the navigator function
    const options=['#trends','#search=','#movie=','#category='];
  const hash= options.find(option => {if (location.hash.startsWith(option)){
        return true

    }
    else{
        console.log('is not returning true ' +option)
        return false
    
} ;})
return hash
}
    
function navigator(){
    const hash= map();
    switch(hash){
        case '#trends':
            trendsPage()
         console.log('trends charge')
            break;
        case '#movie=':
            moviePage()
            console.log('movie started')
                break;
        
         case '#search=':
            searchPage()
            console.log('search in progres')
            break;
        case '#category=':
            categoryPage();
            console.log('category should have been charge ')
            break;
        default:
            homePage();
            console.log('corriendo home')
            break                            
    }
}
//next functions implement the woekflow logic of the single aplication page
 function homePage(){
    headerSection.classList.remove('header-containner--long');
    headerSection.style.background='';
    arrowBtn.classList.add('inactive')
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    trendingPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    getTrandingHome();
    getCategories();

 }
 function trendsPage(){
    
    headerSection.classList.remove('header-container--long');
    //headerSection.style.background='';
    arrowBtn.classList.add('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

 }
 function searchPage(){
    headerSection.classList.remove('header-container--long');
    //headerSection.style.background='';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');
    categoriesPreviewSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

 }
 function categoryPage(){
    headerSection.classList.remove('header-containner--long');
    headerSection.style.background='';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

 }
 function moviePage(){
    headerSection.classList.add('header-container--long');
    headerSection.style.background='';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header-arrow--white')
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

 }