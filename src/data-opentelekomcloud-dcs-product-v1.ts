// https://www.terraform.io/docs/providers/opentelekomcloud/d/dcs_product_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudDcsProductV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dcs_product_v1#spec_code DataOpentelekomcloudDcsProductV1#spec_code}
  */
  readonly specCode?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dcs_product_v1 opentelekomcloud_dcs_product_v1}
*/
export class DataOpentelekomcloudDcsProductV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dcs_product_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dcs_product_v1 opentelekomcloud_dcs_product_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudDcsProductV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudDcsProductV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dcs_product_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.28.2',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._specCode = config.specCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // spec_code - computed: true, optional: true, required: false
  private _specCode?: string; 
  public get specCode() {
    return this.getStringAttribute('spec_code');
  }
  public set specCode(value: string) {
    this._specCode = value;
  }
  public resetSpecCode() {
    this._specCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specCodeInput() {
    return this._specCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      spec_code: cdktf.stringToTerraform(this._specCode),
    };
  }
}
