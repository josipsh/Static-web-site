if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){

    var btnKontakt = document.getElementsByClassName("kontakt-link")[0];
    var kontaktForm = document.getElementsByClassName("contact-show");
    var iframeTmp = document.getElementById("contact-show-iframe");
    var btnOdustani;
    var btnOdustani_2 = iframeTmp.contentWindow.document.getElementsByClassName("btn-cancel");
    // console.log(btnOdustani);
    // console.log(btnOdustani_2);


    btnKontakt.addEventListener('click', function(){ 
        kontaktForm[0].style.display = "block";
        console.log(kontaktForm[0].style.display);
        //console.log("Kliknuo");
        btnOdustani = iframeTmp.contentWindow.document.getElementsByClassName("btn-cancel")[0];
        btnOdustani.addEventListener('click', function(){
            kontaktForm[0].style.display = "none";
            //console.log("odustani kliknut");
        });
    });
    
    
}
