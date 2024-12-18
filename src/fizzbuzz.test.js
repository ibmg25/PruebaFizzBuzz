import generarFizzBuzzDe from "./fizzbuzz";

describe("FizzBuzz", () => {
    it("deberia retornar el mismo numero", () => {
      expect(generarFizzBuzzDe(1)).toEqual("1");
    });

    it("Dado el 3, deberia retornar Fizz", () => {
        expect(generarFizzBuzzDe(3)).toEqual("Fizz");
    });

    it("Dado el 5, deberia retornar Buzz", () => {
        expect(generarFizzBuzzDe(5)).toEqual("Buzz");
    });

    it("Dado un multiplo de 3, deberia retornar Fizz", () => {
        expect(generarFizzBuzzDe(6)).toEqual("Fizz");
    });

    it("Dado un multiplo de 5, deberia retornar Buzz", () => {
        expect(generarFizzBuzzDe(10)).toEqual("Buzz");
    });

    it("Dado un multiplo de 3 y 5, deberia retornar FizzBuzz", () => {
        expect(generarFizzBuzzDe(15)).toEqual("FizzBuzz");
    });
  });