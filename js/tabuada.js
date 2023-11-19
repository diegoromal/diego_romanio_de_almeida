function gerarResultado() {
    document.getElementById("tabelaTabuada").innerHTML = "";

    let numero = document.getElementById("numero").value;

    if (numero !== "") {
        let tabela = document.getElementById("tabelaTabuada");
        let cabecalho = tabela.createTHead();
        let linhaCabecalho = cabecalho.insertRow();
        let thFatores = document.createElement("th");
        thFatores.innerHTML = "Fatores";
        linhaCabecalho.appendChild(thFatores);
        let thProdutos = document.createElement("th");
        thProdutos.innerHTML = "Produtos";
        linhaCabecalho.appendChild(thProdutos);

        for (let i = 1; i <= 10; i++) {
            let linha = tabela.insertRow();
            let celulaFatores = linha.insertCell(0);
            celulaFatores.innerHTML = numero + " x " + i;
            let celulaProdutos = linha.insertCell(1);
            celulaProdutos.innerHTML = numero * i;
        }

        const tt = document.querySelector("main table");
        tt.style.margin = "20px auto";
        tt.style.borderCollapse = "collapse";

        const th = document.querySelectorAll("th");
        th.forEach((res) => {
            res.style.margin = "5px";
            res.style.padding = "10px";
            res.style.border = "1px solid #bbb";
        });
        const td = document.querySelectorAll("td");
        td.forEach((res) => {
            res.style.margin = "5px";
            res.style.padding = "10px";
            res.style.border = "1px solid #bbb";
        });
    } else {
        alert("Por favor, digite um número válido");
    }
}
