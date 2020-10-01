const express = require('express')
const app = express()
const port = 3006

app.get('/', (request, response) => response.send('はじめてのヘロク'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))