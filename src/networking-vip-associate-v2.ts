// https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_vip_associate_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingVipAssociateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_vip_associate_v2.html#port_ids NetworkingVipAssociateV2#port_ids}
  */
  readonly portIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_vip_associate_v2.html#vip_id NetworkingVipAssociateV2#vip_id}
  */
  readonly vipId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_vip_associate_v2.html opentelekomcloud_networking_vip_associate_v2}
*/
export class NetworkingVipAssociateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_networking_vip_associate_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_vip_associate_v2.html opentelekomcloud_networking_vip_associate_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingVipAssociateV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingVipAssociateV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_vip_associate_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._portIds = config.portIds;
    this._vipId = config.vipId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port_ids - computed: false, optional: false, required: true
  private _portIds?: string[]; 
  public get portIds() {
    return this.getListAttribute('port_ids');
  }
  public set portIds(value: string[]) {
    this._portIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdsInput() {
    return this._portIds;
  }

  // vip_id - computed: false, optional: false, required: true
  private _vipId?: string; 
  public get vipId() {
    return this.getStringAttribute('vip_id');
  }
  public set vipId(value: string) {
    this._vipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipIdInput() {
    return this._vipId;
  }

  // vip_ip_address - computed: true, optional: false, required: false
  public get vipIpAddress() {
    return this.getStringAttribute('vip_ip_address');
  }

  // vip_subnet_id - computed: true, optional: false, required: false
  public get vipSubnetId() {
    return this.getStringAttribute('vip_subnet_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      port_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._portIds),
      vip_id: cdktf.stringToTerraform(this._vipId),
    };
  }
}
