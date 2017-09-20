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
      tweed: req.body.rotaflow,
      time: Date.now(),
    })
    .then(rotaflow => {
      res.json({message: 'ok', data: { rotaflow }});
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

module.exports = rotaflowController;
