$(document).ready(function () {
    $.get("/assets/drink-menu.json", function (data) {
        console.log(data);
        for (let i=0; i<data.length; i++){
            let card = 
            `
                <div class="col pt-4" >
                    <div class="card text-start ">
                        <img src="${data[i].image}" >
                        <div class="card-body">
                            <h5 class="card-title fw-bold fs-4">${data[i].name}</h5>
                            <a href="#" class="btn btn-success fw-bold fs-5 py-0 px-2">${data[i].type}</a>
                            <p class="card-text fw-bold fs-6 py-2">${data[i].price}</p>
                        </div>
                    </div>
                </div>
            `
            $("#drink-menu").append(card);
        }
    }).fail(function (error) {
        console.log(error);
        let warning = `<div class="alert alert-danger text-start m-2" style="width: 60%">Fail to fetch drink menu. Please try again later.</div>`
        $("#drink-menu").append(warning);
    });
   });