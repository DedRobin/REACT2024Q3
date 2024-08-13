type TFormData = {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: string;
  avatar: string;
  country: string;
};

type TDataProps = {
  data: TFormData;
};

export type { TFormData, TDataProps };
