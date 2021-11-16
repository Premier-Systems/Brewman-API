// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var creditterm_pb = require('./creditterm_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_outlets_creditterm_GetAllCreditTermsRequestProto(arg) {
  if (!(arg instanceof creditterm_pb.GetAllCreditTermsRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetAllCreditTermsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetAllCreditTermsRequestProto(buffer_arg) {
  return creditterm_pb.GetAllCreditTermsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_GetAllCreditTermsResponseProto(arg) {
  if (!(arg instanceof creditterm_pb.GetAllCreditTermsResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetAllCreditTermsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetAllCreditTermsResponseProto(buffer_arg) {
  return creditterm_pb.GetAllCreditTermsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_GetCreditTermRequestProto(arg) {
  if (!(arg instanceof creditterm_pb.GetCreditTermRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetCreditTermRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetCreditTermRequestProto(buffer_arg) {
  return creditterm_pb.GetCreditTermRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_GetCreditTermResponseProto(arg) {
  if (!(arg instanceof creditterm_pb.GetCreditTermResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetCreditTermResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetCreditTermResponseProto(buffer_arg) {
  return creditterm_pb.GetCreditTermResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_GetCreditTermsRequestProto(arg) {
  if (!(arg instanceof creditterm_pb.GetCreditTermsRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetCreditTermsRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetCreditTermsRequestProto(buffer_arg) {
  return creditterm_pb.GetCreditTermsRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_GetCreditTermsResponseProto(arg) {
  if (!(arg instanceof creditterm_pb.GetCreditTermsResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.GetCreditTermsResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_GetCreditTermsResponseProto(buffer_arg) {
  return creditterm_pb.GetCreditTermsResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_SaveCreditTermRequestProto(arg) {
  if (!(arg instanceof creditterm_pb.SaveCreditTermRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.SaveCreditTermRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_SaveCreditTermRequestProto(buffer_arg) {
  return creditterm_pb.SaveCreditTermRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_SaveCreditTermResponseProto(arg) {
  if (!(arg instanceof creditterm_pb.SaveCreditTermResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.SaveCreditTermResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_SaveCreditTermResponseProto(buffer_arg) {
  return creditterm_pb.SaveCreditTermResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_SetCreditTermIsHiddenRequestProto(arg) {
  if (!(arg instanceof creditterm_pb.SetCreditTermIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.SetCreditTermIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_SetCreditTermIsHiddenRequestProto(buffer_arg) {
  return creditterm_pb.SetCreditTermIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_creditterm_SetCreditTermIsHiddenResponseProto(arg) {
  if (!(arg instanceof creditterm_pb.SetCreditTermIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.creditterm.SetCreditTermIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_creditterm_SetCreditTermIsHiddenResponseProto(buffer_arg) {
  return creditterm_pb.SetCreditTermIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var CreditTermServiceService = exports.CreditTermServiceService = {
  // Gets all undeleted CreditTerms
getAllCreditTerms: {
    path: '/bmapi.outlets.creditterm.CreditTermService/GetAllCreditTerms',
    requestStream: false,
    responseStream: false,
    requestType: creditterm_pb.GetAllCreditTermsRequestProto,
    responseType: creditterm_pb.GetAllCreditTermsResponseProto,
    requestSerialize: serialize_bmapi_outlets_creditterm_GetAllCreditTermsRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_creditterm_GetAllCreditTermsRequestProto,
    responseSerialize: serialize_bmapi_outlets_creditterm_GetAllCreditTermsResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_creditterm_GetAllCreditTermsResponseProto,
  },
  // Gets a specific CreditTerm by Id. (Errors if not found).
getCreditTerm: {
    path: '/bmapi.outlets.creditterm.CreditTermService/GetCreditTerm',
    requestStream: false,
    responseStream: false,
    requestType: creditterm_pb.GetCreditTermRequestProto,
    responseType: creditterm_pb.GetCreditTermResponseProto,
    requestSerialize: serialize_bmapi_outlets_creditterm_GetCreditTermRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_creditterm_GetCreditTermRequestProto,
    responseSerialize: serialize_bmapi_outlets_creditterm_GetCreditTermResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_creditterm_GetCreditTermResponseProto,
  },
  // Gets specific CreditTerms by Ids. (Errors if any not found).
getCreditTerms: {
    path: '/bmapi.outlets.creditterm.CreditTermService/GetCreditTerms',
    requestStream: false,
    responseStream: false,
    requestType: creditterm_pb.GetCreditTermsRequestProto,
    responseType: creditterm_pb.GetCreditTermsResponseProto,
    requestSerialize: serialize_bmapi_outlets_creditterm_GetCreditTermsRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_creditterm_GetCreditTermsRequestProto,
    responseSerialize: serialize_bmapi_outlets_creditterm_GetCreditTermsResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_creditterm_GetCreditTermsResponseProto,
  },
  // Saves a single CreditTerm
saveCreditTerm: {
    path: '/bmapi.outlets.creditterm.CreditTermService/SaveCreditTerm',
    requestStream: false,
    responseStream: false,
    requestType: creditterm_pb.SaveCreditTermRequestProto,
    responseType: creditterm_pb.SaveCreditTermResponseProto,
    requestSerialize: serialize_bmapi_outlets_creditterm_SaveCreditTermRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_creditterm_SaveCreditTermRequestProto,
    responseSerialize: serialize_bmapi_outlets_creditterm_SaveCreditTermResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_creditterm_SaveCreditTermResponseProto,
  },
  // Hides or unhides the given CreditTerm.
setCreditTermIsHidden: {
    path: '/bmapi.outlets.creditterm.CreditTermService/SetCreditTermIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: creditterm_pb.SetCreditTermIsHiddenRequestProto,
    responseType: creditterm_pb.SetCreditTermIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_outlets_creditterm_SetCreditTermIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_creditterm_SetCreditTermIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_outlets_creditterm_SetCreditTermIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_creditterm_SetCreditTermIsHiddenResponseProto,
  },
};

exports.CreditTermServiceClient = grpc.makeGenericClientConstructor(CreditTermServiceService);
