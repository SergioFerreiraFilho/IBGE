fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes?orderBy=nome')
.then((resposta)=> resposta.json())
.then((regioes) => {
    regioes.forEach( (cadaRegiao) => {
        document.getElementById('regiao').innerHTML += `
        <option value ="${cadaRegiao.id}">${cadaRegiao.nome}</option>`
    })
} );


function buscarEstado(){
document.getElementById('estado').innerHTML = `
<option>-- Selecione-- </option>`
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao.value}/estados?orderBy=nome`)
.then((resposta)=> resposta.json())
.then((estado) => {
    estado.forEach((cadaUF) => {
        document.getElementById('estado').innerHTML += `
        <option value ="${cadaUF.id}">${cadaUF.nome}</option>`
    })
} );

}

function buscarCidade(){
    document.getElementById('cidade').innerHTML = `
    <option>-- Selecione --</option>`
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.value}/distritos?orderBy=nome`)
    .then((resposta)=> resposta.json())
    .then((cidade) => {
        cidade.forEach((cadaCidade) => {
            document.getElementById('cidade').innerHTML += `
            <option value ="${cadaCidade.id}">${cadaCidade.nome}</option>`
        })
    } );
    
    }
    

