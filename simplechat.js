Messages = new Meteor.Collection("messages")

if (Meteor.isClient) {

  var input

  var scroll = function(){
    // document.body
    var body = document.querySelector("body")
    body.scrollTop = 9999
  }

  Meteor.startup(function() {
    input = document.querySelector("input[type=text]")
    setTimeout(scroll, 100)
    setTimeout(scroll, 1000)
    setTimeout(scroll, 2000)
    setTimeout(scroll, 3000)

    var onResize = function(){
      scroll()
    }

    window.addEventListener("resize", onResize)
  })


  Template.messages.messages = function() {
    return Messages.find()
  }

  Template.messages.rendered = function() {
    scroll()
  }

  Template.input.events({
    'submit form' : function (evt) {
      Messages.insert({ text: input.value })
      input.value = ""
      // input.value = window.innerHeight
      input.focus()
      scroll()
      setTimeout(scroll, 100)
      setTimeout(scroll, 1000)
      evt.preventDefault()
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // Messages.remove({})
  })
}
