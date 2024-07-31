function updateValue(radio) {
    document.getElementById('Custom_amount').value = radio.value;
}
document.getElementById('Custom_amount').addEventListener('input', function() {
    let radios = document.querySelectorAll('input[name="amtr"]');
    radios.forEach(radio => {
        radio.checked = false;
    });
});
// test
document.getElementById('button_donate').addEventListener('click', function() {
    document.getElementById('paymentModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('paymentModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('paymentModal')) {
        document.getElementById('paymentModal').style.display = 'none';
    }
});
