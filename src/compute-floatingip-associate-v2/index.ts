// https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeFloatingipAssociateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2#fixed_ip ComputeFloatingipAssociateV2#fixed_ip}
  */
  readonly fixedIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2#floating_ip ComputeFloatingipAssociateV2#floating_ip}
  */
  readonly floatingIp: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2#id ComputeFloatingipAssociateV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2#instance_id ComputeFloatingipAssociateV2#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2#region ComputeFloatingipAssociateV2#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2 opentelekomcloud_compute_floatingip_associate_v2}
*/
export class ComputeFloatingipAssociateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_compute_floatingip_associate_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_associate_v2 opentelekomcloud_compute_floatingip_associate_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeFloatingipAssociateV2Config
  */
  public constructor(scope: Construct, id: string, config: ComputeFloatingipAssociateV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_compute_floatingip_associate_v2',
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
    this._fixedIp = config.fixedIp;
    this._floatingIp = config.floatingIp;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fixed_ip - computed: false, optional: true, required: false
  private _fixedIp?: string; 
  public get fixedIp() {
    return this.getStringAttribute('fixed_ip');
  }
  public set fixedIp(value: string) {
    this._fixedIp = value;
  }
  public resetFixedIp() {
    this._fixedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpInput() {
    return this._fixedIp;
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
    return this._floatingIp;
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
    return this._instanceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fixed_ip: cdktf.stringToTerraform(this._fixedIp),
      floating_ip: cdktf.stringToTerraform(this._floatingIp),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
