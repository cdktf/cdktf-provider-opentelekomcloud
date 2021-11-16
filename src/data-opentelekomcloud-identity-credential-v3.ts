// https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_credential_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudIdentityCredentialV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_credential_v3.html#user_id DataOpentelekomcloudIdentityCredentialV3#user_id}
  */
  readonly userId?: string;
}
export class DataOpentelekomcloudIdentityCredentialV3Credentials extends cdktf.ComplexComputedList {

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_credential_v3.html opentelekomcloud_identity_credential_v3}
*/
export class DataOpentelekomcloudIdentityCredentialV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_identity_credential_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_credential_v3.html opentelekomcloud_identity_credential_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudIdentityCredentialV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudIdentityCredentialV3Config = {}) {
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
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: true, optional: false, required: false
  public credentials(index: string) {
    return new DataOpentelekomcloudIdentityCredentialV3Credentials(this, 'credentials', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string | undefined; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string | undefined) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
