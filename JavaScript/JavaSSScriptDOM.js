// heart

var hearts = document.getElementsByClassName('fa-heart');
for (const heart of hearts) {
  heart.addEventListener('click', function () {
    heart.classList.toggle("like");})
}

// delete

var supp = document.getElementsByClassName('fa-trash-alt');
for (const supprimer of supp) {
  supprimer.addEventListener('click', function () {
    supprimer.parentNode.parentNode.remove();
    Sum();
    tax();
    check();})
    
}

// minus

var moins = document.querySelectorAll('.fa-minus-square');
for (const moinsitem of moins) {
  moinsitem.addEventListener('click', function () {
      if (moinsitem.nextElementSibling.innerHTML<=0){
          return moinsitem.nextElementSibling.innerHTML===0;
      }
  moinsitem.nextElementSibling.innerHTML--  
  Sum() ;
  tax();
  check();
});
}

// plus

var plusitems = document.querySelectorAll('.fa-plus-square');
for (const plusitem of plusitems) {
  plusitem.addEventListener('click', function () {
    plusitem.previousElementSibling.innerHTML++
    Sum();
    tax();
    check();
});}


// Total

function Sum() {
  var prices =document.getElementsByClassName('price');
var quantités=document.getElementsByClassName('quantité');
  var total=0;
  for (var i=0;i<quantités.length;i++) {
    var quantité=quantités[i].innerHTML;
    console.log(quantité);
    var price= parseFloat(prices[i].innerText.replace('$',''));
    console.log(price);
    total += price * quantité;
  }
  tot=total.toFixed(2)
return document.getElementById('subtotal').innerText = '$' + tot;
tax();
check ();
}

function tax() {
  var x=0;
  var y=parseFloat(document.getElementById('subtotal').innerText.replace('$',''));
  console.log(y);
  x=document.getElementById('tax-included').innerHTML;
  x=2.29 + y;
  var tt=x.toFixed(2);
  return document.getElementById('tax-included').innerHTML=tt;
}

function check() {
  var tt=document.getElementById('tax-included').innerHTML;
  console.log(tt);
  return document.getElementById('check-amt').innerHTML = tt;
  tax();
}

