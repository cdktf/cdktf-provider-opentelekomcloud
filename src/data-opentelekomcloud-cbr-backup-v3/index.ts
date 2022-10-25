// https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCbrBackupV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#auto_trigger DataOpentelekomcloudCbrBackupV3#auto_trigger}
  */
  readonly autoTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#bootable DataOpentelekomcloudCbrBackupV3#bootable}
  */
  readonly bootable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#checkpoint_id DataOpentelekomcloudCbrBackupV3#checkpoint_id}
  */
  readonly checkpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#contain_system_disk DataOpentelekomcloudCbrBackupV3#contain_system_disk}
  */
  readonly containSystemDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#created_at DataOpentelekomcloudCbrBackupV3#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#description DataOpentelekomcloudCbrBackupV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#encrypted DataOpentelekomcloudCbrBackupV3#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#expired_at DataOpentelekomcloudCbrBackupV3#expired_at}
  */
  readonly expiredAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#id DataOpentelekomcloudCbrBackupV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#image_type DataOpentelekomcloudCbrBackupV3#image_type}
  */
  readonly imageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#incremental DataOpentelekomcloudCbrBackupV3#incremental}
  */
  readonly incremental?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#name DataOpentelekomcloudCbrBackupV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#parent_id DataOpentelekomcloudCbrBackupV3#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#project_id DataOpentelekomcloudCbrBackupV3#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#provider_id DataOpentelekomcloudCbrBackupV3#provider_id}
  */
  readonly providerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#resource_az DataOpentelekomcloudCbrBackupV3#resource_az}
  */
  readonly resourceAz?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#resource_id DataOpentelekomcloudCbrBackupV3#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#resource_name DataOpentelekomcloudCbrBackupV3#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#resource_size DataOpentelekomcloudCbrBackupV3#resource_size}
  */
  readonly resourceSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#resource_type DataOpentelekomcloudCbrBackupV3#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#snapshot_id DataOpentelekomcloudCbrBackupV3#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#status DataOpentelekomcloudCbrBackupV3#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#support_lld DataOpentelekomcloudCbrBackupV3#support_lld}
  */
  readonly supportLld?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#supported_restore_mode DataOpentelekomcloudCbrBackupV3#supported_restore_mode}
  */
  readonly supportedRestoreMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#system_disk DataOpentelekomcloudCbrBackupV3#system_disk}
  */
  readonly systemDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#updated_at DataOpentelekomcloudCbrBackupV3#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3#vault_id DataOpentelekomcloudCbrBackupV3#vault_id}
  */
  readonly vaultId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3 opentelekomcloud_cbr_backup_v3}
