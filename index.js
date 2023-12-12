function scuberGreetingForFeet(someNum){
  // Write your code here!
  if (someNum<=400){
    return "This one is on me!";
  }
  else if (someNum>400 && someNum <2000){
    return "That will be twenty bucks."
  }
  else if (someNum>2000 && someNum<=2500){
    return "I will gladly take your thirty bucks."
  }
  else if (someNum>2500){
    return "No can do."
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  return cityName == "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(someTip){
  // Write your code here!
  switch(someTip){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you."
      break;
    default: 
      return "Bye."
  }
}