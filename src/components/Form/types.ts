import { TData } from "../Data/types";

type FieldProps = {
  errors: TData | Record<string, string>;
};

type UpdatedData = Omit<TData, "avatar"> & {
  confirmPassword?: string;
  avatar: FormDataEntryValue | null;
};

type ExtractorFunction = (formData: FormData) => UpdatedData;

type ValidationFunction = (
  updatedData: UpdatedData,
) => Promise<Record<string, string>>;

export type { FieldProps, UpdatedData, ValidationFunction, ExtractorFunction };
