var MyListFixture = require('./my-list-fixture')
var Errors = require('../../../constants/errors')

module.exports = {
  path: '/my-list',
  method: 'GET',
  delay: 1000,
  render: (req, res) => {
    data = MyListFixture.MY_LIST_DATA
    res.append('Content-Type', 'application/json')
    res.status(200).send(data)
    //data = Historic.DATA_USER_NOT_FOUND_GET
    //res.status(400).send(data)
  }
}
