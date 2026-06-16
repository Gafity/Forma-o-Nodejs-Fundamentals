class PersonagemKart{
    nome;
    velocidade;
    manobrabilidade;
    poder;
    pontos;
    constructor(nome, velocidade, manobrabilidade, poder, pontos){
        this.nome = nome
        this.velocidade = velocidade 
        this.manobrabilidade = manobrabilidade
        this.poder = poder
        this.pontos = pontos
    }
    
    // Metodo para rolar os dados
    async rollDice(){
        return Math.floor(Math.random() * 7)
    }
}

async function getRandomBlock(){
    let random = Math.random()
    let result

    switch (true) {
        case random <= 0.33:
            result = "Reta"
            break;
        
        case random < 0.66:
            result = "Curva"
            break;
        default:
            result = "Confronto"
            break;
    }

    return result 
}

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} rolou um dado de ${block} e tirou ${diceResult}\nreultado => ${attribute} + ${diceResult} = ${attribute + diceResult}`)
}

const listPlayer = {
    mario: new PersonagemKart("Mario", 4, 3, 3),
    Peach: new PersonagemKart("Peach", 3, 4, 2),
    Yoshi: new PersonagemKart("Yoshi", 2, 4, 3),
    Browser: new PersonagemKart("Browser", 5, 2, 5),
    Luigi: new PersonagemKart("Luigi", 3, 4, 4),
    DonkeyKong: new PersonagemKart("Donkey Kong", 2, 2, 5),

}

async function playRaceEngine(player1, player2){
    for(let round = 1; round <= 5; round++){
        console.log(`${emoji.bandeiraCorrida} Rodada ${round}`)

        
        // sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco ${block}`)

        // rolar dados 
        let diceResultP1 = await player1.rollDice()
        let diceResultP2 = await player2.rollDice()

        // teste de habilidade
        let totalTesteSkillP1 = 0
        let totalTesteSkillP2 = 0

        if (block === "Reta") {
            totalTesteSkillP1 = diceResultP1 + player1.velocidade
            totalTesteSkillP2 = diceResultP2 + player2.velocidade

            await logRollResult(player1.nome, "velocidade", diceResultP1, player1.velocidade)
            await logRollResult(player2.nome, "velocidade", diceResultP2, player2.velocidade)
        }else if(block === "Curva"){
            totalTesteSkillP1 = diceResultP1 + player1.manobrabilidade
            totalTesteSkillP2 = diceResultP2 + player2.manobrabilidade
            
            await logRollResult(player1.nome, "Manobrabilidade", diceResultP1, player1.manobrabilidade)
            
            await logRollResult(player2.nome, "Manobrabilidade", diceResultP2, player2.manobrabilidade)
            
        }else{
            totalTesteSkillP1 = diceResultP1 + player1.poder
            totalTesteSkillP2 = diceResultP2 + player2.poder
            
            await logRollResult(player1.nome, "Poder", diceResultP1, player1.poder)
            await logRollResult(player2.nome, "Poder", diceResultP2, player2.poder)
        }
    }

    try {
        if(round === 5){
            if (player1.pontos > player2.pontos) {
                console.log(`${player1.nome} venceu!`)
                
            } else {
                console.log(`${player2.nome} venceu!`)
                
            }
        }
    if (totalTesteSkillP1 > totalTesteSkillP2) {
        player1.pontos++

    } else if(totalTesteSkillP1 < totalTesteSkillP2){
        player2.pontos++
        
    } else {
        console.log()
     }
    
    } catch (error) {
            if (player1.pontos > player2.pontos) {
                console.log(`${player1.nome} venceu!`)
                
            } else {
                console.log(`${player2.nome} venceu!`)
                
            }
        }
    }


const emoji = {
    bandeiraCorrida: "\u{1F3C1}",  
    sirene: "\u{1F6A8}",           
    carro: "\u{1F3CE}\u{FE0F}",     
    fumaca: "\u{1F4A8}"             
};
(async function main(){
    console.log`${emoji.bandeiraCorrida} ${emoji.sirene} a corrida de Mario e Luigi começando`
    await playRaceEngine(listPlayer.Luigi, listPlayer.Peach)
    
})()
