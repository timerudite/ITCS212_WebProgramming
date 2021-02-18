function doAdd()
{
    // Variables for HTML element DOM references.
    var num1Ref, num2Ref,num3Ref, answerRef; 
    
    // Variables declarations.
    var num1, num2, num3, answer; 
    
    // Get references to DOM elements.
    num1Ref = document.getElementById("num1");
    num2Ref = document.getElementById("num2");
    num3Ref = document.getElementById("num3");
    answerRef = document.getElementById("answer");

    // Convert strings to numbers, e.g., "21" to 21.
    num1 = Number(num1Ref.value);
    num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value);
    
    // Perform addition operation then assignment operation
    answer = num1 + num2 + num3; 


    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answerRef.innerText = answer;
    
    if (answer >= 0)
    {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        //answerRef.className = "positive";
        if(answer%2==0){
            answerRef.className = "positive even";
        }
        else{
            answerRef.className = "positive odd";
        }
    }
    else
    {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        //answerRef.className = "negative";
        if(answer%2==0){
            answerRef.className = "negative even";
        }
        else{
            answerRef.className = "negative odd";
        }
    }
    
}


function doSub()
{
    // Variables for HTML element DOM references.
    var num1Ref, num2Ref,num3Ref, answer2Ref; 
    
    // Variables declarations.
    var num1, num2, num3, answer2; 
    
    // Get references to DOM elements.
    num1Ref = document.getElementById("num1S");
    num2Ref = document.getElementById("num2S");
    num3Ref = document.getElementById("num3S");
    answer2Ref = document.getElementById("answer2");

    // Convert strings to numbers, e.g., "21" to 21.
    num1 = Number(num1Ref.value);
    num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value);
    
    // Perform addition operation then assignment operation
    answer2 = num1 - num2 - num3; 


    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answer2Ref.innerText = answer2;
    
    if (answer2 >= 0)
    {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        //answerRef.className = "positive";
        if(answer2%2==0){
            answer2Ref.className = "positive even";
        }
        else{
            answer2Ref.className = "positive odd";
        }
    }
    else
    {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        //answerRef.className = "negative";
        if(answer2%2==0){
            answer2Ref.className = "negative even";
        }
        else{
            answer2Ref.className = "negative odd";
        }
    }
    
}



    
    




    
    
