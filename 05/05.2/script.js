function calculate() {
    var txts = document.getElementById('txtspeed')
    var result = document.getElementById('result')
    var speed = Number(txts.value)
    result.innerHTML = `<p>Your current speed is <strong>${speed}Km/h</strong></p>`
    if (speed > 60) {
        result.innerHTML += `<p>You\'re <strong>FINED</strong> by exceeding the speed limit</p>`
    }
    result.innerHTML += `<p>Always remember using your seat belt`
}