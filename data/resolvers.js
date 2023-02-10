// class Movie {
//   constructor({ rank, id, movieName, year, rating, img_link, cast }) {
//     this.rank = rank;
//     this.id = id;
//     this.movieName = movieName;
//     this.year = year;
//     this.rating = rating;
//     this.img_link = img_link;
//     this.cast = cast;
//   }
// }

// fake database
//const movieDB = {};
import models from './connectors.js'
const resolvers = {
  // get a movie query
  getMovie: ({ rank }) => {
    return new Promise((resolve) => {
      models.Movie.findOne({ rank: rank }, (err, movie) => {
        if (err) {
          console.log(err);
        } else resolve(movie);
      });
    });
  },
  getAllMovie:()=>{
    return new Promise((resolve) => {
      models.Movie.find({}, (err, movie) => {
        if (err) {
          console.log(err);
        } else resolve(movie);
      });
    });

  },
  // Mutate, update database
  createMovie: ({ input }) => {
    let newMovie = new models.Movie({
      rank: input.rank,
      id: input.id,
      movieName: input.movieName,
      year: input.year,
      rating: input.rating,
      img_link: input.img_link,
    });
    return new Promise((resolve) => {
      newMovie.save((err) => {
        if (err) {
          console.log(err);
        } else resolve(newMovie);
      });
    });
  },
  updateMovie: ({ input }) => {
    return new Promise((resolve)=>{
      models.Movie.findOneAndUpdate({rank:input.rank},input,{
        new:true
      },(err,movie)=>{
        if (err) {
          console.log(err);
        } else resolve(movie);
      })
    })
  },
  deleteMovie:({input})=>{
    return new Promise((resolve)=>{
      models.Movie.deleteOne({rank:input.rank},(err)=>{
          if (err) {
            console.log(err);
          } else resolve("Successfully delete!");
      })
    })
  }
};

export default resolvers;
