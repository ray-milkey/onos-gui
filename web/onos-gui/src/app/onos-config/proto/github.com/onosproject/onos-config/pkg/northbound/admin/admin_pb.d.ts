// Code generated by protoc-gen-go. DO NOT EDIT.

import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import * as github_com_openconfig_gnmi_proto_gnmi_gnmi_pb from '../../../../../../github.com/openconfig/gnmi/proto/gnmi/gnmi_pb';

export class NetworkChangesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkChangesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkChangesRequest): NetworkChangesRequest.AsObject;
  static serializeBinaryToWriter(message: NetworkChangesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkChangesRequest;
  static deserializeBinaryFromReader(message: NetworkChangesRequest, reader: jspb.BinaryReader): NetworkChangesRequest;
}

export namespace NetworkChangesRequest {
  export type AsObject = {
  }
}

export class ConfigChange extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigChange.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigChange): ConfigChange.AsObject;
  static serializeBinaryToWriter(message: ConfigChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigChange;
  static deserializeBinaryFromReader(message: ConfigChange, reader: jspb.BinaryReader): ConfigChange;
}

export namespace ConfigChange {
  export type AsObject = {
    id: string,
    hash: string,
  }
}

export class ChangeValue extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getValueType(): ChangeValueType;
  setValueType(value: ChangeValueType): void;

  getTypeOptsList(): Array<number>;
  setTypeOptsList(value: Array<number>): void;
  clearTypeOptsList(): void;
  addTypeOpts(value: number, index?: number): void;

  getRemoved(): boolean;
  setRemoved(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeValue.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeValue): ChangeValue.AsObject;
  static serializeBinaryToWriter(message: ChangeValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeValue;
  static deserializeBinaryFromReader(message: ChangeValue, reader: jspb.BinaryReader): ChangeValue;
}

export namespace ChangeValue {
  export type AsObject = {
    path: string,
    value: Uint8Array | string,
    valueType: ChangeValueType,
    typeOptsList: Array<number>,
    removed: boolean,
  }
}

export class Change extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTime(): boolean;
  clearTime(): void;

  getId(): string;
  setId(value: string): void;

  getDesc(): string;
  setDesc(value: string): void;

  getChangeValuesList(): Array<ChangeValue>;
  setChangeValuesList(value: Array<ChangeValue>): void;
  clearChangeValuesList(): void;
  addChangeValues(value?: ChangeValue, index?: number): ChangeValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Change.AsObject;
  static toObject(includeInstance: boolean, msg: Change): Change.AsObject;
  static serializeBinaryToWriter(message: Change, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Change;
  static deserializeBinaryFromReader(message: Change, reader: jspb.BinaryReader): Change;
}

export namespace Change {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    id: string,
    desc: string,
    changeValuesList: Array<ChangeValue.AsObject>,
  }
}

export class NetChange extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTime(): boolean;
  clearTime(): void;

  getName(): string;
  setName(value: string): void;

  getUser(): string;
  setUser(value: string): void;

  getChangesList(): Array<ConfigChange>;
  setChangesList(value: Array<ConfigChange>): void;
  clearChangesList(): void;
  addChanges(value?: ConfigChange, index?: number): ConfigChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetChange.AsObject;
  static toObject(includeInstance: boolean, msg: NetChange): NetChange.AsObject;
  static serializeBinaryToWriter(message: NetChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetChange;
  static deserializeBinaryFromReader(message: NetChange, reader: jspb.BinaryReader): NetChange;
}

export namespace NetChange {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    user: string,
    changesList: Array<ConfigChange.AsObject>,
  }
}

export class ReadOnlySubPath extends jspb.Message {
  getSubPath(): string;
  setSubPath(value: string): void;

