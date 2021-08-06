function add(num){
    let exp = document.form.textview.value;
    if((num ==='.')||(num ==='*')||(num ==='/')){
        if((exp.substring(exp.length-1, exp.length)!=='.')&&(exp.substring(exp.length-1, exp.length)!=='+')&&
         (exp.substring(exp.length-1, exp.length)!=='-')&&(exp.substring(exp.length-1, exp.length)!=='*')&&
         (exp.substring(exp.length-1, exp.length)!=='/')){
            document.form.textview.value = document.form.textview.value + num;
        }
    }
    else if(num === '-'){
        if((exp.substring(exp.length-1,exp.length)!=='.')&&
            (exp.substring(exp.length-1,exp.length)!=='-')){
            document.form.textview.value = document.form.textview.value + num;
        }
    }
    else if(num === '+'){
        if((exp.substring(exp.length-1,exp.length)!=='.')&&(exp.substring(exp.length-1,exp.length)!=='+')){
            document.form.textview.value = document.form.textview.value + num;
        }
    }
    else{
        document.form.textview.value = document.form.textview.value + num;
    }
}
function clean(){
    document.form.textview.value = "";
}
function back(){
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
function equal(){
    let exp = document.form.textview.value;
        if(exp){
            document.form.textview.value=eval(exp);
            if(document.form.textview.value==='NaN'||document.form.textview.value==='Infinity'||
                document.form.textview.value==='-Infinity'){
                document.form.textview.value='Error';
            }
        }
}


