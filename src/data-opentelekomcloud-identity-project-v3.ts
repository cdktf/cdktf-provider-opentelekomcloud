// https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_project_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudIdentityProjectV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_project_v3.html#domain_id DataOpentelekomcloudIdentityProjectV3#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_project_v3.html#enabled DataOpentelekomcloudIdentityProjectV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_project_v3.html#is_domain DataOpentelekomcloudIdentityProjectV3#is_domain}
  */
  readonly isDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_project_v3.html#name DataOpentelekomcloudIdentityProjectV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_project_v3.html#parent_id DataOpentelekomcloudIdentityProjectV3#parent_id}
  */
  readonly parentId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_project_v3.html opentelekomcloud_identity_project_v3}
*/
export class DataOpentelekomcloudIdentityProjectV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_identity_project_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_project_v3.html opentelekomcloud_identity_project_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudIdentityProjectV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudIdentityProjectV3Config = {}) {
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
    this._domainId = config.domainId;
    this._enabled = config.enabled;
    this._isDomain = config.isDomain;
    this._name = config.name;
    this._parentId = config.parentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_domain - computed: true, optional: true, required: false
  private _isDomain?: boolean | cdktf.IResolvable | undefined; 
  public get isDomain() {
    return this.getBooleanAttribute('is_domain') as any;
  }
  public set isDomain(value: boolean | cdktf.IResolvable | undefined) {
    this._isDomain = value;
  }
  public resetIsDomain() {
    this._isDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDomainInput() {
    return this._isDomain
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

  // parent_id - computed: false, optional: true, required: false
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      is_domain: cdktf.booleanToTerraform(this._isDomain),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
    };
  }
}
