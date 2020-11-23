import { iHttpResponse } from '.'

const BadRequest: iHttpResponse = {
  code: 400,
  message: 'The server could not understand the request due to invalid syntax.'
};
const Unauthorized: iHttpResponse = {
  code: 401,
  message: 'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'
};
const PaymentRequired: iHttpResponse = {
  code: 402,
  message: 'This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.'
};
const Forbidden: iHttpResponse = {
  code: 403,
  message: 'The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client\'s identity is known to the server.'
};
const NotFound: iHttpResponse = {
  code: 404,
  message: 'The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.'
};
const MethodNotAllowed: iHttpResponse = {
  code: 405,
  message: 'The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.'
};
const NotAcceptable: iHttpResponse = {
  code: 406,
  message: 'This response is sent when the web server, after performing server-driven content negotiation, doesn\'t find any content that conforms to the criteria given by the user agent.'
};
const ProxyAuthenticationRequired: iHttpResponse = {
  code: 407,
  message: 'This is similar to 401 but authentication is needed to be done by a proxy.'
};
const RequestTimeout: iHttpResponse = {
  code: 408,
  message: 'This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.'
};
const Conflict: iHttpResponse = {
  code: 409,
  message: 'This response is sent when a request conflicts with the current state of the server.'
};
const Gone: iHttpResponse = {
  code: 410,
  message: 'This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.'
};
const LengthRequired: iHttpResponse = {
  code: 411,
  message: 'Server rejected the request because the Content-Length header field is not defined and the server requires it.'
};
const PreconditionFailed: iHttpResponse = {
  code: 412,
  message: 'The client has indicated preconditions in its headers which the server does not meet.'
};
const PayloadTooLarge: iHttpResponse = {
  code: 413,
  message: 'Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.'
};
const UriTooLong: iHttpResponse = {
  code: 414,
  message: 'The URI requested by the client is longer than the server is willing to interpret.'
};
const UnsupportedMediaType: iHttpResponse = {
  code: 415,
  message: 'The media format of the requested data is not supported by the server, so the server is rejecting the request.'
};
const RangeNotSatisfiable: iHttpResponse = {
  code: 416,
  message: 'The range specified by the Range header field in the request can\'t be fulfilled; it\'s possible that the range is outside the size of the target URI\'s data.'
};
const ExpectationFailed: iHttpResponse = {
  code: 417,
  message: 'This response code means the expectation indicated by the Expect request header field can\'t be met by the server.'
};
const ImATeapot: iHttpResponse = {
  code: 418,
  message: 'The server refuses the attempt to brew coffee with a teapot.'
};
const MisdirectedRequest: iHttpResponse = {
  code: 421,
  message: 'The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.'
};
const UnprocessableEntity: iHttpResponse = {
  code: 422,
  message: 'The request was well-formed but was unable to be followed due to semantic errors.'
};
const Locked: iHttpResponse = {
  code: 423,
  message: 'The resource that is being accessed is locked.'
};
const FailedDependency: iHttpResponse = {
  code: 424,
  message: 'The request failed due to failure of a previous request.'
};
const TooEarly: iHttpResponse = {
  code: 425,
  message: 'Indicates that the server is unwilling to risk processing a request that might be replayed.'
};
const UpgradeRequired: iHttpResponse = {
  code: 426,
  message: 'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).'
};
const PreconditionRequired: iHttpResponse = {
  code: 428,
  message: 'The origin server requires the request to be conditional. This response is intended to prevent the \'lost update\' problem, where a client GETs a resource\'s state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.'
};
const TooManyRequests: iHttpResponse = {
  code: 429,
  message: 'The user has sent too many requests in a given amount of time ("rate limiting").'
};
const RequestHeaderFieldsTooLarge: iHttpResponse = {
  code: 431,
  message: 'The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.'
};
const UnavailableForLegalReasons: iHttpResponse = {
  code: 451,
  message: 'The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.'
};

export const UserErrors: Array<iHttpResponse> = [BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, PayloadTooLarge, UriTooLong, UnsupportedMediaType, RangeNotSatisfiable, ExpectationFailed, ImATeapot, MisdirectedRequest, UnprocessableEntity, Locked, FailedDependency, TooEarly, UpgradeRequired, PreconditionRequired, TooManyRequests, RequestHeaderFieldsTooLarge, UnavailableForLegalReasons]