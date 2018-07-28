main.jsz
Javascript
main.js
// document.getElementById('myDiv').style.backgroundColor = 'red';
// document.getElementById('myDiv').height="100";
// alert(document.getElementById('myDiv').innerText);

// document.getElementById("myDiv").innerHTML = "<span></span>";

// function RenkDegistir(){
//     var element = document.getElementById("myDiv");
//     element.style.backgroundColor = "red";
//     element.style.height = "100px"; 
// }

// function DegerGetir(){
//     alert(document.getElementById("txtSayi").value);
// }

// var randomSayi = Math.random();
// Math.floor();
// Math.round();
// alert(randomSayi);

// document.getElementById('myDiv').style.backgroundColor = 'rgb(120,30,50)';

// document.getElementsByTagName('span').length

// var metod = function(){

// }

// metod();


var ogrenciler = [
    {
        ad:'ali',
        soyad:'çokçalışkan',
        yas:20,
        bilgileriyazdir:function(){
            alert(this.ad+" "+this.soyad+" "+this.yas)
        }
    },
    {
        ad:'veli',
        soyad:'çokçalışkan',
        yas:20,
        bilgileriyazdir:function(){
            alert(this.ad+" "+this.soyad+" "+this.yas)
        }
    },
    {
        ad:'selami',
        soyad:'çokçalışkan',
        yas:20,
        bilgileriyazdir:function(){
            alert(this.ad+" "+this.soyad+" "+this.yas)
        }
    }
]





var ogrencileriyukle = function(){
    for(var i = 0; i<ogrenciler.length;i++){
        document.getElementById('ogrenciler').innerHTML += "<article><ul><li>"+ogrenciler[i].ad+"</li><li>"+ogrenciler[i].soyad+"</li><li>"+ogrenciler[i].yas+"</li> </ul></article>";
    }
}




function Deneme(){
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
     alert(JSON.parse(this.responseText).Customers[0].CompanyName);
    //  document.getElementById('ogrenciler').innerHTML(JSON.parse(this.responseText).Customers.length)
    }
  };
  xhttp.open("GET", "http://northwind.servicestack.net/customers.json", true);
  xhttp.send();
}