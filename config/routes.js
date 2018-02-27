const router = require('express').Router();
const meteorites = require('../controllers/meteorites');
const auth   = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/meteorites')
  .get(meteorites.index)
  .post(secureRoute, meteorites.create);

router.route('/meteorites/:id')
  .get(meteorites.show)
  .put(secureRoute, meteorites.update)
  .delete(secureRoute, meteorites.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
