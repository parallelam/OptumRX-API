import { iSignUpSubmit, iHttpResponse } from '.'

export interface iSignUpResponse {
  submission: iSignUpSubmit;
  status: iHttpResponse;
}