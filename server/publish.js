Meteor.publish('sites', function () {
  return Sites.find()
})

Meteor.publish('requests', function () {
  return Requests.find({ responseAt: { $exists: false}}, {limit:100})
})