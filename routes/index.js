const router = require("express").Router();
const Pet = require('../models/Pet.model');
const User = require('../models/User.model');
const isLoggedIn  = require('../middleware/isLoggedIn')
const  isLoggedOut  = require('../middleware/isLoggedOut')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("public/index");
});

/*GET feed*/



router.get("/pets", isLoggedIn ,async (req ,res, nxt) => {
  try {
    Pet.find().then((pets=>{
      res.render('/private/feed',{pets})
    }))} catch (error) {
      console.log(`ERROR: ${error.message}`);
      next(error);
    }

  });
  



/*GET petProfile*/

router.get("pets/:id", isLoggedIn, async (req, res, next) => {
  try {
      const { id } = req.params;
      const pet = await Pet.findbyId(id)
      res.render('petProfile', {pet})
  } catch (err) {
      console.log(`ERROR: ${error.message}`);
      next(error);
  }

});

/*GET userPetProfile*/

router.get("profile/pets/:id", async (req, res, next) => {
  try {
      const { id } = req.params;
      const pet = await Pet.findbyId(id).populate("owner").lean()
      res.render('userPetProfile', {pet})
  } catch (err) {
      console.log(`ERROR: ${error.message}`);
      next(error);
  }

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

