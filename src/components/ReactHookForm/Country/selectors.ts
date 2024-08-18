import { RootState } from "../../../store";

const selectAllCountries = (state: RootState) => state.country;

export { selectAllCountries };
