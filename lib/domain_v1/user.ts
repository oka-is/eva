import {RegistrationRequest, TerminateRequest, UpdateCredentialsRequest} from "~/desc/alice_v1_pb"

export function MapRegistrationUser(param: RegistrationUserDomain): RegistrationRequest.User {
  const out = new RegistrationRequest.User()
  out.setVer(1)
  out.setIdentity(param.identity)
  out.setVerifier(param.verifier)
  out.setSrpSalt(param.srpSalt)
  out.setPasswdSalt(param.passwdSalt)
  out.setPrivKeyEnc(param.privKeyEnc)
  out.setPubkey(param.pubKey)
  return out
}

export function MapUpdateCredentials(param: UpdateCredentialsOpts): UpdateCredentialsRequest {
  const out = new UpdateCredentialsRequest()
  out.setOldIdentity(param.oldIdentity)
  out.setNewIdentity(param.newIdentity)
  out.setVerifier(param.verifier)
  out.setSrpSalt(param.srpSalt)
  out.setPasswdSalt(param.passwdSalt)
  out.setPrivKeyEnc(param.privKeyEnc)
  return out
}

export interface RegistrationUserDomain {
  identity: string
  verifier: Uint8Array
  srpSalt: Uint8Array
  passwdSalt: Uint8Array
  privKeyEnc: Uint8Array
  pubKey: Uint8Array
}

export interface UpdateCredentialsOpts {
  oldIdentity: string
  newIdentity: string
  verifier: Uint8Array
  srpSalt: Uint8Array
  passwdSalt: Uint8Array
  privKeyEnc: Uint8Array
}

export function MapTerminateUser(param: TerminateUserOpts): TerminateRequest {
  const out = new TerminateRequest()
  out.setIdentity(param.identity)
  return out
}

export interface TerminateUserOpts {
  identity: string
}
