
function getCharacters()
{
    $.get("https://rickandmortyapi.com/api/character", fillCharacters)
}

function fillCharacters(data)
{
    for(var i = 1; i<=data.info.count; i++)
    {
        $.get(`https://rickandmortyapi.com/api/character/${i}`, createCard)
    }
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

function fillLocations(data)
{
    for(var i = 1; i<=data.info.count; i++)
    {
        $.get(`https://rickandmortyapi.com/api/location/${i}`, createCardLocation)
    }
}

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
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
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
}