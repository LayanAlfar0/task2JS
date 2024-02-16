var convertt=document.querySelector('.convertt');
convertt.onsubmit=function(e){
    e.preventDefault();
    var res='';
    var elements = e.target.elements;
    var inp = elements['amount'].value;
    var selectOption = document.querySelector('select').value;
    if(selectOption==='dollar')
        res= inp / 3.61;
    else if(selectOption==='dinar')
        res= inp / 5.09;
    else 
        res = inp * 1;
    document.querySelector('p').textContent=res;
};