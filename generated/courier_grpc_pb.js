// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var courier_pb = require('./courier_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_distribution_courier_CalculateNextDespatchDateByCourierRequestProto(arg) {
  if (!(arg instanceof courier_pb.CalculateNextDespatchDateByCourierRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.CalculateNextDespatchDateByCourierRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_CalculateNextDespatchDateByCourierRequestProto(buffer_arg) {
  return courier_pb.CalculateNextDespatchDateByCourierRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_courier_CalculateNextDespatchDateByCourierResponseProto(arg) {
  if (!(arg instanceof courier_pb.CalculateNextDespatchDateByCourierResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.CalculateNextDespatchDateByCourierResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_CalculateNextDespatchDateByCourierResponseProto(buffer_arg) {
  return courier_pb.CalculateNextDespatchDateByCourierResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_courier_GetAllCouriersRequestProto(arg) {
  if (!(arg instanceof courier_pb.GetAllCouriersRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.GetAllCouriersRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_GetAllCouriersRequestProto(buffer_arg) {
  return courier_pb.GetAllCouriersRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_courier_GetAllCouriersResponseProto(arg) {
  if (!(arg instanceof courier_pb.GetAllCouriersResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.GetAllCouriersResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_GetAllCouriersResponseProto(buffer_arg) {
  return courier_pb.GetAllCouriersResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_courier_GetCourierRequestProto(arg) {
  if (!(arg instanceof courier_pb.GetCourierRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.GetCourierRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_GetCourierRequestProto(buffer_arg) {
  return courier_pb.GetCourierRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_courier_GetCourierResponseProto(arg) {
  if (!(arg instanceof courier_pb.GetCourierResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.GetCourierResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_GetCourierResponseProto(buffer_arg) {
  return courier_pb.GetCourierResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_courier_GetCouriersRequestProto(arg) {
  if (!(arg instanceof courier_pb.GetCouriersRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.GetCouriersRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_GetCouriersRequestProto(buffer_arg) {
  return courier_pb.GetCouriersRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_courier_GetCouriersResponseProto(arg) {
  if (!(arg instanceof courier_pb.GetCouriersResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.GetCouriersResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_GetCouriersResponseProto(buffer_arg) {
  return courier_pb.GetCouriersResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_courier_SaveCouriersRequestProto(arg) {
  if (!(arg instanceof courier_pb.SaveCouriersRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.SaveCouriersRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_SaveCouriersRequestProto(buffer_arg) {
  return courier_pb.SaveCouriersRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_courier_SaveCouriersResponseProto(arg) {
  if (!(arg instanceof courier_pb.SaveCouriersResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.SaveCouriersResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_SaveCouriersResponseProto(buffer_arg) {
  return courier_pb.SaveCouriersResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_courier_SetCourierIsHiddenRequestProto(arg) {
  if (!(arg instanceof courier_pb.SetCourierIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.SetCourierIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_SetCourierIsHiddenRequestProto(buffer_arg) {
  return courier_pb.SetCourierIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_distribution_courier_SetCourierIsHiddenResponseProto(arg) {
  if (!(arg instanceof courier_pb.SetCourierIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.distribution.courier.SetCourierIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_distribution_courier_SetCourierIsHiddenResponseProto(buffer_arg) {
  return courier_pb.SetCourierIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var CourierServiceService = exports.CourierServiceService = {
  // Gets all undeleted Couriers
getAllCouriers: {
    path: '/bmapi.distribution.courier.CourierService/GetAllCouriers',
    requestStream: false,
    responseStream: false,
    requestType: courier_pb.GetAllCouriersRequestProto,
    responseType: courier_pb.GetAllCouriersResponseProto,
    requestSerialize: serialize_bmapi_distribution_courier_GetAllCouriersRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_courier_GetAllCouriersRequestProto,
    responseSerialize: serialize_bmapi_distribution_courier_GetAllCouriersResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_courier_GetAllCouriersResponseProto,
  },
  // Gets a specific Courier by Id, even if it has been soft-deleted. (Errors if not found).
getCourier: {
    path: '/bmapi.distribution.courier.CourierService/GetCourier',
    requestStream: false,
    responseStream: false,
    requestType: courier_pb.GetCourierRequestProto,
    responseType: courier_pb.GetCourierResponseProto,
    requestSerialize: serialize_bmapi_distribution_courier_GetCourierRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_courier_GetCourierRequestProto,
    responseSerialize: serialize_bmapi_distribution_courier_GetCourierResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_courier_GetCourierResponseProto,
  },
  // Gets specific Couriers by Id, even if they has been soft-deleted. (Errors if not found).
getCouriers: {
    path: '/bmapi.distribution.courier.CourierService/GetCouriers',
    requestStream: false,
    responseStream: false,
    requestType: courier_pb.GetCouriersRequestProto,
    responseType: courier_pb.GetCouriersResponseProto,
    requestSerialize: serialize_bmapi_distribution_courier_GetCouriersRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_courier_GetCouriersRequestProto,
    responseSerialize: serialize_bmapi_distribution_courier_GetCouriersResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_courier_GetCouriersResponseProto,
  },
  // Saves zero or more Couriers
saveCouriers: {
    path: '/bmapi.distribution.courier.CourierService/SaveCouriers',
    requestStream: false,
    responseStream: false,
    requestType: courier_pb.SaveCouriersRequestProto,
    responseType: courier_pb.SaveCouriersResponseProto,
    requestSerialize: serialize_bmapi_distribution_courier_SaveCouriersRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_courier_SaveCouriersRequestProto,
    responseSerialize: serialize_bmapi_distribution_courier_SaveCouriersResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_courier_SaveCouriersResponseProto,
  },
  // Hides or unhides the given Courier.
setCourierIsHidden: {
    path: '/bmapi.distribution.courier.CourierService/SetCourierIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: courier_pb.SetCourierIsHiddenRequestProto,
    responseType: courier_pb.SetCourierIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_distribution_courier_SetCourierIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_courier_SetCourierIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_distribution_courier_SetCourierIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_courier_SetCourierIsHiddenResponseProto,
  },
  // Calculate the next despatch date by the given Courier id.
calculateNextDespatchDateByCourier: {
    path: '/bmapi.distribution.courier.CourierService/CalculateNextDespatchDateByCourier',
    requestStream: false,
    responseStream: false,
    requestType: courier_pb.CalculateNextDespatchDateByCourierRequestProto,
    responseType: courier_pb.CalculateNextDespatchDateByCourierResponseProto,
    requestSerialize: serialize_bmapi_distribution_courier_CalculateNextDespatchDateByCourierRequestProto,
    requestDeserialize: deserialize_bmapi_distribution_courier_CalculateNextDespatchDateByCourierRequestProto,
    responseSerialize: serialize_bmapi_distribution_courier_CalculateNextDespatchDateByCourierResponseProto,
    responseDeserialize: deserialize_bmapi_distribution_courier_CalculateNextDespatchDateByCourierResponseProto,
  },
};

exports.CourierServiceClient = grpc.makeGenericClientConstructor(CourierServiceService);
