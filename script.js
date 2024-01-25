function playRockPaperScissor(player1, player2){
    if(player1 == "Pedra" && player2 == "Pedra"){
        console.log("Empate!")
        return "Empate!"
    }
    else if(player1 == "Pedra" &&  player2 == "Tesoura"){
        console.log("Jogador 1 venceu!")
        return "Jogador 1 venceu!"
    }  
    else if(player1 == "Pedra" && player2 == "Papel"){
         console.log("Jogador 2 venceu!")
         return "Jogador 2 venceu!"
    }    
    else if(player1 == "Papel" &&  player2 == "Papel"){    console.log("Empate!")
         return "Empate!"
    }
    else if(player1 == "Papel" && player2 == "Pedra"){
        console.log("Jogador 1 venceu!")
        return "Jogador 1 venceu!"
    }
    else if(player1 == "Papel" && player2 == "Tesoura"){
        console.log("Jogador 2 venceu!")
        return "Jogador 2 venceu!"
    }

    else if(player1 == "Tesoura" && player2 == "Tesoura"){
        console.log("Empate!")
        return "Empate!"
    }   
    } 
    

const resultado = playRockPaperScissor("Pedra", "Papel");
console.log(resultado)


 
  
    
