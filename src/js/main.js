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



//////////////////////Carousel//////////////////////


$(document).on('ready', function() {

var images = [
 '1200x500?text=Image%201',
 '1200x500?text=Image%202',
 '1200x500?text=Image%203',
 '1200x500?text=Image%204',
 '1200x500?text=Image%205',
];

images.forEach(function(img, i) {
  var imgURI = "http://placehold.it/" + img;
  console.log(imgURI);
  var imgName = "image-" + (i+1);
  var imgDiv = "<div class= "+imgName+"></div>"
  $(".carousel-images").append(imgDiv);
  $("."+imgName).css("background-image", "url("+imgURI+")");
})
var i = 0;
var current = $('.carousel-images > div');
$('#forward').on('click', imageIterator);
$('#back').on('click', imageBack);

setInterval(imageIterator, 1000);

function imageIterator() {
  $('div').css('z-index', '0');
  $(current[0]).css('z-index', '1');
  if(images.length-1 === i) {
    i = 0;
    current = $('.carousel-images > div');
  } else {
    i++;
    current = current.next();

  }
}

function imageBack() {
  $('div').css('z-index', '0');
  $(current[0]).css('z-index', '1');
  if(images.length-1 === i) {
    i = images.length;
    current = $('.carousel-images > div');
  } else {
    i--;
    current = current.prev();

  }
}

});






