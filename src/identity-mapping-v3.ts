// https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_mapping_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityMappingV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_mapping_v3.html#mapping_id IdentityMappingV3#mapping_id}
  */
  readonly mappingId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_mapping_v3.html#rules IdentityMappingV3#rules}
  */
  readonly rules: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_mapping_v3.html opentelekomcloud_identity_mapping_v3}
*/
export class IdentityMappingV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_identity_mapping_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_mapping_v3.html opentelekomcloud_identity_mapping_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityMappingV3Config
  */
  public constructor(scope: Construct, id: string, config: IdentityMappingV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_mapping_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._mappingId = config.mappingId;
    this._rules = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  public links(key: string): string {
    return new cdktf.StringMap(this, 'links').lookup(key);
  }

  // mapping_id - computed: false, optional: false, required: true
  private _mappingId?: string; 
  public get mappingId() {
    return this.getStringAttribute('mapping_id');
  }
  public set mappingId(value: string) {
    this._mappingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingIdInput() {
    return this._mappingId;
  }

  // rules - computed: false, optional: false, required: true
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mapping_id: cdktf.stringToTerraform(this._mappingId),
      rules: cdktf.stringToTerraform(this._rules),
    };
  }
}
