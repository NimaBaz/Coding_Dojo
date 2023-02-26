// function handleCredentialResponse(response) {
//     console.log("Encoded JWT ID token: " + response.credential);
// }

// window.onload = function () {
//     console.log('function');
//     google.accounts.id.initialize({
//         client_id: "239355930141-tqfns5q6qal9od0r81ks79ul58bi1ruh.apps.googleusercontent.com",
//         callback: handleCredentialResponse
//     });

//     google.accounts.id.renderButton(
//         document.getElementById("buttonDiv"),
//         { theme: "outline", size: "large" }  // customization attributes
//     );
//     google.accounts.id.prompt(); // also display the One Tap dialog
// }