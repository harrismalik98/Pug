const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname , "views"));
app.set("view engine", "pug");

app.use(express.static("public", {maxAge: 840000}));

app.get("/", (req,res)=>{
    res.render("index", {name:"Muhammad Harris", content: "Home Page Content"});
});

app.get("/about", (req,res)=>{
    res.render("about", {name:"Muhammad Harris", content: "About Page Content"});
});

app.get("/articles", (req,res)=>{

    let articles = [
        {
            id:1,
            title:"Article 1",
            author: "Author 1",
            body: "Article 1 Body"
        },
        {
            id:2,
            title:"Article 2",
            author: "Author 2",
            body: "Article 2 Body"
        },
        {
            id:3,
            title:"Article 3",
            author: "Author 3",
            body: "Article 3 Body"
        },
    ]

    res.render("articles", { title:"My Articles", articles:articles });
})

app.listen("3000", ()=>{
    console.log("Server running at port 3000");
})