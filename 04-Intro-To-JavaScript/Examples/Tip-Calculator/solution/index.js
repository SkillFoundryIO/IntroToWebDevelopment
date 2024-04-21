document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tipForm');
    const resultBox = document.getElementById('resultBox');
    const resultText = document.getElementById('resultText');

    const amount = document.getElementById('billAmount');
    const tipPercentage = document.getElementById('tipPercentage');
    const numGuests = document.getElementById('numGuests');

    function setMessage(text) {
        resultText.textContent = text;
        resultBox.style.display = 'block';
        document.getElementById('resultBox').style.color = 'black';
    }

    function setError(text) {
        resultText.textContent = text;
        resultBox.style.display = 'block';
        document.getElementById('resultBox').style.color = 'red';
    }

    numGuests.addEventListener("change", function() {
        const guestCount = parseInt(numGuests.value);

        if(guestCount > 7) {
            tipPercentage.value = 25;
            tipPercentage.setAttribute("readonly", "");
        }
        else {
            tipPercentage.removeAttribute("readonly");
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        /* convert the form values to decimals */
        const billAmount = parseFloat(amount.value);
        const tip = parseFloat(tipPercentage.value);
        const guestCount = parseInt(numGuests.value);

        const totalDue = billAmount * (1 + (tip / 100));

        if(isNaN(billAmount) || isNaN(tip) || isNaN(guestCount)) {
            setError("Invalid form data. Please ensure all values are filled in and numeric.")
        } else {
            setMessage(`For a bill of $${billAmount} with ${guestCount} guests and a ${tip}% tip, the total due will be $${totalDue}`);
        }
    });
});