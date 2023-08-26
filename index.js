const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


const PORT = 5000;

const listWork = [];

var temp = "";

app.get('/', (req,res) => {
    temp = "";
    res.render("index.pug" , {
        data : listWork,
        post : temp
    });
});

app.post('/add', (req,res) => {
    var work = req.body;
    console.log(work.work);
    work = work.work;
    if(work == "") return res.redirect('/');
    const id = Math.floor(Math.random() * 1000);
    console.log(id);
    listWork.push({
        id,
        work,
    });
    return res.redirect('/');
});

app.post('/delete/:id', (req,res) => {
    const id = req.params;
    const index = listWork.findIndex(post => post.id == id.id);
    console.log("Delete process \n id : " + id.id + "\n index : " + index);
    listWork.splice(index, 1);
    return res.redirect('/');
});

app.listen(PORT, () => {
    console.log("The server is running on " + PORT);
});