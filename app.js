import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema.js";
import usersRouter from "./routes/users.js";
// import models from "./models.js";
import resolvers from './data/resolvers.js'

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//sample data
const root = resolvers;
// const root = {
//   movie: () => {
//     return {
//       rank: 1,
//       id: "tt0111161",
//       movieName: "The Shawshank Redemption",
//       year: 1994,
//       rating: 9.3,
//       img_link:
//         "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0",
//       cast: [
//         { imdb_number: "nm0000209", name: "Tim Robbins" },
//         { imdb_number: "nm0000151", name: "Morgan Freeman" },
//         { imdb_number: "nm0348409", name: "Bob Gunton" },
//         { imdb_number: "nm0006669", name: "William Sadler" },
//       ],
//     };
//   }
// };

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use((req, res, next) => {
//   req.models = models;
//   next();
// });
//initialize graphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.use("/users", usersRouter);

export default app;
