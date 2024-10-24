const API_KEY = "ef01a3896f21fe3f6a66f70cde89447f";
const BASE_URL = "https://api.themoviedb.org/3";

export function fetchPopularMovies() {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`;

  return fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjAxYTM4OTZmMjFmZTNmNmE2NmY3MGNkZTg5NDQ3ZiIsIm5iZiI6MTcyODk1NzI4My41MzEwMTEsInN1YiI6IjY3MGRjMTU3YjE1ZDk3YjFhOTNkNTBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R4-PY3HwxHw34v7ghUJGsLDGNoBLfmiJYHhvMwwPfPM",
    },
  })
    .then((response) => response.json())
    .then((data) => data.results);
}

export function fetchMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`;

  return fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjAxYTM4OTZmMjFmZTNmNmE2NmY3MGNkZTg5NDQ3ZiIsIm5iZiI6MTcyODk1NzI4My41MzEwMTEsInN1YiI6IjY3MGRjMTU3YjE1ZDk3YjFhOTNkNTBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R4-PY3HwxHw34v7ghUJGsLDGNoBLfmiJYHhvMwwPfPM",
    },
  }).then((response) => response.json());
}
