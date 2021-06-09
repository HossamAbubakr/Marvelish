import { getComics } from "../api";

it("Making sure handleSubmit is defined", () => {
  expect(getComics).toBeDefined();
});

it("It should return 409 as the characterID passed is invalid", () => {
  getComics("00000").then((response) => {
    expect(response.statusCode).toBe(404);
  });
});

it("It should return 200 as the characterID passed is valid", () => {
  getComics("1009288").then((response) => {
    expect(response.statusCode).toBe(200);
  });
});
