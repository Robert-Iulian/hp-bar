let currentHp = 15000
let maxHp = 30000
let currentHpInnerHtml = document.querySelector("#current-hp").innerHTML = currentHp // Displaying the Current HP to HP bar from the variable
let maxHpInnerHtml = document.querySelector("#max-hp").innerHTML = maxHp // Displaying the MAX HP to HP bar from the variable
let displayHp = document.querySelector("#health") // Selecting the style of the red HP bar

/*
    1. How can i make the "maxHp" variable to represent 
    the 100% of the hp bar (200px)?
    2. How to translate "currentHp" value to "%" of the "maxHp"
    depending on the value.
        - Example: maxHp = 30000 => (100% of 200px)
                   currentHp = 15000 => (50% of 200px)
                                        (50% of maxHp)
        - Task: Make the "displayHp" width relative to "currentHp".
*/