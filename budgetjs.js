

google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback(drawChart);

var expenses = 0;
var salary = 0;
var firstFlag = 1;
var net = 0;
var warningAmount = 100;
var expenseArray = [['Expense Name','Expense Amount']];
var index = 0;

function submitExpense(){
	var ul = document.getElementById("ExpenseList");
	var li = document.createElement("li");
	var newTagName = document.getElementById("newExpense").value;
	var newAmount = document.getElementById("newExpenseAmount").value;
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

	var expenseButton = document.createElement("BUTTON");
	var buttonText = document.createTextNode("Remove");
	expenseButton.appendChild(buttonText);
	expenseButton.setAttribute("class","sideBySide");


	var spanDiv = document.createElement("DIV");
	spanDiv.appendChild(tagDiv);
	spanDiv.appendChild(amountDiv);
	spanDiv.appendChild(expenseButton);
	spanDiv.setAttribute("class", "expenseDiv");

	li.appendChild(spanDiv);
	ul.appendChild(li);
	expenseArray.push([newTagName,newAmount]);
	document.getElementById("newExpense").value = "";
	document.getElementById("newExpenseAmount").value = "";

}



function generatePieChart(){

	google.charts.setOnLoadCallback(drawChart);

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

$("#ExpenseList").on("click","button",function(e){
	e.preventDefault();
	var number = $(this).siblings(".amount").text();
	number = parseFloat(number);
	net = net + number;
	document.getElementById("netEarnings").innerHTML = "Net:    $" + net;

	$(this).parent().remove();
});
