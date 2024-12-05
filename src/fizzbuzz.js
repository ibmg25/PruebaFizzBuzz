function generarFizzBuzzDe(numero) {
    let result = "";
    if(numero % 3 == 0) result += "Fizz";
    if(numero % 5 == 0) result += "Buzz";
    if(result == "") result = numero.toString();
    return result;
  }
  
  export default generarFizzBuzzDe;