

google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback(drawChart);

var expenses = 0;
var salary = 0;
var firstFlag = 1;
var net = 0;
var warningAmount = 100;
var expenseArray = [['Expense Name','Expense Amount']];

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

	li.appendChild(document.createTextNode(newTagName + ": $" + newAmount));
	ul.appendChild(li);
	expenseArray.push([newTagName,newAmount]);

}

function generatePieChart(){

	google.charts.setOnLoadCallback(drawChart);

}
function drawChart() {

	var data = google.visualization.arrayToDataTable(expenseArray);


    var options = {
        title: 'My Expenses'
     };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}