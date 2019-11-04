let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue =document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByClassName('expenses-item-btn'),
    optionalExpensesBtn = document.getElementsByClassName('optionalexpenses-btn'),
    countBtn = document.getElementsByClassName('count-budget-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;

   

    startBtn.addEventListener('click', function(){
        money = +prompt("Ваш бюджет на месяц ?");
        time = prompt("Введите дату в формате YYYY-MM-DD");
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() +1;
        dayValue.value = new Date(Date.parse(time)).getDate();

        while (isNaN(money) || money == '' || money == null){
            money = prompt("Ваш бюджет?", "");
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue[0].textContent = money.toFixed();
    });

        expensesBtn[0].addEventListener('click',function(){
          let sum = 0;
          for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
            if ((typeof (a)) === 'string' && (typeof (a)) != null &&
                (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
                sum += +b;
            }else i = i-1;
        }
        expensesValue[0].textContent = sum;
        });

        optionalExpensesBtn[0].addEventListener('click',function(){
            for (i = 0; i < optionalExpensesItem.length; i++) {
                let expEx = optionalExpensesItem[i].value;
                appData.optionalExpenses[i] = expEx;
                optionalExpensesValue[0].textContent += appData.optionalExpenses[i] + " ";
                
            }
        });

        countBtn[0].addEventListener('click', function(){
            if (appData.budget != undefined){
            appData.maneyPerDay = appData.budget / 30;
            dayBudgetValue[0].textContent = appData.maneyPerDay;
            console.log(appData.maneyPerDay); 
                if (+appData.maneyPerDay < 100) {
                    console.log(appData.maneyPerDay);
                    levelValue[0].textContent = "бедняк";
                } else if (+appData.maneyPerDay > 100 && +appData.maneyPerDay < 2000) {
                    console.log(appData.maneyPerDay);
                    levelValue[0].textContent = "средний класс";
                } else if (+appData.maneyPerDay > 2000) {
                    console.log(appData.maneyPerDay);
                    levelValue[0].textContent = "буржуй";
                }
            }else{
                dayBudgetValue[0].textContent = "произошла ошибка";
            }
        });

        incomeItem.addEventListener('input', function(){
            let items = incomeItem.value;
            appData.income = items.split(', ');
            incomeValue[0].textContent = appData.income;
        });


        checkSavings.addEventListener('click', function(){
            if (appData.savings == true){
                appData.savings = false;
            }else{
                appData.savings = true;
            }
        });

        sumValue.addEventListener('input', function(){
            if(appData.savings == true){
                let sum = +sumValue.value,
                    percent = +percentValue.value;

                    appData.monthIncome = sum/100/12*percent;
                    appData.yearIncome = sum/100*percent;

                    monthSavingsValue[0].textContent = appData.monthIncome.toFixed(1);
                    yearSavingsValue[0].textContent = appData.yearIncome.toFixed(1);
            }
        });
        percentValue.addEventListener('input', function(){
            if(appData.savings == true){
                let sum = +sumValue.value,
                    percent = +percentValue.value;

                    appData.monthIncome = sum/100/12*percent;
                    appData.yearIncome = sum/100*percent;

                    monthSavingsValue[0].textContent = appData.monthIncome.toFixed(1);
                    yearSavingsValue[0].textContent = appData.yearIncome.toFixed(1);
            }
        });
         
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
        
    };
   // console.log(appData);
    
    
    //appData.chooseExpenses();
    
    
    
   // checkSavings();