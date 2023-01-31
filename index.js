function saturdayFun(string = "roller-skate"){    
    return `This Saturday, I want to ${string}!`
}

const mondayWork = function(string = "go to the office"){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(highlight = '*', msg){

    return function(string = "special"){
        return `You are ${highlight}${string}${highlight}!`
    }

   console.log(`${highlight} ${msg} ${highlight}`);
   return `${highlight} ${msg} ${highlight}`
}

wrapAdjective("%")("a dedicated programmer");

/*function outer(greeting, msg = "It's a fine day to learn") {
    return function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
  }
  
  outer("Hello")("student", "JavaScript");*/