'use strict';


// объявление переменных
  let money = +prompt('Ваш месячный доход?','500000');//запрос у пользователя
  let income = 'строка с дополнительными доходом (например: фриланс)';
  let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','1000, 5000, 10000').split(',');
  
  let NumAddExpenses = addExpenses.map(function (item) {
    return parseFloat(item);//приведение к числу
  });

  //функция вычисления суммы массива 
  function arraySum(array){
    let a = 0;
    for(let i = 0; i < array.length; i++){
      a += array[i];
        }
       
        return(a);
    
    }
 let sumNumAddExpenses = arraySum(NumAddExpenses);
 

  let deposit = confirm('Есть ли у вас депозит в банке');
  let mission = 500000000;
  let period = 9;

  let expenses1 = prompt('Введите обязательную статью расходов?', 'Обучение');
  let amount1 = +prompt('Во сколько это обойдется?', '30000');
  let expenses2 = prompt('Введите еще одну обязательную статью расходов?', 'реклама');
  let amount2 = +prompt('Во сколько обойдется еще одна статья расходов', '20000');

  let budgetMonth = (money - sumNumAddExpenses -  amount1 - amount2);//вычисление бюджета за месяц
 

  // Вывод в модальное окно
  // alert(income);

  //Вывод в консоль
  console.log(typeof money); // вывод типа данных
  console.log(typeof income); // вывод типа данных
  console.log(typeof deposit); // вывод типа данных
  console.log(addExpenses.length); // вывод количества символов
  console.log('Период равен ' + period + ' месяцев'); //Период равен (period) месяцев
  console.log('Цель заработать ' + mission + ' рублей');//Цель заработать
  console.log(addExpenses);
  console.log('Цель будет достигнута за ' +  Math.ceil(mission/budgetMonth) + ' месяцев');//вывод срока
  


//объявление переменных
  let budgetDay = (budgetMonth/30);

//Вывод в консоль
  console.log('Бюджет на день = ' + budgetDay + 'руб.');//вывод дневного бюджета

// конструкция условий
if (budgetDay >= 1200){
  console.log('У вас высокий уровень дохода');
} else if(budgetDay >= 600){
  console.log('У вас средний уровень дохода');
} else if(budgetDay >= 0){
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так'); //Если меньше 0
}
