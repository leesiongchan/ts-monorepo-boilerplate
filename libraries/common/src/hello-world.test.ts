import * as helloWorld from "./hello-world";

it("output hello world", () => {
  expect(helloWorld.greeting()).toBe("Hello World!");
});
