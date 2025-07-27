const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer  = require('multer');
 const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });



// const validateListing = (req, res, next) => {
//     let {error} = listingSchema.validate(req.body);
//     if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }
//     else{
//         next();
//     }
// }



router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
    isLoggedIn,
   
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing));

    // .post( upload.single('listing[image]'), (req, res) => {
    //     res.send(req.file);
    // });



//2 new route
router.get("/new", 
    isLoggedIn,
    listingController.renderNewForm
);


router.route("/:id")
    .get( 
        wrapAsync(listingController.showListing))
    .put( 
        isLoggedIn,
        isOwner,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.updateListing))
    .delete(  
        isLoggedIn, 
        isOwner,
        wrapAsync(listingController.destroyListing));

        
// //1 index route
// router.get("/", wrapAsync(listingController.index));





// //3 show route
// router.get("/:id", wrapAsync(listingController.showListing));


//4 create route
// router.post(
//     "/", 
//     isLoggedIn,
//     validateListing,
//     wrapAsync(listingController.createListing)
// );


//5 edit route
router.get(
    "/:id/edit",  
    isLoggedIn, 
    isOwner,
    wrapAsync(listingController.renderEditForm));


//6 update route
// router.put(
//     "/:id", 
//     isLoggedIn,
//     isOwner,
//     validateListing,
//     wrapAsync(listingController.updateListing));

//7 delete route
// router.delete(
//     "/:id",  
//     isLoggedIn, 
//     isOwner,
//     wrapAsync(listingController.destroyListing));



module.exports = router;
