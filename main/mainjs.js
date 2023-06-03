function leftrightFun(){

    let temp = document.getElementById("selector").style.getPropertyValue('max-height');
    document.getElementById("leftimg").setAttribute('style', 'max-height: 100px;');

}

function goLeft(){

    let temp = document.getElementById("selector");

    if (temp.innerHTML === "Selector" || temp.innerHTML === "Finance"){

        temp.innerHTML = "Pantry";

    }
    else if(temp.innerHTML === "Pantry"){

        temp.innerHTML = "Calender";

    }
    else{

        temp.innerHTML = "Finance";

    }

}

function goRight(){

    let temp = document.getElementById("selector");

    if (temp.innerHTML === "Selector" || temp.innerHTML === "Calender"){

        temp.innerHTML = "Pantry";

    }
    else if(temp.innerHTML === "Pantry"){

        temp.innerHTML = "Finance";

    }
    else {

        temp.innerHTML = "Calender";

    }

}
function enter(){

    let temp = document.getElementById("selector");

    if (temp.innerHTML === "Pantry"){

        window.location.href = "./pantry.html";

    }
    else if (temp.innerHTML === "Calender"){

        window.location.href = "./calender.html";

    }
    else if(temp.innerHTML === "Finance"){

        window.location.href = "./finance.html";

    }
    else {

        alert("Please Select a Category");

    }

}