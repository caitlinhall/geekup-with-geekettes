$(document).ready(function(){

    var user_data;
    var access_token;
    var username;
    var fireJSON;

    fireJSON = new Firebase('https://northdacoder.firebaseio.com');

    var auth = new FirebaseSimpleLogin(fireJSON, function(error, user) {
        console.log("User object authenticated: " + user);
        console.log("Access Token from Google Auth: " + user.accessToken);
        console.log("Display Name: " + user.email);
        console.log("");

        user_data = user; 
        access_token = user.access_token;
        username = user.username;
    });

    // auth();

    $("#googleLogin").on('click', function(){
        auth.login('google');
    });

    $("#titleContainer").on('hover', function(){
        alert('hi');
        $("#codeblink").css('color', '#f39c12');
    });

    

});