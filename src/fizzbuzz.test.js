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
  });