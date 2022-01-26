// https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_node_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCceNodeV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_node_v3#cluster_id DataOpentelekomcloudCceNodeV3#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_node_v3#name DataOpentelekomcloudCceNodeV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_node_v3#node_id DataOpentelekomcloudCceNodeV3#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_node_v3#region DataOpentelekomcloudCceNodeV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_node_v3#status DataOpentelekomcloudCceNodeV3#status}
  */
  readonly status?: string;
}
export class DataOpentelekomcloudCceNodeV3DataVolumes extends cdktf.ComplexComputedList {

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // extend_param - computed: true, optional: false, required: false
  public get extendParam() {
    return this.getStringAttribute('extend_param');
  }

  // kms_id - computed: true, optional: false, required: false
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_node_v3 opentelekomcloud_cce_node_v3}
*/
export class DataOpentelekomcloudCceNodeV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_cce_node_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_node_v3 opentelekomcloud_cce_node_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCceNodeV3Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCceNodeV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cce_node_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._name = config.name;
    this._nodeId = config.nodeId;
    this._region = config.region;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // bandwidth_size - computed: true, optional: false, required: false
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }

  // billing_mode - computed: true, optional: false, required: false
  public get billingMode() {
    return this.getNumberAttribute('billing_mode');
  }

  // charge_mode - computed: true, optional: false, required: false
  public get chargeMode() {
    return this.getStringAttribute('charge_mode');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // data_volumes - computed: true, optional: false, required: false
  public dataVolumes(index: string) {
    return new DataOpentelekomcloudCceNodeV3DataVolumes(this, 'data_volumes', index, false);
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // eip_count - computed: true, optional: false, required: false
  public get eipCount() {
    return this.getNumberAttribute('eip_count');
  }

  // eip_ids - computed: true, optional: false, required: false
  public get eipIds() {
    return cdktf.Fn.tolist(this.getListAttribute('eip_ids'));
  }

  // flavor_id - computed: true, optional: false, required: false
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_type - computed: true, optional: false, required: false
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }

  // key_pair - computed: true, optional: false, required: false
  public get keyPair() {
    return this.getStringAttribute('key_pair');
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

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
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

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }

  // share_type - computed: true, optional: false, required: false
  public get shareType() {
    return this.getStringAttribute('share_type');
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

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      name: cdktf.stringToTerraform(this._name),
      node_id: cdktf.stringToTerraform(this._nodeId),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
