// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

$(".animal").on('click', function(){
  $(".anim").removeClass("remove");
  $(".anim:not(."+ this.id + ")").addClass("remove");
  $(".animal:parent").removeClass("active");
  $(".animal").parent().removeClass("active");
  $("#" + this.id).parent().addClass("active");
})

$(".color").on('click', function(){
  $(".anim").removeClass("removeColor");
  $(".anim:not(."+ this.id + ")").addClass("removeColor");
  $(".color:parent").removeClass("active");
  $(".color").parent().removeClass("active");
  $("#" + this.id).parent().addClass("active");
})

$(".occasion").on('click', function(){
  $(".anim").removeClass("removeOccasion");
  $(".anim:not(."+ this.id + ")").addClass("removeOccasion");
  $(".occasion:parent").removeClass("active");
  $(".occasion").parent().removeClass("active");
  $("#" + this.id).parent().addClass("active");
})

$("#allAnimals").on('click', function(){
  $(".anim").removeClass("remove");
})

$("#allColors").on('click', function(){
  $(".anim").removeClass("removeColor");
})

$("#allOccasions").on('click', function(){
  $(".anim").removeClass("removeOccasion");
})