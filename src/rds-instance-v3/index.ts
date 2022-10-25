// https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsInstanceV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#availability_zone RdsInstanceV3#availability_zone}
  */
  readonly availabilityZone: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#flavor RdsInstanceV3#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#ha_replication_mode RdsInstanceV3#ha_replication_mode}
  */
  readonly haReplicationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#id RdsInstanceV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#name RdsInstanceV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#param_group_id RdsInstanceV3#param_group_id}
  */
  readonly paramGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#parameters RdsInstanceV3#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#public_ips RdsInstanceV3#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#security_group_id RdsInstanceV3#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#subnet_id RdsInstanceV3#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#tag RdsInstanceV3#tag}
  */
  readonly tag?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#tags RdsInstanceV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#vpc_id RdsInstanceV3#vpc_id}
  */
  readonly vpcId: string;
  /**
  * backup_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#backup_strategy RdsInstanceV3#backup_strategy}
  */
  readonly backupStrategy?: RdsInstanceV3BackupStrategy;
  /**
  * db block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#db RdsInstanceV3#db}
  */
  readonly db: RdsInstanceV3Db;
  /**
  * restore_point block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#restore_point RdsInstanceV3#restore_point}
  */
  readonly restorePoint?: RdsInstanceV3RestorePoint;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#timeouts RdsInstanceV3#timeouts}
  */
  readonly timeouts?: RdsInstanceV3Timeouts;
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#volume RdsInstanceV3#volume}
  */
  readonly volume: RdsInstanceV3Volume;
}
export interface RdsInstanceV3Nodes {
}

export function rdsInstanceV3NodesToTerraform(struct?: RdsInstanceV3Nodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class RdsInstanceV3NodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RdsInstanceV3Nodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV3Nodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class RdsInstanceV3NodesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RdsInstanceV3NodesOutputReference {
    return new RdsInstanceV3NodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsInstanceV3BackupStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#keep_days RdsInstanceV3#keep_days}
  */
  readonly keepDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#start_time RdsInstanceV3#start_time}
  */
  readonly startTime: string;
}

export function rdsInstanceV3BackupStrategyToTerraform(struct?: RdsInstanceV3BackupStrategyOutputReference | RdsInstanceV3BackupStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_days: cdktf.numberToTerraform(struct!.keepDays),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class RdsInstanceV3BackupStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV3BackupStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDays = this._keepDays;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV3BackupStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keepDays = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keepDays = value.keepDays;
      this._startTime = value.startTime;
    }
  }

  // keep_days - computed: true, optional: true, required: false
  private _keepDays?: number; 
  public get keepDays() {
    return this.getNumberAttribute('keep_days');
  }
  public set keepDays(value: number) {
    this._keepDays = value;
  }
  public resetKeepDays() {
    this._keepDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDaysInput() {
    return this._keepDays;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface RdsInstanceV3Db {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#password RdsInstanceV3#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#port RdsInstanceV3#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#type RdsInstanceV3#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#version RdsInstanceV3#version}
  */
  readonly version?: string;
}

export function rdsInstanceV3DbToTerraform(struct?: RdsInstanceV3DbOutputReference | RdsInstanceV3Db): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class RdsInstanceV3DbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV3Db | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV3Db | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._port = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._port = value.port;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface RdsInstanceV3RestorePoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#backup_id RdsInstanceV3#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#instance_id RdsInstanceV3#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#restore_time RdsInstanceV3#restore_time}
  */
  readonly restoreTime?: number;
}

export function rdsInstanceV3RestorePointToTerraform(struct?: RdsInstanceV3RestorePointOutputReference | RdsInstanceV3RestorePoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    restore_time: cdktf.numberToTerraform(struct!.restoreTime),
  }
}

export class RdsInstanceV3RestorePointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV3RestorePoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._restoreTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreTime = this._restoreTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV3RestorePoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupId = undefined;
      this._instanceId = undefined;
      this._restoreTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupId = value.backupId;
      this._instanceId = value.instanceId;
      this._restoreTime = value.restoreTime;
    }
  }

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // restore_time - computed: false, optional: true, required: false
  private _restoreTime?: number; 
  public get restoreTime() {
    return this.getNumberAttribute('restore_time');
  }
  public set restoreTime(value: number) {
    this._restoreTime = value;
  }
  public resetRestoreTime() {
    this._restoreTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTimeInput() {
    return this._restoreTime;
  }
}
export interface RdsInstanceV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#create RdsInstanceV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#update RdsInstanceV3#update}
  */
  readonly update?: string;
}

export function rdsInstanceV3TimeoutsToTerraform(struct?: RdsInstanceV3TimeoutsOutputReference | RdsInstanceV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class RdsInstanceV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV3Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV3Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface RdsInstanceV3Volume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#disk_encryption_id RdsInstanceV3#disk_encryption_id}
  */
  readonly diskEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#size RdsInstanceV3#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3#type RdsInstanceV3#type}
  */
  readonly type: string;
}

