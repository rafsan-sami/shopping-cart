document.getElementById('case-gain').addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCounting = parseInt(caseInput.value);
    const caseNewCount = caseCounting + 1;
    caseInput.value = caseNewCount;
    const totalCase = caseNewCount * 59;
    document.getElementById('case-total').innerText = '$' + totalCase;  

    calculateTotal ()
});


document.getElementById('case-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCounting = parseInt(caseInput.value);
    const caseNewCount = caseCounting - 1;
    caseInput.value = caseNewCount;
    const totalCase =  caseNewCount * 59;
    document.getElementById('case-total').innerText = '$' + totalCase;

    calculateTotal ()
});


document.getElementById('phone-gain').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCounting = parseInt(phoneInput.value);
    const phoneNewCount = phoneCounting + 1;
    phoneInput.value = phoneNewCount;
    const totalPhone = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$' + totalPhone;

    calculateTotal ()
});


document.getElementById('phone-minus').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCounting = parseInt(phoneInput.value);
    const phoneNewCount = phoneCounting - 1;
    phoneInput.value = phoneNewCount;
    const totalPhone = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$' + totalPhone;

    calculateTotal ()
});

function calculateTotal (){
    const phoneInput = document.getElementById('phone-count');
    const phoneCounting = parseInt(phoneInput.value);

    const caseInput =document.getElementById('case-count');
    const caseCounting = parseInt(caseInput.value);

    const subTotal = phoneCounting * 1219 + caseCounting * 59;
    document.getElementById('sub-total').innerText = '$' + subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const totalPrice = subTotal + tax;
    document.getElementById('total').innerText = '$' + totalPrice;
}