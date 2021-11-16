// https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_share_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VbsBackupShareV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_share_v2.html#backup_id VbsBackupShareV2#backup_id}
  */
  readonly backupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_share_v2.html#region VbsBackupShareV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_share_v2.html#to_project_ids VbsBackupShareV2#to_project_ids}
  */
  readonly toProjectIds: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_share_v2.html#timeouts VbsBackupShareV2#timeouts}
  */
  readonly timeouts?: VbsBackupShareV2Timeouts;
}
export interface VbsBackupShareV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_share_v2.html#create VbsBackupShareV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_share_v2.html#delete VbsBackupShareV2#delete}
  */
  readonly delete?: string;
}

function vbsBackupShareV2TimeoutsToTerraform(struct?: VbsBackupShareV2TimeoutsOutputReference | VbsBackupShareV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class VbsBackupShareV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_share_v2.html opentelekomcloud_vbs_backup_share_v2}
*/
export class VbsBackupShareV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vbs_backup_share_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_share_v2.html opentelekomcloud_vbs_backup_share_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VbsBackupShareV2Config
  */
  public constructor(scope: Construct, id: string, config: VbsBackupShareV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vbs_backup_share_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupId = config.backupId;
    this._region = config.region;
    this._toProjectIds = config.toProjectIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId
  }

  // backup_name - computed: true, optional: false, required: false
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }

  // backup_status - computed: true, optional: false, required: false
  public get backupStatus() {
    return this.getStringAttribute('backup_status');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // service_metadata - computed: true, optional: false, required: false
  public get serviceMetadata() {
    return this.getStringAttribute('service_metadata');
  }

  // share_ids - computed: true, optional: false, required: false
  public get shareIds() {
    return this.getListAttribute('share_ids');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // to_project_ids - computed: false, optional: false, required: true
  private _toProjectIds?: string[]; 
  public get toProjectIds() {
    return this.getListAttribute('to_project_ids');
  }
  public set toProjectIds(value: string[]) {
    this._toProjectIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toProjectIdsInput() {
    return this._toProjectIds
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VbsBackupShareV2Timeouts | undefined; 
  private __timeoutsOutput = new VbsBackupShareV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VbsBackupShareV2Timeouts | undefined) {
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
      backup_id: cdktf.stringToTerraform(this._backupId),
      region: cdktf.stringToTerraform(this._region),
      to_project_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._toProjectIds),
      timeouts: vbsBackupShareV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
