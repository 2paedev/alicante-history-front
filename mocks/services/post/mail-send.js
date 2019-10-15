var Global = require('../../constants/global')
var Fixture = require('./custom-post-response-fixture')
var status = 400

module.exports = {
  path: '/mail/subscription',
  render: (req, res) => {
    data = Fixture.CUSTOM_POST_RESPONSE_OK
    status = 200
    res.append(Global.CONTENT_TYPE, Global.APPLICATION_TYPE)
    res.status(status).send(data)
  }
}
