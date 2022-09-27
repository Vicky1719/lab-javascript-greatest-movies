// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let newList = moviesArray.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    } else {
      return false;
    }
  });
  return newList.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let sumScores = moviesArray.reduce((acumulator, movie) => {
    return acumulator + movie.score;
  }, 0);
  let media = sumScores / moviesArray.length;
  return media.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let newListDrama = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  let sumDrama = newListDrama.reduce((acumulator, movie) => {
    return acumulator + movie.score;
  }, 0);
  let mediaDrama = sumDrama / newListDrama.length;
  return mediaDrama.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let lista = structuredClone(moviesArray)
    lista.sort((movie2, movie1) => {
    if (movie2.year > movie1.year) {
      return 1;
    } else if (movie2.year < movie1.year) {
      return -1;
    } else {
      if (movie2.title > movie1.title) {
        return 1;
      } else if (movie2.title < movie1.title) {
        return -1;
      } else {
        return 0;
      }
    }
  }); return lista
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
let lista20 = structuredClone(moviesArray)
lista20.sort((movie2, movie1) => {
    if (movie2.title > movie1.title) {
        return 1;
      } else if (movie2.title < movie1.title) {
        return -1;
      } else {
        return 0;
      }
}); return lista20.slice(0,20).map((movie) => movie.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
