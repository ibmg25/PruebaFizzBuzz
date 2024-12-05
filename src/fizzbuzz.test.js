import generarFizzBuzzDe from "./fizzbuzz";

describe("FizzBuzz", () => {
    it("deberia retornar el mismo numero", () => {
      expect(generarFizzBuzzDe(1)).toEqual("1");
    });
  });