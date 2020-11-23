import { iSignUpSubmit, iSignUpResponse, HttpSuccess, HttpServerError, HttpUserError } from '.'

export interface iSignUp {
  signUpSubmission: iSignUpSubmit;
  signUpResponse: iSignUpResponse;
  requestSuccessChance: number;
  successResponse: HttpSuccess | null;
  serverErrorResponse: HttpServerError | null;
  userErrorResponse: HttpUserError | null;
  errorDichotomy: number;
  deliverError: boolean;
}