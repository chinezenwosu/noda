/*
 * Primary API file
 *
 */

// Dependencies
const http = require('http')

// Variables
const port = 8888

const server = http.createServer((req, res) => {
  res.end('Hello World!\n')
})

// Listen on defined port
server.listen(port, () => {
  console.log('Server is listening on port', port)
})