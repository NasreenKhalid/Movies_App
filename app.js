
const main = document.getElementById("main");
const searchTerm = document.getElementById('search')
const submitBtn = document.getElementById('submit')
const form = document.getElementById('form')
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const API_URL='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



 getMovies(API_URL);

// initially fetch the movies
async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData);
}



function showMovies(movies){
  console.log(movies.results)
  main.innerHTML="";


   movies.results.forEach((movie)=>{
    const movieEl=document.createElement('div')
    movieEl.classList.add('movie');
    movieEl.innerHTML=`
  
    <img src="${IMGPATH + movie.poster_path}" alt=${movie.title}/>
  
    
    <div>
    <h3>${movie.original_title}</h3>
    <p>${movie.overview}</p>
    </div>
    `;
    main.appendChild(movieEl)
   })


}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text = searchTerm.value
    console.log(text)
    if(text){
        getMovies(SEARCHAPI + text)
        searchTerm.value="";
    }
})

