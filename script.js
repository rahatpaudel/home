let button1 = document.getElementById('button-1')
let button2 = document.getElementById('button-2')
let button3 = document.getElementById('button-3')

button1.addEventListener('click', function() {
    button1.style.display = 'none'
    button2.style.display = 'inline'
    let delay = Math.floor(Math.random() * (1100 - 700) + 700) // Generates a random number between 700 and 1100
    setTimeout (function(){
        // The following lines are executed after the randomly generated number of miliseconds
        button2.style.transition = 'none'
        button2.style.backgroundColor = '#bd3311'
        button2.textContent = 'Click Me!'
        let start = Date.now()
        // A nested event listener
        button2.addEventListener('click', function() {
            button2.style.transition = '0.3s'
            let end = Date.now()
            let time = end - start
            button3.innerHTML = '<p>Your reaction time is</p>' + time + ' ms'
            button2.style.display = 'none'
            button3.style.display = 'inline'
            // Yet another nested event listener
            button3.addEventListener('click', function() {
                location.reload()
            })
        })
    }, delay);
})