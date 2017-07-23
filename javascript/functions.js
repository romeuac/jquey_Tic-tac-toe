// Por Tag
function exibirElementoTag(Tag){
    $(Tag).show();
}

function ocultarElementoTag(Tag){
    $(Tag).hide();
}

// Por Classe
function exibirElementoClasse(classe){
    $('.'+classe).show();
}

function ocultarElementoClasse(classe){
    $('.'+classe).hide();
}


// Por IDs
function exibirElementoId(id){
    $('#'+id).show();
}

function ocultarElementoId(id){
    $('#'+id).hide();
}


// Teste
function clicar() {
    alert('Elemento clicado');
}
