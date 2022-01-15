// https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingSubnetV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#cidr NetworkingSubnetV2#cidr}
  */
  readonly cidr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#dns_nameservers NetworkingSubnetV2#dns_nameservers}
  */
  readonly dnsNameservers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#enable_dhcp NetworkingSubnetV2#enable_dhcp}
  */
  readonly enableDhcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#gateway_ip NetworkingSubnetV2#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#ip_version NetworkingSubnetV2#ip_version}
  */
  readonly ipVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#name NetworkingSubnetV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#network_id NetworkingSubnetV2#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#no_gateway NetworkingSubnetV2#no_gateway}
  */
  readonly noGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#region NetworkingSubnetV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#tenant_id NetworkingSubnetV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#value_specs NetworkingSubnetV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * allocation_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#allocation_pools NetworkingSubnetV2#allocation_pools}
  */
  readonly allocationPools?: NetworkingSubnetV2AllocationPools[];
  /**
  * host_routes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#host_routes NetworkingSubnetV2#host_routes}
  */
  readonly hostRoutes?: NetworkingSubnetV2HostRoutes[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#timeouts NetworkingSubnetV2#timeouts}
  */
  readonly timeouts?: NetworkingSubnetV2Timeouts;
}
export interface NetworkingSubnetV2AllocationPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#end NetworkingSubnetV2#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#start NetworkingSubnetV2#start}
  */
  readonly start: string;
}

export function networkingSubnetV2AllocationPoolsToTerraform(struct?: NetworkingSubnetV2AllocationPools): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}

export interface NetworkingSubnetV2HostRoutes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#destination_cidr NetworkingSubnetV2#destination_cidr}
  */
  readonly destinationCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#next_hop NetworkingSubnetV2#next_hop}
  */
  readonly nextHop: string;
}

export function networkingSubnetV2HostRoutesToTerraform(struct?: NetworkingSubnetV2HostRoutes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
  }
}

export interface NetworkingSubnetV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#create NetworkingSubnetV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2#delete NetworkingSubnetV2#delete}
  */
  readonly delete?: string;
}

export function networkingSubnetV2TimeoutsToTerraform(struct?: NetworkingSubnetV2TimeoutsOutputReference | NetworkingSubnetV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class NetworkingSubnetV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkingSubnetV2Timeouts | undefined {
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

  public set internalValue(value: NetworkingSubnetV2Timeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2 opentelekomcloud_networking_subnet_v2}
*/
export class NetworkingSubnetV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_networking_subnet_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2 opentelekomcloud_networking_subnet_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingSubnetV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingSubnetV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_subnet_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cidr = config.cidr;
    this._dnsNameservers = config.dnsNameservers;
    this._enableDhcp = config.enableDhcp;
    this._gatewayIp = config.gatewayIp;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._networkId = config.networkId;
    this._noGateway = config.noGateway;
    this._region = config.region;
    this._tenantId = config.tenantId;
    this._valueSpecs = config.valueSpecs;
    this._allocationPools = config.allocationPools;
    this._hostRoutes = config.hostRoutes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // dns_nameservers - computed: false, optional: true, required: false
  private _dnsNameservers?: string[]; 
  public get dnsNameservers() {
    return this.getListAttribute('dns_nameservers');
  }
  public set dnsNameservers(value: string[]) {
    this._dnsNameservers = value;
  }
  public resetDnsNameservers() {
    this._dnsNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameserversInput() {
    return this._dnsNameservers;
  }

  // enable_dhcp - computed: false, optional: true, required: false
  private _enableDhcp?: boolean | cdktf.IResolvable; 
  public get enableDhcp() {
    return this.getBooleanAttribute('enable_dhcp') as any;
  }
  public set enableDhcp(value: boolean | cdktf.IResolvable) {
    this._enableDhcp = value;
  }
  public resetEnableDhcp() {
    this._enableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpInput() {
    return this._enableDhcp;
  }

  // gateway_ip - computed: true, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: number; 
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }
  public set ipVersion(value: number) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
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

  // no_gateway - computed: false, optional: true, required: false
  private _noGateway?: boolean | cdktf.IResolvable; 
  public get noGateway() {
    return this.getBooleanAttribute('no_gateway') as any;
  }
  public set noGateway(value: boolean | cdktf.IResolvable) {
    this._noGateway = value;
  }
  public resetNoGateway() {
    this._noGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGatewayInput() {
    return this._noGateway;
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
  private _valueSpecs?: { [key: string]: string } | cdktf.IResolvable; 
  public get valueSpecs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('value_specs') as any;
  }
  public set valueSpecs(value: { [key: string]: string } | cdktf.IResolvable) {
    this._valueSpecs = value;
  }
  public resetValueSpecs() {
    this._valueSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSpecsInput() {
    return this._valueSpecs;
  }

  // allocation_pools - computed: false, optional: true, required: false
  private _allocationPools?: NetworkingSubnetV2AllocationPools[]; 
  public get allocationPools() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allocation_pools') as any;
  }
  public set allocationPools(value: NetworkingSubnetV2AllocationPools[]) {
    this._allocationPools = value;
  }
  public resetAllocationPools() {
    this._allocationPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationPoolsInput() {
    return this._allocationPools;
  }

  // host_routes - computed: false, optional: true, required: false
  private _hostRoutes?: NetworkingSubnetV2HostRoutes[]; 
  public get hostRoutes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_routes') as any;
  }
  public set hostRoutes(value: NetworkingSubnetV2HostRoutes[]) {
    this._hostRoutes = value;
  }
  public resetHostRoutes() {
    this._hostRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRoutesInput() {
    return this._hostRoutes;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkingSubnetV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkingSubnetV2Timeouts) {
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
      cidr: cdktf.stringToTerraform(this._cidr),
      dns_nameservers: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsNameservers),
      enable_dhcp: cdktf.booleanToTerraform(this._enableDhcp),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      ip_version: cdktf.numberToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      no_gateway: cdktf.booleanToTerraform(this._noGateway),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      value_specs: cdktf.hashMapper(cdktf.anyToTerraform)(this._valueSpecs),
      allocation_pools: cdktf.listMapper(networkingSubnetV2AllocationPoolsToTerraform)(this._allocationPools),
      host_routes: cdktf.listMapper(networkingSubnetV2HostRoutesToTerraform)(this._hostRoutes),
      timeouts: networkingSubnetV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
