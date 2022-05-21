
let password1 = document.getElementById('password1')
const funFact = document.getElementById('fun-fact')
let funFacts = [
    'A 16 digit password can take 600000+ years to crack',
    'Many passwords are easy to crack as they are commonly used by the people. Some of them are, \'12345678\', \'qwerty12\' and \'Password\'',
    'Data breaches in major companies like Facebook and many VPN companies leaked many passwords of the users in the dark web'
]

let random = Math.floor(Math.random() * funFacts.length)
console.log(random)

// console.log(funFacts[1])

function genPass(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passLength = 16;
    let passWord = ''
    for(let j = 0; j<=passLength; j++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        passWord += chars.substring(randomNumber, randomNumber +1);
    }
    password1.value = passWord
}

function copyPass(){
    var copyText = document.getElementById("password1");
    copyText.setSelectionRange(0, 999);
    navigator.clipboard.writeText(copyText.value);
}

funFact.textContent += funFacts[random]
