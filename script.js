function playRockPaperScissor(player1, player2){
     if(player1 == "Pedra" && player2 == "Tesoura" || player1 == "Papel" && player2 == "Pedra" || player1 == "Tesoura" && player2 == "Papel" ){
        console.log("Jogador 1 venceu!")
        return "Jogador 1 venceu!"
     }else if(player1 == "Pedra" && player2 == "Papel" || player1 == "Papel" && player2 == "Tesoura" || player1 == "Tesoura" && player2 == "Pedra"){ 
        console.log("Jogador 2 venceu!")
        return "Jogador 2 venceu!"
     } else if(player1 == "Pedra" && player2 == "Pedra" || player1 == "Papel" && player2 == "Papel" || player1 == "Tesoura" && player2 == "Tesoura"){
        console.log("Empate!")
        return "Empate!"
     }
}
