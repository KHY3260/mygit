import { fetchMovieDetails } from "./api.js";

export function renderMovieCard(container, movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  const poster = document.createElement("img");
  poster.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
  poster.classList.add("movie-poster");

  const title = document.createElement("h2");
  title.textContent = movie.title;
  title.classList.add("movie-title");

  const rating = document.createElement("p");
  rating.textContent = `평점: ${movie.vote_average}`;
  rating.classList.add("movie-rating");

  card.appendChild(poster);
  card.appendChild(title);
  card.appendChild(rating);

  container.appendChild(card);

  card.addEventListener("click", () => {
    fetchMovieDetails(movie.id).then((movieDetails) => {
      showMovieModal(movieDetails);
    });
  });
}

export function showMovieModal(movie) {
  const modal = document.querySelector("#movie-modal");
  const modalTitle = document.querySelector(".modal-title");
  const modalOverview = document.querySelector(".modal-overview");
  const modalReleaseDate = document.querySelector(".modal-release-date");
  const modalPoster = document.querySelector(".modal-poster");

  modalTitle.textContent = movie.title;
  modalOverview.textContent = `줄거리: ${movie.overview}`;
  modalReleaseDate.textContent = `개봉일: ${movie.release_date}`;
  modalPoster.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

  modal.style.display = "flex";
}

export function closeModal() {
  const modal = document.querySelector("#movie-modal");
  modal.style.display = "none";
}
