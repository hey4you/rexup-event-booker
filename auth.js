//handels everthing used for auth
// const auth = firebase.auth();

// auth.signInWithEmailAndPassword(email, pass);

// auth.createUserWithEmailAndPassword(email, pass);

// auth.onAuthStateChanged(firebaseUser => {});

(function() {

//get elements from loginfilds
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');

btnLogin.addEventListener('click', e => {

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

     const promise = auth.signInWithEmailAndPassword(email, pass);
     promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener('click', e => {

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

     const promise = auth.createWithEmailAndPassword(email, pass);
     promise.catch(e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
    }
    else {
        console.log('not logged in')
    }
});


})