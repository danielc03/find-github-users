// Init GitHub
const github = new Github;

// Search input
const searchUser = document.querySelector('#searchUser');












// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                console.log(data);
            })
    }
})