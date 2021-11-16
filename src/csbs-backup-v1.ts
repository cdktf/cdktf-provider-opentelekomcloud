// https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsbsBackupV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html#backup_name CsbsBackupV1#backup_name}
  */
  readonly backupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html#description CsbsBackupV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html#region CsbsBackupV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html#resource_id CsbsBackupV1#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html#resource_type CsbsBackupV1#resource_type}
  */
  readonly resourceType?: string;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html#tags CsbsBackupV1#tags}
  */
  readonly tags?: CsbsBackupV1Tags[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html#timeouts CsbsBackupV1#timeouts}
  */
  readonly timeouts?: CsbsBackupV1Timeouts;
}
export class CsbsBackupV1VmMetadata extends cdktf.ComplexComputedList {

  // cloud_service_type - computed: true, optional: false, required: false
  public get cloudServiceType() {
    return this.getStringAttribute('cloud_service_type');
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getNumberAttribute('disk');
  }

  // eip - computed: true, optional: false, required: false
  public get eip() {
    return this.getStringAttribute('eip');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
}
export class CsbsBackupV1VolumeBackups extends cdktf.ComplexComputedList {

  // average_speed - computed: true, optional: false, required: false
  public get averageSpeed() {
    return this.getNumberAttribute('average_speed');
  }

  // bootable - computed: true, optional: false, required: false
  public get bootable() {
    return this.getBooleanAttribute('bootable') as any;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // incremental - computed: true, optional: false, required: false
  public get incremental() {
    return this.getBooleanAttribute('incremental') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // source_volume_id - computed: true, optional: false, required: false
  public get sourceVolumeId() {
    return this.getStringAttribute('source_volume_id');
  }

  // source_volume_name - computed: true, optional: false, required: false
  public get sourceVolumeName() {
    return this.getStringAttribute('source_volume_name');
  }

  // source_volume_size - computed: true, optional: false, required: false
  public get sourceVolumeSize() {
    return this.getNumberAttribute('source_volume_size');
  }

  // space_saving_ratio - computed: true, optional: false, required: false
  public get spaceSavingRatio() {
    return this.getNumberAttribute('space_saving_ratio');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface CsbsBackupV1Tags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html#key CsbsBackupV1#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html#value CsbsBackupV1#value}
  */
  readonly value: string;
}

function csbsBackupV1TagsToTerraform(struct?: CsbsBackupV1Tags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CsbsBackupV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html#create CsbsBackupV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html#delete CsbsBackupV1#delete}
  */
  readonly delete?: string;
}

function csbsBackupV1TimeoutsToTerraform(struct?: CsbsBackupV1TimeoutsOutputReference | CsbsBackupV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class CsbsBackupV1TimeoutsOutputReference extends cdktf.ComplexObject {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html opentelekomcloud_csbs_backup_v1}
*/
export class CsbsBackupV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_csbs_backup_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_v1.html opentelekomcloud_csbs_backup_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsbsBackupV1Config
  */
  public constructor(scope: Construct, id: string, config: CsbsBackupV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_csbs_backup_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupName = config.backupName;
    this._description = config.description;
    this._region = config.region;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_name - computed: true, optional: true, required: false
  private _backupName?: string | undefined; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string | undefined) {
    this._backupName = value;
  }
  public resetBackupName() {
    this._backupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName
  }

  // backup_record_id - computed: true, optional: false, required: false
  public get backupRecordId() {
    return this.getStringAttribute('backup_record_id');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string | undefined; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string | undefined) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vm_metadata - computed: true, optional: false, required: false
  public vmMetadata(index: string) {
    return new CsbsBackupV1VmMetadata(this, 'vm_metadata', index);
  }

  // volume_backups - computed: true, optional: false, required: false
  public volumeBackups(index: string) {
    return new CsbsBackupV1VolumeBackups(this, 'volume_backups', index);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CsbsBackupV1Tags[] | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CsbsBackupV1Tags[] | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CsbsBackupV1Timeouts | undefined; 
  private __timeoutsOutput = new CsbsBackupV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CsbsBackupV1Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_name: cdktf.stringToTerraform(this._backupName),
      description: cdktf.stringToTerraform(this._description),
      region: cdktf.stringToTerraform(this._region),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      tags: cdktf.listMapper(csbsBackupV1TagsToTerraform)(this._tags),
      timeouts: csbsBackupV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
