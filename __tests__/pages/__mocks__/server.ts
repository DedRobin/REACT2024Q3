import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { mockPerson } from "./data";

const mockHandler = http.get("https://swapi.dev/api/people", () => {
  return HttpResponse.json(mockPerson);
});

const mockServer = setupServer(mockHandler);

export default mockServer;
