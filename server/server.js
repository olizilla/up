function requestAll () {
//  console.log('Requesting %s sites', Sites.find().count())
  Sites.find().forEach(requestOne)
}

function requestOne (site) {
  var reqId = Requests.insert({ siteId: site._id, url: site.url, createdAt:Date.now() })
  HTTP.call('GET', site.url, function(err, res) {
    Requests.update(reqId, { $set: { response: res, responseAt: Date.now() } })
  })
}

Requests.find().observeChanges({
  changed: function (id, fields) {
    if (!fields.responseAt) return
    var req = Requests.findOne(id)
    Sites.update(req.siteId, { $set: {response: req.response, responseAt: req.responseAt } })
  }
})

Meteor.startup(function(){
  // purge dead requests
  Requests.remove( {responseAt:{ $exists: false }})

  Meteor.setInterval(requestAll, 60000)

  requestAll()
})

