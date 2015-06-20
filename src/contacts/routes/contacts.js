var express = require('express');
var router = express.Router();
var obj=new Array();


/* GET contacts */
router.get('/:id', function(req, res, next) {
  id=req.params.id;
    
  res.send(JSON.stringify(obj[id]));
 
});

router.post('/', function(req, res, next) {
   
  obj.push(req.body)
  console.log(req.body);
  res.send((obj.length-1)+"");
  
});

router.put('/:id', function(req, res, next) {
  id=req.params.id;
  if(req.body.firstName != undefined)
    obj[id].firstName=req.body.firstName;
  res.statusCode=200;
  res.send(obj[id]);
  

});

module.exports = router;
