// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbLoadbalancerV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#admin_state_up LbLoadbalancerV3#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#availability_zones LbLoadbalancerV3#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#description LbLoadbalancerV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#id LbLoadbalancerV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#ip_target_enable LbLoadbalancerV3#ip_target_enable}
  */
  readonly ipTargetEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#l4_flavor LbLoadbalancerV3#l4_flavor}
  */
  readonly l4Flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#l7_flavor LbLoadbalancerV3#l7_flavor}
  */
  readonly l7Flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#name LbLoadbalancerV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#network_ids LbLoadbalancerV3#network_ids}
  */
  readonly networkIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#router_id LbLoadbalancerV3#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#subnet_id LbLoadbalancerV3#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#tags LbLoadbalancerV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#vip_address LbLoadbalancerV3#vip_address}
  */
  readonly vipAddress?: string;
  /**
  * public_ip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#public_ip LbLoadbalancerV3#public_ip}
  */
  readonly publicIp?: LbLoadbalancerV3PublicIp;
}
export interface LbLoadbalancerV3PublicIp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_charge_mode LbLoadbalancerV3#bandwidth_charge_mode}
  */
  readonly bandwidthChargeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_name LbLoadbalancerV3#bandwidth_name}
  */
  readonly bandwidthName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_share_type LbLoadbalancerV3#bandwidth_share_type}
  */
  readonly bandwidthShareType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_size LbLoadbalancerV3#bandwidth_size}
  */
  readonly bandwidthSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#id LbLoadbalancerV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#ip_type LbLoadbalancerV3#ip_type}
  */
  readonly ipType?: string;
}

export function lbLoadbalancerV3PublicIpToTerraform(struct?: LbLoadbalancerV3PublicIpOutputReference | LbLoadbalancerV3PublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_charge_mode: cdktf.stringToTerraform(struct!.bandwidthChargeMode),
    bandwidth_name: cdktf.stringToTerraform(struct!.bandwidthName),
    bandwidth_share_type: cdktf.stringToTerraform(struct!.bandwidthShareType),
    bandwidth_size: cdktf.numberToTerraform(struct!.bandwidthSize),
    id: cdktf.stringToTerraform(struct!.id),
    ip_type: cdktf.stringToTerraform(struct!.ipType),
  }
}

