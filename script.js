function submitAnswers() {
    var total = 5;
    var score = 0;
    
    //get User input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //validation
    for (i = 1; i <= total; i++){
        
        if (eval ('q' + i) == null || eval ('q' + i)==''){
            alert('You Missed Question ' + i);
            return false;
        }
    }//validation
    
    //set correct answers
    var answers = ["b", "a", "d", "b", "d"];
    
    //check answers
    for(i = 1; i <= total; i++){
        if(eval('q' + i) == answers [i - 1]) /*because i start form 1 and array start from 0*/{
            score++;
        }
    }
    
    //display result
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You Scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
    alert('You scored '+score+' Out of '+total);
    
    return false;
    
}//main function


 