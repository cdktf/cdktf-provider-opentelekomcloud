// https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeFloatingipV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_v2.html#pool ComputeFloatingipV2#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_v2.html#region ComputeFloatingipV2#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_v2.html opentelekomcloud_compute_floatingip_v2}
*/
export class ComputeFloatingipV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_compute_floatingip_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_floatingip_v2.html opentelekomcloud_compute_floatingip_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeFloatingipV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: ComputeFloatingipV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_compute_floatingip_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._pool = config.pool;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // fixed_ip - computed: true, optional: false, required: false
  public get fixedIp() {
    return this.getStringAttribute('fixed_ip');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string | undefined; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string | undefined) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool
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
      pool: cdktf.stringToTerraform(this._pool),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
