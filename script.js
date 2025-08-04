const registerBtn = document.getElementById('Register1');
const signInBtn = document.getElementById('signIn1');
const majorContainer = document.getElementById('major-container');

registerBtn.addEventListener('click', () => {
	majorContainer.classList.add("jscreatetoggle");
});

signInBtn.addEventListener('click', () => {
	majorContainer.classList.remove("jscreatetoggle");
});