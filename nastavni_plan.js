if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready(){
    autocompleteFunctionality();

}

function removeRowItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove()
    updateTotal()
}



function UpdateTotal(){
    var ectsElemets = document.getElementsByClassName('ects');
    var satiElements = document.getElementsByClassName('sati');
    var totalEtcsElement = document.getElementsByClassName('ukupni-etcs')
    var totalSatiElement = document.getElementsByClassName('ukupno-sati')

    var totalEcts = 0;
    var totalSati = 0;

    if(ectsElemets.length === 0 && satiElements.length ===0){
        totalEtcsElement[0].innerText = 0;
        totalSatiElement[0].innerText = 0;
    }
    else{

        for(var i = 0; i < ectsElemets.length; i++){
            totalEcts += parseInt(ectsElemets[i].innerHTML);
    
            
        }
    
        for(var i = 0; i < satiElements.length; i++){
            totalSati += parseInt(satiElements[i].innerHTML);
        }
    
        totalEtcsElement[0].innerText = totalEcts;
        totalSatiElement[0].innerText = totalSati;
    }


}



function autocompleteFunctionality(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'http://www.fulek.com/VUA/SUPIT/GetNastavniPlan')
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            showTableData(JSON.parse(xhr.responseText));
        }
    };

    xhr.send();

    function showTableData(data){
        $("#nazivKolegija").autocomplete({
            source: data,
            autoFocus: true,
            select: function( event, ui ) {
                var itemId = ui.item.value
                var urlString = "http://www.fulek.com/VUA/supit/GetKolegij/" + itemId;

                var xhrItem = new XMLHttpRequest();
                xhrItem.open('get', urlString)
                xhrItem.onreadystatechange = function() {
                    if (xhrItem.readyState === XMLHttpRequest.DONE) {
                        InsertIntoTable(JSON.parse(xhrItem.responseText));
                    }

                    var removeButtons = document.getElementsByClassName('btn-decline')

                    
                    for(var i = 0; i < removeButtons.length; i++){
                        removeButtons[i].addEventListener('click', function () {
                            
                            this.parentElement.parentElement.remove();
                            //var buttonClicked = event.target;
                            //buttonClicked.parentElement.remove()
                    
                            UpdateTotal();
                        })
                        //console.log('event je dodan');
                    }
                };

                xhrItem.send();

                function InsertIntoTable(data){
                    const tbl = document.querySelector('tbody');
                    tbl.innerHTML += `
                        <tr class="table-content">
                            <th>${data.kolegij}</th>
                            <th class="ects">${data.ects}</th>
                            <th class="sati">${data.sati}</th>
                            <th>${data.predavanja}</th>
                            <th>${data.vjezbe}</th>
                            <th>${data.tip}</th>
                            <th><input type="button" class="btn btn-decline" value="Obriši"></th>
                        </tr>`;


                    UpdateTotal();
                }
                $(this).val('');
                return false;
            }
        });
    }
}