const serverInfo = require('./package.json');
const express = require('express')
const app = express()
const port = 3000

//home endpoint
app.get('/', (req, res) => {
    res.send('Go to /info for more information');
})

//info endpoint
app.get('/info', (req, res) => {
    res.json({ 
        serverName: serverInfo.name, 
        serverVersion: serverInfo.version 
    })
})

app.listen(port, () => console.log(`listening on port ${port}!`)) 
