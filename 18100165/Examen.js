var cuerpo = document.getElementById('cont');
var h1 = document.getElementById('h1');
var h2 = document.getElementById('h2');
var date = document.getElementById('fecha');
var h3 = document.getElementById('h3');
cuerpo.onclick = function() {
    
}
function randomColor(){
    var blue =  Math.random() * (0 - 255);
    var red =  Math.random() * (0 - 255);
    var green =  Math.random() * (0 - 255);
    return `#E8347D`
}

date.onchange = function(d) {
    var nfecha = d.target.value;
    h1.innerHTML = `${nfecha}`;
    h3.innerHTML = nfecha.toString();
}


