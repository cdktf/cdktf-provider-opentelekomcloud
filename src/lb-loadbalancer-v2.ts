// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbLoadbalancerV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#admin_state_up LbLoadbalancerV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#description LbLoadbalancerV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#loadbalancer_provider LbLoadbalancerV2#loadbalancer_provider}
  */
  readonly loadbalancerProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#name LbLoadbalancerV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#region LbLoadbalancerV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#tags LbLoadbalancerV2#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#tenant_id LbLoadbalancerV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#vip_address LbLoadbalancerV2#vip_address}
  */
  readonly vipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#vip_subnet_id LbLoadbalancerV2#vip_subnet_id}
  */
  readonly vipSubnetId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#timeouts LbLoadbalancerV2#timeouts}
  */
  readonly timeouts?: LbLoadbalancerV2Timeouts;
}
export interface LbLoadbalancerV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#create LbLoadbalancerV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#delete LbLoadbalancerV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html#update LbLoadbalancerV2#update}
  */
  readonly update?: string;
}

function lbLoadbalancerV2TimeoutsToTerraform(struct?: LbLoadbalancerV2TimeoutsOutputReference | LbLoadbalancerV2Timeouts): any {
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

export class LbLoadbalancerV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html opentelekomcloud_lb_loadbalancer_v2}
*/
export class LbLoadbalancerV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_loadbalancer_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v2.html opentelekomcloud_lb_loadbalancer_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbLoadbalancerV2Config
  */
  public constructor(scope: Construct, id: string, config: LbLoadbalancerV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_loadbalancer_v2',
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
    this._loadbalancerProvider = config.loadbalancerProvider;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._vipAddress = config.vipAddress;
    this._vipSubnetId = config.vipSubnetId;
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

  // loadbalancer_provider - computed: true, optional: true, required: false
  private _loadbalancerProvider?: string | undefined; 
  public get loadbalancerProvider() {
    return this.getStringAttribute('loadbalancer_provider');
  }
  public set loadbalancerProvider(value: string | undefined) {
    this._loadbalancerProvider = value;
  }
  public resetLoadbalancerProvider() {
    this._loadbalancerProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerProviderInput() {
    return this._loadbalancerProvider
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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

  // vip_address - computed: true, optional: true, required: false
  private _vipAddress?: string | undefined; 
  public get vipAddress() {
    return this.getStringAttribute('vip_address');
  }
  public set vipAddress(value: string | undefined) {
    this._vipAddress = value;
  }
  public resetVipAddress() {
    this._vipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipAddressInput() {
    return this._vipAddress
  }

  // vip_port_id - computed: true, optional: false, required: false
  public get vipPortId() {
    return this.getStringAttribute('vip_port_id');
  }

  // vip_subnet_id - computed: false, optional: false, required: true
  private _vipSubnetId?: string; 
  public get vipSubnetId() {
    return this.getStringAttribute('vip_subnet_id');
  }
  public set vipSubnetId(value: string) {
    this._vipSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipSubnetIdInput() {
    return this._vipSubnetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbLoadbalancerV2Timeouts | undefined; 
  private __timeoutsOutput = new LbLoadbalancerV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LbLoadbalancerV2Timeouts | undefined) {
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
      loadbalancer_provider: cdktf.stringToTerraform(this._loadbalancerProvider),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      vip_address: cdktf.stringToTerraform(this._vipAddress),
      vip_subnet_id: cdktf.stringToTerraform(this._vipSubnetId),
      timeouts: lbLoadbalancerV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
