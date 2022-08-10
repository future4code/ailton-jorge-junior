const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (operacao) {
    case "add":
        console.log(`O resultad da soma é${num1+num2}`)
        break;
    case "sub":
        console.log(`O resultado da subtração é ${num1-num2}`)
        break;
    case "mul":
        console.log(`O resultado da muitiplicação é ${num1*num2}`)
        break;
    case "div":
        console.log(`O resultado da divisão é ${num1/num2}`)
        break;
    default:
        console.log("Opreação inválida")
        break;
}