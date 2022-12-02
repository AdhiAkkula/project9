let firstname=document.querySelectorAll('input')[0];
let mail=document.querySelectorAll('input')[1];
let number=document.querySelectorAll('input')[2];
let password=document.querySelectorAll('input')[3];
addEventListener('submit',(e)=>{
    e.preventDefault();
    if (firstname.value.length>=6){
        document.querySelectorAll('p')[0].innerText="";
    }
    else{
        document.querySelectorAll('p')[3].innerText="enter the valid name";
    }
    mail.focus();
    if (mail.value.includes('@gmail.com')){
        document.querySelectorAll('p')[1].innerText="";
    }
    else{
        document.querySelectorAll('p')[3].innerText="enter the valid mail";
    }
    number.focus();
    if (number.value.length>=10){
        document.querySelectorAll('p')[2].innerText="";
    }
    else{
        document.querySelectorAll('p')[3].innerText="enter the valid number";
    }
    password.focus();
    if (password.value.length>=6 && vaildatePassword(password.innerText)){
        document.querySelectorAll('p')[3].innerText="";
    }
    else{
        document.querySelectorAll('p')[3].innerText="enter the valid password";
    }
    window.alert("successful");
    function vaildatePassword(value) {
        let char='!@#$%^&*'
        for (let i=0;i<char.length;i++) {
            for (let j=0;j<value.length;j++) {
                if (char[i]===value[j]) {
                    return true
                }
            }
        }
    }
})