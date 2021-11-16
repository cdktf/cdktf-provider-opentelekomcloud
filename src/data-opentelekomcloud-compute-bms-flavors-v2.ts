// https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_flavors_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudComputeBmsFlavorsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_flavors_v2.html#id DataOpentelekomcloudComputeBmsFlavorsV2#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_flavors_v2.html#min_disk DataOpentelekomcloudComputeBmsFlavorsV2#min_disk}
  */
  readonly minDisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_flavors_v2.html#min_ram DataOpentelekomcloudComputeBmsFlavorsV2#min_ram}
  */
  readonly minRam?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_flavors_v2.html#name DataOpentelekomcloudComputeBmsFlavorsV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_flavors_v2.html#region DataOpentelekomcloudComputeBmsFlavorsV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_flavors_v2.html#sort_dir DataOpentelekomcloudComputeBmsFlavorsV2#sort_dir}
  */
  readonly sortDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_flavors_v2.html#sort_key DataOpentelekomcloudComputeBmsFlavorsV2#sort_key}
  */
  readonly sortKey?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_flavors_v2.html opentelekomcloud_compute_bms_flavors_v2}
*/
export class DataOpentelekomcloudComputeBmsFlavorsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_compute_bms_flavors_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_flavors_v2.html opentelekomcloud_compute_bms_flavors_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudComputeBmsFlavorsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudComputeBmsFlavorsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_compute_bms_flavors_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._minDisk = config.minDisk;
    this._minRam = config.minRam;
    this._name = config.name;
    this._region = config.region;
    this._sortDir = config.sortDir;
    this._sortKey = config.sortKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getNumberAttribute('disk');
  }

  // id - computed: false, optional: true, required: false
  private _id?: string | undefined; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // min_disk - computed: false, optional: true, required: false
  private _minDisk?: number | undefined; 
  public get minDisk() {
    return this.getNumberAttribute('min_disk');
  }
  public set minDisk(value: number | undefined) {
    this._minDisk = value;
  }
  public resetMinDisk() {
    this._minDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDiskInput() {
    return this._minDisk
  }

  // min_ram - computed: false, optional: true, required: false
  private _minRam?: number | undefined; 
  public get minRam() {
    return this.getNumberAttribute('min_ram');
  }
  public set minRam(value: number | undefined) {
    this._minRam = value;
  }
  public resetMinRam() {
    this._minRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRamInput() {
    return this._minRam
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

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
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

  // rx_tx_factor - computed: true, optional: false, required: false
  public get rxTxFactor() {
    return this.getNumberAttribute('rx_tx_factor');
  }

  // sort_dir - computed: false, optional: true, required: false
  private _sortDir?: string | undefined; 
  public get sortDir() {
    return this.getStringAttribute('sort_dir');
  }
  public set sortDir(value: string | undefined) {
    this._sortDir = value;
  }
  public resetSortDir() {
    this._sortDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirInput() {
    return this._sortDir
  }

  // sort_key - computed: false, optional: true, required: false
  private _sortKey?: string | undefined; 
  public get sortKey() {
    return this.getStringAttribute('sort_key');
  }
  public set sortKey(value: string | undefined) {
    this._sortKey = value;
  }
  public resetSortKey() {
    this._sortKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortKeyInput() {
    return this._sortKey
  }

  // swap - computed: true, optional: false, required: false
  public get swap() {
    return this.getNumberAttribute('swap');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      min_disk: cdktf.numberToTerraform(this._minDisk),
      min_ram: cdktf.numberToTerraform(this._minRam),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      sort_dir: cdktf.stringToTerraform(this._sortDir),
      sort_key: cdktf.stringToTerraform(this._sortKey),
    };
  }
}
