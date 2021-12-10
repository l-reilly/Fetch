const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("public/index");
});

module.exports = router;

/*router.get("/pets", isLoggedIn ,async (req ,res, next) => {
  try {
    Pet.find().then((pets)=>{
      res.render('/private/feed',{pets})
  }) catch (err) {
      console.log(`ERROR: ${error.message}`);
      next(error);
    }
  } */

  router.get("/pets", isLoggedIn, async (req, res, next) => {
    try {
      Pet.find().then((pets) => {
        res.render('/private/feed', {pets})
      })
      
    }
  })