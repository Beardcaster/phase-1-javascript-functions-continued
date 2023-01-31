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

//Referenced Flatiron materials for wrapAdjective function. Will update with proper attribution when I know how.