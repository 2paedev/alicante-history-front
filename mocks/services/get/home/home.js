var HomeFixture = require('./home-fixture')
var Errors = require('../../../constants/errors')

module.exports = {
  path: '/all',
  method: 'GET',
  delay: 1000,
  render: (req, res) => {
    data = HomeFixture.HOME_DATA
    res.append('Content-Type', 'application/json')
    res.status(200).send(data)
    //data = Historic.DATA_USER_NOT_FOUND_GET
    //res.status(400).send(data)
  }
}
