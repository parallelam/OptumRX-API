import { iSignUpSubmit, iSignUpResponse, HttpSuccess, HttpServerError, HttpUserError, SuccessResponses, UserErrors, ServerErrors, iSignUp, iHttpResponse } from '.';

export default class SignUp implements iSignUp {
  public signUpSubmission: iSignUpSubmit;
  public signUpResponse: iSignUpResponse;
  public requestSuccessChance: number;
  public successResponse: HttpSuccess | null;
  public serverErrorResponse: HttpServerError | null;
  public userErrorResponse: HttpUserError | null;
  public errorDichotomy: number;
  public deliverError: boolean;
  constructor(requestBody: iSignUpSubmit) {
    let statusKey: iHttpResponse;
    this.signUpSubmission = requestBody;
    this.requestSuccessChance = Math.floor(Math.random() * Math.floor(100) + 1);
    console.log(`Request Success Chance: ${this.requestSuccessChance}`)
    this.errorDichotomy = Math.floor(Math.random() * Math.floor(1));
    console.log(`Error Dichotomy: ${this.errorDichotomy}`)
    if (this.requestSuccessChance > 30) {
      let successStatus: iHttpResponse[];
      this.successResponse = SuccessResponses[Math.floor(Math.random() * SuccessResponses.length)].code
      successStatus = SuccessResponses.filter(value => {
        return value.code === this.successResponse
      })
      console.log('\nLine 22: let successStatus Value')
      console.log(successStatus)
      statusKey = <iHttpResponse>successStatus.reduce((a) => Object.assign((a), {}))
      console.log('\nLine 27: let statusKey Value')
      console.log(statusKey)
      this.signUpResponse = {
        status: statusKey,
        submission: requestBody
      };
      console.log('\nSignUp Response Object:')
      console.log(this.signUpResponse)
      this.userErrorResponse = null;
      this.serverErrorResponse = null;
      this.deliverError = false;
    } else {
      let errorStatus: iHttpResponse[];
      this.deliverError = true;
      console.log('\nApplication Generated Random Error')
      this.successResponse = null;
      this.userErrorResponse = UserErrors[Math.floor(Math.random() * UserErrors.length)].code;
      console.log('\nUser Error Response Value:')
      console.log(this.userErrorResponse)
      this.serverErrorResponse = ServerErrors[Math.floor(Math.random() * ServerErrors.length)].code;
      console.log('\nServer Error Response Value:')
      console.log(this.serverErrorResponse)
      this.errorDichotomy === 1 ? errorStatus = UserErrors.filter(value => { return value.code === this.userErrorResponse }) : errorStatus = ServerErrors.filter(value => {
        return value.code === this.serverErrorResponse
      })
      statusKey = <iHttpResponse>errorStatus.reduce((a) => Object.assign((a), {}))
      console.log('\nLine 57: let statusKey Value')
      console.log(statusKey)
      this.signUpResponse = {
        status: statusKey,
        submission: requestBody
      };
    }
  }
}
