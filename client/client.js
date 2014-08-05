Meteor.subscribe('sites')
Meteor.subscribe('requests')

UI.registerHelper('timeFormat', function(ms){
  return moment(ms).format('h:mm:ss a')
})