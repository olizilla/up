// { userId:"", url: "", status: 200, lastUpdated: ms, response: {} }

Sites = new Meteor.Collection('sites')

Sites.allow({
  insert: function (userId, doc) {
    return true
  },
  update: function (userId, doc, fieldNames, modifier){
    return true
  },
  remove: function (userId, doc) {
    return true
  }
})
