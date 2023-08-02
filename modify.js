document.getElementById('case-gain').addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCounting = parseInt(caseInput.value);
    const caseNewCount = caseCounting + 1;
    caseInput.value = caseNewCount;
    const totalCase = caseNewCount * 59;
    document.getElementById('case-total').innerText = '$' + totalCase;  
});


document.getElementById('case-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCounting = parseInt(caseInput.value);
    const caseNewCount = caseCounting - 1;
    caseInput.value = caseNewCount;
    const totalCase =  caseNewCount * 59;
    document.getElementById('case-total').innerText = '$' + totalCase;
});


document.getElementById('phone-gain').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCounting = parseInt(phoneInput.value);
    const phoneNewCount = phoneCounting + 1;
    phoneInput.value = phoneNewCount;
    const totalPhone = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$' + totalPhone;
});


document.getElementById('phone-minus').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCounting = parseInt(phoneInput.value);
    const phoneNewCount = phoneCounting - 1;
    phoneInput.value = phoneNewCount;
    const totalPhone = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$' + totalPhone;
})