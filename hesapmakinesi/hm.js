var sayi1 = 0;
var sayi2 = 0;
var ustkisim = document.getElementById("ustkisim");
var islemturu = "";
var toplam = 0 ;


function bir(){
    var ustislem = ustkisim.innerText;
    if(ustislem.includes("+") || ustislem.includes("-") || ustislem.includes("x") || ustislem.includes("÷") ){
        ustkisim.innerHTML="";
    }
        ustkisim.innerText+="1";
    }
function iki(){
    var ustislem = ustkisim.innerText;
    if(ustislem.includes("+") || ustislem.includes("-") || ustislem.includes("x") || ustislem.includes("÷") ){
        ustkisim.innerHTML="";
    }
        ustkisim.innerText+="2";
    }
function uc(){
    var ustislem = ustkisim.innerText;
    if(ustislem.includes("+") || ustislem.includes("-") || ustislem.includes("x") || ustislem.includes("÷") ){
        ustkisim.innerHTML="";
    }
        ustkisim.innerText+="3";
    }
function dort(){
    var ustislem = ustkisim.innerText;
    if(ustislem.includes("+") || ustislem.includes("-") || ustislem.includes("x") || ustislem.includes("÷") ){
        ustkisim.innerHTML="";
    }
        ustkisim.innerText+="4";
    }
function bes(){
    var ustislem = ustkisim.innerText;
    if(ustislem.includes("+") || ustislem.includes("-") || ustislem.includes("x") || ustislem.includes("÷") ){
        ustkisim.innerHTML="";
    }
        ustkisim.innerText+="5";
    }
function alti(){
    var ustislem = ustkisim.innerText;
    if(ustislem.includes("+") || ustislem.includes("-") || ustislem.includes("x") || ustislem.includes("÷") ){
        ustkisim.innerHTML="";
    }
        ustkisim.innerText+="6";
    }
function yedi(){
    var ustislem = ustkisim.innerText;
    if(ustislem.includes("+") || ustislem.includes("-") || ustislem.includes("x") || ustislem.includes("÷") ){
        ustkisim.innerHTML="";
    }
        ustkisim.innerText+="7";
    }
function sekiz(){
    var ustislem = ustkisim.innerText;
    if(ustislem.includes("+") || ustislem.includes("-") || ustislem.includes("x") || ustislem.includes("÷") ){
        ustkisim.innerHTML="";
    }
        ustkisim.innerText+="8";
    }
function dokuz(){
    var ustislem = ustkisim.innerText;
    if(ustislem.includes("+") || ustislem.includes("-") || ustislem.includes("x") || ustislem.includes("÷") ){
        ustkisim.innerHTML="";
    }
        ustkisim.innerText+="9";
    }
function sifir(){
    var ustislem = ustkisim.innerText;
    if(ustislem.includes("+") || ustislem.includes("-") || ustislem.includes("x") || ustislem.includes("÷") ){
        ustkisim.innerHTML="";
    }
        ustkisim.innerText+="0";
    }

function arti(){
    sayi1 += Number(ustkisim.innerHTML);
        ustkisim.innerHTML="+";
        islemturu = "+";

        
        
    }
    
function eksi(){
        sayi1 += Number(ustkisim.innerHTML);
            ustkisim.innerHTML="-";
            islemturu = "-";
            
            
            
        }
function carpi(){
            sayi1 += Number(ustkisim.innerHTML);
                ustkisim.innerHTML="x";
                islemturu = "x";
                
                
                
            }
function bolu(){
                sayi1 += Number(ustkisim.innerHTML);
                    ustkisim.innerHTML="÷";
                    islemturu = "÷";
                    
                    
                    
                }

function temizle(){
    ustkisim.innerHTML="";
    sayi1 = 0;
    sayi2 = 0;
}
function hesapla(){
    sayi2 = Number(ustkisim.innerHTML);
    if(islemturu.includes("+")){
        toplam = sayi1 + sayi2;
    ustkisim.innerHTML=toplam;
    }
    if(islemturu.includes("-")){
        toplam = sayi1 - sayi2;
    ustkisim.innerHTML=toplam;}
    if(islemturu.includes("x")){
        toplam = sayi1 * sayi2;
    ustkisim.innerHTML=toplam;}
    if(islemturu.includes("÷")){
        toplam = (sayi1 / sayi2).toFixed(10);
    ustkisim.innerHTML=toplam;
    }
    if(sayi1 == 0 || sayi2 == 0){
        alert("İşlem Yapınız")
        ustkisim.innerHTML="";
    }
    sayi1 = 0;
    sayi2 = 0;

}