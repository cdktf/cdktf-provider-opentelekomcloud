// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbPoolV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#admin_state_up LbPoolV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#description LbPoolV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#lb_method LbPoolV2#lb_method}
  */
  readonly lbMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#listener_id LbPoolV2#listener_id}
  */
  readonly listenerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#loadbalancer_id LbPoolV2#loadbalancer_id}
  */
  readonly loadbalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#name LbPoolV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#protocol LbPoolV2#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#region LbPoolV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#tenant_id LbPoolV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * persistence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#persistence LbPoolV2#persistence}
  */
  readonly persistence?: LbPoolV2Persistence[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#timeouts LbPoolV2#timeouts}
  */
  readonly timeouts?: LbPoolV2Timeouts;
}
export interface LbPoolV2Persistence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#cookie_name LbPoolV2#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#type LbPoolV2#type}
  */
  readonly type?: string;
}

function lbPoolV2PersistenceToTerraform(struct?: LbPoolV2Persistence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface LbPoolV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#create LbPoolV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#delete LbPoolV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html#update LbPoolV2#update}
  */
  readonly update?: string;
}

function lbPoolV2TimeoutsToTerraform(struct?: LbPoolV2TimeoutsOutputReference | LbPoolV2Timeouts): any {
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

export class LbPoolV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html opentelekomcloud_lb_pool_v2}
*/
export class LbPoolV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_pool_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v2.html opentelekomcloud_lb_pool_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbPoolV2Config
  */
  public constructor(scope: Construct, id: string, config: LbPoolV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_pool_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminStateUp = config.adminStateUp;
    this._description = config.description;
    this._lbMethod = config.lbMethod;
    this._listenerId = config.listenerId;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._region = config.region;
    this._tenantId = config.tenantId;
    this._persistence = config.persistence;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // lb_method - computed: false, optional: false, required: true
  private _lbMethod?: string; 
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }
  public set lbMethod(value: string) {
    this._lbMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbMethodInput() {
    return this._lbMethod
  }

  // listener_id - computed: false, optional: true, required: false
  private _listenerId?: string | undefined; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string | undefined) {
    this._listenerId = value;
  }
  public resetListenerId() {
    this._listenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId
  }

  // loadbalancer_id - computed: false, optional: true, required: false
  private _loadbalancerId?: string | undefined; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string | undefined) {
    this._loadbalancerId = value;
  }
  public resetLoadbalancerId() {
    this._loadbalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
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

  // persistence - computed: false, optional: true, required: false
  private _persistence?: LbPoolV2Persistence[] | undefined; 
  public get persistence() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('persistence') as any;
  }
  public set persistence(value: LbPoolV2Persistence[] | undefined) {
    this._persistence = value;
  }
  public resetPersistence() {
    this._persistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbPoolV2Timeouts | undefined; 
  private __timeoutsOutput = new LbPoolV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LbPoolV2Timeouts | undefined) {
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
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      description: cdktf.stringToTerraform(this._description),
      lb_method: cdktf.stringToTerraform(this._lbMethod),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      persistence: cdktf.listMapper(lbPoolV2PersistenceToTerraform)(this._persistence),
      timeouts: lbPoolV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
