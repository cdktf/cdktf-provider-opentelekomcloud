// https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsInstanceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#availabilityzone RdsInstanceV1#availabilityzone}
  */
  readonly availabilityzone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#dbport RdsInstanceV1#dbport}
  */
  readonly dbport?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#dbrtpd RdsInstanceV1#dbrtpd}
  */
  readonly dbrtpd: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#flavorref RdsInstanceV1#flavorref}
  */
  readonly flavorref: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#name RdsInstanceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#region RdsInstanceV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#tag RdsInstanceV1#tag}
  */
  readonly tag?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#vpc RdsInstanceV1#vpc}
  */
  readonly vpc: string;
  /**
  * backupstrategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#backupstrategy RdsInstanceV1#backupstrategy}
  */
  readonly backupstrategy?: RdsInstanceV1Backupstrategy;
  /**
  * datastore block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#datastore RdsInstanceV1#datastore}
  */
  readonly datastore: RdsInstanceV1Datastore;
  /**
  * ha block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#ha RdsInstanceV1#ha}
  */
  readonly ha?: RdsInstanceV1Ha;
  /**
  * nics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#nics RdsInstanceV1#nics}
  */
  readonly nics: RdsInstanceV1Nics;
  /**
  * securitygroup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#securitygroup RdsInstanceV1#securitygroup}
  */
  readonly securitygroup: RdsInstanceV1Securitygroup;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#timeouts RdsInstanceV1#timeouts}
  */
  readonly timeouts?: RdsInstanceV1Timeouts;
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#volume RdsInstanceV1#volume}
  */
  readonly volume: RdsInstanceV1Volume;
}
export interface RdsInstanceV1Backupstrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#keepdays RdsInstanceV1#keepdays}
  */
  readonly keepdays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#starttime RdsInstanceV1#starttime}
  */
  readonly starttime?: string;
}

function rdsInstanceV1BackupstrategyToTerraform(struct?: RdsInstanceV1BackupstrategyOutputReference | RdsInstanceV1Backupstrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keepdays: cdktf.numberToTerraform(struct!.keepdays),
    starttime: cdktf.stringToTerraform(struct!.starttime),
  }
}

export class RdsInstanceV1BackupstrategyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // keepdays - computed: false, optional: true, required: false
  private _keepdays?: number | undefined; 
  public get keepdays() {
    return this.getNumberAttribute('keepdays');
  }
  public set keepdays(value: number | undefined) {
    this._keepdays = value;
  }
  public resetKeepdays() {
    this._keepdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepdaysInput() {
    return this._keepdays
  }

  // starttime - computed: false, optional: true, required: false
  private _starttime?: string | undefined; 
  public get starttime() {
    return this.getStringAttribute('starttime');
  }
  public set starttime(value: string | undefined) {
    this._starttime = value;
  }
  public resetStarttime() {
    this._starttime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttimeInput() {
    return this._starttime
  }
}
export interface RdsInstanceV1Datastore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#type RdsInstanceV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#version RdsInstanceV1#version}
  */
  readonly version: string;
}

function rdsInstanceV1DatastoreToTerraform(struct?: RdsInstanceV1DatastoreOutputReference | RdsInstanceV1Datastore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class RdsInstanceV1DatastoreOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._type
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
    return this._version
  }
}
export interface RdsInstanceV1Ha {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#enable RdsInstanceV1#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#replicationmode RdsInstanceV1#replicationmode}
  */
  readonly replicationmode?: string;
}

function rdsInstanceV1HaToTerraform(struct?: RdsInstanceV1HaOutputReference | RdsInstanceV1Ha): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    replicationmode: cdktf.stringToTerraform(struct!.replicationmode),
  }
}

