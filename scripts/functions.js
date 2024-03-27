function digitarValor(valor) {
    const valorDisplay = document.getElementById("display");
    valorDisplay.value = valorDisplay.value === "0" ? valor : valorDisplay.value + valor;
}

function imprimirMsg(texto) {
    alert('Você clicou no botão ' + texto);
}

function calcular() {
    const conta = document.getElementById("display").value;
    let resultado;

    if (conta.includes("/")) {
        const numeros = conta.split("/");
        resultado = parseInt(numeros[0]) / parseInt(numeros[1]);
    } else if (conta.includes("-")) {
        const numeros = conta.split("-");
        resultado = parseInt(numeros[0]) - parseInt(numeros[1]);
    } else if (conta.includes("+")) {
        const numeros = conta.split("+");
        resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
    } else if (conta.includes("x")) {
        const numeros = conta.split("x");
        resultado = parseInt(numeros[0]) * parseInt(numeros[1]);
    }

    if (resultado !== undefined) {
        document.getElementById("display").value = resultado;
    }
}

function zerar() {
    document.getElementById("display").value = "0";
}

function login() {
    const emailCorreto = "luciano@gmail.com";
    const senhaCorreta = "senha";
    
    var email = document.getElementById("email").value;
    var senha = document.getElementById("pwd").value;

    if(email == emailCorreto){        
        if(senha == senhaCorreta){

            alert("E-mail e senha corretos");
            window.location.href = "../index.html";

        } else {
            alert("Senha incorreta.");
        }

    } else {
        alert("E-mail incorreto");
    }
}
