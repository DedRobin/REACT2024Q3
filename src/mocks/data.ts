import { SwapiResponse } from "@/store/apiSlice";

const mockCount = 10;

const results = new Array(mockCount).fill(null).map((_, i) => ({
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
  count: mockCount,
  next: null,
  previous: null,
  results,
};

const mockPersonId = String(Math.floor(Math.random() * mockCount) + 1);

export { mockPeople, mockPersonId };
