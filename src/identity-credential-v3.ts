// https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_credential_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityCredentialV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_credential_v3.html#description IdentityCredentialV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_credential_v3.html#status IdentityCredentialV3#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_credential_v3.html#user_id IdentityCredentialV3#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_credential_v3.html opentelekomcloud_identity_credential_v3}
*/
export class IdentityCredentialV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_identity_credential_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_credential_v3.html opentelekomcloud_identity_credential_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityCredentialV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: IdentityCredentialV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_credential_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._status = config.status;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_use_time - computed: true, optional: false, required: false
  public get lastUseTime() {
    return this.getStringAttribute('last_use_time');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      status: cdktf.stringToTerraform(this._status),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
