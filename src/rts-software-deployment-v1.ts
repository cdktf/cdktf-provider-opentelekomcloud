// https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RtsSoftwareDeploymentV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#action RtsSoftwareDeploymentV1#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#config_id RtsSoftwareDeploymentV1#config_id}
  */
  readonly configId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#input_values RtsSoftwareDeploymentV1#input_values}
  */
  readonly inputValues?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#output_values RtsSoftwareDeploymentV1#output_values}
  */
  readonly outputValues?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#region RtsSoftwareDeploymentV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#server_id RtsSoftwareDeploymentV1#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#status RtsSoftwareDeploymentV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#status_reason RtsSoftwareDeploymentV1#status_reason}
  */
  readonly statusReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#tenant_id RtsSoftwareDeploymentV1#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#timeouts RtsSoftwareDeploymentV1#timeouts}
  */
  readonly timeouts?: RtsSoftwareDeploymentV1Timeouts;
}
export interface RtsSoftwareDeploymentV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#create RtsSoftwareDeploymentV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html#delete RtsSoftwareDeploymentV1#delete}
  */
  readonly delete?: string;
}

function rtsSoftwareDeploymentV1TimeoutsToTerraform(struct?: RtsSoftwareDeploymentV1TimeoutsOutputReference | RtsSoftwareDeploymentV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class RtsSoftwareDeploymentV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html opentelekomcloud_rts_software_deployment_v1}
*/
export class RtsSoftwareDeploymentV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_rts_software_deployment_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1.html opentelekomcloud_rts_software_deployment_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RtsSoftwareDeploymentV1Config
  */
  public constructor(scope: Construct, id: string, config: RtsSoftwareDeploymentV1Config) {
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
    this._inputValues = config.inputValues;
    this._outputValues = config.outputValues;
    this._region = config.region;
    this._serverId = config.serverId;
    this._status = config.status;
    this._statusReason = config.statusReason;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
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

  // config_id - computed: false, optional: false, required: true
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_values - computed: true, optional: true, required: false
  private _inputValues?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get inputValues() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('input_values') as any;
  }
  public set inputValues(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._inputValues = value;
  }
  public resetInputValues() {
    this._inputValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputValuesInput() {
    return this._inputValues
  }

  // output_values - computed: true, optional: true, required: false
  private _outputValues?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get outputValues() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('output_values') as any;
  }
  public set outputValues(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._outputValues = value;
  }
  public resetOutputValues() {
    this._outputValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputValuesInput() {
    return this._outputValues
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

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId
  }

  // status - computed: true, optional: true, required: false
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

  // status_reason - computed: true, optional: true, required: false
  private _statusReason?: string | undefined; 
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }
  public set statusReason(value: string | undefined) {
    this._statusReason = value;
  }
  public resetStatusReason() {
    this._statusReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusReasonInput() {
    return this._statusReason
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string | undefined; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RtsSoftwareDeploymentV1Timeouts | undefined; 
  private __timeoutsOutput = new RtsSoftwareDeploymentV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: RtsSoftwareDeploymentV1Timeouts | undefined) {
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
      action: cdktf.stringToTerraform(this._action),
      config_id: cdktf.stringToTerraform(this._configId),
      input_values: cdktf.hashMapper(cdktf.anyToTerraform)(this._inputValues),
      output_values: cdktf.hashMapper(cdktf.anyToTerraform)(this._outputValues),
      region: cdktf.stringToTerraform(this._region),
      server_id: cdktf.stringToTerraform(this._serverId),
      status: cdktf.stringToTerraform(this._status),
      status_reason: cdktf.stringToTerraform(this._statusReason),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: rtsSoftwareDeploymentV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
