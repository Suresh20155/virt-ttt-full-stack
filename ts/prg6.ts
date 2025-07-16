class Movie {
  constructor(
    public title: string,
    public director: string,
    public year: number
  ) {}
}

const fetchMovieDetails = (id: number): Promise<Movie> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movieData = {
        title: "Asuran",
        director: "Vetrimaran",
        year: 2019
      };
      resolve(new Movie(movieData.title, movieData.director, movieData.year));
    }, 2000);
  });
};

const displayMovie = async (id: number): Promise<void> => {
  const movie = await fetchMovieDetails(id);
  const { title, ...rest } = movie;

  console.log(`🎬 Movie Info:
Title     : ${title}
Director  : ${rest.director}
Year      : ${rest.year}`);
};

displayMovie(1);
