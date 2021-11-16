// https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_software_deployment_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudRtsSoftwareDeploymentV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_software_deployment_v1.html#action DataOpentelekomcloudRtsSoftwareDeploymentV1#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_software_deployment_v1.html#config_id DataOpentelekomcloudRtsSoftwareDeploymentV1#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_software_deployment_v1.html#id DataOpentelekomcloudRtsSoftwareDeploymentV1#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_software_deployment_v1.html#region DataOpentelekomcloudRtsSoftwareDeploymentV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_software_deployment_v1.html#server_id DataOpentelekomcloudRtsSoftwareDeploymentV1#server_id}
  */
  readonly serverId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_software_deployment_v1.html#status DataOpentelekomcloudRtsSoftwareDeploymentV1#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_software_deployment_v1.html opentelekomcloud_rts_software_deployment_v1}
*/
export class DataOpentelekomcloudRtsSoftwareDeploymentV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_rts_software_deployment_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_software_deployment_v1.html opentelekomcloud_rts_software_deployment_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudRtsSoftwareDeploymentV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudRtsSoftwareDeploymentV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rts_software_deployment_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._configId = config.configId;
    this._id = config.id;
    this._region = config.region;
    this._serverId = config.serverId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string | undefined; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string | undefined) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // config_id - computed: false, optional: true, required: false
  private _configId?: string | undefined; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string | undefined) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId
  }

  // id - computed: false, optional: true, required: false
  private _id?: string | undefined; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // input_values - computed: true, optional: false, required: false
  public inputValues(key: string): string {
    return new cdktf.StringMap(this, 'input_values').lookup(key);
  }

  // output_values - computed: true, optional: false, required: false
  public outputValues(key: string): string {
    return new cdktf.StringMap(this, 'output_values').lookup(key);
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

  // server_id - computed: false, optional: true, required: false
  private _serverId?: string | undefined; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string | undefined) {
    this._serverId = value;
  }
  public resetServerId() {
    this._serverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId
  }

  // status - computed: false, optional: true, required: false
  private _status?: string | undefined; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      config_id: cdktf.stringToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      server_id: cdktf.stringToTerraform(this._serverId),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
