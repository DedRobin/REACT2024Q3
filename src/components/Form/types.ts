import { TData } from "../Data/types";

type Errors =
  | (TData & { terms?: boolean; confirmPassword?: string })
  | Record<string, string>;

type FieldProps = {
  errors: Errors;
};

type UpdatedData = Omit<TData, "avatar"> & {
  avatar: FormDataEntryValue | null;
  terms?: boolean;
  confirmPassword?: string;
};

type ExtractorFunction = (formData: FormData) => UpdatedData;

type ValidationFunction = (updatedData: UpdatedData) => Promise<Errors>;

export type {
  FieldProps,
  UpdatedData,
  ValidationFunction,
  ExtractorFunction,
  Errors,
};
