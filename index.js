const express = require('express'); //npm i express
// this is making it so we are able to use express after installing it in my project
const app = express() // initialized express to use its features

//four http methods : GET, POST, PUT & DELETE - you may see CRUD for some other stacks, which stands for cxreate, read, update and delete

// get is a function inside of  express - for more info look at express module on NPMJS
app.get('/', (req, res) =>{ //each get method should have a req & res -- Req = request. Res = response - standard naming convention
    res.sendFile(__dirname + '/index.html')//send file is for express only , no templatine enjine used 

})

app.get('/about', (req, res) =>{
    res.sendFile(__dirname + '/about.html') 
})

app.listen(3000, ()=>{ //creates a connection on a specified port in this case local host 3000 - the response i get is 'cannot get /"
    console.log('i am listening on port 3000');
    
})