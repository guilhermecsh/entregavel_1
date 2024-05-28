
function calc(num1, num2, operador){
    let resultado
    let numero1 = parseInt(num1)
    let numero2 = parseInt(num2)
    switch (operador){
        case "+":
        console.log("Estou na função somar")
        console.log("o resultado de " + num1 + "+" + num2 + " é igual a: " + (num1 + num2))
        break;

        case "-":
        console.log("Estou na função subtrair")
        console.log("o resultado de " + num1 + "-" + num2 + " é igual a: " + (num1 - num2))
        break;

        case "*":
        console.log("Estou na função multiplicar")
        console.log("o resultado de " + num1 + "x" + num2 + " é igual a: " + (num1 * num2))
        break;

        case "/":
        console.log("Estou na função dividir")
        console.log("o resultado de " + num1 + "/" + num2 + " é igual a: " + (num1 / num2))
        break;

        case "e":
            console.log("Estou na função exponencial")
        let contador = 1
        resultado = num1 * num1
        while (contador < num2 - 1){
            resultado = resultado * num1
            contador++
        }
        break;
         }

    if (resultado == undefined || resultado > 1000000)
        resultado = "ERRO"
    return resultado
}