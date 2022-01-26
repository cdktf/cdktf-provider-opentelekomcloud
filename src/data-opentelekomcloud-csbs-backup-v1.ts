// https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCsbsBackupV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#backup_name DataOpentelekomcloudCsbsBackupV1#backup_name}
  */
  readonly backupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#backup_record_id DataOpentelekomcloudCsbsBackupV1#backup_record_id}
  */
  readonly backupRecordId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#id DataOpentelekomcloudCsbsBackupV1#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#policy_id DataOpentelekomcloudCsbsBackupV1#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#region DataOpentelekomcloudCsbsBackupV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#resource_id DataOpentelekomcloudCsbsBackupV1#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#resource_name DataOpentelekomcloudCsbsBackupV1#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#resource_type DataOpentelekomcloudCsbsBackupV1#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#status DataOpentelekomcloudCsbsBackupV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#vm_ip DataOpentelekomcloudCsbsBackupV1#vm_ip}
  */
  readonly vmIp?: string;
}
export class DataOpentelekomcloudCsbsBackupV1Tags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOpentelekomcloudCsbsBackupV1VmMetadata extends cdktf.ComplexComputedList {

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
export class DataOpentelekomcloudCsbsBackupV1VolumeBackups extends cdktf.ComplexComputedList {

  // average_speed - computed: true, optional: false, required: false
  public get averageSpeed() {
    return this.getNumberAttribute('average_speed');
  }

  // bootable - computed: true, optional: false, required: false
  public get bootable() {
    return this.getBooleanAttribute('bootable');
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
    return this.getBooleanAttribute('incremental');
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1 opentelekomcloud_csbs_backup_v1}
*/
export class DataOpentelekomcloudCsbsBackupV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_csbs_backup_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1 opentelekomcloud_csbs_backup_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCsbsBackupV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCsbsBackupV1Config = {}) {
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
    this._backupRecordId = config.backupRecordId;
    this._id = config.id;
    this._policyId = config.policyId;
    this._region = config.region;
    this._resourceId = config.resourceId;
    this._resourceName = config.resourceName;
    this._resourceType = config.resourceType;
    this._status = config.status;
    this._vmIp = config.vmIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_trigger - computed: true, optional: false, required: false
  public get autoTrigger() {
    return this.getBooleanAttribute('auto_trigger');
  }

  // average_speed - computed: true, optional: false, required: false
  public get averageSpeed() {
    return this.getNumberAttribute('average_speed');
  }

  // backup_name - computed: true, optional: true, required: false
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  public resetBackupName() {
    this._backupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
  }

  // backup_record_id - computed: true, optional: true, required: false
  private _backupRecordId?: string; 
  public get backupRecordId() {
    return this.getStringAttribute('backup_record_id');
  }
  public set backupRecordId(value: string) {
    this._backupRecordId = value;
  }
  public resetBackupRecordId() {
    this._backupRecordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRecordIdInput() {
    return this._backupRecordId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: true, required: false
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

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
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

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_name - computed: true, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: false, required: false
  public tags(index: string) {
    return new DataOpentelekomcloudCsbsBackupV1Tags(this, 'tags', index, true);
  }

  // vm_ip - computed: false, optional: true, required: false
  private _vmIp?: string; 
  public get vmIp() {
    return this.getStringAttribute('vm_ip');
  }
  public set vmIp(value: string) {
    this._vmIp = value;
  }
  public resetVmIp() {
    this._vmIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIpInput() {
    return this._vmIp;
  }

  // vm_metadata - computed: true, optional: false, required: false
  public vmMetadata(index: string) {
    return new DataOpentelekomcloudCsbsBackupV1VmMetadata(this, 'vm_metadata', index, true);
  }

  // volume_backups - computed: true, optional: false, required: false
  public volumeBackups(index: string) {
    return new DataOpentelekomcloudCsbsBackupV1VolumeBackups(this, 'volume_backups', index, true);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_name: cdktf.stringToTerraform(this._backupName),
      backup_record_id: cdktf.stringToTerraform(this._backupRecordId),
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.stringToTerraform(this._policyId),
      region: cdktf.stringToTerraform(this._region),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      status: cdktf.stringToTerraform(this._status),
      vm_ip: cdktf.stringToTerraform(this._vmIp),
    };
  }
}
