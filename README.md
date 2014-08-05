# UP?

Check if a given url is up, every x mins.

User can log in and create a list of sites they'd like to check.

Only 1 request is sent every x mins

user{
  sites: [
    { siteId: }
  ]
}

Sites [
  {_id: foo, status: 200, }
]

Requests [
  { siteId: foo, date: x, status: 200 }
]