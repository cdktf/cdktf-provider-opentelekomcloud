// https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_mapping_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityMappingV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_mapping_v3#id IdentityMappingV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_mapping_v3#mapping_id IdentityMappingV3#mapping_id}
  */
  readonly mappingId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_mapping_v3#rules IdentityMappingV3#rules}
  */
  readonly rules: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_mapping_v3 opentelekomcloud_identity_mapping_v3}
*/
export class IdentityMappingV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_identity_mapping_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_mapping_v3 opentelekomcloud_identity_mapping_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityMappingV3Config
  */
  public constructor(scope: Construct, id: string, config: IdentityMappingV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_mapping_v3',
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
    this._id = config.id;
    this._mappingId = config.mappingId;
    this._rules = config.rules;
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

  // links - computed: true, optional: false, required: false
  private _links = new cdktf.StringMap(this, "links");
  public get links() {
    return this._links;
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
      id: cdktf.stringToTerraform(this._id),
      mapping_id: cdktf.stringToTerraform(this._mappingId),
      rules: cdktf.stringToTerraform(this._rules),
    };
  }
}
