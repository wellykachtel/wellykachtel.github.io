

google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback(drawChart);

var expenses = 0;
var salary = 0;
var firstFlag = 1;
var net = 0;
var warningAmount = 100;
var expenseArray = [['Expense Name','Expense Amount']];
var netArray = [['Expense Name', 'Expense Amount']];
var index = 0;
var lastElementAdded;
var newAmount;
var li;

function submitExpense(){
	var ul = document.getElementById("ExpenseList");
	li = document.createElement("li");
	var newTagName = document.getElementById("newExpense").value;
	newAmount = document.getElementById("newExpenseAmount").value;
	var multiplier = document.getElementById("checkType").value;


	salary = document.getElementById("fullAmount").value;
	salary = parseFloat(salary);
	newAmount = parseFloat(newAmount);
	expenses = expenses + newAmount;
	

	if(multiplier){
		salary = (salary*2);
	}else{
		salary = (salary*26)/12;
	}

	net = salary - expenses;

	if(firstFlag == 1){
		var h4 = document.getElementById("initialSalary");
		h4.appendChild(document.createTextNode("Monthly Salary: $" + salary));
		firstFlag = 0;
	}

	document.getElementById("netEarnings").innerHTML = "Net:    $" + net;

	if(net<warningAmount){
		document.getElementById("netEarnings").style.color = "red";
	}

	var tagDiv = document.createElement("DIV");
	var tagText = document.createTextNode(newTagName + ":  $");
	tagDiv.setAttribute("id","tag"+index);
	tagDiv.setAttribute("class","sideBySide tag");
	tagDiv.appendChild(tagText);

	var amountDiv = document.createElement("DIV");
	var amountText = document.createTextNode(newAmount);
	amountDiv.setAttribute("id","amount"+index);
	amountDiv.setAttribute("class","sideBySide amount");
	amountDiv.appendChild(amountText);

	/*var expenseButton = document.createElement("BUTTON");
	var buttonText = document.createTextNode("Remove");
	expenseButton.appendChild(buttonText);
	expenseButton.setAttribute("class","sideBySide");*/


	var spanDiv = document.createElement("DIV");
	spanDiv.appendChild(tagDiv);
	spanDiv.appendChild(amountDiv);
	//spanDiv.appendChild(expenseButton);
	spanDiv.setAttribute("class", "expenseDiv");

	li.appendChild(spanDiv);
	ul.appendChild(li);
	lastElementAdded = li;
	expenseArray.push([newTagName,newAmount]);
	console.log(expenseArray.length);
	document.getElementById("newExpense").value = "";
	document.getElementById("newExpenseAmount").value = "";
	index++;

}



function generatePieChart(){

	netArray.push(['Expenses', expenses]);
	netArray.push(['Left Over', net]);
	expenseArray.push(['LeftOver', net]);

	google.charts.setOnLoadCallback(drawChart);
	google.charts.setOnLoadCallback(drawChart2);

}
function drawChart() {

	var data = google.visualization.arrayToDataTable(expenseArray);


    var options = {
        title: 'My Expenses',
        backgroundColor: 'transparent'
     };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
function drawChart2() {

	var data = google.visualization.arrayToDataTable(netArray);


    var options = {
        title: 'Budget Composition',
        backgroundColor: 'transparent'
     };

    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

    chart.draw(data, options);
}
/*
$("#ExpenseList").on("click","button",function(e){
	e.preventDefault();
	var number = $(this).siblings(".amount").text();
	number = parseFloat(number);
	net = net + number;
	document.getElementById("netEarnings").innerHTML = "Net:    $" + net;

	$(this).parent().remove();
});*/
function undoLast(){

	net = net + newAmount;
	expenses = expenses - newAmount;
	$(li).remove();
	expenseArray.pop();
	document.getElementById("netEarnings").innerHTML = "Net:    $" + net;


}