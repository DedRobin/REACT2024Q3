import { SwapiResponse } from "@/store/apiSlice";

const mockPerson: SwapiResponse = {
  results: [
    {
      name: "Foo1",
      url: "http://mock-url/mock-person/1",
      height: "height1",
      mass: "mass1",
      hairColor: "hairColor1",
      skinColor: "skinColor1",
      eyeColor: "eyeColor1",
      birthday: "birthday1",
      gender: "gender1",
    },
    {
      name: "Foo2",
      url: "http://mock-url/mock-person/2",
      height: "height2",
      mass: "mass2",
      hairColor: "hairColor2",
      skinColor: "skinColor2",
      eyeColor: "eyeColor2",
      birthday: "birthday2",
      gender: "gender2",
    },
  ],
  count: 2,
  next: null,
  previous: null,
};

export { mockPerson };
