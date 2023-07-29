const express = require('express');
const path =require('path');
const hbs=require('hbs');
const app = express();
const port = process.env.PORT || 2000;


const add=path.join(__dirname,"../public");
const tempath=path.join(__dirname,"./template/views");
const partials_path=path.join(__dirname,"./template/partials")
app.set('view engine','hbs');
app.set('views',tempath)
app.use(express.static(add))
hbs.registerPartials(partials_path);

// routing 

app.get("", (req, res) => {
    res.render('index')
});
app.get("/about", (req, res) => {
    res.render('about')
   
});
app.get("/weather", (req, res) => {
    res.render('weather');
});
app.get("*",(req,res)=>
{
    res.render('404error');

})

app.listen(port, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
