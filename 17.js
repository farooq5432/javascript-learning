//  nested if else 

    let winningnumber = 19;
    let userguess = +prompt("enter a number");
    console.log(typeof userguess, userguess);
    if(userguess === winningnumber){
        console.log(" your guess is right");
    }else{
        if(userguess<winningnumber)
        {
            console.log("your guess is too low")
        }else{
            console.log("your guess istoo high")
        }
    }