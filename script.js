const output_message = document.getElementById('results-div');
const clear_button = document.getElementById('clear-btn');

const validityChecker = phoneNumber => {
    if(phoneNumber === "") {
        window.alert("Please provide a phone number");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is fully loaded');
    document.getElementById('check-btn').addEventListener('click', () => {
        validityChecker(document.getElementById('user-input').value);
    });
    document.getElementById('user-input').addEventListener('keydown', e => {
        if(e.key === 'Enter') {
            validityChecker(document.getElementById('user-input').value);
        }
    })
});
