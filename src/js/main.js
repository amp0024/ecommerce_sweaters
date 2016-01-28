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

 '..//src/img/car/car_2.png',
 '..//src/img/car/car_1.png',
];

images.forEach(function(img, i) {
  var imgURI = img;
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

setInterval(imageIterator, 5000);

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

$('#button').on("click", function(){
  var shipInput = $('.shipping')
  var billInput = $('.billing')
  for(var i =0; i<shipInput.length; i++){
        var shipId = shipInput[i].id;
        var billId = billInput[i].id;
        console.log("ship id is : " + shipId);
        console.log("Bill id is:  " + billId);
        getVal(shipId, billId);
  }
})


function getVal(shipping, billing){
  var add1 = $('#' + shipping);
  var add2 = $('#' + billing);
  add2.val(add1.val());

}



//credit card validator

$(document).on('ready', function() {
  Stripe.setPublishableKey('pk_test_X4M8qCjXiLmF5jzHL5tMnSy6');
});

$('.order').on('click', function(){
var cardInfo = {
  number: $('.card-number').val(),
  cvc: $('.card-cvc').val(),
  exp_month: $('.card-expiry').val().split('/')[0],
  exp_year: $('.card-expiry').val().split('/')[1]
};

Stripe.card.createToken(cardInfo, stripeResponseHandler);

});

$('.card-number').on('blur', function(){
  var cardNum = $('.card-number')
  if(!Stripe.card.validateCardNumber(cardNum.val())){
    cardNum.css('border','2px solid #b94a48', 'box-shadow','inset 0 3px 3px');
  }else{
    cardNum.css('border','2px solid #468847', 'box-shadow','inset 0 3px 3px');
  }

});

$('.card-cvc').on('blur', function(){
  var cardC = $('.card-cvc')
  if(!Stripe.card.validateCVC(cardC.val())){
    cardC.css('border','2px solid #b94a48', 'box-shadow','inset 0 3px 3px');
  }else{
    cardC.css('border','2px solid #468847', 'box-shadow','inset 0 3px 3px');
  }

});

$('.card-expiry').on('blur', function(){
  var cardEx = $('.card-expiry')
  if(!Stripe.card.validateExpiry(cardEx.val())){
    cardEx.css('border','2px solid #b94a48', 'box-shadow','inset 0 3px 3px');
  }else{
    cardEx.css('border','2px solid #468847', 'box-shadow','inset 0 3px 3px');
  }

});

function stripeResponseHandler(status, response){
  if (response.error){
    console.log(response.error.message);
  }else{
    console.log(response);
  }
}

/////////////////////email validator//////////////////

function ValidateEmail(mail)   {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(mail.match(mailFormat)) {
    return (true);
  }
    return (false);
}



$('.email').on('blur', function() {
  console.log('blur');
  var customerEmail = $('.email')
  if(!ValidateEmail(customerEmail.val())) {
    customerEmail.css('border','2px solid #b94a48', 'box-shadow','inset 0 3px 3px');
  }else{
    customerEmail.css('border','2px solid #468847', 'box-shadow','inset 0 3px 3px');
  }
});






