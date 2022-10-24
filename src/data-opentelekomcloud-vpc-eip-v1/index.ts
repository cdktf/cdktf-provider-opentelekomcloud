// https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_eip_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudVpcEipV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_eip_v1#bandwidth_id DataOpentelekomcloudVpcEipV1#bandwidth_id}
  */
  readonly bandwidthId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_eip_v1#id DataOpentelekomcloudVpcEipV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_eip_v1#port_id DataOpentelekomcloudVpcEipV1#port_id}
  */
  readonly portId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_eip_v1#private_ip_address DataOpentelekomcloudVpcEipV1#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_eip_v1#public_ip_address DataOpentelekomcloudVpcEipV1#public_ip_address}
  */
  readonly publicIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_eip_v1#region DataOpentelekomcloudVpcEipV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_eip_v1#status DataOpentelekomcloudVpcEipV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_eip_v1#tags DataOpentelekomcloudVpcEipV1#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_eip_v1 opentelekomcloud_vpc_eip_v1}
*/
export class DataOpentelekomcloudVpcEipV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_vpc_eip_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_eip_v1 opentelekomcloud_vpc_eip_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudVpcEipV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudVpcEipV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_eip_v1',
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
    this._bandwidthId = config.bandwidthId;
    this._id = config.id;
    this._portId = config.portId;
    this._privateIpAddress = config.privateIpAddress;
    this._publicIpAddress = config.publicIpAddress;
    this._region = config.region;
    this._status = config.status;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_id - computed: false, optional: true, required: false
  private _bandwidthId?: string; 
  public get bandwidthId() {
    return this.getStringAttribute('bandwidth_id');
  }
  public set bandwidthId(value: string) {
    this._bandwidthId = value;
  }
  public resetBandwidthId() {
    this._bandwidthId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthIdInput() {
    return this._bandwidthId;
  }

  // bandwidth_share_type - computed: true, optional: false, required: false
  public get bandwidthShareType() {
    return this.getStringAttribute('bandwidth_share_type');
  }

  // bandwidth_size - computed: true, optional: false, required: false
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

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

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }

  // port_id - computed: false, optional: true, required: false
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  public resetPortId() {
    this._portId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // public_ip_address - computed: false, optional: true, required: false
  private _publicIpAddress?: string; 
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }
  public set publicIpAddress(value: string) {
    this._publicIpAddress = value;
  }
  public resetPublicIpAddress() {
    this._publicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressInput() {
    return this._publicIpAddress;
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

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_id: cdktf.stringToTerraform(this._bandwidthId),
      id: cdktf.stringToTerraform(this._id),
      port_id: cdktf.stringToTerraform(this._portId),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      public_ip_address: cdktf.stringToTerraform(this._publicIpAddress),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