  getValueType(): ChangeValueType;
  setValueType(value: ChangeValueType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadOnlySubPath.AsObject;
  static toObject(includeInstance: boolean, msg: ReadOnlySubPath): ReadOnlySubPath.AsObject;
  static serializeBinaryToWriter(message: ReadOnlySubPath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadOnlySubPath;
  static deserializeBinaryFromReader(message: ReadOnlySubPath, reader: jspb.BinaryReader): ReadOnlySubPath;
}

export namespace ReadOnlySubPath {
  export type AsObject = {
    subPath: string,
    valueType: ChangeValueType,
  }
}

export class ReadOnlyPath extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getSubPathList(): Array<ReadOnlySubPath>;
  setSubPathList(value: Array<ReadOnlySubPath>): void;
  clearSubPathList(): void;
  addSubPath(value?: ReadOnlySubPath, index?: number): ReadOnlySubPath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadOnlyPath.AsObject;
  static toObject(includeInstance: boolean, msg: ReadOnlyPath): ReadOnlyPath.AsObject;
  static serializeBinaryToWriter(message: ReadOnlyPath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadOnlyPath;
  static deserializeBinaryFromReader(message: ReadOnlyPath, reader: jspb.BinaryReader): ReadOnlyPath;
}

export namespace ReadOnlyPath {
  export type AsObject = {
    path: string,
    subPathList: Array<ReadOnlySubPath.AsObject>,
  }
}

export class ReadWritePath extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getValueType(): ChangeValueType;
  setValueType(value: ChangeValueType): void;

  getUnits(): string;
  setUnits(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMandatory(): boolean;
  setMandatory(value: boolean): void;

  getDefault(): string;
  setDefault(value: string): void;

  getRangeList(): Array<string>;
  setRangeList(value: Array<string>): void;
  clearRangeList(): void;
  addRange(value: string, index?: number): void;

  getLengthList(): Array<string>;
  setLengthList(value: Array<string>): void;
  clearLengthList(): void;
  addLength(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadWritePath.AsObject;
  static toObject(includeInstance: boolean, msg: ReadWritePath): ReadWritePath.AsObject;
  static serializeBinaryToWriter(message: ReadWritePath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadWritePath;
  static deserializeBinaryFromReader(message: ReadWritePath, reader: jspb.BinaryReader): ReadWritePath;
}

export namespace ReadWritePath {
  export type AsObject = {
    path: string,
    valueType: ChangeValueType,
    units: string,
    description: string,
    mandatory: boolean,
    pb_default: string,
    rangeList: Array<string>,
    lengthList: Array<string>,
  }
}

export class ModelInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getModelDataList(): Array<github_com_openconfig_gnmi_proto_gnmi_gnmi_pb.ModelData>;
  setModelDataList(value: Array<github_com_openconfig_gnmi_proto_gnmi_gnmi_pb.ModelData>): void;
  clearModelDataList(): void;
  addModelData(value?: github_com_openconfig_gnmi_proto_gnmi_gnmi_pb.ModelData, index?: number): github_com_openconfig_gnmi_proto_gnmi_gnmi_pb.ModelData;

  getModule(): string;
  setModule(value: string): void;

  getReadOnlyPathList(): Array<ReadOnlyPath>;
  setReadOnlyPathList(value: Array<ReadOnlyPath>): void;
  clearReadOnlyPathList(): void;
  addReadOnlyPath(value?: ReadOnlyPath, index?: number): ReadOnlyPath;

  getReadWritePathList(): Array<ReadWritePath>;
  setReadWritePathList(value: Array<ReadWritePath>): void;
  clearReadWritePathList(): void;
  addReadWritePath(value?: ReadWritePath, index?: number): ReadWritePath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ModelInfo): ModelInfo.AsObject;
  static serializeBinaryToWriter(message: ModelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelInfo;
  static deserializeBinaryFromReader(message: ModelInfo, reader: jspb.BinaryReader): ModelInfo;
}

export namespace ModelInfo {
  export type AsObject = {
    name: string,
    version: string,
    modelDataList: Array<github_com_openconfig_gnmi_proto_gnmi_gnmi_pb.ModelData.AsObject>,
    module: string,
    readOnlyPathList: Array<ReadOnlyPath.AsObject>,
    readWritePathList: Array<ReadWritePath.AsObject>,
  }
}

export class RegisterRequest extends jspb.Message {
  getSoFile(): string;
  setSoFile(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    soFile: string,
  }
}

export class SchemaEntry extends jspb.Message {
  getSchemaPath(): string;
  setSchemaPath(value: string): void;

  getSchemaJson(): string;
  setSchemaJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaEntry.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaEntry): SchemaEntry.AsObject;
  static serializeBinaryToWriter(message: SchemaEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaEntry;
  static deserializeBinaryFromReader(message: SchemaEntry, reader: jspb.BinaryReader): SchemaEntry;
}

export namespace SchemaEntry {
  export type AsObject = {
    schemaPath: string,
    schemaJson: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    name: string,
    version: string,
  }
}

export class ListModelsRequest extends jspb.Message {
  getVerbose(): boolean;
  setVerbose(value: boolean): void;

  getModelName(): string;
  setModelName(value: string): void;

  getModelVersion(): string;
  setModelVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
  static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
  export type AsObject = {
    verbose: boolean,
    modelName: string,
    modelVersion: string,
  }
}

export class RollbackRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RollbackRequest): RollbackRequest.AsObject;
  static serializeBinaryToWriter(message: RollbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollbackRequest;
  static deserializeBinaryFromReader(message: RollbackRequest, reader: jspb.BinaryReader): RollbackRequest;
}

export namespace RollbackRequest {
  export type AsObject = {
    name: string,
    comment: string,
  }
}

export class RollbackResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollbackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RollbackResponse): RollbackResponse.AsObject;
  static serializeBinaryToWriter(message: RollbackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollbackResponse;
  static deserializeBinaryFromReader(message: RollbackResponse, reader: jspb.BinaryReader): RollbackResponse;
}

export namespace RollbackResponse {
  export type AsObject = {
    message: string,
  }
}

export class DeviceInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getTarget(): string;
  setTarget(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getUser(): string;
  setUser(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getCaPath(): string;
  setCaPath(value: string): void;

  getCertPath(): string;
  setCertPath(value: string): void;

  getKeyPath(): string;
  setKeyPath(value: string): void;

  getPlain(): boolean;
  setPlain(value: boolean): void;

  getInsecure(): boolean;
  setInsecure(value: boolean): void;

  getTimeout(): number;
  setTimeout(value: number): void;

  getDeviceType(): string;
  setDeviceType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    id: string,
    address: string,
    target: string,
    version: string,
    user: string,
    password: string,
    caPath: string,
    certPath: string,
    keyPath: string,
    plain: boolean,
    insecure: boolean,
    timeout: number,
    deviceType: string,
  }
}

export class DeviceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceResponse): DeviceResponse.AsObject;
  static serializeBinaryToWriter(message: DeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceResponse;
  static deserializeBinaryFromReader(message: DeviceResponse, reader: jspb.BinaryReader): DeviceResponse;
}

