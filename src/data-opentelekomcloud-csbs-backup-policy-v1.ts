// https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCsbsBackupPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#name DataOpentelekomcloudCsbsBackupPolicyV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#region DataOpentelekomcloudCsbsBackupPolicyV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#status DataOpentelekomcloudCsbsBackupPolicyV1#status}
  */
  readonly status?: string;
}
export class DataOpentelekomcloudCsbsBackupPolicyV1Resource extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_backups - computed: true, optional: false, required: false
  public get maxBackups() {
    return this.getNumberAttribute('max_backups');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operation_type - computed: true, optional: false, required: false
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }

  // permanent - computed: true, optional: false, required: false
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }

  // retention_duration_days - computed: true, optional: false, required: false
  public get retentionDurationDays() {
    return this.getNumberAttribute('retention_duration_days');
  }

  // trigger_id - computed: true, optional: false, required: false
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
  }

  // trigger_name - computed: true, optional: false, required: false
  public get triggerName() {
    return this.getStringAttribute('trigger_name');
  }

  // trigger_pattern - computed: true, optional: false, required: false
  public get triggerPattern() {
    return this.getStringAttribute('trigger_pattern');
  }

  // trigger_type - computed: true, optional: false, required: false
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
}
export class DataOpentelekomcloudCsbsBackupPolicyV1Tags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1 opentelekomcloud_csbs_backup_policy_v1}
*/
export class DataOpentelekomcloudCsbsBackupPolicyV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_csbs_backup_policy_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1 opentelekomcloud_csbs_backup_policy_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCsbsBackupPolicyV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCsbsBackupPolicyV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_csbs_backup_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._region = config.region;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // common - computed: true, optional: false, required: false
  public common(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'common').lookup(key);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
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

  // resource - computed: true, optional: false, required: false
  public resource(index: string) {
    return new DataOpentelekomcloudCsbsBackupPolicyV1Resource(this, 'resource', index, true);
  }

  // scheduled_operation - computed: true, optional: false, required: false
  public scheduledOperation(index: string) {
    return new DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation(this, 'scheduled_operation', index, true);
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
    return new DataOpentelekomcloudCsbsBackupPolicyV1Tags(this, 'tags', index, true);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
