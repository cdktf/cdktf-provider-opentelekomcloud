// https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudDdsFlavorsV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#engine_name DataOpentelekomcloudDdsFlavorsV3#engine_name}
  */
  readonly engineName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#memory DataOpentelekomcloudDdsFlavorsV3#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#region DataOpentelekomcloudDdsFlavorsV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#type DataOpentelekomcloudDdsFlavorsV3#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#vcpus DataOpentelekomcloudDdsFlavorsV3#vcpus}
  */
  readonly vcpus?: string;
}
export class DataOpentelekomcloudDdsFlavorsV3Flavors extends cdktf.ComplexComputedList {

  // az_status - computed: true, optional: false, required: false
  public get azStatus() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('az_status') as any;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // spec_code - computed: true, optional: false, required: false
  public get specCode() {
    return this.getStringAttribute('spec_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getStringAttribute('vcpus');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3 opentelekomcloud_dds_flavors_v3}
*/
export class DataOpentelekomcloudDdsFlavorsV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_dds_flavors_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3 opentelekomcloud_dds_flavors_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudDdsFlavorsV3Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudDdsFlavorsV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dds_flavors_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._engineName = config.engineName;
    this._memory = config.memory;
    this._region = config.region;
    this._type = config.type;
    this._vcpus = config.vcpus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // engine_name - computed: false, optional: false, required: true
  private _engineName?: string; 
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }
  public set engineName(value: string) {
    this._engineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNameInput() {
    return this._engineName;
  }

  // flavors - computed: true, optional: false, required: false
  public flavors(index: string) {
    return new DataOpentelekomcloudDdsFlavorsV3Flavors(this, 'flavors', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vcpus - computed: false, optional: true, required: false
  private _vcpus?: string; 
  public get vcpus() {
    return this.getStringAttribute('vcpus');
  }
  public set vcpus(value: string) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine_name: cdktf.stringToTerraform(this._engineName),
      memory: cdktf.stringToTerraform(this._memory),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
      vcpus: cdktf.stringToTerraform(this._vcpus),
    };
  }
}
