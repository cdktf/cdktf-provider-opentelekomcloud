// https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudRtsStackV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_v1.html#name DataOpentelekomcloudRtsStackV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_v1.html#region DataOpentelekomcloudRtsStackV1#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_v1.html opentelekomcloud_rts_stack_v1}
*/
export class DataOpentelekomcloudRtsStackV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_rts_stack_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_v1.html opentelekomcloud_rts_stack_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudRtsStackV1Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudRtsStackV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rts_stack_v1',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // disable_rollback - computed: true, optional: false, required: false
  public get disableRollback() {
    return this.getBooleanAttribute('disable_rollback') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
  }

  // notification_topics - computed: true, optional: false, required: false
  public get notificationTopics() {
    return this.getListAttribute('notification_topics');
  }

  // outputs - computed: true, optional: false, required: false
  public outputs(key: string): string {
    return new cdktf.StringMap(this, 'outputs').lookup(key);
  }

  // parameters - computed: true, optional: false, required: false
  public parameters(key: string): string {
    return new cdktf.StringMap(this, 'parameters').lookup(key);
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

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // template_body - computed: true, optional: false, required: false
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }

  // timeout_mins - computed: true, optional: false, required: false
  public get timeoutMins() {
    return this.getNumberAttribute('timeout_mins');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
