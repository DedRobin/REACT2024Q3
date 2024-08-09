import { SwapiResponse } from "@/store/apiSlice";

const count = 10;
const results = new Array(count).fill(null).map((_, i) => ({
  name: `Foo${i + 1}`,
  url: `http://mock-url/mock-person/${i + 1}`,
  height: `height${i + 1}`,
  mass: `mass${i + 1}`,
  hairColor: `hairColor${i + 1}`,
  skinColor: `skinColor${i + 1}`,
  eyeColor: `eyeColor${i + 1}`,
  birthday: `birthday${i + 1}`,
  gender: `gender${i + 1}`,
}));

const mockPeople: SwapiResponse = {
  count,
  next: null,
  previous: null,
  results,
};

export { mockPeople };
