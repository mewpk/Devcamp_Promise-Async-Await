const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2/promise')

app.use(cors())


/* GET users listing. */
app.get('/api/users', async (req, res, next) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุใหถูกตอง
        password: '1234', // <== ระบุใหถูกตอง
        database: 'codecamp', // <== ระบุ database ใหถูกตอง
        port: 3306, // <== ใส port ใหถูกตอง (default 3306, MAMP ใช 8889)
    });
    try {
        const users = await connection.query('SELECT * from user');
        res.json(
            users[0]
        );
        await connection.end();
    } catch (error) {
        res.json(error);
    }
});



app.listen(3000, () => {
    console.log('server started on port 3000!');
})