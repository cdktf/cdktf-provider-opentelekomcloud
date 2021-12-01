// https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElbLoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#admin_state_up ElbLoadbalancer#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#az ElbLoadbalancer#az}
  */
  readonly az?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#bandwidth ElbLoadbalancer#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#description ElbLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#name ElbLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#region ElbLoadbalancer#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#security_group_id ElbLoadbalancer#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#type ElbLoadbalancer#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#vip_address ElbLoadbalancer#vip_address}
  */
  readonly vipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#vip_subnet_id ElbLoadbalancer#vip_subnet_id}
  */
  readonly vipSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#vpc_id ElbLoadbalancer#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#timeouts ElbLoadbalancer#timeouts}
  */
  readonly timeouts?: ElbLoadbalancerTimeouts;
}
export interface ElbLoadbalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#create ElbLoadbalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#delete ElbLoadbalancer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html#update ElbLoadbalancer#update}
  */
  readonly update?: string;
}

export function elbLoadbalancerTimeoutsToTerraform(struct?: ElbLoadbalancerTimeoutsOutputReference | ElbLoadbalancerTimeouts): any {
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

export class ElbLoadbalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElbLoadbalancerTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbLoadbalancerTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html opentelekomcloud_elb_loadbalancer}
*/
export class ElbLoadbalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_elb_loadbalancer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_loadbalancer.html opentelekomcloud_elb_loadbalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElbLoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: ElbLoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_elb_loadbalancer',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminStateUp = config.adminStateUp;
    this._az = config.az;
    this._bandwidth = config.bandwidth;
    this._description = config.description;
    this._name = config.name;
    this._region = config.region;
    this._securityGroupId = config.securityGroupId;
    this._type = config.type;
    this._vipAddress = config.vipAddress;
    this._vipSubnetId = config.vipSubnetId;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up') as any;
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp;
  }

  // az - computed: false, optional: true, required: false
  private _az?: string; 
  public get az() {
    return this.getStringAttribute('az');
  }
  public set az(value: string) {
    this._az = value;
  }
  public resetAz() {
    this._az = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azInput() {
    return this._az;
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // description - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vip_address - computed: true, optional: true, required: false
  private _vipAddress?: string; 
  public get vipAddress() {
    return this.getStringAttribute('vip_address');
  }
  public set vipAddress(value: string) {
    this._vipAddress = value;
  }
  public resetVipAddress() {
    this._vipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipAddressInput() {
    return this._vipAddress;
  }

  // vip_subnet_id - computed: false, optional: true, required: false
  private _vipSubnetId?: string; 
  public get vipSubnetId() {
    return this.getStringAttribute('vip_subnet_id');
  }
  public set vipSubnetId(value: string) {
    this._vipSubnetId = value;
  }
  public resetVipSubnetId() {
    this._vipSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipSubnetIdInput() {
    return this._vipSubnetId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ElbLoadbalancerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ElbLoadbalancerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      az: cdktf.stringToTerraform(this._az),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      type: cdktf.stringToTerraform(this._type),
      vip_address: cdktf.stringToTerraform(this._vipAddress),
      vip_subnet_id: cdktf.stringToTerraform(this._vipSubnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: elbLoadbalancerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
