const APIKEY = config.apikey;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const now_playingURL="https://api.themoviedb.org/3/movie/now_playing?api_key="+APIKEY+"&language=en-US&page=1";
const popularURL="https://api.themoviedb.org/3/movie/popular?api_key="+APIKEY+"&language=en-US&page=1";
const topURL="https://api.themoviedb.org/3/movie/top_rated?api_key="+APIKEY+"&language=en-US&page=1";
const upURL="https://api.themoviedb.org/3/movie/upcoming?api_key="+APIKEY+"&language=en-US&page=1";

fetch(now_playingURL)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element) => {
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText= "★ " + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            console.log(movie);
            const now_playing = document.getElementById("now-playing");
            now_playing.appendChild(movie);
        })
    });


    fetch(popularURL)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element) => {
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText= "★ " + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            console.log(movie);
            const popular = document.getElementById("popular");
            popular.appendChild(movie);
        })
    });

    
fetch(topURL)
.then(response => response.json())
.then(response => {
    response.results.forEach((element) => {
        console.log(element.backdrop_path);
        console.log(element.title);
        console.log(element.vote_average);

        let movie = document.createElement("li");
        let moviediv = document.createElement("div");
        let backdrop = document.createElement("img");
        backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
        let title = document.createElement("h4");
        title.innerText = element.title;
        let rate = document.createElement("span");
        rate.innerText= "★ " + element.vote_average;
        moviediv.appendChild(backdrop);
        moviediv.appendChild(title);
        moviediv.appendChild(rate);
        movie.appendChild(moviediv);
        console.log(movie);
        const top_rated = document.getElementById("top-rated");
        top_rated.appendChild(movie);
    })
});


fetch(upURL)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element) => {
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText= "★ " + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            console.log(movie);
            const upcoming = document.getElementById("upcoming");
            upcoming.appendChild(movie);
        })
    });

