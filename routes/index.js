var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/movies', function(req, res, next) {
  var json = JSON.parse(fs.readFileSync('./public/movies.json', 'utf8'));

  let result = { 
    data: []
  }
  json.data.forEach(item => {
    result.data.push(
      {
        id: item.id,
        // title: item.title, 
        // year: item.year, 
        poster: item.poster
      }
    )
  })

  res.json(result);
});

router.get('/movies/:id', function(req, res, next) {
  var json = JSON.parse(fs.readFileSync('./public/movies.json', 'utf8'));
  var result = {};

  json['data'].forEach(function (item) {
    if(item['id'] == req.params.id) {
      result = item;
    }
  })

  res.json(result);
});


module.exports = router;
