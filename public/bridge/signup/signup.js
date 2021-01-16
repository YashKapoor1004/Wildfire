function signUp(){
    var email = document.getElementById('emailAddress').value;
    var password = document.getElementById('password').value;
    console.log(email)
    console.log(password)
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(value){
        alert('Sign Up Successful')
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}