export class RdsInstanceV1HaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable | undefined; 
  public get enable() {
    return this.getBooleanAttribute('enable') as any;
  }
  public set enable(value: boolean | cdktf.IResolvable | undefined) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable
  }

  // replicationmode - computed: false, optional: true, required: false
  private _replicationmode?: string | undefined; 
  public get replicationmode() {
    return this.getStringAttribute('replicationmode');
  }
  public set replicationmode(value: string | undefined) {
    this._replicationmode = value;
  }
  public resetReplicationmode() {
    this._replicationmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationmodeInput() {
    return this._replicationmode
  }
}
export interface RdsInstanceV1Nics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#subnetid RdsInstanceV1#subnetid}
  */
  readonly subnetid: string;
}

function rdsInstanceV1NicsToTerraform(struct?: RdsInstanceV1NicsOutputReference | RdsInstanceV1Nics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnetid: cdktf.stringToTerraform(struct!.subnetid),
  }
}

export class RdsInstanceV1NicsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subnetid - computed: false, optional: false, required: true
  private _subnetid?: string; 
  public get subnetid() {
    return this.getStringAttribute('subnetid');
  }
  public set subnetid(value: string) {
    this._subnetid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetidInput() {
    return this._subnetid
  }
}
export interface RdsInstanceV1Securitygroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#id RdsInstanceV1#id}
  */
  readonly id: string;
}

function rdsInstanceV1SecuritygroupToTerraform(struct?: RdsInstanceV1SecuritygroupOutputReference | RdsInstanceV1Securitygroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class RdsInstanceV1SecuritygroupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }
}
export interface RdsInstanceV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#create RdsInstanceV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#delete RdsInstanceV1#delete}
  */
  readonly delete?: string;
}

function rdsInstanceV1TimeoutsToTerraform(struct?: RdsInstanceV1TimeoutsOutputReference | RdsInstanceV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class RdsInstanceV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}
export interface RdsInstanceV1Volume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#size RdsInstanceV1#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#type RdsInstanceV1#type}
  */
  readonly type: string;
}

