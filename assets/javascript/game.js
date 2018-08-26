$( document ).ready(function(){
    var computerGuess=Math.floor(Math.random()*101+19)
    
    $('#computerGuess').text(computerGuess);
   
    var crys1= Math.floor(Math.random()*11+1)
    var crys2= Math.floor(Math.random()*11+1)
    var crys3= Math.floor(Math.random()*11+1)
    var crys4= Math.floor(Math.random()*11+1)
    var totalScore= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#wins').text(wins);
  $('#losses').text(losses);
  function reset(){
    var computerGuess=Math.floor(Math.random()*101+19);
        console.log(computerGuess)
        $('#computerGuess').text(computerGuess);
        crys1= Math.floor(Math.random()*11+1);
        crys2= Math.floor(Math.random()*11+1);
        crys3= Math.floor(Math.random()*11+1);
        crys4= Math.floor(Math.random()*11+1);
        $('#totalScore').text(totalScore);
        } 

  function yay(){
  alert("You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  function loser(){
  alert ("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
 
    $('#crys1').on ('click', function(){
        totalScore = totalScore + crys1;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text(totalScore); 
          if (totalScore == computerGuess){
            yay();
          }
          else if ( totalScore > computerGuess){
            loser();
          }   
    })  
    $('#crys2').on ('click', function(){
        totalScore = totalScore + crys2;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text(totalScore); 
          if (totalScore == computerGuess){
            yay();
          }
          else if ( totalScore > computerGuess){
            loser();
          } 
    })  
    $('#crys3').on ('click', function(){
      totalScore = totalScore + crys3;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text(totalScore);
            if (totalScore == computerGuess){
            yay();
          }
          else if ( totalScore > computerGuess){
            loser();
          } 
    })  
    $('#crys4').on ('click', function(){
      totalScore = totalScore + crys4;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text(totalScore);        
            if (totalScore == computerGuess){
            yay();
          }
          else if ( totalScore > computerGuess){
            loser();
          }
    });   
  }); 