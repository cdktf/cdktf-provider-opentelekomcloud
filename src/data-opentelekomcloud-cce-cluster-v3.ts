// https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCceClusterV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_v3.html#cluster_type DataOpentelekomcloudCceClusterV3#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_v3.html#name DataOpentelekomcloudCceClusterV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_v3.html#region DataOpentelekomcloudCceClusterV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_v3.html#status DataOpentelekomcloudCceClusterV3#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_v3.html#vpc_id DataOpentelekomcloudCceClusterV3#vpc_id}
  */
  readonly vpcId?: string;
}
export class DataOpentelekomcloudCceClusterV3CertificateClusters extends cdktf.ComplexComputedList {

  // certificate_authority_data - computed: true, optional: false, required: false
  public get certificateAuthorityData() {
    return this.getStringAttribute('certificate_authority_data');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}
export class DataOpentelekomcloudCceClusterV3CertificateUsers extends cdktf.ComplexComputedList {

  // client_certificate_data - computed: true, optional: false, required: false
  public get clientCertificateData() {
    return this.getStringAttribute('client_certificate_data');
  }

  // client_key_data - computed: true, optional: false, required: false
  public get clientKeyData() {
    return this.getStringAttribute('client_key_data');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_v3.html opentelekomcloud_cce_cluster_v3}
*/
export class DataOpentelekomcloudCceClusterV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_cce_cluster_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_v3.html opentelekomcloud_cce_cluster_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCceClusterV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCceClusterV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cce_cluster_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterType = config.clusterType;
    this._name = config.name;
    this._region = config.region;
    this._status = config.status;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_mode - computed: true, optional: false, required: false
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }

  // billing_mode - computed: true, optional: false, required: false
  public get billingMode() {
    return this.getNumberAttribute('billing_mode');
  }

  // certificate_clusters - computed: true, optional: false, required: false
  public certificateClusters(index: string) {
    return new DataOpentelekomcloudCceClusterV3CertificateClusters(this, 'certificate_clusters', index);
  }

  // certificate_users - computed: true, optional: false, required: false
  public certificateUsers(index: string) {
    return new DataOpentelekomcloudCceClusterV3CertificateUsers(this, 'certificate_users', index);
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string | undefined; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string | undefined) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType
  }

  // cluster_version - computed: true, optional: false, required: false
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // container_network_cidr - computed: true, optional: false, required: false
  public get containerNetworkCidr() {
    return this.getStringAttribute('container_network_cidr');
  }

  // container_network_type - computed: true, optional: false, required: false
  public get containerNetworkType() {
    return this.getStringAttribute('container_network_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // external - computed: true, optional: false, required: false
  public get external() {
    return this.getStringAttribute('external');
  }

  // external_otc - computed: true, optional: false, required: false
  public get externalOtc() {
    return this.getStringAttribute('external_otc');
  }

  // flavor_id - computed: true, optional: false, required: false
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }

  // highway_subnet_id - computed: true, optional: false, required: false
  public get highwaySubnetId() {
    return this.getStringAttribute('highway_subnet_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal - computed: true, optional: false, required: false
  public get internal() {
    return this.getStringAttribute('internal');
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

  // status - computed: false, optional: true, required: false
  private _status?: string | undefined; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string | undefined; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
