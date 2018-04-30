
var p = {

    IsPalindrome: (testCase) => {

        let msg = document.querySelector('[data-palindrome-out]').innerHTML;

        if(testCase.length > 1){
            
            // this is a palindrome
            if(testCase.charAt(0) === testCase.charAt(testCase.length -1)){
                
                msg += '<br>'+ testCase + ' is a palindrome'
                p.PrintMessage(msg);
                let newTestCase = testCase.substring(1, testCase.length -1);
                p.IsPalindrome(newTestCase);

            } else {
                p.PrintMessage('This is not a palindrome');
            }
        } else if(testCase.length === 1) {
            // a single letter word is a palindrome
            msg += '<br>' + testCase + ' is a palindrome';
            p.PrintMessage(msg);
            
        } else {

        }

    },
    PrintMessage: (msg) => {
        document.querySelector('[data-palindrome-out]').innerHTML = msg;
    }

}

document.querySelector('button').addEventListener('click', () => {
    p.PrintMessage('');
    p.IsPalindrome( document.querySelector('[data-palindrome-in]').value ) ;
});
   