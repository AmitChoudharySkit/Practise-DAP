document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you would integrate AWS Cognito login logic
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('calculator-container').style.display = 'block';
    } else {
        alert('Invalid credentials');
    }
});

function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            return;
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}
