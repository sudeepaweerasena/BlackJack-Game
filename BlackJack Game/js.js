function main(){
    let confirm =document.getElementById('main-result').innerHTML;
    if(confirm == "You lost!"){
        alert("game over! Please restar the game");
    }else{

        let x;
        do{
        //genarate random card
        x = Math.floor(Math.random()*100/7.6);
        }while(x==0);

        let currentTotal = parseInt(document.getElementById('result').innerHTML);
        let total = currentTotal + x;
        document.getElementById('result').innerHTML = total;

        if(total<21){
            document.getElementById('main-result').innerHTML=" ------ Genarate another card ------"
        } else if(total==21){
            document.getElementById('main-result').innerHTML=" You won!"
            alert('congratulations!');
            document.getElementById('btn-re').style.display = "block"
        }else if(total>21){
            document.getElementById('main-result').innerHTML="You lost!"
            alert("lost!");
            document.getElementById('btn-re').style.display = "block"



        }

        var img = document.createElement("img");
        img.src = "photos/" + x + ".png";
        img.height = 200;

        document.body.appendChild(img);
    }

    
}

function resart(){
    location.reload();
}