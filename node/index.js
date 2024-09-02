const express = require('express')
const mysql = require('mysql')

const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const app = express()

const connection = mysql.createConnection(config)
const dropTable = `DROP TABLE IF EXISTS nodedb.people;`
connection.query(dropTable)
const createTable = `CREATE TABLE people(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), primary key(id))`
connection.query(createTable)
const insertData = `INSERT INTO people(name) values('Arthur')`
connection.query(insertData)
connection.end()

app.get('/', (_, res) => {
  const connection = mysql.createConnection(config)
  const sql = `SELECT * FROM people`
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Error fetching users');
      return;
    }
    
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      ${results.map(item => (`<span>${item.name}</span>`))}
    `)
  });
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})