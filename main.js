let count = 0
const text = document.getElementById('Text')

function countUp() {
    ++count
    text.textContent = count
    console.log(count)
}
