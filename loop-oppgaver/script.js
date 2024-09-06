const oppg1Btn = document.getElementById("oppg1Btn")
const oppg3Btn = document.getElementById("oppg3Btn")
const oppg4Btn = document.getElementById("oppg4Btn")
const writePage = document.getElementById("writePage")

oppg1Btn.onclick = function() {
    writePage.innerHTML += "<br><br>While loop writing 1 trough 10<br>"
    let count = 0
    while (count < 10) {
        count += 1
        writePage.innerHTML += count + " "
    }

    writePage.innerHTML += "<br><br>For loop writing 1 trough 10<br>"
    for (let i = 1; i <= 10; i++) {
        writePage.innerHTML += i + "  "
    }
}

oppg3Btn.onclick = function() {
    writePage.innerHTML += "<br><br> All odd numbers in numbers ranging 1 trough 100<br>"
    let oddNumber = true
    for (let i = 1; i <= 100; i++) {
        if (oddNumber) { 
            oddNumber = false
        }
        else {
            writePage.innerHTML += i +"  "
            oddNumber = true
        }
    }
}

oppg4Btn.onclick = function() {
    writePage.innerHTML += "<br><br> Times Table <br>"

    for (let i = 1; i <= 10; i++) {
        for (let n = 1; n <= 10; n++) {
            const number = i * n
            writePage.innerHTML += number + "  "
        }
        writePage.innerHTML += "<br>"
    }
}