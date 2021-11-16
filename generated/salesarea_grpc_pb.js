// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// THIS FILE IS GENERATED
'use strict';
var grpc = require('@grpc/grpc-js');
var salesarea_pb = require('./salesarea_pb.js');
var google_type_timeofday_pb = require('./google/type/timeofday_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('./google/type/date_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_arrayvalues_pb = require('./common/arrayvalues_pb.js');
var common_enums_generated_pb = require('./common/enums.generated_pb.js');
var common_enumarrayvalues_generated_pb = require('./common/enumarrayvalues.generated_pb.js');

function serialize_bmapi_outlets_salesarea_GetAllSalesAreasRequestProto(arg) {
  if (!(arg instanceof salesarea_pb.GetAllSalesAreasRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salesarea.GetAllSalesAreasRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salesarea_GetAllSalesAreasRequestProto(buffer_arg) {
  return salesarea_pb.GetAllSalesAreasRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salesarea_GetAllSalesAreasResponseProto(arg) {
  if (!(arg instanceof salesarea_pb.GetAllSalesAreasResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salesarea.GetAllSalesAreasResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salesarea_GetAllSalesAreasResponseProto(buffer_arg) {
  return salesarea_pb.GetAllSalesAreasResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salesarea_GetSalesAreasRequestProto(arg) {
  if (!(arg instanceof salesarea_pb.GetSalesAreasRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salesarea.GetSalesAreasRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salesarea_GetSalesAreasRequestProto(buffer_arg) {
  return salesarea_pb.GetSalesAreasRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salesarea_GetSalesAreasResponseProto(arg) {
  if (!(arg instanceof salesarea_pb.GetSalesAreasResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salesarea.GetSalesAreasResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salesarea_GetSalesAreasResponseProto(buffer_arg) {
  return salesarea_pb.GetSalesAreasResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salesarea_SaveSalesAreasRequestProto(arg) {
  if (!(arg instanceof salesarea_pb.SaveSalesAreasRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salesarea.SaveSalesAreasRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salesarea_SaveSalesAreasRequestProto(buffer_arg) {
  return salesarea_pb.SaveSalesAreasRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salesarea_SaveSalesAreasResponseProto(arg) {
  if (!(arg instanceof salesarea_pb.SaveSalesAreasResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salesarea.SaveSalesAreasResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salesarea_SaveSalesAreasResponseProto(buffer_arg) {
  return salesarea_pb.SaveSalesAreasResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salesarea_SetSalesAreaIsHiddenRequestProto(arg) {
  if (!(arg instanceof salesarea_pb.SetSalesAreaIsHiddenRequestProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salesarea.SetSalesAreaIsHiddenRequestProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salesarea_SetSalesAreaIsHiddenRequestProto(buffer_arg) {
  return salesarea_pb.SetSalesAreaIsHiddenRequestProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bmapi_outlets_salesarea_SetSalesAreaIsHiddenResponseProto(arg) {
  if (!(arg instanceof salesarea_pb.SetSalesAreaIsHiddenResponseProto)) {
    throw new Error('Expected argument of type bmapi.outlets.salesarea.SetSalesAreaIsHiddenResponseProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bmapi_outlets_salesarea_SetSalesAreaIsHiddenResponseProto(buffer_arg) {
  return salesarea_pb.SetSalesAreaIsHiddenResponseProto.deserializeBinary(new Uint8Array(buffer_arg));
}


var SalesAreaServiceService = exports.SalesAreaServiceService = {
  // Gets all SalesAreas
getAllSalesAreas: {
    path: '/bmapi.outlets.salesarea.SalesAreaService/GetAllSalesAreas',
    requestStream: false,
    responseStream: false,
    requestType: salesarea_pb.GetAllSalesAreasRequestProto,
    responseType: salesarea_pb.GetAllSalesAreasResponseProto,
    requestSerialize: serialize_bmapi_outlets_salesarea_GetAllSalesAreasRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_salesarea_GetAllSalesAreasRequestProto,
    responseSerialize: serialize_bmapi_outlets_salesarea_GetAllSalesAreasResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_salesarea_GetAllSalesAreasResponseProto,
  },
  // Gets specific SalesAreas. (Errors if any not found).
getSalesAreas: {
    path: '/bmapi.outlets.salesarea.SalesAreaService/GetSalesAreas',
    requestStream: false,
    responseStream: false,
    requestType: salesarea_pb.GetSalesAreasRequestProto,
    responseType: salesarea_pb.GetSalesAreasResponseProto,
    requestSerialize: serialize_bmapi_outlets_salesarea_GetSalesAreasRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_salesarea_GetSalesAreasRequestProto,
    responseSerialize: serialize_bmapi_outlets_salesarea_GetSalesAreasResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_salesarea_GetSalesAreasResponseProto,
  },
  // Saves one or many SalesAreas
saveSalesAreas: {
    path: '/bmapi.outlets.salesarea.SalesAreaService/SaveSalesAreas',
    requestStream: false,
    responseStream: false,
    requestType: salesarea_pb.SaveSalesAreasRequestProto,
    responseType: salesarea_pb.SaveSalesAreasResponseProto,
    requestSerialize: serialize_bmapi_outlets_salesarea_SaveSalesAreasRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_salesarea_SaveSalesAreasRequestProto,
    responseSerialize: serialize_bmapi_outlets_salesarea_SaveSalesAreasResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_salesarea_SaveSalesAreasResponseProto,
  },
  // Hides or unhides the given Sales Area.
setSalesAreaIsHidden: {
    path: '/bmapi.outlets.salesarea.SalesAreaService/SetSalesAreaIsHidden',
    requestStream: false,
    responseStream: false,
    requestType: salesarea_pb.SetSalesAreaIsHiddenRequestProto,
    responseType: salesarea_pb.SetSalesAreaIsHiddenResponseProto,
    requestSerialize: serialize_bmapi_outlets_salesarea_SetSalesAreaIsHiddenRequestProto,
    requestDeserialize: deserialize_bmapi_outlets_salesarea_SetSalesAreaIsHiddenRequestProto,
    responseSerialize: serialize_bmapi_outlets_salesarea_SetSalesAreaIsHiddenResponseProto,
    responseDeserialize: deserialize_bmapi_outlets_salesarea_SetSalesAreaIsHiddenResponseProto,
  },
};

exports.SalesAreaServiceClient = grpc.makeGenericClientConstructor(SalesAreaServiceService);
