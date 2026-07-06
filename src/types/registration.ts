export type RegistrationForm = {
  parentName: string;
  address: string;
};

export type RegistrationErrors = Partial<
  Record<keyof RegistrationForm, string>
>;
