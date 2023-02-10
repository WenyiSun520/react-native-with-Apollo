import { buildSchema } from "graphql";

const schema = buildSchema(`
type Movie {
    rank: Int
    id: String,
    movieName:String,
    year:Int,
    rating: Float
    img_link: String
    cast: [Cast]
}
type Cast {
    imdb_number :String,
    name: String
}
type Query{
    getMovie(rank:Int): Movie
    getAllMovie:[Movie]
}

input CastInput {
    imdb_number :String,
    name: String
}
input MovieInput {
     rank: Int
    id: String,
    movieName:String,
    year:Int,
    rating: Float
    img_link: String
    cast: [CastInput]
}
type Mutation {
    createMovie(input:MovieInput): Movie
    updateMovie(input:MovieInput): Movie
    deleteMovie(input:MovieInput): String

}
`);

export default schema;
