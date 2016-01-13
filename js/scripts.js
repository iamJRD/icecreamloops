$(document).ready(function() {
  var flavors = ['vanilla', 'mint chocolatechip', 'strawberry', 'cookie dough'];

  $("h1").click(function() {
    flavors.forEach(function(flavor) {
      $("ul").append("<li>" + flavor + "</li>");
    });
  });
});
