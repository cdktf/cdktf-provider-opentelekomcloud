// https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_project_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityProjectV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_project_v3.html#description IdentityProjectV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_project_v3.html#domain_id IdentityProjectV3#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_project_v3.html#name IdentityProjectV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_project_v3.html#parent_id IdentityProjectV3#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_project_v3.html#region IdentityProjectV3#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_project_v3.html opentelekomcloud_identity_project_v3}
*/
export class IdentityProjectV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_identity_project_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_project_v3.html opentelekomcloud_identity_project_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityProjectV3Config
  */
  public constructor(scope: Construct, id: string, config: IdentityProjectV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_project_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._domainId = config.domainId;
    this._name = config.name;
    this._parentId = config.parentId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string | undefined; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string | undefined) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_domain - computed: true, optional: false, required: false
  public get isDomain() {
    return this.getBooleanAttribute('is_domain') as any;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string | undefined; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string | undefined) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.stringToTerraform(this._domainId),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
