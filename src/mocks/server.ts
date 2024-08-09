import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { mockPeople } from "./data";

const mockHandlers = [
  http.get("https://swapi.dev/api/people", () => {
    return HttpResponse.json(mockPeople);
  }),
  http.get(
    "https://swapi.dev/api/people/:id",
    ({ params }: { params: { id: string } }) => {
      const id = Number(params.id);
      return HttpResponse.json(mockPeople.results[id + 1]);
    },
  ),
];

const mockServer = setupServer(...mockHandlers);

export default mockServer;
