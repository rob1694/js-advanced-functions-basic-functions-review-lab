// Your code here
function saturdayFun(todo = "roller-skate") {
    return `This Saturday, I want to ${todo}!`
  }

function mondayWork(todo = "go to the office") {
    return `This Monday, I will ${todo}.`
}

function wrapAdjective(star = "*") {
    return function(word = 'special') {
        return `You are ${star}${word}${star}!`;
    } 
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}

function actionApplyer(start, array) {
  let inte = start

  for (let i = 0; i < array.length; i++ ){
    inte = array[i](inte)
  }

  return inte
}