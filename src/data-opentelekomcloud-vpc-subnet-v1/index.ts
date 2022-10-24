// https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudVpcSubnetV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#availability_zone DataOpentelekomcloudVpcSubnetV1#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#cidr DataOpentelekomcloudVpcSubnetV1#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#gateway_ip DataOpentelekomcloudVpcSubnetV1#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#id DataOpentelekomcloudVpcSubnetV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#name DataOpentelekomcloudVpcSubnetV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#primary_dns DataOpentelekomcloudVpcSubnetV1#primary_dns}
  */
  readonly primaryDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#region DataOpentelekomcloudVpcSubnetV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#secondary_dns DataOpentelekomcloudVpcSubnetV1#secondary_dns}
  */
  readonly secondaryDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#status DataOpentelekomcloudVpcSubnetV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#vpc_id DataOpentelekomcloudVpcSubnetV1#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1 opentelekomcloud_vpc_subnet_v1}
*/
export class DataOpentelekomcloudVpcSubnetV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_vpc_subnet_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1 opentelekomcloud_vpc_subnet_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudVpcSubnetV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudVpcSubnetV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_subnet_v1',
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
    this._availabilityZone = config.availabilityZone;
    this._cidr = config.cidr;
    this._gatewayIp = config.gatewayIp;
    this._id = config.id;
    this._name = config.name;
    this._primaryDns = config.primaryDns;
    this._region = config.region;
    this._secondaryDns = config.secondaryDns;
    this._status = config.status;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // dhcp_enable - computed: true, optional: false, required: false
  public get dhcpEnable() {
    return this.getBooleanAttribute('dhcp_enable');
  }

  // dns_list - computed: true, optional: false, required: false
  public get dnsList() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_list'));
  }

  // gateway_ip - computed: false, optional: true, required: false
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

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // primary_dns - computed: false, optional: true, required: false
  private _primaryDns?: string; 
  public get primaryDns() {
    return this.getStringAttribute('primary_dns');
  }
  public set primaryDns(value: string) {
    this._primaryDns = value;
  }
  public resetPrimaryDns() {
    this._primaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsInput() {
    return this._primaryDns;
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

  // secondary_dns - computed: false, optional: true, required: false
  private _secondaryDns?: string; 
  public get secondaryDns() {
    return this.getStringAttribute('secondary_dns');
  }
  public set secondaryDns(value: string) {
    this._secondaryDns = value;
  }
  public resetSecondaryDns() {
    this._secondaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsInput() {
    return this._secondaryDns;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cidr: cdktf.stringToTerraform(this._cidr),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      primary_dns: cdktf.stringToTerraform(this._primaryDns),
      region: cdktf.stringToTerraform(this._region),
      secondary_dns: cdktf.stringToTerraform(this._secondaryDns),
      status: cdktf.stringToTerraform(this._status),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
