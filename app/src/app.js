//Add cards no html
let jsonData = '[{"Nome":"Ana","Imagem":"img/img1.jpg"},{"Nome":"Aninha","Imagem":"img/img2.jpg"},{"Nome":"Teste","Imagem":"img/img3.jpg"},{"Nome":"Outra","Imagem":"img/img4.jpg"}, {"Nome":"Outra","Imagem":"img/img4.jpg"}, {"Nome":"Outra","Imagem":"img/img4.jpg"}, {"Nome":"Outra","Imagem":"img/img1.jpg"}, {"Nome":"Outra","Imagem":"img/img3.jpg"}, {"Nome":"Outra","Imagem":"img/img2.jpg"}, {"Nome":"Outra","Imagem":"img/img4.jpg"}]';
let htmlTemplate = '<div class="card pull-left"><div class="box-image pull-left">' +
    '<img src="{1}" alt="Imagem" title="Descrição" />' +
    '<a class="pull-right icon" href="javascript:;">' +
    '<i class="fa fa-trash" onclick="deleteCard({2})" title="Excluir Card"></i>' +
    '</a>' +
    '<a class="pull-right icon" href="javascript:;">' +
    ' <i class="fa fa-plus-square-o" onclick="addCard({3})" title="Duplicar Card"></i>' +
    '</a>' +
    '</div>' +
    '<div class="description pull-left">' +
    '<img src="img/ft1.jpg" alt="foto" class="circle pull-left" title="foto" />' +
    '<h6 class="blue">{0}</h6>' +
    '</div>' +
    '</div>';

let newHtml = '';
let container;
let tempContainer;

data = JSON.parse(jsonData);

let addCards = function() {
    document.getElementById('cards').innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        newHtml = htmlTemplate.replace('{0}', data[i].Nome).replace('{1}', data[i].Imagem).replace('{2}', i).replace('{3}', i)

        tempContainer = document.createElement('div');
        tempContainer.innerHTML = newHtml;

        container = document.getElementById('cards');
        container.appendChild(tempContainer);
    }
};
document.addEventListener('DOMContentLoaded', addCards, false);

//Remove um Card
function deleteCard(elem) {
    //alert(elem);
    data.splice(elem, 1);
    addCards();

}

//Add um Card
function addCard(elem) {
    //alert(elem);
    data.push({ Nome: data[elem].Nome, Imagem: data[elem].Imagem });
    addCards();
}

//Btn Remover todos os cards
document.getElementById("removeAll").onclick = function() {
    document.getElementById('cards').remove();
};