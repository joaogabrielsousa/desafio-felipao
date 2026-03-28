let nome = "xandão"
let experiencia = 7.980
let nivel = ""

switch (true) {
    case experiencia <= 1.000:
        nivel = "Ferro"
        console.log(`O seu Herói de nome ${nome} está no nivel de ${nivel}`)
        break

    case (experiencia == 1.001) || (experiencia <= 2.000):
        nivel = "Bronze"
        console.log(`O seu Herói de nome ${nome} está no nivel de ${nivel}`)
        break

    case (experiencia == 2.001) || (experiencia <= 6.000):
        nivel = "Prata"
        console.log(`O seu Herói de nome ${nome} está no nivel de ${nivel}`)
        break
    
    case (experiencia == 6.001) || (experiencia <= 8.000):
        nivel = "Platina Diamante"
        console.log(`O seu Herói de nome ${nome} está no nivel de ${nivel}`)
        break
        
    case (experiencia == 8.001) || (experiencia <= 9.000):
        nivel = "Ascedente"
        console.log(`O seu Herói de nome ${nome} está no nivel de ${nivel}`)
        break

    case (experiencia == 9.001) || (experiencia <= 10.000):
        nivel = "Imortal"
        console.log(`O seu Herói de nome ${nome} está no nivel de ${nivel}`)
        break

    case experiencia >= 10.001:
        nivel = "Radiante"
        console.log(`O seu Herói de nome ${nome} está no nivel de ${nivel}`)
        break

    default: 
    nivel = "Café com leite"
    console.log(`Desculpa, ocorreu um erro ao verificar seu nivel. Você será nivel ${nivel} por tempo indeterminado!`)
}