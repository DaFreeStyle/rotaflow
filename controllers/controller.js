const Rotaflow = require('../models/Rotaflow');

const rotaflowController = {};

rotaflowController.index = (req, res) => {
  Rotaflow.findAll()
    .then(rotaflows => {
      res.json({
        message: 'ok',
        data: { rotaflows },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

rotaflowController.show = (req, res) => {
  Rotaflow.findById(req.params.id)
    .then(rotaflow => {
      res.json({
        message: 'ok',
        data: { rotaflow },
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};


rotaflowController.create = (req, res) => {
  Rotaflow.create({
      title: req.body.title,
      imgurl: req.body.imgurl,
      producturl: req.body.producturl
    })
    .then(data => {
      res.json({message: 'ok', data: { data }});
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

rotaflowController.delete = (req, res) => {
  Rotaflow.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'Item deleted successfully!',
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}



module.exports = rotaflowController;