export namespace DeviceResponse {
  export type AsObject = {
  }
}

export class GetDevicesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevicesRequest): GetDevicesRequest.AsObject;
  static serializeBinaryToWriter(message: GetDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevicesRequest;
  static deserializeBinaryFromReader(message: GetDevicesRequest, reader: jspb.BinaryReader): GetDevicesRequest;
}

export namespace GetDevicesRequest {
  export type AsObject = {
  }
}

export class DeviceSummaryRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceSummaryRequest): DeviceSummaryRequest.AsObject;
  static serializeBinaryToWriter(message: DeviceSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceSummaryRequest;
  static deserializeBinaryFromReader(message: DeviceSummaryRequest, reader: jspb.BinaryReader): DeviceSummaryRequest;
}

export namespace DeviceSummaryRequest {
  export type AsObject = {
  }
}

export class DeviceSummaryResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceSummaryResponse): DeviceSummaryResponse.AsObject;
  static serializeBinaryToWriter(message: DeviceSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceSummaryResponse;
  static deserializeBinaryFromReader(message: DeviceSummaryResponse, reader: jspb.BinaryReader): DeviceSummaryResponse;
}

export namespace DeviceSummaryResponse {
  export type AsObject = {
    count: number,
  }
}

export enum ChangeValueType { 
  EMPTY = 0,
  STRING = 1,
  INT = 2,
  UINT = 3,
  BOOL = 4,
  DECIMAL = 5,
  FLOAT = 6,
  BYTES = 7,
  LEAFLIST_STRING = 8,
  LEAFLIST_INT = 9,
  LEAFLIST_UINT = 10,
  LEAFLIST_BOOL = 11,
  LEAFLIST_DECIMAL = 12,
  LEAFLIST_FLOAT = 13,
  LEAFLIST_BYTES = 14,
}
export enum Type { 
  NONE = 0,
  ADDED = 1,
  UPDATED = 2,
  REMOVED = 3,
}