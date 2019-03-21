const express = require('express'); 
const path = require('path'); 
const app = express();

const hostName = '127.0.0.1'; 
const port = 8080; 

app.use(express.static(path.join(__dirname, 'public'))); 

app.listen(port, hostName, function() {
    console.log(`服务器运行在http://${hostName}:${port}`);
});



































