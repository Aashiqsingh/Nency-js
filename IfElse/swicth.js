var n1 = parseInt(prompt("Enter first number"))
var n2 = parseInt(prompt("Enter second number"))

var choice = parseInt(prompt("1 for Addition \n2 for Subtraction \n3 for multiplication \n4 for division \n\n\nEnter your choice"));

switch(choice){
    case 1:
        let add = n1 + n2;
        console.log("Addition = ",add);
        break;

    case 2:
        let sub = n1 - n2;
        console.log("Subtraction = ",sub);
        break;
        
    case 3:
        let mul = n1 * n2;
        console.log("Multiplication = ",mul);
        break;
        
    case 4:
        let div = n1 / n2;
        console.log("Division = ",div);
        break;
        
    default:
        console.log("Invalid choice!");
        
}