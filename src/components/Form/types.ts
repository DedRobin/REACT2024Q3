import { TData } from "../Data/types";

type FieldProps = {
  errors: UpdatedData | Record<string, string>;
};

type UpdatedData = Omit<TData, "avatar"> & {
  avatar: FormDataEntryValue | null;
  confirmPassword?: string;
  terms?: boolean;
};

type ExtractorFunction = (formData: FormData) => UpdatedData;

type ValidationFunction = (
  updatedData: UpdatedData,
) => Promise<Record<string, string>>;

export type { FieldProps, UpdatedData, ValidationFunction, ExtractorFunction };
