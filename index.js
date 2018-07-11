/*
 * Primary API file
 *
 */

// Dependencies
const http = require('http')
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder

// Variables
const port = 8888

const server = http.createServer((req, res) => {
  // Get the url and parse
  const parsedUrl = url.parse(req.url, true)

  // Get the path
  const path = parsedUrl.pathname

  // Trim out slashes in path, get the method and query
  const trimmedPath = path.replace(/^\/+|\/+$/g, '')
  const method = req.method.toLowerCase()
  const query = parsedUrl.query
  const headers = req.headers
  const decoder = new StringDecoder('utf-8')
  let buffer = ''

  req.on('data', (data) => {
    buffer += decoder.write(data)
  })

  req.on('end', (data) => {
    buffer += decoder.end()

    console.log('Request received with body:', buffer)
    console.log('Request received on path:', trimmedPath,)
    console.log('Request received with method:', method)
    console.log('Request received with query parameters:', query)
    console.log('Request received with headers:', headers)

    // Send the response
    res.end('Hello World!\n')
  })
})

// Listen on defined port
server.listen(port, () => {
  console.log('Server is listening on port', port)
})