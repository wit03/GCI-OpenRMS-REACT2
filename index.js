var info = require('./package.json');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Go to /info for more information');
})

app.get('/info', (req, res) => {
    res.json({ 
        serverName: info.name, 
        serverVersion: info.version 
    })
})


app.listen(port, () => console.log(`listening on port ${port}!`))