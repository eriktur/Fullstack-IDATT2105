document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const button = document.getElementById('button');
    const resetButton = document.getElementById('button2');
    const toggleButton = document.getElementById('button3');
    const displayCount = document.getElementById('display');
    const content3 = document.querySelector('.content3');
    const fortnite = ["Griddy", "T-pose", "Orange justice", "Default","Dab","Take the L", "Flippin sexy", "make it rain","Tidy","Groove jam"];

    let text = "<ul>";
    fortnite.forEach(myFunction);
    text += "</ul>";
    document.getElementById("fort").innerHTML = text;
    
    function myFunction(value) {
      text += "<li>" + value + "</li>";
    }

    button.addEventListener('click', () => {
        count++;
        displayCount.textContent = count;
    });

    resetButton.addEventListener("click", () => {
        count = 0;
        displayCount.textContent = count;
    });

    toggleButton.addEventListener('click', () => {
        if (content3.classList.contains('collapsed')) {
            content3.classList.remove('collapsed');
        } else {
            content3.classList.add('collapsed');
        }
    });
});
