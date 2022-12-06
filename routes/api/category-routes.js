const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  router.get("/", async (req, res) => {
    const categoryData = await Category.findAll().catch((err) => {
      //if an err is responded then we will run 400 status and err message
      res.json(err);
    });
    res.json(categoryData);
  });

  // GET a user
  router.get("/:id", async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id);
      if (!categpruData) {
        res.status(404).json({ message: "No user with this id!" });
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // find all categories
  // be sure to include its associated Products
});

// router.get("/:id", (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
// });

router.post("/", (req, res) => {
    try {
        const userData = await Category.create(req.body);
        // 200 status code means the request is successful
        res.status(200).json(categoryData);
      } catch (err) {
        // 400 status code means the server could not understand the request
        res.status(400).json(err);
      }
    });
    
  // create a new category


router.put("/:id", (req, res) => {
    try{
    const categoryData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!categoryData[0]) {
        res.status(404).json({ message: "No user with this id!" });
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});

  // update a category by its `id` value


router.delete("/:id", (req, res) => {
    try {
        const categoryData = await User.destroy({
          where: {
            id: req.params.id,
          },
        });
        if (!categoryData) {
          res.status(404).json({ message: "No user with this id!" });
          return;
        }
        res.status(200).json(categoryData);
      } catch (err) {
        res.status(500).json(err);
      }
  // delete a category by its `id` value
});

module.exports = router;
