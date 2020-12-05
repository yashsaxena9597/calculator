
var displayval="";
var preval="0";
var opt='+';
var result;
function cleardata(){

	opt='+';
	result=0;
	displayval=0;
	preval=0;
	document.getElementById("res").value =result;
	document.getElementById("op").value ='';
}
function calculate(oper){
	displayval+=oper;
	document.getElementById("res").value = displayval;	

}
function operation(operator){

	document.getElementById("op").value=operator;
	//console.log(preval);
	switch(opt)
	{
		case'+':
		result=parseFloat(parseFloat(preval)+parseFloat(displayval));
		document.getElementById("res").value=result;

		break;
		case'-':
		result=parseFloat(parseFloat(preval)-parseFloat(displayval));
		document.getElementById("res").value=result;
		break;
		case'*':
		result=parseFloat(parseFloat(preval)*parseFloat(displayval));
		document.getElementById("res").value=result;
		break;
		case'/':
		result=parseFloat(parseFloat(preval)/parseFloat(displayval));
		document.getElementById("res").value=result;
		break;
		case'=':
		document.getElementById("res").value=result;
		break;

	}
	
	displayval=0;
	preval=result;
	opt=operator;
}
