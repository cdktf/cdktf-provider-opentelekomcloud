// https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_vip_associate_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingVipAssociateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_vip_associate_v2#id NetworkingVipAssociateV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_vip_associate_v2#port_ids NetworkingVipAssociateV2#port_ids}
  */
  readonly portIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_vip_associate_v2#vip_id NetworkingVipAssociateV2#vip_id}
  */
  readonly vipId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_vip_associate_v2 opentelekomcloud_networking_vip_associate_v2}
*/
export class NetworkingVipAssociateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_networking_vip_associate_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_vip_associate_v2 opentelekomcloud_networking_vip_associate_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingVipAssociateV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingVipAssociateV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_vip_associate_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.31.9',
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
    this._portIds = config.portIds;
    this._vipId = config.vipId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // port_ids - computed: false, optional: false, required: true
  private _portIds?: string[]; 
  public get portIds() {
    return cdktf.Fn.tolist(this.getListAttribute('port_ids'));
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
      id: cdktf.stringToTerraform(this._id),
      port_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portIds),
      vip_id: cdktf.stringToTerraform(this._vipId),
    };
  }
}
