// https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_peering_connection_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudVpcPeeringConnectionV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_peering_connection_v2#id DataOpentelekomcloudVpcPeeringConnectionV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_peering_connection_v2#name DataOpentelekomcloudVpcPeeringConnectionV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_peering_connection_v2#peer_tenant_id DataOpentelekomcloudVpcPeeringConnectionV2#peer_tenant_id}
  */
  readonly peerTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_peering_connection_v2#peer_vpc_id DataOpentelekomcloudVpcPeeringConnectionV2#peer_vpc_id}
  */
  readonly peerVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_peering_connection_v2#region DataOpentelekomcloudVpcPeeringConnectionV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_peering_connection_v2#status DataOpentelekomcloudVpcPeeringConnectionV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_peering_connection_v2#vpc_id DataOpentelekomcloudVpcPeeringConnectionV2#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_peering_connection_v2 opentelekomcloud_vpc_peering_connection_v2}
*/
export class DataOpentelekomcloudVpcPeeringConnectionV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_vpc_peering_connection_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_peering_connection_v2 opentelekomcloud_vpc_peering_connection_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudVpcPeeringConnectionV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudVpcPeeringConnectionV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_peering_connection_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.32.1',
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
    this._id = config.id;
    this._name = config.name;
    this._peerTenantId = config.peerTenantId;
    this._peerVpcId = config.peerVpcId;
    this._region = config.region;
    this._status = config.status;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // peer_tenant_id - computed: false, optional: true, required: false
  private _peerTenantId?: string; 
  public get peerTenantId() {
    return this.getStringAttribute('peer_tenant_id');
  }
  public set peerTenantId(value: string) {
    this._peerTenantId = value;
  }
  public resetPeerTenantId() {
    this._peerTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTenantIdInput() {
    return this._peerTenantId;
  }

  // peer_vpc_id - computed: false, optional: true, required: false
  private _peerVpcId?: string; 
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }
  public set peerVpcId(value: string) {
    this._peerVpcId = value;
  }
  public resetPeerVpcId() {
    this._peerVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcIdInput() {
    return this._peerVpcId;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      peer_tenant_id: cdktf.stringToTerraform(this._peerTenantId),
      peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
