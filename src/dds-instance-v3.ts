// https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdsInstanceV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#availability_zone DdsInstanceV3#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#disk_encryption_id DdsInstanceV3#disk_encryption_id}
  */
  readonly diskEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#mode DdsInstanceV3#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#name DdsInstanceV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#password DdsInstanceV3#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#region DdsInstanceV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#security_group_id DdsInstanceV3#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#ssl DdsInstanceV3#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#subnet_id DdsInstanceV3#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#vpc_id DdsInstanceV3#vpc_id}
  */
  readonly vpcId: string;
  /**
  * backup_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#backup_strategy DdsInstanceV3#backup_strategy}
  */
  readonly backupStrategy?: DdsInstanceV3BackupStrategy;
  /**
  * datastore block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#datastore DdsInstanceV3#datastore}
  */
  readonly datastore: DdsInstanceV3Datastore;
  /**
  * flavor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#flavor DdsInstanceV3#flavor}
  */
  readonly flavor: DdsInstanceV3Flavor[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#timeouts DdsInstanceV3#timeouts}
  */
  readonly timeouts?: DdsInstanceV3Timeouts;
}
export class DdsInstanceV3Nodes extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DdsInstanceV3BackupStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#keep_days DdsInstanceV3#keep_days}
  */
  readonly keepDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#start_time DdsInstanceV3#start_time}
  */
  readonly startTime: string;
}

export function ddsInstanceV3BackupStrategyToTerraform(struct?: DdsInstanceV3BackupStrategyOutputReference | DdsInstanceV3BackupStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_days: cdktf.numberToTerraform(struct!.keepDays),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class DdsInstanceV3BackupStrategyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DdsInstanceV3BackupStrategy | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._keepDays) {
      hasAnyValues = true;
      internalValueResult.keepDays = this._keepDays;
    }
    if (this._startTime) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdsInstanceV3BackupStrategy | undefined) {
    if (value === undefined) {
      this._keepDays = undefined;
      this._startTime = undefined;
    }
    else {
      this._keepDays = value.keepDays;
      this._startTime = value.startTime;
    }
  }

  // keep_days - computed: false, optional: false, required: true
  private _keepDays?: number; 
  public get keepDays() {
    return this.getNumberAttribute('keep_days');
  }
  public set keepDays(value: number) {
    this._keepDays = value;
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
export interface DdsInstanceV3Datastore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#storage_engine DdsInstanceV3#storage_engine}
  */
  readonly storageEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#type DdsInstanceV3#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#version DdsInstanceV3#version}
  */
  readonly version: string;
}

export function ddsInstanceV3DatastoreToTerraform(struct?: DdsInstanceV3DatastoreOutputReference | DdsInstanceV3Datastore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_engine: cdktf.stringToTerraform(struct!.storageEngine),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DdsInstanceV3DatastoreOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DdsInstanceV3Datastore | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._storageEngine) {
      hasAnyValues = true;
      internalValueResult.storageEngine = this._storageEngine;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdsInstanceV3Datastore | undefined) {
    if (value === undefined) {
      this._storageEngine = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this._storageEngine = value.storageEngine;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // storage_engine - computed: false, optional: true, required: false
  private _storageEngine?: string; 
  public get storageEngine() {
    return this.getStringAttribute('storage_engine');
  }
  public set storageEngine(value: string) {
    this._storageEngine = value;
  }
  public resetStorageEngine() {
    this._storageEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEngineInput() {
    return this._storageEngine;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DdsInstanceV3Flavor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#num DdsInstanceV3#num}
  */
  readonly num: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#size DdsInstanceV3#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#spec_code DdsInstanceV3#spec_code}
  */
  readonly specCode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#storage DdsInstanceV3#storage}
  */
  readonly storage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#type DdsInstanceV3#type}
  */
  readonly type: string;
}

export function ddsInstanceV3FlavorToTerraform(struct?: DdsInstanceV3Flavor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num: cdktf.numberToTerraform(struct!.num),
    size: cdktf.numberToTerraform(struct!.size),
    spec_code: cdktf.stringToTerraform(struct!.specCode),
    storage: cdktf.stringToTerraform(struct!.storage),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DdsInstanceV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#create DdsInstanceV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html#delete DdsInstanceV3#delete}
  */
  readonly delete?: string;
}

export function ddsInstanceV3TimeoutsToTerraform(struct?: DdsInstanceV3TimeoutsOutputReference | DdsInstanceV3Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class DdsInstanceV3TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DdsInstanceV3Timeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdsInstanceV3Timeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html opentelekomcloud_dds_instance_v3}
*/
export class DdsInstanceV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_dds_instance_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dds_instance_v3.html opentelekomcloud_dds_instance_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdsInstanceV3Config
  */
  public constructor(scope: Construct, id: string, config: DdsInstanceV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dds_instance_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._diskEncryptionId = config.diskEncryptionId;
    this._mode = config.mode;
    this._name = config.name;
    this._password = config.password;
    this._region = config.region;
    this._securityGroupId = config.securityGroupId;
    this._ssl = config.ssl;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._backupStrategy.internalValue = config.backupStrategy;
    this._datastore.internalValue = config.datastore;
    this._flavor = config.flavor;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // db_username - computed: true, optional: false, required: false
  public get dbUsername() {
    return this.getStringAttribute('db_username');
  }

  // disk_encryption_id - computed: false, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
  public nodes(index: string) {
    return new DdsInstanceV3Nodes(this, 'nodes', index);
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

  // pay_mode - computed: true, optional: false, required: false
  public get payMode() {
    return this.getStringAttribute('pay_mode');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl') as any;
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
  private _backupStrategy = new DdsInstanceV3BackupStrategyOutputReference(this as any, "backup_strategy", true);
  public get backupStrategy() {
    return this._backupStrategy;
  }
  public putBackupStrategy(value: DdsInstanceV3BackupStrategy) {
    this._backupStrategy.internalValue = value;
  }
  public resetBackupStrategy() {
    this._backupStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStrategyInput() {
    return this._backupStrategy.internalValue;
  }

  // datastore - computed: false, optional: false, required: true
  private _datastore = new DdsInstanceV3DatastoreOutputReference(this as any, "datastore", true);
  public get datastore() {
    return this._datastore;
  }
  public putDatastore(value: DdsInstanceV3Datastore) {
    this._datastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore.internalValue;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: DdsInstanceV3Flavor[]; 
  public get flavor() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('flavor') as any;
  }
  public set flavor(value: DdsInstanceV3Flavor[]) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DdsInstanceV3TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DdsInstanceV3Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      disk_encryption_id: cdktf.stringToTerraform(this._diskEncryptionId),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      region: cdktf.stringToTerraform(this._region),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      ssl: cdktf.booleanToTerraform(this._ssl),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      backup_strategy: ddsInstanceV3BackupStrategyToTerraform(this._backupStrategy.internalValue),
      datastore: ddsInstanceV3DatastoreToTerraform(this._datastore.internalValue),
      flavor: cdktf.listMapper(ddsInstanceV3FlavorToTerraform)(this._flavor),
      timeouts: ddsInstanceV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
