function createOpition() {
    let arrayEstados = ['Acre','Alagoas','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rondônia','Rondônia','Santa Catarina','São Paulo','Sergipe','Tocantins'];

    let recoveryEstados = document.getElementById('estados');
   
    for(let index = 0; index< arrayEstados.length; index += 1){
        let opEstado =arrayEstados[index];
        let op = document.createElement('option');
        op.innerText = opEstado;
        recoveryEstados.appendChild(op);
    }   
}
    
function checkData(data) {
    let recoreyData = document.querySelector('.data');
    alert('opa');
    // if(recoreyData === ''){
    //     alert('Preencha o campo com a data');
    // }
}

let btn1 = document.querySelector('.button1');
btn1.addEventListener('click',checkData);

createOpition();
checkData(recoreyData);