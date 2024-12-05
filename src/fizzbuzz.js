function generarFizzBuzzDe(numero) {
    if(numero % 3 == 0) return "Fizz";
    if(numero == 5) return "Buzz";
    return numero.toString();
  }
  
  export default generarFizzBuzzDe;