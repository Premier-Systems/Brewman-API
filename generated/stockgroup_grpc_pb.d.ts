// package: bmapi.stocks.stockgroup
// file: stockgroup.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as stockgroup_pb from "./stockgroup_pb";
import * as google_type_timeofday_pb from "./google/type/timeofday_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_date_pb from "./google/type/date_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_arrayvalues_pb from "./common/arrayvalues_pb";
import * as common_enums_generated_pb from "./common/enums.generated_pb";
import * as common_enumarrayvalues_generated_pb from "./common/enumarrayvalues.generated_pb";

interface IStockGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllStockGroups: IStockGroupServiceService_IGetAllStockGroups;
    getStockGroup: IStockGroupServiceService_IGetStockGroup;
    saveStockGroup: IStockGroupServiceService_ISaveStockGroup;
    getStockGroupsById: IStockGroupServiceService_IGetStockGroupsById;
}

interface IStockGroupServiceService_IGetAllStockGroups extends grpc.MethodDefinition<stockgroup_pb.GetAllStockGroupsRequestProto, stockgroup_pb.GetAllStockGroupsResponseProto> {
    path: "/bmapi.stocks.stockgroup.StockGroupService/GetAllStockGroups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stockgroup_pb.GetAllStockGroupsRequestProto>;
    requestDeserialize: grpc.deserialize<stockgroup_pb.GetAllStockGroupsRequestProto>;
    responseSerialize: grpc.serialize<stockgroup_pb.GetAllStockGroupsResponseProto>;
    responseDeserialize: grpc.deserialize<stockgroup_pb.GetAllStockGroupsResponseProto>;
}
interface IStockGroupServiceService_IGetStockGroup extends grpc.MethodDefinition<stockgroup_pb.GetStockGroupRequestProto, stockgroup_pb.GetStockGroupResponseProto> {
    path: "/bmapi.stocks.stockgroup.StockGroupService/GetStockGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stockgroup_pb.GetStockGroupRequestProto>;
    requestDeserialize: grpc.deserialize<stockgroup_pb.GetStockGroupRequestProto>;
    responseSerialize: grpc.serialize<stockgroup_pb.GetStockGroupResponseProto>;
    responseDeserialize: grpc.deserialize<stockgroup_pb.GetStockGroupResponseProto>;
}
interface IStockGroupServiceService_ISaveStockGroup extends grpc.MethodDefinition<stockgroup_pb.SaveStockGroupRequestProto, stockgroup_pb.SaveStockGroupResponseProto> {
    path: "/bmapi.stocks.stockgroup.StockGroupService/SaveStockGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stockgroup_pb.SaveStockGroupRequestProto>;
    requestDeserialize: grpc.deserialize<stockgroup_pb.SaveStockGroupRequestProto>;
    responseSerialize: grpc.serialize<stockgroup_pb.SaveStockGroupResponseProto>;
    responseDeserialize: grpc.deserialize<stockgroup_pb.SaveStockGroupResponseProto>;
}
interface IStockGroupServiceService_IGetStockGroupsById extends grpc.MethodDefinition<stockgroup_pb.GetStockGroupsByIdRequestProto, stockgroup_pb.GetStockGroupsByIdResponseProto> {
    path: "/bmapi.stocks.stockgroup.StockGroupService/GetStockGroupsById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stockgroup_pb.GetStockGroupsByIdRequestProto>;
    requestDeserialize: grpc.deserialize<stockgroup_pb.GetStockGroupsByIdRequestProto>;
    responseSerialize: grpc.serialize<stockgroup_pb.GetStockGroupsByIdResponseProto>;
    responseDeserialize: grpc.deserialize<stockgroup_pb.GetStockGroupsByIdResponseProto>;
}

export const StockGroupServiceService: IStockGroupServiceService;

