let name = prompt("Lütfen Adınızı giriniz");

let info = document.querySelector("#myName");
info.innerHTML = `${name}`

function zaman() {
    let anlık = new Date();
    // saati çektik
    let saat = anlık.getHours();
    // dakikayı çektik 
    let dakika = anlık.getMinutes();
    // saniyeyi çektik
    let saniye = anlık.getSeconds();
    // güne ekstra zaman
    var d = new Date();
    // günleri ekledik
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    // id tanımmladık
    let goruntule = document.querySelector("#myClock")
        // burda oluşturduğumuz değerleri ekrana yazdırıyoruz
    goruntule.innerHTML = saat + ":" + dakika + ":" + saniye + " " + gunler[d.getDay()];
}
let simdi = setInterval(zaman, 100);