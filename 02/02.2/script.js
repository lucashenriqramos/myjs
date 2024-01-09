confirm('Oh Hi!, is there someone out here?')
confirm('Youre still here?')
var name = prompt('Ok then, so whats your name?')
alert(`Its so nice to have u here, ${name}!`)

var year = 2024
var ybirth = prompt('Which year did u were born?')
var age = year - ybirth
confirm(`So that means youre going, ${age} this year, right?`)
alert('Oh, a good time has passed! hope youre enojying life :)')
var plus = Number(prompt('Now type any number u think of'))
var plus1 = Number(prompt('Again...'))
var sum = plus + plus1
alert(`The sum of the numbers u thought of is: ${sum}.`)

var name = prompt('To finish, tell me: Whats your full name?')
document.write(`<h3>Welcome, <strong>${name}</strong>! Your full name has ${name.length} letters. </h3><br>`)
document.write(`<h3>Your full name on uppercase is ${name.toUpperCase()}. </h3>`)
document.write(`<h3>Your full name on lowercase is ${name.toLowerCase()}. </h3>`)