
function calculate(){
        // let marks = prompt("Enter a marks")
        // console.log(marks);

        // if (marks >= 50 && marks <= 70) {
        //     console.log("thirdclass");
        //     console.log("Grade-C")

        // }
        // else if (marks >= 71 && marks <= 80) {
        //     console.log("secondclass");
        //     console.log("Grade-B")

        // }
        // else if (marks >= 81 && marks <= 90) {
        //     console.log("firstclass");
        //     console.log("Grade-A")
        // }
        // else if (marks >= 91 && marks <= 100) {
        //     console.log("Excellent");
        //     console.log("Grade-A+")
        // }
        // else if (marks > 100) {
        //     console.log("Not allowed")
        // }
        // else {
        //     alert("Try again")
        //     // console.log("Tryagain")
        // }

        function calculate() {


            document.body.style.backgroundColor = "grey"
            let m1, m2, m3, m4, m5, sum, avg, per

            m1 = parseInt(document.getElementById("Maths marks").value)
            console.log("Maths marks", maths)

            m2 = parseInt(document.getElementById("Gujarti marks").value)
            console.log("Gujarti marks", maths)

            m3 = parseInt(document.getElementById("Hindi marks").value)
            console.log("Hindi  marks", Hindi)

            m4 = parseInt(document.getElementById("English marks").value)
            console.log("English marks", English)

            m5 = parseInt(document.getElementById("Socialscience marks").value)
            console.log("Socialscience marks", socialscience)

            sum = m1 + m2 + m3 + m4 + m5;
            console.log("total marks", sum)

            avg = parseFloat(sum / 5);

            percentage = sum / 100 * 100;
            console.log("percentage=", per)

            // if (avg >= 90) {
            //     console.log("Grade A")
            // }
            // else if (avg >= 80) {
            //     console.log("Grade B")
            // }
            // else if (avg >= 70) {
            //     console.log("Grade C")
            // }
            // else if (avg >= 40) {
            //     console.log("Low Grade")
            // }
            // else {
            //     console.log("Try again")
            // }
document.getElementById("Total").innerHTML="Total"="+sum";
document.getElementById("avg").innerHTML="average"="avg"
        }

}