*/
export class DataOpentelekomcloudCbrBackupV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cbr_backup_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cbr_backup_v3 opentelekomcloud_cbr_backup_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCbrBackupV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCbrBackupV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cbr_backup_v3',
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
    this._autoTrigger = config.autoTrigger;
    this._bootable = config.bootable;
    this._checkpointId = config.checkpointId;
    this._containSystemDisk = config.containSystemDisk;
    this._createdAt = config.createdAt;
    this._description = config.description;
    this._encrypted = config.encrypted;
    this._expiredAt = config.expiredAt;
    this._id = config.id;
    this._imageType = config.imageType;
    this._incremental = config.incremental;
    this._name = config.name;
    this._parentId = config.parentId;
    this._projectId = config.projectId;
    this._providerId = config.providerId;
    this._resourceAz = config.resourceAz;
    this._resourceId = config.resourceId;
    this._resourceName = config.resourceName;
    this._resourceSize = config.resourceSize;
    this._resourceType = config.resourceType;
    this._snapshotId = config.snapshotId;
    this._status = config.status;
    this._supportLld = config.supportLld;
    this._supportedRestoreMode = config.supportedRestoreMode;
    this._systemDisk = config.systemDisk;
    this._updatedAt = config.updatedAt;
    this._vaultId = config.vaultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_trigger - computed: true, optional: true, required: false
  private _autoTrigger?: boolean | cdktf.IResolvable; 
  public get autoTrigger() {
    return this.getBooleanAttribute('auto_trigger');
  }
  public set autoTrigger(value: boolean | cdktf.IResolvable) {
    this._autoTrigger = value;
  }
  public resetAutoTrigger() {
    this._autoTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTriggerInput() {
    return this._autoTrigger;
  }

  // bootable - computed: true, optional: true, required: false
  private _bootable?: boolean | cdktf.IResolvable; 
  public get bootable() {
    return this.getBooleanAttribute('bootable');
  }
  public set bootable(value: boolean | cdktf.IResolvable) {
    this._bootable = value;
  }
  public resetBootable() {
    this._bootable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootableInput() {
    return this._bootable;
  }

  // checkpoint_id - computed: true, optional: true, required: false
  private _checkpointId?: string; 
  public get checkpointId() {
    return this.getStringAttribute('checkpoint_id');
  }
  public set checkpointId(value: string) {
    this._checkpointId = value;
  }
  public resetCheckpointId() {
    this._checkpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointIdInput() {
    return this._checkpointId;
  }

  // contain_system_disk - computed: true, optional: true, required: false
  private _containSystemDisk?: boolean | cdktf.IResolvable; 
  public get containSystemDisk() {
    return this.getBooleanAttribute('contain_system_disk');
  }
  public set containSystemDisk(value: boolean | cdktf.IResolvable) {
    this._containSystemDisk = value;
  }
  public resetContainSystemDisk() {
    this._containSystemDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containSystemDiskInput() {
    return this._containSystemDisk;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // expired_at - computed: true, optional: true, required: false
  private _expiredAt?: string; 
  public get expiredAt() {
    return this.getStringAttribute('expired_at');
  }
  public set expiredAt(value: string) {
    this._expiredAt = value;
  }
  public resetExpiredAt() {
    this._expiredAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredAtInput() {
    return this._expiredAt;
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

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // incremental - computed: true, optional: true, required: false
  private _incremental?: boolean | cdktf.IResolvable; 
  public get incremental() {
    return this.getBooleanAttribute('incremental');
  }
  public set incremental(value: boolean | cdktf.IResolvable) {
    this._incremental = value;
  }
  public resetIncremental() {
    this._incremental = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalInput() {
    return this._incremental;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // resource_az - computed: true, optional: true, required: false
  private _resourceAz?: string; 
  public get resourceAz() {
    return this.getStringAttribute('resource_az');
  }
  public set resourceAz(value: string) {
    this._resourceAz = value;
  }
  public resetResourceAz() {
    this._resourceAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAzInput() {
    return this._resourceAz;
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

  // resource_size - computed: true, optional: true, required: false
  private _resourceSize?: number; 
  public get resourceSize() {
    return this.getNumberAttribute('resource_size');
  }
  public set resourceSize(value: number) {
    this._resourceSize = value;
  }
  public resetResourceSize() {
    this._resourceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSizeInput() {
    return this._resourceSize;
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

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
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

  // support_lld - computed: true, optional: true, required: false
  private _supportLld?: boolean | cdktf.IResolvable; 
  public get supportLld() {
    return this.getBooleanAttribute('support_lld');
  }
  public set supportLld(value: boolean | cdktf.IResolvable) {
    this._supportLld = value;
  }
  public resetSupportLld() {
    this._supportLld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportLldInput() {
    return this._supportLld;
  }

  // supported_restore_mode - computed: true, optional: true, required: false
  private _supportedRestoreMode?: string; 
  public get supportedRestoreMode() {
    return this.getStringAttribute('supported_restore_mode');
  }
  public set supportedRestoreMode(value: string) {
    this._supportedRestoreMode = value;
  }
  public resetSupportedRestoreMode() {
    this._supportedRestoreMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedRestoreModeInput() {
    return this._supportedRestoreMode;
  }

  // system_disk - computed: true, optional: true, required: false
  private _systemDisk?: boolean | cdktf.IResolvable; 
  public get systemDisk() {
    return this.getBooleanAttribute('system_disk');
  }
  public set systemDisk(value: boolean | cdktf.IResolvable) {
    this._systemDisk = value;
  }
  public resetSystemDisk() {
    this._systemDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskInput() {
    return this._systemDisk;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_trigger: cdktf.booleanToTerraform(this._autoTrigger),
      bootable: cdktf.booleanToTerraform(this._bootable),
      checkpoint_id: cdktf.stringToTerraform(this._checkpointId),
      contain_system_disk: cdktf.booleanToTerraform(this._containSystemDisk),
      created_at: cdktf.stringToTerraform(this._createdAt),
      description: cdktf.stringToTerraform(this._description),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      expired_at: cdktf.stringToTerraform(this._expiredAt),
      id: cdktf.stringToTerraform(this._id),
      image_type: cdktf.stringToTerraform(this._imageType),
      incremental: cdktf.booleanToTerraform(this._incremental),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_id: cdktf.stringToTerraform(this._providerId),
      resource_az: cdktf.stringToTerraform(this._resourceAz),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_size: cdktf.numberToTerraform(this._resourceSize),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      status: cdktf.stringToTerraform(this._status),
      support_lld: cdktf.booleanToTerraform(this._supportLld),
      supported_restore_mode: cdktf.stringToTerraform(this._supportedRestoreMode),
      system_disk: cdktf.booleanToTerraform(this._systemDisk),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      vault_id: cdktf.stringToTerraform(this._vaultId),
    };
  }
}
