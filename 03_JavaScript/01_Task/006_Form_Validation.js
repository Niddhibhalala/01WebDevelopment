let input="\[^@\s]+@[^@\s]+\.[^@\s]\" 
let aaa = document.getElementById("firstname").value;
console.log(aaa);
function checkreq(something, pid) {
    if (something.value == "" ) {
        document.getElementById(pid).innerText = "something"
    } else {
        if (!input.text(aaa)) {
            document.getElementById(pid).focus()
        } else {
            console.log("aaaa");
            document.getElementById(pid).innerText = "error"
        }
    }
}

let input = /^([a-zA-Z])$/;
let aaa = document.getElementById("Fname").value;
console.log(aaa);
function checkreq(something, pid) {
    if (something.value == "") {
        document.getElementById(spanid).innerText = "something"
    } else {
        if (!input.test(aaa)) {
            document.getElementById("Fname").focus()
        } else {
            console.log("aaaa");
            // document.getElementById("Fname").focus()
            document.getElementById(pid).innerText = "error"
        }
    }
} 




function checkreq(){
    let gender=document.getElementById("gender").value;
    console.log(gender);
    if(gender==""){
        document.getElementById("gendererror").innerHTML="";
    }
    else{
        document.getElementById("gendererror").innerHTML="";
    }
}

let pattern=" [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]"
let email = document.getElementById("email").value;
function checkreq(){
    let email=documnet.getelementbyid("email").value;
    console.log(email);
    if(!email.value==""){
        console.log("email");
        document.getElementById("email").innerHTML=""
    }else{
        document.getElementById(pid).innerHTML="";
    }
}


function checkreq(){
    let Fname=documnet.getelementbyid("Fname").value;
    console.log(Fname);
    if(!Fname.value==""){
        console.log("Fname");
        document.getElementById("Fname").innerHTML=""
    }
    else{
        document.getElementById(spanid).innerHTML="";
    }
}

let input = /^([a-zA-Z])$/;
let Fname = document.getElementById("spanid").value;
console.log(aaa);
function checkreq() {
    if (something.value == "null") {
        document.getElementById(spanid).innerText = "Fname"
    } else {
        if (!input.test(aaa)) {
            document.getElementById("spanid").focus()
        } else {
            console.log("aaaa");
            // document.getElementById("Fname").focus()
        }
        document.getElementById(spanid).innerText ="Fname"
    }
} 

