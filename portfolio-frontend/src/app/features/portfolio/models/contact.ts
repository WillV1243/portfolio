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
  formSubmitted: boolean;
  response: any;
  error: any;
}

// Type check for state interface
export const isInstanceOfContactFormState = (object: any): object is ContactFormState => {
  if (!object || object === null || object === undefined) return;

  return 'loading' in object && 'loaded' in object && 'formSubmitted' in object && 'response' in object && 'error' in object;
}

