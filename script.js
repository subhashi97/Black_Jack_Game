function main(){
    let confirm = document.getElementById('mainResult').innerHTML;

    if(confirm == "You Lost !")
    {
        alert("Please Restart the game");
    }
    else
    {

        let x ;
        do{
        x = Math.floor(Math.random()* 100 / 7.6);  // we have 13 cards 100/13 = 7.6 
        }while(x== 0);

        let currentTotal =  parseInt(document.getElementById('result').innerHTML);
        let total = currentTotal + x;
        document.getElementById('result').innerHTML = total;


        if(total < 21){
            document.getElementById('mainResult').innerHTML = "Generate another Card ? ";
        }
        else if(total == 21){
            document.getElementById('mainResult').innerHTML = "You've Won !!";
            alert('Congratulations !');
            document.getElementById('btn-res').style.display = "block";
        }
        else if(total > 21){
            document.getElementById('mainResult').innerHTML = "You Lost !";
            alert("Lost!!, Click restart to play again")
            document.getElementById('btn-res').style.display = "block";
        }

        var img = document.createElement("img");
        img.src = "images/" + x + ".png" ;
        img.height = 225;

        document.body.appendChild(img);

    }
}

    function restart(){
        location.reload();
    }
