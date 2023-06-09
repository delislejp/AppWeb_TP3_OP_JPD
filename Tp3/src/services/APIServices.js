let baseURL = "https://laravel-e23.herokuapp.com/api/";
let baseHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

//GET
export async function getAllActors() {
  const response = await fetch(baseURL + "actors", baseHeaders);
  return await response.json();
}

export async function getAllMovies() {
  let movies = [];
  const response = await fetch(baseURL + "films", baseHeaders);
  let json = await response.json();
  let last_page = json.meta.last_page;
  for (let i = 1; i <= last_page; i++) {
    const response = await fetch(baseURL + "films?page=" + i, baseHeaders);
    let json = await response.json();
    movies = movies.concat(json.data);
  }
  return movies;
}

export async function getMovie(id) {
  const response = await fetch(baseURL + "films/" + id, baseHeaders);
  return await response.json();
}

export async function getMovieActors(id) {
  const response = await fetch(baseURL + "films/" + id + "/actors", baseHeaders);
  return await response.json();
}

//POST
export async function postMovie(movie, user) {
  console.log(movie);
  console.log(user);
  return fetch(baseURL + "films",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + user.token
    },
    body: JSON.stringify({
      title: movie.titre,
      release_year: movie.annee,
      description: movie.description,
      rating: movie.classement,
      length: movie.longueur,
      special_features: movie.types,
      language_id: movie.langue,
      actors: movie.acteurs
  })
  });
}

export async function postCritic(critic, user){
  return fetch(baseURL + "films/" + critic.film_id + "/critics",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + user.token
    },
    body: JSON.stringify({
      user_id: critic.user_id,
      film_id: critic.film_id,
      score: critic.score,
      comment: critic.comment,
      date: critic.date,
      user_name: critic.user_name
    })
  });
}

//PUT/PATCH
export async function putCritic(critic, user){
  return fetch(baseURL + "films/" + critic.film_id + "/critics/" + critic.id,{
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + user.token
    },
    body: JSON.stringify({
      user_id: critic.user_id,
      film_id: critic.film_id,
      score: critic.score,
      comment: critic.comment,
      date: critic.date,
      user_name: critic.user_name
    })
  });
}

export async function patchPassword(user, password){
  return fetch(baseURL + "user/password",{
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + user.token
    },
    body: JSON.stringify({
      password: password
    })
  });
}


//DELETE
export async function deleteMovie(id, user) {
  return fetch(baseURL + "films/" + id,{
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + user.token
    }
  });
}