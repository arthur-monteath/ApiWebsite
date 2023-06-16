
function getCharacters()
{
    $.get("https://rickandmortyapi.com/api/character", fillCharacters)
}

function fillCharacters(data)
{
    var max = data.info.count;
    var total = 0;

    var jaUsados = []
    for(var i = 1; i<=max; i++)
    {
        jaUsados[i] = false;
    }

    while(total<max)
    {
        var i = getRandomInt(1,max+1)
        if(jaUsados[i] == false)
        {
            total++;
            jaUsados[i] = true;
            $.get(`https://rickandmortyapi.com/api/character/${i}`, createCard)
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function createCard(data)
{
    str = `
    
        <div class="card personagem" style="width: 18rem; height: 40rem; margin-top:2rem">

            <img src="${data.image}" class="card-img-top cardImg" alt="...">

            <div class="card-body d-flex flex-column">

                <h5 class="card-title">${data.name}</h5>

                <b>Genero: </b> <label class="card-text">${data.gender}</label><br>
                <b>Espécie: </b> <label class="card-text">${data.species}</label><br>
                <b>Status: </b> <label class="card-text">${data.status}</label><br>
                <br>
                <a href="#" class="btn btn-primary mt-auto">Ver mais detalhes</a>
            </div>
        </div>
        <div class="col"></div>
    </div>`

    $(".tst").append(str);
}
























function getLocations()
{
    $.get("https://rickandmortyapi.com/api/location", fillLocations)
}

var ordem = []

function fillLocations(data)
{   
    for(var o = 0; o<=126; o++)
    {
        ordem[o] = []
    }

    var max = data.info.count;
    var total = 0;

    var jaUsados = []
    for(var i = 1; i<=max; i++)
    {
        jaUsados[i] = false;
    }

    while(total<max)
    {
        var i = getRandomInt(1,max+1)
        if(jaUsados[i] == false)
        {
            total++;
            jaUsados[i] = true;
            $.get(`https://rickandmortyapi.com/api/location/${i}`, createCardLocation)
        }
    }
}

var id = 0;
var cleanup = 0;

function createCardLocation(data)
{
    str = `
    
        <div class="card personagem" style="width: 18rem; margin-top:2rem">

            <img src="https://placehold.co/300x300" class="card-img-top cardImg" alt="...">

            <div class="card-body d-flex flex-column">

                <h5 class="card-title">${data.name}</h5>

                <b>Dimensão: </b> <label class="card-text">${data.dimension}</label><br>
                <b>Tipo: </b> <label class="card-text">${data.type}</label><br>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse${data.id}" role="button" aria-expanded="false" aria-controls="collapse${data.id}">Residentes</a><br>
                <div class="collapse" id="collapse${data.id}">
                <div>
                    <ul id="lista${data.id}">
                    </ul>
                </div>
                </div>
                <br>
                <a href="#" class="btn btn-primary mt-auto">Ver mais detalhes</a>
                </div>
            </div>
            <div class="col"></div>
        </div>`

    $(".tst").append(str);
    
    array = data.residents

    ordem[id][0] = data.id
    ordem[id][1] = array.length
    id++

    for(var i = 0; i<array.length; i++)
    {
        $.get(data.residents[i], getName);
    }
}

var atual = 0
var atual2 = 0

function getName(data)
{
    console.log("foi")

    var nome = "ninguém";

    nome = data.name;

    // var str = `<li><a id="show" onclick="showpopup(${data})">${nome}</a></li>`;
    var str = `<li><a id="show" onclick="showpop(${data.id})">${nome}</a></li>`;

    $(`#lista${ordem[atual][0]}`).append(str);

    if(atual2 < ordem[atual][1])
    {
        atual2++
    }
    else
    {
        atual2 = 0
        atual++
    }
}


// POPUP LIGHTBOX

function showpop(i)
{
    console.log("a")
    $.get(`https://rickandmortyapi.com/api/character/${i}`, showpopup)
}

function showpopup(data)
{
    $("div.popup").show();

    str = `
    
        <div class="card personagem pop-content" style="width: 18rem; height: 40rem; margin-top:2rem">

            <img src="${data.image}" class="card-img-top cardImg" alt="...">

            <div class="card-body d-flex flex-column">

                <h5 class="card-title">${data.name}</h5>

                <b>Genero: </b> <label class="card-text">${data.gender}</label><br>
                <b>Espécie: </b> <label class="card-text">${data.species}</label><br>
                <b>Status: </b> <label class="card-text">${data.status}</label><br>
                <br>
                <a href="#" class="btn btn-primary mt-auto">Ver mais detalhes</a>
            </div>
        </div>
        <div class="col"></div>
    </div>`

    $("div.pop-content").replaceWith(str);
}

function hidepopup()
{
    $("div.popup").hide();
}