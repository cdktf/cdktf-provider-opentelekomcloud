// https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_auth_scope_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudIdentityAuthScopeV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_auth_scope_v3#name DataOpentelekomcloudIdentityAuthScopeV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_auth_scope_v3#region DataOpentelekomcloudIdentityAuthScopeV3#region}
  */
  readonly region?: string;
}
export class DataOpentelekomcloudIdentityAuthScopeV3Roles extends cdktf.ComplexComputedList {

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_auth_scope_v3 opentelekomcloud_identity_auth_scope_v3}
*/
export class DataOpentelekomcloudIdentityAuthScopeV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_identity_auth_scope_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_auth_scope_v3 opentelekomcloud_identity_auth_scope_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudIdentityAuthScopeV3Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudIdentityAuthScopeV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_auth_scope_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name;
  }

  // project_domain_id - computed: true, optional: false, required: false
  public get projectDomainId() {
    return this.getStringAttribute('project_domain_id');
  }

  // project_domain_name - computed: true, optional: false, required: false
  public get projectDomainName() {
    return this.getStringAttribute('project_domain_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
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

  // roles - computed: true, optional: false, required: false
  public roles(index: string) {
    return new DataOpentelekomcloudIdentityAuthScopeV3Roles(this, 'roles', index, false);
  }

  // user_domain_id - computed: true, optional: false, required: false
  public get userDomainId() {
    return this.getStringAttribute('user_domain_id');
  }

  // user_domain_name - computed: true, optional: false, required: false
  public get userDomainName() {
    return this.getStringAttribute('user_domain_name');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