export interface IStockGroupServiceServer extends grpc.UntypedServiceImplementation {
    getAllStockGroups: grpc.handleUnaryCall<stockgroup_pb.GetAllStockGroupsRequestProto, stockgroup_pb.GetAllStockGroupsResponseProto>;
    getStockGroup: grpc.handleUnaryCall<stockgroup_pb.GetStockGroupRequestProto, stockgroup_pb.GetStockGroupResponseProto>;
    saveStockGroup: grpc.handleUnaryCall<stockgroup_pb.SaveStockGroupRequestProto, stockgroup_pb.SaveStockGroupResponseProto>;
    getStockGroupsById: grpc.handleUnaryCall<stockgroup_pb.GetStockGroupsByIdRequestProto, stockgroup_pb.GetStockGroupsByIdResponseProto>;
}

export interface IStockGroupServiceClient {
    getAllStockGroups(request: stockgroup_pb.GetAllStockGroupsRequestProto, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetAllStockGroupsResponseProto) => void): grpc.ClientUnaryCall;
    getAllStockGroups(request: stockgroup_pb.GetAllStockGroupsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetAllStockGroupsResponseProto) => void): grpc.ClientUnaryCall;
    getAllStockGroups(request: stockgroup_pb.GetAllStockGroupsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetAllStockGroupsResponseProto) => void): grpc.ClientUnaryCall;
    getStockGroup(request: stockgroup_pb.GetStockGroupRequestProto, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    getStockGroup(request: stockgroup_pb.GetStockGroupRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    getStockGroup(request: stockgroup_pb.GetStockGroupRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    saveStockGroup(request: stockgroup_pb.SaveStockGroupRequestProto, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.SaveStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    saveStockGroup(request: stockgroup_pb.SaveStockGroupRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.SaveStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    saveStockGroup(request: stockgroup_pb.SaveStockGroupRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.SaveStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    getStockGroupsById(request: stockgroup_pb.GetStockGroupsByIdRequestProto, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupsByIdResponseProto) => void): grpc.ClientUnaryCall;
    getStockGroupsById(request: stockgroup_pb.GetStockGroupsByIdRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupsByIdResponseProto) => void): grpc.ClientUnaryCall;
    getStockGroupsById(request: stockgroup_pb.GetStockGroupsByIdRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupsByIdResponseProto) => void): grpc.ClientUnaryCall;
}

export class StockGroupServiceClient extends grpc.Client implements IStockGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllStockGroups(request: stockgroup_pb.GetAllStockGroupsRequestProto, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetAllStockGroupsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllStockGroups(request: stockgroup_pb.GetAllStockGroupsRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetAllStockGroupsResponseProto) => void): grpc.ClientUnaryCall;
    public getAllStockGroups(request: stockgroup_pb.GetAllStockGroupsRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetAllStockGroupsResponseProto) => void): grpc.ClientUnaryCall;
    public getStockGroup(request: stockgroup_pb.GetStockGroupRequestProto, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    public getStockGroup(request: stockgroup_pb.GetStockGroupRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    public getStockGroup(request: stockgroup_pb.GetStockGroupRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    public saveStockGroup(request: stockgroup_pb.SaveStockGroupRequestProto, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.SaveStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    public saveStockGroup(request: stockgroup_pb.SaveStockGroupRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.SaveStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    public saveStockGroup(request: stockgroup_pb.SaveStockGroupRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.SaveStockGroupResponseProto) => void): grpc.ClientUnaryCall;
    public getStockGroupsById(request: stockgroup_pb.GetStockGroupsByIdRequestProto, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupsByIdResponseProto) => void): grpc.ClientUnaryCall;
    public getStockGroupsById(request: stockgroup_pb.GetStockGroupsByIdRequestProto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupsByIdResponseProto) => void): grpc.ClientUnaryCall;
    public getStockGroupsById(request: stockgroup_pb.GetStockGroupsByIdRequestProto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stockgroup_pb.GetStockGroupsByIdResponseProto) => void): grpc.ClientUnaryCall;
}
