import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "127.0.0.1",
    //port: 3307,
    user: "root",
    password: "",
    database: "movie-db",
});

await connection.connect();

export async function getAll(userId) {
    const query = "SELECT * FROM Movies Where public=1 or user=?";
    const [data] = await connection.query(query, userId);
    return data;
}

async function insert(movie) {
    const query =
        "INSERT INTO Movies (title, year,user, public) VALUES (?, ?,?,?)";
    const [result] = await connection.query(query, [
        movie.title,
        movie.year,
        movie.user,
        movie.public,
    ]);
    return {...movie, id: result.insertId };
}

async function update(movie) {
    const query = "UPDATE Movies SET title = ?, year = ?,public =? WHERE id = ?";
    await connection.query(query, [
        movie.title,
        movie.year,
        movie.public,
        movie.id,
    ]);
    return movie;
}

export async function get(id) {
    const query = "SELECT * FROM Movies WHERE id = ?";
    const [data] = await connection.query(query, [id]);
    return data.pop();
}

export async function remove(userid, id) {
    const query = "DELETE FROM Movies WHERE id = ? and (user=? or public=1)";
    await connection.query(query, [id, userid]);
    return;
}

export function save(movie) {
    if (!movie.id) {
        return insert(movie);
    } else {
        return update(movie);
    }
}