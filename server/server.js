const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

const pg = require('pg');
//pg configuration LOCAL ONLY
const Pool = pg.Pool;
const pool = new Pool({
    database: 'jazzy_sql', // THIS CHANGES BY PROJECT
    host: 'localhost',
    port: 5432,
})

pool.on('connect', () => {
    console.log('CONNECTEDD TO POSTGRES');
});

pool.on('error', (error) => {
    console.log(error);
})

// TODO - Replace static content with a database tables
// const artistList = [ 
//     {
//         name: 'Ella Fitzgerald',
//         birthdate: '04-25-1917'
//     },
//     {
//         name: 'Dave Brubeck',
//         birthdate: '12-06-1920'
//     },       
//     {
//         name: 'Miles Davis',
//         birthdate: '05-26-1926'
//     },
//     {
//         name: 'Esperanza Spalding',
//         birthdate: '10-18-1984'
//     },
// ]
// const songList = [
//     {
//         title: 'Take Five',
//         length: '5:24',
//         released: '1959-09-29'
//     },
//     {
//         title: 'So What',
//         length: '9:22',
//         released: '1959-08-17'
//     },
//     {
//         title: 'Black Gold',
//         length: '5:17',
//         released: '2012-02-01'
//     }
// ];

app.get('/artist', (req, res) => {
    console.log(`In /songs GET`);
    const queryText = `SELECT * FROM "artists" ORDER BY "id" DESC;`
    pool.query(queryText)
    .then( (result) => {
        //only guarentee that the query is done
        console.log(result.rows); // result.rows is our selected data
        res.send(result.rows);
    }).catch((err) =>{
        console.log(err);
        res.sendStatus(500);
    })
});

app.post('/artist', (req, res) => {
    let queryText = `INSERT INTO "songs" ("name", "brithdate")
    VALUES ($1, $2);`

    let values = [req.body.name, req.body.birthdate];
    
    pool.query(queryText, values)
    .then( (result) => {
        //only guarentee that the query is done
        //console.log(result.rows); // result.rows is our selected data
        res.sendStatus(201);
    }).catch((err) =>{
        console.log(err);
        res.sendStatus(500);
    })
});

app.get('/song', (req, res) => {
    console.log(`In /songs GET`);
    const queryText = `SELECT * FROM "songs" ORDER BY "id" DESC;`
    pool.query(queryText)
    .then( (result) => {
        //only guarentee that the query is done
        console.log(result.rows); // result.rows is our selected data
        res.send(result.rows);
    }).catch((err) =>{
        console.log(err);
        res.sendStatus(500);
    })
});

app.post('/song', (req, res) => {
    let queryText = `INSERT INTO "songs" ("rank", "track", "artist", "published")
    VALUES ($1, $2, $3, $4);`

    let values = [req.body.rank, req.body.track, req.body.artist, req.body.published]

    pool.query(queryText, values)
    .then( (result) => {
        //only guarentee that the query is done
        //console.log(result.rows); // result.rows is our selected data
        res.sendStatus(201);
    }).catch((err) =>{
        console.log(err);
        res.sendStatus(500);
    })
});


