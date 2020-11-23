import { SignUp, iSignUpResponse, iSignUp } from '.'
import { Response, Request } from 'express'

export default class SignUpController {
  public static async perform(req: Request, res: Response): Promise<Response> {
    console.log('\nNew Signup Request:')
    console.log(req.body)
    let responseToSignupObject: iSignUpResponse;
    let responseToSignupCode: number | null;
    let signUpObject: iSignUp;
    try {
      signUpObject = new SignUp(req.body);
      responseToSignupObject = signUpObject.signUpResponse;
      if (signUpObject.deliverError == false) {
        responseToSignupCode = signUpObject.successResponse
        return await res.status(responseToSignupCode).json(responseToSignupObject)
      } else {
        signUpObject.errorDichotomy == 1 ? responseToSignupCode = signUpObject.userErrorResponse : responseToSignupCode = signUpObject.serverErrorResponse;
        return await res.status(responseToSignupCode).json(responseToSignupObject)
      }
    } catch (error) {
      console.error('\nError Experienced:\n')
      console.error(error)
      return await res.status(500).send(`Application Experienced Genuine Error: 

      ${error.message}`)
    }
  }
}