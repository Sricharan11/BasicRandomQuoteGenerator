var a, b ,c  ;
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var button = document.getElementById('button');
function randomColors(){
  var hex = "0123456789ABCDEF";
  var color = '#';
  for(var i = 0;i<6;i++){
    color += hex.charAt(Math.floor(Math.random() * 16));
  }
  return color;
}
console.log(randomColors());
button.addEventListener('click',function(e){
 quote.textContent = "";
 author.textContent="";
  a = Math.floor(Math.random() * 20);
 b = document.createTextNode(obj[a][0]);
 c = document.createTextNode(obj[a][1]);
  quote.appendChild(b);
  author.appendChild(c);
  quote.style.color = document.body.style.backgroundColor = randomColors();
});
