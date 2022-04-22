const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next)=>{
    //this means no matter which domain sending request it is allowed to access server
    res.setHeader("Access-Control-Allow-Origin","*");
    // allow types of headers
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    //allow methods that we want to make accessible
    res.setHeader('Access-Control-Allow-Methods',"GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.get('/api/posts',(req, res)=>{
    const posts = [
        {
            title: "First Post from server",
            content: "First post content from server"
        },
        {
            title: "Second Post from server",
            content: "Second post content from server"
        },
        {
            title: "Third Post from server",
            content: "Third post content from server"
        }
    ]
    //res.send("Hello from improved server!");
    res.status(200).json({
        message: "Posts received successfully",
        posts: posts
    });
});

app.post('/api/posts',(req, res)=>{
    const post = req.body;
    console.log('*******Post Received', post);
    res.status(201).json({
        message:"Posts stored successfully"
    });
});

module.exports = app;