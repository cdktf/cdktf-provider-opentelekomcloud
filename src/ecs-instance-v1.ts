// https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsInstanceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#auto_recovery EcsInstanceV1#auto_recovery}
  */
  readonly autoRecovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#availability_zone EcsInstanceV1#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#delete_disks_on_termination EcsInstanceV1#delete_disks_on_termination}
  */
  readonly deleteDisksOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#flavor EcsInstanceV1#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#image_id EcsInstanceV1#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#key_name EcsInstanceV1#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#name EcsInstanceV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#password EcsInstanceV1#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#security_groups EcsInstanceV1#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#system_disk_size EcsInstanceV1#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#system_disk_type EcsInstanceV1#system_disk_type}
  */
  readonly systemDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#tags EcsInstanceV1#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#user_data EcsInstanceV1#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#vpc_id EcsInstanceV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * data_disks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#data_disks EcsInstanceV1#data_disks}
  */
  readonly dataDisks?: EcsInstanceV1DataDisks[];
  /**
  * nics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#nics EcsInstanceV1#nics}
  */
  readonly nics: EcsInstanceV1Nics[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#timeouts EcsInstanceV1#timeouts}
  */
  readonly timeouts?: EcsInstanceV1Timeouts;
}
export interface EcsInstanceV1DataDisks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#kms_id EcsInstanceV1#kms_id}
  */
  readonly kmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#size EcsInstanceV1#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#snapshot_id EcsInstanceV1#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#type EcsInstanceV1#type}
  */
  readonly type: string;
}

export function ecsInstanceV1DataDisksToTerraform(struct?: EcsInstanceV1DataDisks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_id: cdktf.stringToTerraform(struct!.kmsId),
    size: cdktf.numberToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsInstanceV1Nics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#ip_address EcsInstanceV1#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#network_id EcsInstanceV1#network_id}
  */
  readonly networkId: string;
}

export function ecsInstanceV1NicsToTerraform(struct?: EcsInstanceV1Nics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    network_id: cdktf.stringToTerraform(struct!.networkId),
  }
}

export interface EcsInstanceV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#create EcsInstanceV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#delete EcsInstanceV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html#update EcsInstanceV1#update}
  */
  readonly update?: string;
}

export function ecsInstanceV1TimeoutsToTerraform(struct?: EcsInstanceV1TimeoutsOutputReference | EcsInstanceV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class EcsInstanceV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsInstanceV1Timeouts | undefined {
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
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsInstanceV1Timeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html opentelekomcloud_ecs_instance_v1}
*/
export class EcsInstanceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_ecs_instance_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ecs_instance_v1.html opentelekomcloud_ecs_instance_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsInstanceV1Config
  */
  public constructor(scope: Construct, id: string, config: EcsInstanceV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_ecs_instance_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoRecovery = config.autoRecovery;
    this._availabilityZone = config.availabilityZone;
    this._deleteDisksOnTermination = config.deleteDisksOnTermination;
    this._flavor = config.flavor;
    this._imageId = config.imageId;
    this._keyName = config.keyName;
    this._name = config.name;
    this._password = config.password;
    this._securityGroups = config.securityGroups;
    this._systemDiskSize = config.systemDiskSize;
    this._systemDiskType = config.systemDiskType;
    this._tags = config.tags;
    this._userData = config.userData;
    this._vpcId = config.vpcId;
    this._dataDisks = config.dataDisks;
    this._nics = config.nics;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_recovery - computed: true, optional: true, required: false
  private _autoRecovery?: boolean | cdktf.IResolvable; 
  public get autoRecovery() {
    return this.getBooleanAttribute('auto_recovery') as any;
  }
  public set autoRecovery(value: boolean | cdktf.IResolvable) {
    this._autoRecovery = value;
  }
  public resetAutoRecovery() {
    this._autoRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryInput() {
    return this._autoRecovery;
  }

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

  // delete_disks_on_termination - computed: false, optional: true, required: false
  private _deleteDisksOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteDisksOnTermination() {
    return this.getBooleanAttribute('delete_disks_on_termination') as any;
  }
  public set deleteDisksOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteDisksOnTermination = value;
  }
  public resetDeleteDisksOnTermination() {
    this._deleteDisksOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDisksOnTerminationInput() {
    return this._deleteDisksOnTermination;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // system_disk_size - computed: true, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // system_disk_type - computed: true, optional: true, required: false
  private _systemDiskType?: string; 
  public get systemDiskType() {
    return this.getStringAttribute('system_disk_type');
  }
  public set systemDiskType(value: string) {
    this._systemDiskType = value;
  }
  public resetSystemDiskType() {
    this._systemDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskTypeInput() {
    return this._systemDiskType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
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

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks?: EcsInstanceV1DataDisks[]; 
  public get dataDisks() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('data_disks') as any;
  }
  public set dataDisks(value: EcsInstanceV1DataDisks[]) {
    this._dataDisks = value;
  }
  public resetDataDisks() {
    this._dataDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks;
  }

  // nics - computed: false, optional: false, required: true
  private _nics?: EcsInstanceV1Nics[]; 
  public get nics() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('nics') as any;
  }
  public set nics(value: EcsInstanceV1Nics[]) {
    this._nics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcsInstanceV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcsInstanceV1Timeouts) {
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
      auto_recovery: cdktf.booleanToTerraform(this._autoRecovery),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      delete_disks_on_termination: cdktf.booleanToTerraform(this._deleteDisksOnTermination),
      flavor: cdktf.stringToTerraform(this._flavor),
      image_id: cdktf.stringToTerraform(this._imageId),
      key_name: cdktf.stringToTerraform(this._keyName),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      system_disk_type: cdktf.stringToTerraform(this._systemDiskType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      data_disks: cdktf.listMapper(ecsInstanceV1DataDisksToTerraform)(this._dataDisks),
      nics: cdktf.listMapper(ecsInstanceV1NicsToTerraform)(this._nics),
      timeouts: ecsInstanceV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
