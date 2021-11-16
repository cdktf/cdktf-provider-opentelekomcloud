// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbL7PolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#action LbL7PolicyV2#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#admin_state_up LbL7PolicyV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#description LbL7PolicyV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#listener_id LbL7PolicyV2#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#name LbL7PolicyV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#position LbL7PolicyV2#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#redirect_listener_id LbL7PolicyV2#redirect_listener_id}
  */
  readonly redirectListenerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#redirect_pool_id LbL7PolicyV2#redirect_pool_id}
  */
  readonly redirectPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#region LbL7PolicyV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#tenant_id LbL7PolicyV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#timeouts LbL7PolicyV2#timeouts}
  */
  readonly timeouts?: LbL7PolicyV2Timeouts;
}
export interface LbL7PolicyV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#create LbL7PolicyV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#delete LbL7PolicyV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html#update LbL7PolicyV2#update}
  */
  readonly update?: string;
}

function lbL7PolicyV2TimeoutsToTerraform(struct?: LbL7PolicyV2TimeoutsOutputReference | LbL7PolicyV2Timeouts): any {
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

export class LbL7PolicyV2TimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html opentelekomcloud_lb_l7policy_v2}
*/
export class LbL7PolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_l7policy_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7policy_v2.html opentelekomcloud_lb_l7policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbL7PolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: LbL7PolicyV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_l7policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._adminStateUp = config.adminStateUp;
    this._description = config.description;
    this._listenerId = config.listenerId;
    this._name = config.name;
    this._position = config.position;
    this._redirectListenerId = config.redirectListenerId;
    this._redirectPoolId = config.redirectPoolId;
    this._region = config.region;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
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
    return this._action
  }

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable | undefined; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up') as any;
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable | undefined) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp
  }

  // description - computed: false, optional: true, required: false
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
    return this._listenerId
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // position - computed: true, optional: true, required: false
  private _position?: number | undefined; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number | undefined) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position
  }

  // redirect_listener_id - computed: false, optional: true, required: false
  private _redirectListenerId?: string | undefined; 
  public get redirectListenerId() {
    return this.getStringAttribute('redirect_listener_id');
  }
  public set redirectListenerId(value: string | undefined) {
    this._redirectListenerId = value;
  }
  public resetRedirectListenerId() {
    this._redirectListenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectListenerIdInput() {
    return this._redirectListenerId
  }

  // redirect_pool_id - computed: false, optional: true, required: false
  private _redirectPoolId?: string | undefined; 
  public get redirectPoolId() {
    return this.getStringAttribute('redirect_pool_id');
  }
  public set redirectPoolId(value: string | undefined) {
    this._redirectPoolId = value;
  }
  public resetRedirectPoolId() {
    this._redirectPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectPoolIdInput() {
    return this._redirectPoolId
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

  // tenant_id - computed: true, optional: true, required: false
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
  private _timeouts?: LbL7PolicyV2Timeouts | undefined; 
  private __timeoutsOutput = new LbL7PolicyV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LbL7PolicyV2Timeouts | undefined) {
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
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      description: cdktf.stringToTerraform(this._description),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      redirect_listener_id: cdktf.stringToTerraform(this._redirectListenerId),
      redirect_pool_id: cdktf.stringToTerraform(this._redirectPoolId),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: lbL7PolicyV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
