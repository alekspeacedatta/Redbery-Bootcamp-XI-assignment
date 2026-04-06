// features/register/model/registration-steps.ts

export const RegistrationStep = {
  EMAIL: 'email',
  PASSWORDS: 'passwords',
  USERNAME: 'username'
} as const;

export type RegistrationStepType = typeof RegistrationStep[keyof typeof RegistrationStep];

export const STEPS: RegistrationStepType[] = [ 
  RegistrationStep.EMAIL, 
  RegistrationStep.PASSWORDS, 
  RegistrationStep.USERNAME
];

export const stepFields = {
  [RegistrationStep.EMAIL]: ['email'],
  [RegistrationStep.PASSWORDS]: ['password', 'password_confirmation'],
  [RegistrationStep.USERNAME]: ['username'],
} as const;
