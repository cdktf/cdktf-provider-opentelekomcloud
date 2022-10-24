// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcBandwidthAssociateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2#backup_charge_mode VpcBandwidthAssociateV2#backup_charge_mode}
  */
  readonly backupChargeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2#backup_size VpcBandwidthAssociateV2#backup_size}
  */
  readonly backupSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2#bandwidth VpcBandwidthAssociateV2#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2#floating_ips VpcBandwidthAssociateV2#floating_ips}
  */
  readonly floatingIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2#id VpcBandwidthAssociateV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2 opentelekomcloud_vpc_bandwidth_associate_v2}
*/
export class VpcBandwidthAssociateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_vpc_bandwidth_associate_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2 opentelekomcloud_vpc_bandwidth_associate_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcBandwidthAssociateV2Config
  */
  public constructor(scope: Construct, id: string, config: VpcBandwidthAssociateV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_bandwidth_associate_v2',
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
    this._backupChargeMode = config.backupChargeMode;
    this._backupSize = config.backupSize;
    this._bandwidth = config.bandwidth;
    this._floatingIps = config.floatingIps;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_charge_mode - computed: false, optional: true, required: false
  private _backupChargeMode?: string; 
  public get backupChargeMode() {
    return this.getStringAttribute('backup_charge_mode');
  }
  public set backupChargeMode(value: string) {
    this._backupChargeMode = value;
  }
  public resetBackupChargeMode() {
    this._backupChargeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupChargeModeInput() {
    return this._backupChargeMode;
  }

  // backup_size - computed: false, optional: true, required: false
  private _backupSize?: number; 
  public get backupSize() {
    return this.getNumberAttribute('backup_size');
  }
  public set backupSize(value: number) {
    this._backupSize = value;
  }
  public resetBackupSize() {
    this._backupSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSizeInput() {
    return this._backupSize;
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // floating_ips - computed: false, optional: false, required: true
  private _floatingIps?: string[]; 
  public get floatingIps() {
    return cdktf.Fn.tolist(this.getListAttribute('floating_ips'));
  }
  public set floatingIps(value: string[]) {
    this._floatingIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpsInput() {
    return this._floatingIps;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_charge_mode: cdktf.stringToTerraform(this._backupChargeMode),
      backup_size: cdktf.numberToTerraform(this._backupSize),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      floating_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._floatingIps),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
