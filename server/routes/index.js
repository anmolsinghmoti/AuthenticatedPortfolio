/* FileName : index.js */
/* StudentName :Anmol Singh */
/* Student Id :301145362 */
/* Date : 10/22/2021 */
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying Login Page*/
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login Page*/
router.post('/login',indexController.processLoginPage);

/* GET Route for displaying the Register Page*/
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register Page*/
router.post('/register',indexController.processRegisterPage);

/*GET Route for perform User Logout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
