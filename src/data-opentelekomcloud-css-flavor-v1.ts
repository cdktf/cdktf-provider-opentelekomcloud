// https://www.terraform.io/docs/providers/opentelekomcloud/d/css_flavor_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCssFlavorV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/css_flavor_v1.html#min_cpu DataOpentelekomcloudCssFlavorV1#min_cpu}
  */
  readonly minCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/css_flavor_v1.html#min_ram DataOpentelekomcloudCssFlavorV1#min_ram}
  */
  readonly minRam?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/css_flavor_v1.html#name DataOpentelekomcloudCssFlavorV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/css_flavor_v1.html#type DataOpentelekomcloudCssFlavorV1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/css_flavor_v1.html#version DataOpentelekomcloudCssFlavorV1#version}
  */
  readonly version?: string;
  /**
  * disk_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/css_flavor_v1.html#disk_range DataOpentelekomcloudCssFlavorV1#disk_range}
  */
  readonly diskRange?: DataOpentelekomcloudCssFlavorV1DiskRange;
}
export interface DataOpentelekomcloudCssFlavorV1DiskRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/css_flavor_v1.html#min_from DataOpentelekomcloudCssFlavorV1#min_from}
  */
  readonly minFrom?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/css_flavor_v1.html#min_to DataOpentelekomcloudCssFlavorV1#min_to}
  */
  readonly minTo?: number;
}

function dataOpentelekomcloudCssFlavorV1DiskRangeToTerraform(struct?: DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference | DataOpentelekomcloudCssFlavorV1DiskRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_from: cdktf.numberToTerraform(struct!.minFrom),
    min_to: cdktf.numberToTerraform(struct!.minTo),
  }
}

export class DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // min_from - computed: false, optional: true, required: false
  private _minFrom?: number | undefined; 
  public get minFrom() {
    return this.getNumberAttribute('min_from');
  }
  public set minFrom(value: number | undefined) {
    this._minFrom = value;
  }
  public resetMinFrom() {
    this._minFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFromInput() {
    return this._minFrom
  }

  // min_to - computed: false, optional: true, required: false
  private _minTo?: number | undefined; 
  public get minTo() {
    return this.getNumberAttribute('min_to');
  }
  public set minTo(value: number | undefined) {
    this._minTo = value;
  }
  public resetMinTo() {
    this._minTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minToInput() {
    return this._minTo
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/css_flavor_v1.html opentelekomcloud_css_flavor_v1}
*/
export class DataOpentelekomcloudCssFlavorV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_css_flavor_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/css_flavor_v1.html opentelekomcloud_css_flavor_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCssFlavorV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCssFlavorV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_css_flavor_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._minCpu = config.minCpu;
    this._minRam = config.minRam;
    this._name = config.name;
    this._type = config.type;
    this._version = config.version;
    this._diskRange = config.diskRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // min_cpu - computed: false, optional: true, required: false
  private _minCpu?: number | undefined; 
  public get minCpu() {
    return this.getNumberAttribute('min_cpu');
  }
  public set minCpu(value: number | undefined) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu
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

  // name - computed: true, optional: true, required: false
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // version - computed: true, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // disk_range - computed: false, optional: true, required: false
  private _diskRange?: DataOpentelekomcloudCssFlavorV1DiskRange | undefined; 
  private __diskRangeOutput = new DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference(this as any, "disk_range", true);
  public get diskRange() {
    return this.__diskRangeOutput;
  }
  public putDiskRange(value: DataOpentelekomcloudCssFlavorV1DiskRange | undefined) {
    this._diskRange = value;
  }
  public resetDiskRange() {
    this._diskRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskRangeInput() {
    return this._diskRange
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      min_cpu: cdktf.numberToTerraform(this._minCpu),
      min_ram: cdktf.numberToTerraform(this._minRam),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      disk_range: dataOpentelekomcloudCssFlavorV1DiskRangeToTerraform(this._diskRange),
    };
  }
}
