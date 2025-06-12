import { Client } from "pg";
import express from "express";
const app = express();
app.use(express.json());
const port = 3005;

const pgClient = new Client({
    connectionString: "postgresql://postgres:125643@127.0.0.1:5432/100xDevs_db",
});

pgClient.connect();

app.post("/signup", async (req, res) => {
    try {
        const { username, email, password, city, country, street, pincode } =
            req.body;
        const insertQuery = `INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *;`; //?to avoid SQL injection
        const addressesInsertQuery = `INSERT INTO addresses(user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5) RETURNING *;`;

        //! transaction
        await pgClient.query("BEGIN;");
        const response = await pgClient.query(insertQuery, [
            username,
            email,
            password,   
        ]);
        console.log(response.rows);
        const userId = response.rows[0].id;
        await new Promise((x) => setTimeout(x, 30 * 1000));
        const addressResponse = await pgClient.query(addressesInsertQuery, [
            userId,
            city,
            country,
            street,
            pincode,
        ]);
        console.log(addressResponse.rows);

        await pgClient.query("COMMIT;");

        res.json({
            message: "You have signed up",
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error while signing up",
        });
    }
});

app.get("/metadata", async (req, res) => {
    const id = req.query.id;

    const query1 = `SELECT id, email, username FROM users WHERE id=$1;`;
    const response1 = await pgClient.query(query1, [id]);
    const query2 = `SELECT * FROM addresses WHERE user_id=$1;`;
    const response2 = await pgClient.query(query2, [id]);

    res.json({
        user: response1.rows[0],
        address: response2.rows,
    });
});

app.get("/better-metadata", async (req, res) => {
    const id = req.query.id;
    const query = `SELECT users.id, users.email, users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users INNER JOIN addresses ON users.id = addresses.user_id
    WHERE users.id = $1;`;

    const response = await pgClient.query(query, [id]);

    res.json({
        response: response.rows,
    });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