function rdsInstanceV1VolumeToTerraform(struct?: RdsInstanceV1VolumeOutputReference | RdsInstanceV1Volume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class RdsInstanceV1VolumeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._size
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
    return this._type
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html opentelekomcloud_rds_instance_v1}
*/
export class RdsInstanceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_rds_instance_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html opentelekomcloud_rds_instance_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsInstanceV1Config
  */
  public constructor(scope: Construct, id: string, config: RdsInstanceV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rds_instance_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityzone = config.availabilityzone;
    this._dbport = config.dbport;
    this._dbrtpd = config.dbrtpd;
    this._flavorref = config.flavorref;
    this._name = config.name;
    this._region = config.region;
    this._tag = config.tag;
    this._vpc = config.vpc;
    this._backupstrategy = config.backupstrategy;
    this._datastore = config.datastore;
    this._ha = config.ha;
    this._nics = config.nics;
    this._securitygroup = config.securitygroup;
    this._timeouts = config.timeouts;
    this._volume = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availabilityzone - computed: false, optional: false, required: true
  private _availabilityzone?: string; 
  public get availabilityzone() {
    return this.getStringAttribute('availabilityzone');
  }
  public set availabilityzone(value: string) {
    this._availabilityzone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityzoneInput() {
    return this._availabilityzone
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // dbport - computed: false, optional: true, required: false
  private _dbport?: string | undefined; 
  public get dbport() {
    return this.getStringAttribute('dbport');
  }
  public set dbport(value: string | undefined) {
    this._dbport = value;
  }
  public resetDbport() {
    this._dbport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbportInput() {
    return this._dbport
  }

  // dbrtpd - computed: false, optional: false, required: true
  private _dbrtpd?: string; 
  public get dbrtpd() {
    return this.getStringAttribute('dbrtpd');
  }
  public set dbrtpd(value: string) {
    this._dbrtpd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbrtpdInput() {
    return this._dbrtpd
  }

  // flavorref - computed: false, optional: false, required: true
  private _flavorref?: string; 
  public get flavorref() {
    return this.getStringAttribute('flavorref');
  }
  public set flavorref(value: string) {
    this._flavorref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorrefInput() {
    return this._flavorref
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag') as any;
  }
  public set tag(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc
  }

  // backupstrategy - computed: false, optional: true, required: false
  private _backupstrategy?: RdsInstanceV1Backupstrategy | undefined; 
  private __backupstrategyOutput = new RdsInstanceV1BackupstrategyOutputReference(this as any, "backupstrategy", true);
  public get backupstrategy() {
    return this.__backupstrategyOutput;
  }
  public putBackupstrategy(value: RdsInstanceV1Backupstrategy | undefined) {
    this._backupstrategy = value;
  }
  public resetBackupstrategy() {
    this._backupstrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupstrategyInput() {
    return this._backupstrategy
  }

  // datastore - computed: false, optional: false, required: true
  private _datastore?: RdsInstanceV1Datastore; 
  private __datastoreOutput = new RdsInstanceV1DatastoreOutputReference(this as any, "datastore", true);
  public get datastore() {
    return this.__datastoreOutput;
  }
  public putDatastore(value: RdsInstanceV1Datastore) {
    this._datastore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore
  }

  // ha - computed: false, optional: true, required: false
  private _ha?: RdsInstanceV1Ha | undefined; 
  private __haOutput = new RdsInstanceV1HaOutputReference(this as any, "ha", true);
  public get ha() {
    return this.__haOutput;
  }
  public putHa(value: RdsInstanceV1Ha | undefined) {
    this._ha = value;
  }
  public resetHa() {
    this._ha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha
  }

  // nics - computed: false, optional: false, required: true
  private _nics?: RdsInstanceV1Nics; 
  private __nicsOutput = new RdsInstanceV1NicsOutputReference(this as any, "nics", true);
  public get nics() {
    return this.__nicsOutput;
  }
  public putNics(value: RdsInstanceV1Nics) {
    this._nics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics
  }

  // securitygroup - computed: false, optional: false, required: true
  private _securitygroup?: RdsInstanceV1Securitygroup; 
  private __securitygroupOutput = new RdsInstanceV1SecuritygroupOutputReference(this as any, "securitygroup", true);
  public get securitygroup() {
    return this.__securitygroupOutput;
  }
  public putSecuritygroup(value: RdsInstanceV1Securitygroup) {
    this._securitygroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securitygroupInput() {
    return this._securitygroup
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RdsInstanceV1Timeouts | undefined; 
  private __timeoutsOutput = new RdsInstanceV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: RdsInstanceV1Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: RdsInstanceV1Volume; 
  private __volumeOutput = new RdsInstanceV1VolumeOutputReference(this as any, "volume", true);
  public get volume() {
    return this.__volumeOutput;
  }
  public putVolume(value: RdsInstanceV1Volume) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availabilityzone: cdktf.stringToTerraform(this._availabilityzone),
      dbport: cdktf.stringToTerraform(this._dbport),
      dbrtpd: cdktf.stringToTerraform(this._dbrtpd),
      flavorref: cdktf.stringToTerraform(this._flavorref),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tag: cdktf.hashMapper(cdktf.anyToTerraform)(this._tag),
      vpc: cdktf.stringToTerraform(this._vpc),
      backupstrategy: rdsInstanceV1BackupstrategyToTerraform(this._backupstrategy),
      datastore: rdsInstanceV1DatastoreToTerraform(this._datastore),
      ha: rdsInstanceV1HaToTerraform(this._ha),
      nics: rdsInstanceV1NicsToTerraform(this._nics),
      securitygroup: rdsInstanceV1SecuritygroupToTerraform(this._securitygroup),
      timeouts: rdsInstanceV1TimeoutsToTerraform(this._timeouts),
      volume: rdsInstanceV1VolumeToTerraform(this._volume),
    };
  }
}
