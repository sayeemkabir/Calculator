// let buttons = document.getElementsByClassName("btn");

// console.log(buttons);

// let toArr = Array.from(buttons);

// toArr.map(
//     buttons.addEventListener("click", calc)
//     );

//     function calc(e){
//         document.querySelector("answerHere").innerHTML = e.target.innerText;
//     }


// function printThis(e){


//     let show = document.getElementsByClassName("btn").value;


//     console.log(show)
// }

var text = "";

function print9(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += 9;


}

function print8(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += 8;


}

function print7(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += 7;


}

function print6(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += 6;


}

function print5(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += 5;


}

function print4(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += 4;


}

function print3(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += 3;


}

function print2(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += 2;


}

function print1(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += 1;


}

function printBack(){
    
    let show = document.querySelector(".answerHere");

    show.innerHTML = show.innerHTML.slice(0, -1);
    

    }

function printPlus(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += "+"
}

function printMinus(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += "-"
}

function printInto(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += "*"
}

function printDivide(){
    let show = document.querySelector(".answerHere");

    show.innerHTML += "/"
}

function printClear(){
    let show = document.querySelector(".answerHere");

    show.innerHTML = " "
}

function printEqual(){
    let show = document.querySelector(".answerHere");

        let result = eval(show.innerText);

        show.innerText = result;
        console.log(show);

        if(result == undefined){
            show.innerText = "Type in a number"
        }
    }


    let person1 = {
        fullPassion: function(){
            return `he is a ${this.job} at ${this.place}`
        }
    }

    const sayeem = {
        job: "Programmer",
        place: "OLT Digital Agency"
    }

    const fahim = {
        job: "SEO Expert",
        place: "OLT Digital"
    }

    // console.log(person1.fullPassion.call(sayeem))


    function display(some){
        console.log(some)
    }

    function calculator(nmb1, nmb2, callback){
        let sum = nmb1 + nmb2;
        return sum
    }

    function jerry(){
        return `Where is tom`
    }

    let answer = calculator(10, 3, jerry);
    display(answer)

    function three(){
       console.log(`This is third`)
    }

    console.log(`This is first`)
    console.log(`This is second`)
    three()
    setTimeout(function(){
        console.log(`This is fourth`)
    }, 2000) 
    console.log(`This is fifth`)

    














