// Ambil element
const user = document.getElementById("user");

// ES5
const logged_in_user = "Calvin";
// user.innerHTML = "Hi, " + logged_in_user + " sudah login";

// ES6
user.innerHTML = `Hi, ${logged_in_user} sudah login`