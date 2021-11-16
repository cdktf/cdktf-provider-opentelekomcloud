// https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingSubnetV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#cidr NetworkingSubnetV2#cidr}
  */
  readonly cidr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#dns_nameservers NetworkingSubnetV2#dns_nameservers}
  */
  readonly dnsNameservers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#enable_dhcp NetworkingSubnetV2#enable_dhcp}
  */
  readonly enableDhcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#gateway_ip NetworkingSubnetV2#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#ip_version NetworkingSubnetV2#ip_version}
  */
  readonly ipVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#name NetworkingSubnetV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#network_id NetworkingSubnetV2#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#no_gateway NetworkingSubnetV2#no_gateway}
  */
  readonly noGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#region NetworkingSubnetV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#tenant_id NetworkingSubnetV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#value_specs NetworkingSubnetV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * allocation_pools block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#allocation_pools NetworkingSubnetV2#allocation_pools}
  */
  readonly allocationPools?: NetworkingSubnetV2AllocationPools[];
  /**
  * host_routes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#host_routes NetworkingSubnetV2#host_routes}
  */
  readonly hostRoutes?: NetworkingSubnetV2HostRoutes[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#timeouts NetworkingSubnetV2#timeouts}
  */
  readonly timeouts?: NetworkingSubnetV2Timeouts;
}
export interface NetworkingSubnetV2AllocationPools {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#end NetworkingSubnetV2#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#start NetworkingSubnetV2#start}
  */
  readonly start: string;
}

function networkingSubnetV2AllocationPoolsToTerraform(struct?: NetworkingSubnetV2AllocationPools): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#destination_cidr NetworkingSubnetV2#destination_cidr}
  */
  readonly destinationCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#next_hop NetworkingSubnetV2#next_hop}
  */
  readonly nextHop: string;
}

function networkingSubnetV2HostRoutesToTerraform(struct?: NetworkingSubnetV2HostRoutes): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#create NetworkingSubnetV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html#delete NetworkingSubnetV2#delete}
  */
  readonly delete?: string;
}

function networkingSubnetV2TimeoutsToTerraform(struct?: NetworkingSubnetV2TimeoutsOutputReference | NetworkingSubnetV2Timeouts): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html opentelekomcloud_networking_subnet_v2}
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
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_subnet_v2.html opentelekomcloud_networking_subnet_v2} Resource
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
    this._timeouts = config.timeouts;
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
    return this._cidr
  }

  // dns_nameservers - computed: false, optional: true, required: false
  private _dnsNameservers?: string[] | undefined; 
  public get dnsNameservers() {
    return this.getListAttribute('dns_nameservers');
  }
  public set dnsNameservers(value: string[] | undefined) {
    this._dnsNameservers = value;
  }
  public resetDnsNameservers() {
    this._dnsNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameserversInput() {
    return this._dnsNameservers
  }

  // enable_dhcp - computed: false, optional: true, required: false
  private _enableDhcp?: boolean | cdktf.IResolvable | undefined; 
  public get enableDhcp() {
    return this.getBooleanAttribute('enable_dhcp') as any;
  }
  public set enableDhcp(value: boolean | cdktf.IResolvable | undefined) {
    this._enableDhcp = value;
  }
  public resetEnableDhcp() {
    this._enableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpInput() {
    return this._enableDhcp
  }

  // gateway_ip - computed: true, optional: true, required: false
  private _gatewayIp?: string | undefined; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string | undefined) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: number | undefined; 
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }
  public set ipVersion(value: number | undefined) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion
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
    return this._networkId
  }

  // no_gateway - computed: false, optional: true, required: false
  private _noGateway?: boolean | cdktf.IResolvable | undefined; 
  public get noGateway() {
    return this.getBooleanAttribute('no_gateway') as any;
  }
  public set noGateway(value: boolean | cdktf.IResolvable | undefined) {
    this._noGateway = value;
  }
  public resetNoGateway() {
    this._noGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGatewayInput() {
    return this._noGateway
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

  // value_specs - computed: false, optional: true, required: false
  private _valueSpecs?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get valueSpecs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('value_specs') as any;
  }
  public set valueSpecs(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._valueSpecs = value;
  }
  public resetValueSpecs() {
    this._valueSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSpecsInput() {
    return this._valueSpecs
  }

  // allocation_pools - computed: false, optional: true, required: false
  private _allocationPools?: NetworkingSubnetV2AllocationPools[] | undefined; 
  public get allocationPools() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allocation_pools') as any;
  }
  public set allocationPools(value: NetworkingSubnetV2AllocationPools[] | undefined) {
    this._allocationPools = value;
  }
  public resetAllocationPools() {
    this._allocationPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationPoolsInput() {
    return this._allocationPools
  }

  // host_routes - computed: false, optional: true, required: false
  private _hostRoutes?: NetworkingSubnetV2HostRoutes[] | undefined; 
  public get hostRoutes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_routes') as any;
  }
  public set hostRoutes(value: NetworkingSubnetV2HostRoutes[] | undefined) {
    this._hostRoutes = value;
  }
  public resetHostRoutes() {
    this._hostRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRoutesInput() {
    return this._hostRoutes
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkingSubnetV2Timeouts | undefined; 
  private __timeoutsOutput = new NetworkingSubnetV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NetworkingSubnetV2Timeouts | undefined) {
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
      timeouts: networkingSubnetV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
