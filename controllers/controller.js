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

rotaflowController.update = (req, res) => {
  Rotaflow.update({
      title: req.body.title,
      imgurl: req.body.imgurl,
      producturl: req.body.producturl
  }, req.params.id).then(data => {

    res.redirect('/index'); //REDIRECTION?
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

//DO I NEED getOne at all, it seems I do.
rotaflowController.getOne = (req, res) => {
  Rotaflow.findById(req.params.id)
    .then(data => {
      res.render('./rotas/edit', { data} ) /////////////ROUT?????
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = rotaflowController;
