// https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingPortV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#admin_state_up NetworkingPortV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#device_id NetworkingPortV2#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#device_owner NetworkingPortV2#device_owner}
  */
  readonly deviceOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#id NetworkingPortV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#mac_address NetworkingPortV2#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#name NetworkingPortV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#network_id NetworkingPortV2#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#no_security_groups NetworkingPortV2#no_security_groups}
  */
  readonly noSecurityGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#port_security_enabled NetworkingPortV2#port_security_enabled}
  */
  readonly portSecurityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#region NetworkingPortV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#security_group_ids NetworkingPortV2#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#tenant_id NetworkingPortV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#value_specs NetworkingPortV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string };
  /**
  * allowed_address_pairs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#allowed_address_pairs NetworkingPortV2#allowed_address_pairs}
  */
  readonly allowedAddressPairs?: NetworkingPortV2AllowedAddressPairs[] | cdktf.IResolvable;
  /**
  * fixed_ip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#fixed_ip NetworkingPortV2#fixed_ip}
  */
  readonly fixedIp?: NetworkingPortV2FixedIp[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#timeouts NetworkingPortV2#timeouts}
  */
  readonly timeouts?: NetworkingPortV2Timeouts;
}
export interface NetworkingPortV2AllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#ip_address NetworkingPortV2#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#mac_address NetworkingPortV2#mac_address}
  */
  readonly macAddress?: string;
}

export function networkingPortV2AllowedAddressPairsToTerraform(struct?: NetworkingPortV2AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}

export class NetworkingPortV2AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkingPortV2AllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingPortV2AllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class NetworkingPortV2AllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : NetworkingPortV2AllowedAddressPairs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworkingPortV2AllowedAddressPairsOutputReference {
    return new NetworkingPortV2AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkingPortV2FixedIp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#ip_address NetworkingPortV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#subnet_id NetworkingPortV2#subnet_id}
  */
  readonly subnetId: string;
}

export function networkingPortV2FixedIpToTerraform(struct?: NetworkingPortV2FixedIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class NetworkingPortV2FixedIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkingPortV2FixedIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingPortV2FixedIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._subnetId = value.subnetId;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class NetworkingPortV2FixedIpList extends cdktf.ComplexList {
  public internalValue? : NetworkingPortV2FixedIp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworkingPortV2FixedIpOutputReference {
    return new NetworkingPortV2FixedIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkingPortV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#create NetworkingPortV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2#delete NetworkingPortV2#delete}
  */
  readonly delete?: string;
}

export function networkingPortV2TimeoutsToTerraform(struct?: NetworkingPortV2TimeoutsOutputReference | NetworkingPortV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class NetworkingPortV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkingPortV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingPortV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2 opentelekomcloud_networking_port_v2}
*/
export class NetworkingPortV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_networking_port_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_port_v2 opentelekomcloud_networking_port_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingPortV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingPortV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_port_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.32.3',
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
    this._deviceId = config.deviceId;
    this._deviceOwner = config.deviceOwner;
    this._id = config.id;
    this._macAddress = config.macAddress;
    this._name = config.name;
    this._networkId = config.networkId;
    this._noSecurityGroups = config.noSecurityGroups;
    this._portSecurityEnabled = config.portSecurityEnabled;
    this._region = config.region;
    this._securityGroupIds = config.securityGroupIds;
    this._tenantId = config.tenantId;
    this._valueSpecs = config.valueSpecs;
    this._allowedAddressPairs.internalValue = config.allowedAddressPairs;
    this._fixedIp.internalValue = config.fixedIp;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: true, optional: true, required: false
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

  // all_fixed_ips - computed: true, optional: false, required: false
  public get allFixedIps() {
    return this.getListAttribute('all_fixed_ips');
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // device_owner - computed: true, optional: true, required: false
  private _deviceOwner?: string; 
  public get deviceOwner() {
    return this.getStringAttribute('device_owner');
  }
  public set deviceOwner(value: string) {
    this._deviceOwner = value;
  }
  public resetDeviceOwner() {
    this._deviceOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOwnerInput() {
    return this._deviceOwner;
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

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // no_security_groups - computed: false, optional: true, required: false
  private _noSecurityGroups?: boolean | cdktf.IResolvable; 
  public get noSecurityGroups() {
    return this.getBooleanAttribute('no_security_groups');
  }
  public set noSecurityGroups(value: boolean | cdktf.IResolvable) {
    this._noSecurityGroups = value;
  }
  public resetNoSecurityGroups() {
    this._noSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSecurityGroupsInput() {
    return this._noSecurityGroups;
  }

  // port_security_enabled - computed: true, optional: true, required: false
  private _portSecurityEnabled?: boolean | cdktf.IResolvable; 
  public get portSecurityEnabled() {
    return this.getBooleanAttribute('port_security_enabled');
  }
  public set portSecurityEnabled(value: boolean | cdktf.IResolvable) {
    this._portSecurityEnabled = value;
  }
  public resetPortSecurityEnabled() {
    this._portSecurityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityEnabledInput() {
    return this._portSecurityEnabled;
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

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // value_specs - computed: false, optional: true, required: false
  private _valueSpecs?: { [key: string]: string }; 
  public get valueSpecs() {
    return this.getStringMapAttribute('value_specs');
  }
  public set valueSpecs(value: { [key: string]: string }) {
    this._valueSpecs = value;
  }
  public resetValueSpecs() {
    this._valueSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSpecsInput() {
    return this._valueSpecs;
  }

  // allowed_address_pairs - computed: false, optional: true, required: false
  private _allowedAddressPairs = new NetworkingPortV2AllowedAddressPairsList(this, "allowed_address_pairs", true);
  public get allowedAddressPairs() {
    return this._allowedAddressPairs;
  }
  public putAllowedAddressPairs(value: NetworkingPortV2AllowedAddressPairs[] | cdktf.IResolvable) {
    this._allowedAddressPairs.internalValue = value;
  }
  public resetAllowedAddressPairs() {
    this._allowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAddressPairsInput() {
    return this._allowedAddressPairs.internalValue;
  }

  // fixed_ip - computed: false, optional: true, required: false
  private _fixedIp = new NetworkingPortV2FixedIpList(this, "fixed_ip", false);
  public get fixedIp() {
    return this._fixedIp;
  }
  public putFixedIp(value: NetworkingPortV2FixedIp[] | cdktf.IResolvable) {
    this._fixedIp.internalValue = value;
  }
  public resetFixedIp() {
    this._fixedIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpInput() {
    return this._fixedIp.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkingPortV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkingPortV2Timeouts) {
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
      device_id: cdktf.stringToTerraform(this._deviceId),
      device_owner: cdktf.stringToTerraform(this._deviceOwner),
      id: cdktf.stringToTerraform(this._id),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      no_security_groups: cdktf.booleanToTerraform(this._noSecurityGroups),
      port_security_enabled: cdktf.booleanToTerraform(this._portSecurityEnabled),
      region: cdktf.stringToTerraform(this._region),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      value_specs: cdktf.hashMapper(cdktf.stringToTerraform)(this._valueSpecs),
      allowed_address_pairs: cdktf.listMapper(networkingPortV2AllowedAddressPairsToTerraform, true)(this._allowedAddressPairs.internalValue),
      fixed_ip: cdktf.listMapper(networkingPortV2FixedIpToTerraform, true)(this._fixedIp.internalValue),
      timeouts: networkingPortV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
