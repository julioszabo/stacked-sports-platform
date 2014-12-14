var	express = require('express'),
  router = express.Router();


/*- GET Routes -*/
var get_route = function(route_path, coll, populates){

  //GET
  router.route('/' + route_path)

  .get(function(req, res) {
    if(populates){
    		coll.find(function(err, result) {
      		if (err) {
        			return res.send(err);
      		}
      		res.json(result);
      }).populate(populates);
    } else {
    		coll.find(function(err, result) {
      		if (err) {
        			return res.send(err);
      		}
      		res.json(result);
      });
    }

  })


  //CREATE
  .post(function(req, res) {
  		var item = new coll(req.body);

  		item.save(function(err) {
    		if (err) {
      			return res.send(err);
    		}

    		res.send({
              message: 'Item Added Ok',
              result: item
            });
  		});
  });


  router.route('/' + route_path + '/:id')

  // GET ONE
  .get(function(req, res) {
    if(populates)
    {
    		coll.findOne({ _id: req.params.id}, function(err, item) {
      		if (err) {
        			return res.send(err);
      		}

      		res.json(item);
    		}).populate(populates);
    } else {
    		coll.findOne({ _id: req.params.id}, function(err, item) {
      		if (err) {
        			return res.send(err);
      		}

      		res.json(item);
    		});
    }
  })

  // UPDATE ONE
  .put(function(req,res){
  		coll.findOne({ _id: req.params.id }, function(err, item) {
    		if (err) {
      			return res.send(err);
    		}

        for (prop in req.body) {
        	if(req.body.hasOwnProperty(prop)) {
        		item[prop] = req.body[prop];
        	}
        }

    		// save the item
    		item.save(function(err) {
      			if (err) {
        			return res.send(err);
      			}

      			res.json({ message: 'Item updated!' });
    		});
  		});
  })

  // DELETE ONE
  .delete(function(req, res) {
  		coll.remove({_id: req.params.id}, function(err, item) {
    		if (err) {
      			return res.send(err);
    		}

    		res.json({ message: 'Successfully deleted' });
  		});
  });


  //FILTER
  router.route('/' + route_path + "/filter")
  .post(function(req, res) {

    //TODO: validate json sent

    //create filter
    if(populates)
    {
    		coll.find(req.body, function(err, result) {
      		if (err) {
        			return res.send(err);
      		}
      		res.json(result);
      }).populate(populates);
    } else {
    		coll.find(req.body, function(err, result) {
      		if (err) {
        			return res.send(err);
      		}
      		res.json(result);
      });
    }

  });


  return router;
};




module.exports = {
  route: function(route_path, coll, populates){
    return get_route(route_path, coll, populates);
  }
};
