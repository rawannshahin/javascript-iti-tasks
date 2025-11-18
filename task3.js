var sum = 0;
var value;

while (sum <= 100) {
    value = prompt("Enter a number ");
    
    if (!isNaN(value) && value !== '') {
        value = parseFloat(value);
        
        if (value === 0) break;
        
        sum += value;
    } else {
        alert("Please enter a valid number.");
    }
}

alert("Total sum: " + sum)