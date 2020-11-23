import { iHttpResponse } from '.'

const InternalServerError: iHttpResponse = {
  code: 500,
  message: 'The server has encountered a situation it doesn\'t know how to handle.'
}

const NotImplemented: iHttpResponse = {
  code: 501,
  message: 'The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.'
}

const BadGateway: iHttpResponse = {
  code: 502,
  message: 'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.'
}

const ServiceUnavailable: iHttpResponse = {
  code: 503,
  message: 'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.'
}

const GatewayTimeout: iHttpResponse = {
  code: 504,
  message: 'This error response is given when the server is acting as a gateway and cannot get a response in time.'
}

const HttpVersionNotSupported: iHttpResponse = {
  code: 505,
  message: 'The HTTP version used in the request is not supported by the server.'
}

const VariantAlsoNegotiates: iHttpResponse = {
  code: 506,
  message: 'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.'
}

const InsufficientStorage: iHttpResponse = {
  code: 507,
  message: 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.'
}

const LoopDetected: iHttpResponse = {
  code: 508,
  message: 'The server detected an infinite loop while processing the request.'
}

const NotExtended: iHttpResponse = {
  code: 510,
  message: 'Further extensions to the request are required for the server to fulfil it.'
}

const NetworkAuthenticationRequired: iHttpResponse = {
  code: 511,
  message: 'The 511 status code indicates that the client needs to authenticate to gain network access.'
}

export const ServerErrors: Array<iHttpResponse> = [InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported, VariantAlsoNegotiates, InsufficientStorage, LoopDetected, NotExtended, NetworkAuthenticationRequired]