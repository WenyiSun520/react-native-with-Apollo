import mongoose from "mongoose";

let models = {};
main();
async function main() {
  console.log("connecting to Mongodb");
  await mongoose.connect(
    "mongodb+srv://reactNativeFullStack:reactNativeFullStack@cluster0.s87srw5.mongodb.net/reactnativefullstack?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );
  console.log("successfully connected to Mongodb");
  const movieSchema = new mongoose.Schema({
    rank: Number,
    id: String,
    movieName: String,
    year: Number,
    rating: Number,
    img_link: String,
    cast: [{ imdb_number: String, name: String }],
  });
  models.Movie = mongoose.model("Movie", movieSchema);
}

export default models;