export class LbLoadbalancerV3PublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbLoadbalancerV3PublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthChargeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthChargeMode = this._bandwidthChargeMode;
    }
    if (this._bandwidthName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthName = this._bandwidthName;
    }
    if (this._bandwidthShareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthShareType = this._bandwidthShareType;
    }
    if (this._bandwidthSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthSize = this._bandwidthSize;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbLoadbalancerV3PublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidthChargeMode = undefined;
      this._bandwidthName = undefined;
      this._bandwidthShareType = undefined;
      this._bandwidthSize = undefined;
      this._id = undefined;
      this._ipType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidthChargeMode = value.bandwidthChargeMode;
      this._bandwidthName = value.bandwidthName;
      this._bandwidthShareType = value.bandwidthShareType;
      this._bandwidthSize = value.bandwidthSize;
      this._id = value.id;
      this._ipType = value.ipType;
    }
  }

  // _managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getBooleanAttribute('_managed');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // bandwidth_charge_mode - computed: false, optional: true, required: false
  private _bandwidthChargeMode?: string; 
  public get bandwidthChargeMode() {
    return this.getStringAttribute('bandwidth_charge_mode');
  }
  public set bandwidthChargeMode(value: string) {
    this._bandwidthChargeMode = value;
  }
  public resetBandwidthChargeMode() {
    this._bandwidthChargeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthChargeModeInput() {
    return this._bandwidthChargeMode;
  }

  // bandwidth_name - computed: true, optional: true, required: false
  private _bandwidthName?: string; 
  public get bandwidthName() {
    return this.getStringAttribute('bandwidth_name');
  }
  public set bandwidthName(value: string) {
    this._bandwidthName = value;
  }
  public resetBandwidthName() {
    this._bandwidthName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthNameInput() {
    return this._bandwidthName;
  }

  // bandwidth_share_type - computed: true, optional: true, required: false
  private _bandwidthShareType?: string; 
  public get bandwidthShareType() {
    return this.getStringAttribute('bandwidth_share_type');
  }
  public set bandwidthShareType(value: string) {
    this._bandwidthShareType = value;
  }
  public resetBandwidthShareType() {
    this._bandwidthShareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthShareTypeInput() {
    return this._bandwidthShareType;
  }

  // bandwidth_size - computed: true, optional: true, required: false
  private _bandwidthSize?: number; 
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }
  public set bandwidthSize(value: number) {
    this._bandwidthSize = value;
  }
  public resetBandwidthSize() {
    this._bandwidthSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthSizeInput() {
    return this._bandwidthSize;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_type - computed: true, optional: true, required: false
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3 opentelekomcloud_lb_loadbalancer_v3}
*/
export class LbLoadbalancerV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lb_loadbalancer_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3 opentelekomcloud_lb_loadbalancer_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbLoadbalancerV3Config
  */
  public constructor(scope: Construct, id: string, config: LbLoadbalancerV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_loadbalancer_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.31.6',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminStateUp = config.adminStateUp;
    this._availabilityZones = config.availabilityZones;
    this._description = config.description;
    this._id = config.id;
    this._ipTargetEnable = config.ipTargetEnable;
    this._l4Flavor = config.l4Flavor;
    this._l7Flavor = config.l7Flavor;
    this._name = config.name;
    this._networkIds = config.networkIds;
    this._routerId = config.routerId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vipAddress = config.vipAddress;
    this._publicIp.internalValue = config.publicIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
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

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_target_enable - computed: true, optional: true, required: false
  private _ipTargetEnable?: boolean | cdktf.IResolvable; 
  public get ipTargetEnable() {
    return this.getBooleanAttribute('ip_target_enable');
  }
  public set ipTargetEnable(value: boolean | cdktf.IResolvable) {
    this._ipTargetEnable = value;
  }
  public resetIpTargetEnable() {
    this._ipTargetEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTargetEnableInput() {
    return this._ipTargetEnable;
  }

  // l4_flavor - computed: true, optional: true, required: false
  private _l4Flavor?: string; 
  public get l4Flavor() {
    return this.getStringAttribute('l4_flavor');
  }
  public set l4Flavor(value: string) {
    this._l4Flavor = value;
  }
  public resetL4Flavor() {
    this._l4Flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4FlavorInput() {
    return this._l4Flavor;
  }

  // l7_flavor - computed: true, optional: true, required: false
  private _l7Flavor?: string; 
  public get l7Flavor() {
    return this.getStringAttribute('l7_flavor');
  }
  public set l7Flavor(value: string) {
    this._l7Flavor = value;
  }
  public resetL7Flavor() {
    this._l7Flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7FlavorInput() {
    return this._l7Flavor;
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

  // network_ids - computed: false, optional: false, required: true
  private _networkIds?: string[]; 
  public get networkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_ids'));
  }
  public set networkIds(value: string[]) {
    this._networkIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdsInput() {
    return this._networkIds;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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

  // vip_port_id - computed: true, optional: false, required: false
  public get vipPortId() {
    return this.getStringAttribute('vip_port_id');
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp = new LbLoadbalancerV3PublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: LbLoadbalancerV3PublicIp) {
    this._publicIp.internalValue = value;
  }
  public resetPublicIp() {
    this._publicIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_target_enable: cdktf.booleanToTerraform(this._ipTargetEnable),
      l4_flavor: cdktf.stringToTerraform(this._l4Flavor),
      l7_flavor: cdktf.stringToTerraform(this._l7Flavor),
      name: cdktf.stringToTerraform(this._name),
      network_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkIds),
      router_id: cdktf.stringToTerraform(this._routerId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vip_address: cdktf.stringToTerraform(this._vipAddress),
      public_ip: lbLoadbalancerV3PublicIpToTerraform(this._publicIp.internalValue),
    };
  }
}
