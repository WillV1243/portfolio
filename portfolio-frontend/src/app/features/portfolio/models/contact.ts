export interface ContactForm {
  name: string;
  company: string;
  email: string;
  message: string;
  recaptcha: string;
}

export interface ContactFormState {
  loading: boolean;
  loaded: boolean;
  response: any;
  error: any;
}

// Type check for state interface
export const isInstanceOfContactFormState = (object: any): object is ContactFormState => {
  if (!!object) return;

  return 'loading' in object && 'loaded' in object && 'response' in object && 'error' in object;
}

// Property check for state interface
export const contactStateProperyCheck = (string: string): boolean => {
  if (!!string && string.length === 0) return;

  const propertyNames: string[] = ['loading', 'loaded', 'response', 'error'];

  for (const propertyName of propertyNames) {
    if (propertyName === string) return true;
  }

  return false;
}
