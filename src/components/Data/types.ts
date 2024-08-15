type TData = {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: string;
  avatar: string;
  country: string;
};

type TFormData = {
  previous: TData;
  current: TData;
};

export type { TFormData, TData };
