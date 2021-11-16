// https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeFloatingipAssociateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2.html#fixed_ip ComputeFloatingipAssociateV2#fixed_ip}
  */
  readonly fixedIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2.html#floating_ip ComputeFloatingipAssociateV2#floating_ip}
  */
  readonly floatingIp: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2.html#instance_id ComputeFloatingipAssociateV2#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2.html#region ComputeFloatingipAssociateV2#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2.html opentelekomcloud_compute_floatingip_associate_v2}
*/
export class ComputeFloatingipAssociateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_compute_floatingip_associate_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2.html opentelekomcloud_compute_floatingip_associate_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeFloatingipAssociateV2Config
  */
  public constructor(scope: Construct, id: string, config: ComputeFloatingipAssociateV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_compute_floatingip_associate_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fixedIp = config.fixedIp;
    this._floatingIp = config.floatingIp;
    this._instanceId = config.instanceId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fixed_ip - computed: false, optional: true, required: false
  private _fixedIp?: string | undefined; 
  public get fixedIp() {
    return this.getStringAttribute('fixed_ip');
  }
  public set fixedIp(value: string | undefined) {
    this._fixedIp = value;
  }
  public resetFixedIp() {
    this._fixedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpInput() {
    return this._fixedIp
  }

  // floating_ip - computed: false, optional: false, required: true
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fixed_ip: cdktf.stringToTerraform(this._fixedIp),
      floating_ip: cdktf.stringToTerraform(this._floatingIp),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
