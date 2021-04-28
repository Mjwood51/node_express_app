var path = require('path');
require('dotenv').config();
const d3Control = require('./d3external');
var express = require('express');
var logger = require('morgan');
const { get } = require('http');


var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var bookList = [];
bookList.push({title: "Thinking, Fast and Slow", author: "Daniel Kahneman"});
bookList.push({title: "The Signal and the Noise: Why so many Predictions Fail - but some don't", author: "Nate Silver"});


app.get('/', function(req, res){
    res.send({
        key: process.env.ALPHA_VANTAGE_KEY
    });
});

app.get('/books', function(req, res){
    res.render("bookList.ejs", {books: bookList});
});


app.get('/d3example', function(req, res){
    d3Control.d3Construct(function(dom){
        res.write(dom.serialize());
    });   
});


app.get('/books/:id', function(req, res){
    //var bookData = { title: "the name of the book", author: "some writer"};
    var index = parseInt(req.params.id) - 1;
    var bookData = bookList[index];
    res.render('bookView.ejs', {book: bookData});
    //res.send("The details of book " + req.params.something + " should go here")
});


//Search GET request
app.get('/search', function(req, res){
    res.render("bookSearch.ejs");
});

//Search POST request
app.post('/search', function(req, res){
    res.send('Your search for ' + req.body.searchText + 'returned X results')
});

app.get('*', function(req, res){
    res.send("Hello World")
});

app.listen(3000);
console.log('Listening on port 3000');