// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbPolicyV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#action LbPolicyV3#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#description LbPolicyV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#listener_id LbPolicyV3#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#name LbPolicyV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#position LbPolicyV3#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#project_id LbPolicyV3#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#redirect_listener_id LbPolicyV3#redirect_listener_id}
  */
  readonly redirectListenerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#redirect_pool_id LbPolicyV3#redirect_pool_id}
  */
  readonly redirectPoolId?: string;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#rules LbPolicyV3#rules}
  */
  readonly rules?: LbPolicyV3Rules[] | cdktf.IResolvable;
}
export interface LbPolicyV3Rules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#compare_type LbPolicyV3#compare_type}
  */
  readonly compareType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#type LbPolicyV3#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#value LbPolicyV3#value}
  */
  readonly value: string;
}

export function lbPolicyV3RulesToTerraform(struct?: LbPolicyV3Rules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compare_type: cdktf.stringToTerraform(struct!.compareType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3 opentelekomcloud_lb_policy_v3}
*/
export class LbPolicyV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lb_policy_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3 opentelekomcloud_lb_policy_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbPolicyV3Config
  */
  public constructor(scope: Construct, id: string, config: LbPolicyV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_policy_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.29.3',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._description = config.description;
    this._listenerId = config.listenerId;
    this._name = config.name;
    this._position = config.position;
    this._projectId = config.projectId;
    this._redirectListenerId = config.redirectListenerId;
    this._redirectPoolId = config.redirectPoolId;
    this._rules = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
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

  // position - computed: false, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
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

  // redirect_listener_id - computed: false, optional: true, required: false
  private _redirectListenerId?: string; 
  public get redirectListenerId() {
    return this.getStringAttribute('redirect_listener_id');
  }
  public set redirectListenerId(value: string) {
    this._redirectListenerId = value;
  }
  public resetRedirectListenerId() {
    this._redirectListenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectListenerIdInput() {
    return this._redirectListenerId;
  }

  // redirect_pool_id - computed: false, optional: true, required: false
  private _redirectPoolId?: string; 
  public get redirectPoolId() {
    return this.getStringAttribute('redirect_pool_id');
  }
  public set redirectPoolId(value: string) {
    this._redirectPoolId = value;
  }
  public resetRedirectPoolId() {
    this._redirectPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectPoolIdInput() {
    return this._redirectPoolId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: LbPolicyV3Rules[] | cdktf.IResolvable; 
  public get rules() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('rules')));
  }
  public set rules(value: LbPolicyV3Rules[] | cdktf.IResolvable) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      project_id: cdktf.stringToTerraform(this._projectId),
      redirect_listener_id: cdktf.stringToTerraform(this._redirectListenerId),
      redirect_pool_id: cdktf.stringToTerraform(this._redirectPoolId),
      rules: cdktf.listMapper(lbPolicyV3RulesToTerraform)(this._rules),
    };
  }
}
