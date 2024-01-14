var country = document.getElementById('country')
var result = document.getElementById('result')
var place = (country.value)
result.innerHTML = `Living on ${country}`
if (place == 'Brazil') {
    result.innerHTML = `You're Brazilian!`
} else {
    result.innerHTML = `You're a Foreigner!`
}

function show() {
    
}