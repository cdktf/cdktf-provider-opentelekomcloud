// https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_group_membership_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityGroupMembershipV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_group_membership_v3#group IdentityGroupMembershipV3#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_group_membership_v3#users IdentityGroupMembershipV3#users}
  */
  readonly users: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_group_membership_v3 opentelekomcloud_identity_group_membership_v3}
*/
export class IdentityGroupMembershipV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_identity_group_membership_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_group_membership_v3 opentelekomcloud_identity_group_membership_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityGroupMembershipV3Config
  */
  public constructor(scope: Construct, id: string, config: IdentityGroupMembershipV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_group_membership_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._group = config.group;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // users - computed: false, optional: false, required: true
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      users: cdktf.listMapper(cdktf.stringToTerraform)(this._users),
    };
  }
}
