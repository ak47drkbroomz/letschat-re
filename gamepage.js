    var y = Math.floor(Math.random() * 10 + 1);
    var x = document.getElementById("guessField").value;
    if (x == y){
        alert("Congratulations!"+playernane+"you gaussed it right in"+guess+"guess")
    }
    
    else if(x > y)
    {
        guess ++;
        alert("Opps sorry!! try a smaller number");
    
    }
     else
     {
        guess ++;
        alert("Opps sorry!! try a greater number");
    
     } 
    function playAgain(){
        y = Math.floor(Math.random() * 10 + 1);
    }
