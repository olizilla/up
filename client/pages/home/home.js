Template.home.helpers({
  sites: function () {
    return Sites.find()
  },

  requests: function () {
    return Requests.find()
  }
})

Template.home.events({
  'submit':function (evt, tpl) {
    evt.preventDefault()
    var url = $('.input-url').val()
    console.log(url)
    Sites.insert({ url: url })
  }
})