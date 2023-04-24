let tickets = [];
let movieSelected = 0;
let tester = 0;
function movieSelect (){
    let display = document.getElementById("movieSelect1").value;
    document.getElementById("selected").innerHTML = display;
    console.log("movie selector works");
    if(display == "x"){movieSelected = 0}else{movieSelected = 1};
}
function testInput(){
    tester = 0;
    let missing = "Field is required";
    let missingM = "Please select a movie";
    if(movieSelected==0){
        document.getElementById("movieSR").innerHTML = missingM; //Testing that a movie has been selected
        tester = 1;
    }else{document.getElementById("movieSR").innerHTML="";}
    let amount = document.getElementById("ticketNr").value; //Testing number of tickets selected
    if(amount == "--"){
        document.getElementById("numbR").innerHTML = missing;
        console.log("numb checker works");
        tester = 1;
    }else{document.getElementById("numbR").innerHTML="";}
    let fn = document.getElementById("fname").value; //Testing first name
    if(fn==""){
        document.getElementById("fnameR").innerHTML = missing;
        console.log("Fname checker works");
        tester = 1;
    }else{document.getElementById("fnameR").innerHTML="";}
    let ln = document.getElementById("lname").value; //Testing last name
    if(ln==""){
        document.getElementById("lnameR").innerHTML = missing;
        console.log("Lname checker works");
        tester = 1;
    }else{document.getElementById("lnameR").innerHTML="";}
    let ph = document.getElementById("phone").value; //Testeing Phonenumber
    if (ph==""){
        document.getElementById("phoneR").innerHTML = missing;
        console.log("Phone checker works");
        tester = 1;
    }else{document.getElementById("phoneR").innerHTML="";}
    let em = document.getElementById("email").value; //Testing Email
    if (em ==""){
        document.getElementById("emailR").innerHTML = missing;
        console.log("Email checker works");
        tester = 1;
    }else{document.getElementById("emailR").innerHTML="";}

    if(tester == 0){
        addTicket();
        console.log("The tester passed")
    }
}
function addTicket(){
    let movie = document.getElementById("movieSelect1").value;
    let amount = document.getElementById("ticketNr").value;
    let fn = document.getElementById("fname").value;
    let ln = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let name = fn + " " + ln;
    const order = {
        Movie : movie,
        Amount : amount,
        Name : name,
        Phone : phone,
        Email : email
    }
    tickets.push(order);
    /*let orderOut = "<table><tr>" +
        "<th>Movie</th><th>Amount</th><th>Name</th><th>Phone number</th><th>Email</th>" +
        "</tr>";
    console.log("Half works")
    for (let i = 0; i < tickets.length; i++){
        orderOut +=
            "<tr> <th>"+ tickets[i].Movie +"</th><th>" + tickets[i].Amount +
            "</th> <th>" + tickets[i].Name + "</th><th>" + tickets[i].Phone +
            "</th><th>" + tickets[i].Email + "</th> </tr>";
        console.log("This has been run" + i);
        document.getElementById("table").innerHTML = orderOut;
    }*/


    $.post("/addOrder", order, function (){
        getAll()
    });
    function getAll(){
        $.get("/getOrders", function (data) {
            printOutOrders(data);
        })
    };
    clearInput();
}
function printOutOrders(orders){
    let ut = "<table><tr><th>Name</th><th>Movie</th>Amount<th><th>Phone</th><th>Email</th></tr>";
    for (const order of orders){

        ut+="<tr><td>"+order.name+"</td><td>"+ order.movie +"</td><td>"+ order.amount + "</td><td>"+ order.phone
            +"</td><td>" + order.email + "</td></tr>";
    }
    ut+="</table>";
    document.getElementById("table").innerHTML = ut;
}

function clearInput(){ //Clearing all input values
    document.getElementById("selected").innerHTML = "";
    document.getElementById("movieSelect1").value = "--Please Select--";
    document.getElementById("ticketNr").value = "--";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}
function resetList(){
    $.post("/deleteOrders", function(){});
    console.log("Deleting works");
    tickets = [];
    //document.getElementById("table").innerHTML = "";
    printOutOrders();
}
function giveMeExcuse(){
    $.get("https://excuser-three.vercel.app/v1/excuse/college/", function(excuse1){
        let fun = [];
        fun.push(excuse1);

        document.getElementById("giveMeExcuse").innerHTML = fun[0][0].excuse;

        //console.log(excuse1);
        //console.log(fun[0][0].excuse);


    });

}


