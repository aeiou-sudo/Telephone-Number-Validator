
const regex_1 = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
const validityChecker = phoneNumber => {
    if(phoneNumber === "") {
        window.alert("Please provide a phone number");
    } else if(regex_1.test(phoneNumber)) {
        // window.alert("Valid " + phoneNumber);
        document.getElementById('results-div').innerText = `Valid US number: ${phoneNumber}`;
    } else {
        document.getElementById('results-div').innerText = `Invalid US number: ${phoneNumber}`;
    }
}

const clearOutput = () => {
    document.getElementById('results-div').innerText = "";
    document.getElementById('user-input').value = "";
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
    });
    document.getElementById('clear-btn').addEventListener('click', () => {
        clearOutput();
    })
});
