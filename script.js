async function buscarCEP() {
    const cep = document.getElementById("cep").value;
    const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
    const data = await response.json();

    document.getElementById("resultadoCep").innerHTML =
        `Cidade: ${data.city} - Estado: ${data.state}`;
}

async function buscarCNPJ() {
    const cnpj = document.getElementById("cnpj").value;
    const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
    const data = await response.json();

    document.getElementById("resultadoCnpj").innerHTML =
        `Empresa: ${data.razao_social}`;
}

async function buscarDDD() {
    const ddd = document.getElementById("ddd").value;
    const response = await fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
    const data = await response.json();

    document.getElementById("resultadoDdd").innerHTML =
        `Estado: ${data.state}`;
}