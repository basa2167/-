let money= prompt("Ваш бюджет на месяц", "");

let time= prompt("Введите дату в формате YYYY-MM-DD", "");



let appData={
    moneyData:money,
    timeData: time,
    
    expenses : {
        exepenses1:prompt("Во сколько обойдется", ""),
        },
    optionalExpenses:{
        
    },
    income:[],
    savings:false, 
}
alert(appData.expenses.exepenses1/30);