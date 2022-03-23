import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "movie-db",
});
await connection.connect();

export async function getAll() {
    const query = "SELECT * FROM Movies";
    const [data] = await connection.query(query);
    return data;
}

async function insert(movie) {
    const query = "INSERT into Movies(title,year) values (?,?)";
    const [result] = await connection.query(query, [movie.title, movie.year]);
    return result;
}
async function update(movie) {
    TODO;
}
export async function get(id) {
    TODO;
}
export async function remove(id) {
    TODO;
}
export function save(movie) {
    insert(movie);
}