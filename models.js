import mongoose from "mongoose";

let models = {};
main();
async function main() {
  console.log("connecting to Mongodb");
  await mongoose.connect(
    "mongodb+srv://reactNativeFullStack:reactNativeFullStack@cluster0.s87srw5.mongodb.net/reactnativefullstack?retryWrites=true&w=majority"
  );
  console.log("successfully connected to Mongodb");
  const movieSchema = new mongoose.Schema({
    rank: Number,
    id: String,
    name: String,
    year: Number,
    imbd_votes: Number,
    imdb_rating: Number,
    duration: String,
    genre: String,
    cast: [{ id: String, name: String }],
    director: [{ id: String, name: String }],
    writter: [{ id: String, name: String }],
    img_link: String,
  });
  models.Movie = mongoose.model("Movie", movieSchema);
}

export default models;
