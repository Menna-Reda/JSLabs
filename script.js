var a= parseInt(prompt("Enter your first number"));
var b= parseInt(prompt("Enter your second number"));
var c= parseInt(prompt("Enter your third number"));

function sort(a,b,c) {
    if (a >= b && a >= c) {
        if (b >= c) {
            alert(`${a}, ${b}, ${c}`);
        } else {
            alert(`${a}, ${c}, ${b}`);
        }
    } else if (b >= a && b >= c) {
        if (a >= c) {
            alert(`${b}, ${a}, ${c}`);
        } else {
            alert(`${b}, ${c}, ${a}`);
        }
    } else {
        if (a >= b) {
            alert(`${c}, ${a}, ${b}`);
        } else {
            alert(`${c}, ${b}, ${a}`);
        }
    }
}
sort(a,b,c);
function fizzBuzz (){
    for(i=1;i<=100;i++)
    {
        if(i%3===0 && i%5===0)
            console.log(i,": FizzBuzz");
        else if(i%3===0)
            console.log(i,": Fizz");
        else if (i%5===0)
            console.log(i,": Buzz");
    }
}
fizzBuzz()
function MultiplesSum (){
    var sum=0;
    for(i=1;i<=1000;i++)
    {
        if(i%3===0 && i%5===0)
            sum+=i;
        
    }
    console.log(" sum the multiples of 3 and 5 under 1000 = ",sum);
}
MultiplesSum();
function guessingGame(){
    var iterations=1;
    var tryAgain = true;
    var target = Math.floor(Math.random()* 11);
        console.log(target);
    while(tryAgain && iterations<=3){
        tryAgain=false;
        var gNum = parseInt(prompt("Guess number from 1 to 10"));
        if(gNum === target)
            alert("Good Work");
        else
        {
            if(iterations==3)
                alert('game over');
            else
                tryAgain = confirm("wrong guess, want to try again?");
        }
        if(tryAgain)
        { 
            iterations+=1;
        }
        

    }    

}
guessingGame()
function happyNumber(){
    happyNumbers=0;
    number=1;
    while(happyNumbers<5)
    {
        n=number;
        console.log(n);
        do 
        {   
            sum = 0;
            while(n>0)
                {
                    digit = n%10;
                    squared=digit*digit;
                    sum+=squared;
                    n=Math.floor(n/10);
                    
                    
                }
                n=sum;
                if (n === 1) { 
                    happyNumbers++;
                    alert(number + " is a happy number");
                }
        }while(n !== 1 && n!==4) 
    number+=1;

}
}
happyNumber()