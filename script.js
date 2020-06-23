var myCitation="Pationné d'informatique et de nouvelles technologies depuis toujours, le monde du web "+
"est mon domaine de prédilection.Autodidacte, curieux et rigoureux, je m'adapte en toute circonstance.Afin de valider mon DUT"+
"je suis à la recherche d'un stage entre 4 et 6 mois.";
var myArray=myCitation.split("");
var timeLooper;
function loop(){
    if(myArray.length>0){
        document.getElementById("citation").textContent +=myArray.shift();
    }else{
        clearTimeout(timeLooper);
    }
    timeLooper=setTimeout('loop()',70);
};
loop();
