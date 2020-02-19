const verificaPalindrome = (string) => {
    let palindrome = true
    for(i in string){        
        if(string[i]!=string[string.length-i-1]){
            palindrome = false
            break
        }
    }
    return palindrome
}

console.log(verificaPalindrome("arara"))