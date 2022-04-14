// https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityRoleV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_v3#description IdentityRoleV3#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_v3#display_layer IdentityRoleV3#display_layer}
  */
  readonly displayLayer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_v3#display_name IdentityRoleV3#display_name}
  */
  readonly displayName: string;
  /**
  * statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_v3#statement IdentityRoleV3#statement}
  */
  readonly statement: IdentityRoleV3Statement[] | cdktf.IResolvable;
}
export interface IdentityRoleV3Statement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_v3#action IdentityRoleV3#action}
  */
  readonly action: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_v3#effect IdentityRoleV3#effect}
  */
  readonly effect: string;
}

export function identityRoleV3StatementToTerraform(struct?: IdentityRoleV3Statement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(cdktf.stringToTerraform)(struct!.action),
    effect: cdktf.stringToTerraform(struct!.effect),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_v3 opentelekomcloud_identity_role_v3}
*/
export class IdentityRoleV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_identity_role_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_role_v3 opentelekomcloud_identity_role_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityRoleV3Config
  */
  public constructor(scope: Construct, id: string, config: IdentityRoleV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_role_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.29.1',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayLayer = config.displayLayer;
    this._displayName = config.displayName;
    this._statement = config.statement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_layer - computed: false, optional: false, required: true
  private _displayLayer?: string; 
  public get displayLayer() {
    return this.getStringAttribute('display_layer');
  }
  public set displayLayer(value: string) {
    this._displayLayer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLayerInput() {
    return this._displayLayer;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // statement - computed: false, optional: false, required: true
  private _statement?: IdentityRoleV3Statement[] | cdktf.IResolvable; 
  public get statement() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('statement');
  }
  public set statement(value: IdentityRoleV3Statement[] | cdktf.IResolvable) {
    this._statement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_layer: cdktf.stringToTerraform(this._displayLayer),
      display_name: cdktf.stringToTerraform(this._displayName),
      statement: cdktf.listMapper(identityRoleV3StatementToTerraform)(this._statement),
    };
  }
}
