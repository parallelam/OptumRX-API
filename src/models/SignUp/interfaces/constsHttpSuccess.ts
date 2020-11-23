import { iHttpResponse } from '.'

const Ok: iHttpResponse = {
  code: 200,
  message: 'The request has succeeded. The meaning of the success depends on the HTTP method.'
}

const Created: iHttpResponse = {
  code: 201,
  message: 'The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT requests.'
}

const Accepted: iHttpResponse = {
  code: 202,
  message: 'The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.'
}

const NonAuthoritativeInformation: iHttpResponse = {
  code: 203,
  message: 'This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status.'
}

const NoContent: iHttpResponse = {
  code: 204,
  message: 'There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.'
}

const ResetContent: iHttpResponse = {
  code: 205,
  message: 'Tells the user-agent to reset the document which sent this request.'
}

const PartialContent: iHttpResponse = {
  code: 206,
  message: 'This response code is used when the Range header is sent from the client to request only part of a resource'
}

const MultiStatus: iHttpResponse = {
  code: 207,
  message: 'Conveys information about multiple resources, for situations where multiple status codes might be appropriate.'
}

const AlreadyReported: iHttpResponse = {
  code: 208,
  message: 'Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.'
}

const ImUsed: iHttpResponse = {
  code: 226,
  message: 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.'
}

export const SuccessResponses: Array<iHttpResponse> = [
  Ok, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultiStatus, AlreadyReported, ImUsed
]