export function rdsInstanceV3VolumeToTerraform(struct?: RdsInstanceV3VolumeOutputReference | RdsInstanceV3Volume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_id: cdktf.stringToTerraform(struct!.diskEncryptionId),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class RdsInstanceV3VolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV3Volume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionId = this._diskEncryptionId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV3Volume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskEncryptionId = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskEncryptionId = value.diskEncryptionId;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // disk_encryption_id - computed: true, optional: true, required: false
  private _diskEncryptionId?: string; 
  public get diskEncryptionId() {
    return this.getStringAttribute('disk_encryption_id');
  }
  public set diskEncryptionId(value: string) {
    this._diskEncryptionId = value;
  }
  public resetDiskEncryptionId() {
    this._diskEncryptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionIdInput() {
    return this._diskEncryptionId;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3 opentelekomcloud_rds_instance_v3}
*/
export class RdsInstanceV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_rds_instance_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v3 opentelekomcloud_rds_instance_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsInstanceV3Config
  */
  public constructor(scope: Construct, id: string, config: RdsInstanceV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rds_instance_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.31.6',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._flavor = config.flavor;
    this._haReplicationMode = config.haReplicationMode;
    this._id = config.id;
    this._name = config.name;
    this._paramGroupId = config.paramGroupId;
    this._parameters = config.parameters;
    this._publicIps = config.publicIps;
    this._securityGroupId = config.securityGroupId;
    this._subnetId = config.subnetId;
    this._tag = config.tag;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._backupStrategy.internalValue = config.backupStrategy;
    this._db.internalValue = config.db;
    this._restorePoint.internalValue = config.restorePoint;
    this._timeouts.internalValue = config.timeouts;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string[]; 
  public get availabilityZone() {
    return this.getListAttribute('availability_zone');
  }
  public set availabilityZone(value: string[]) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // ha_replication_mode - computed: true, optional: true, required: false
  private _haReplicationMode?: string; 
  public get haReplicationMode() {
    return this.getStringAttribute('ha_replication_mode');
  }
  public set haReplicationMode(value: string) {
    this._haReplicationMode = value;
  }
  public resetHaReplicationMode() {
    this._haReplicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haReplicationModeInput() {
    return this._haReplicationMode;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new RdsInstanceV3NodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // param_group_id - computed: false, optional: true, required: false
  private _paramGroupId?: string; 
  public get paramGroupId() {
    return this.getStringAttribute('param_group_id');
  }
  public set paramGroupId(value: string) {
    this._paramGroupId = value;
  }
  public resetParamGroupId() {
    this._paramGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramGroupIdInput() {
    return this._paramGroupId;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // private_ips - computed: true, optional: false, required: false
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }

  // public_ips - computed: false, optional: true, required: false
  private _publicIps?: string[]; 
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }
  public set publicIps(value: string[]) {
    this._publicIps = value;
  }
  public resetPublicIps() {
    this._publicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: { [key: string]: string }; 
  public get tag() {
    return this.getStringMapAttribute('tag');
  }
  public set tag(value: { [key: string]: string }) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // backup_strategy - computed: false, optional: true, required: false
  private _backupStrategy = new RdsInstanceV3BackupStrategyOutputReference(this, "backup_strategy");
  public get backupStrategy() {
    return this._backupStrategy;
  }
  public putBackupStrategy(value: RdsInstanceV3BackupStrategy) {
    this._backupStrategy.internalValue = value;
  }
  public resetBackupStrategy() {
    this._backupStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStrategyInput() {
    return this._backupStrategy.internalValue;
  }

  // db - computed: false, optional: false, required: true
  private _db = new RdsInstanceV3DbOutputReference(this, "db");
  public get db() {
    return this._db;
  }
  public putDb(value: RdsInstanceV3Db) {
    this._db.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db.internalValue;
  }

  // restore_point - computed: false, optional: true, required: false
  private _restorePoint = new RdsInstanceV3RestorePointOutputReference(this, "restore_point");
  public get restorePoint() {
    return this._restorePoint;
  }
  public putRestorePoint(value: RdsInstanceV3RestorePoint) {
    this._restorePoint.internalValue = value;
  }
  public resetRestorePoint() {
    this._restorePoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePointInput() {
    return this._restorePoint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsInstanceV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsInstanceV3Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume - computed: false, optional: false, required: true
  private _volume = new RdsInstanceV3VolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: RdsInstanceV3Volume) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZone),
      flavor: cdktf.stringToTerraform(this._flavor),
      ha_replication_mode: cdktf.stringToTerraform(this._haReplicationMode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      param_group_id: cdktf.stringToTerraform(this._paramGroupId),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      public_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicIps),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tag: cdktf.hashMapper(cdktf.stringToTerraform)(this._tag),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      backup_strategy: rdsInstanceV3BackupStrategyToTerraform(this._backupStrategy.internalValue),
      db: rdsInstanceV3DbToTerraform(this._db.internalValue),
      restore_point: rdsInstanceV3RestorePointToTerraform(this._restorePoint.internalValue),
      timeouts: rdsInstanceV3TimeoutsToTerraform(this._timeouts.internalValue),
      volume: rdsInstanceV3VolumeToTerraform(this._volume.internalValue),
    };
  }
}
