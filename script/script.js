function realD(){

    const listar = document.querySelector('#geraInputs');


    var conteudo = `
    
    <div class="inputGerado">
        <label for="">Digite o Valor em Real:</label>
        <input type="number" name="" id="inputReal">
        <button id="botaoGer" onclick="transf()">Go</button>
    </div>

`
    const open = document.createElement('p');
    open.classList.add('igualGerado');
    open.innerHTML = conteudo;
    listar.appendChild(open);
  
}

function transf(){
    
    const valorDolar = 5.68;
    const pegaReal = document.querySelector('#inputReal');
    const realInput = pegaReal.value;

    const resultadoEmDolar = realInput * valorDolar;

    const conteudoResultado = `<p class="igualGerado">US$${resultadoEmDolar.toFixed(2)}</p>`;
    const postarRes = document.createElement('p');
    postarRes.innerHTML = conteudoResultado;
    const listarReal = document.querySelector('#geraInputs');
    listarReal.appendChild(postarRes);

}

function dolarD(){
    
    const listar = document.querySelector('#geraInputs');

    const conteudo = `
    
    <div class="inputGerado">
        <label for="">Digite o Valor em Dolar:</label>
        <input type="number" name="" id="inputDolar">
        <button id="botaoGer"onclick="transfD()">Go</button>
    </div>

`
    const open = document.createElement('div');
    open.innerHTML = conteudo;
    listar.appendChild(open);

}

function transfD(){
    
    const valorReal = 0.18;
    const pegaDolar = document.querySelector('#inputDolar');
    const dolarInput = pegaDolar.value;

    const resultadoEmReal = dolarInput * valorReal;

    const conteudoResultado = `<p class="igualGerado">R$${resultadoEmReal.toFixed(2)}</p>`;
    const postarRes = document.createElement('p');
    postarRes.innerHTML = conteudoResultado;
    const listarDolar = document.querySelector('#geraInputs');
    listarDolar.append(postarRes);


}

function deleta1(){
    var elem = document.querySelector('.inputGerado');
    var sub = elem;
    elem.parentNode.removeChild(elem);
}