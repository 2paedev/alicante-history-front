var ArticlesDetailFixture = require('./articles-detail-fixture')
var Errors = require('../../../constants/errors')

module.exports = {
  path: '/articles/:id/',
  render: (req, res) => {
    data = ArticlesDetailFixture.ARTICLE_DATA
    res.append('Content-Type', 'application/json')
    res.status(200).send(data)
  }
}
