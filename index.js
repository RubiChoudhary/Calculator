function cal(){
    var opr1 = document.getElementById('first').value;
    var opr2 = document.getElementById('second').value;
    var operator = document.getElementById('operator').value;
    
    if (operator=='+'){
        var res = parseInt(opr1) + parseInt(opr2);
    }

    if (operator=='-'){
        var res = parseInt(opr1) - parseInt(opr2);
    }

    if (operator=='*'){
        var res = parseInt(opr1) * parseInt(opr2);
    }

    if (operator=='/'){
        var res = parseInt(opr1) / parseInt(opr2);
    }
    document.getElementById('res').value = res ;
}