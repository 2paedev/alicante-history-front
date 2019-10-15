var Global = require('../../constants/global')
var Fixture = require('./custom-delete-response-fixture')

module.exports = {
  path: '/articles/:id/like',
  render: (req, res) => {
    data = Fixture.CUSTOM_DELETE_RESPONSE_OK
    status = 200
    res.append(Global.CONTENT_TYPE, Global.APPLICATION_TYPE)
    res.status(status).send(data)
  }
}
