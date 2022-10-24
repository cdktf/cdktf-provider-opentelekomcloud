// https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityUserV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3#default_project_id IdentityUserV3#default_project_id}
  */
  readonly defaultProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3#description IdentityUserV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3#domain_id IdentityUserV3#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3#email IdentityUserV3#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3#enabled IdentityUserV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3#id IdentityUserV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3#name IdentityUserV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3#password IdentityUserV3#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3#region IdentityUserV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3#send_welcome_email IdentityUserV3#send_welcome_email}
  */
  readonly sendWelcomeEmail?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3 opentelekomcloud_identity_user_v3}
*/
export class IdentityUserV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_identity_user_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_user_v3 opentelekomcloud_identity_user_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityUserV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: IdentityUserV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_user_v3',
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
    this._defaultProjectId = config.defaultProjectId;
    this._description = config.description;
    this._domainId = config.domainId;
    this._email = config.email;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._region = config.region;
    this._sendWelcomeEmail = config.sendWelcomeEmail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_project_id - computed: true, optional: true, required: false
  private _defaultProjectId?: string; 
  public get defaultProjectId() {
    return this.getStringAttribute('default_project_id');
  }
  public set defaultProjectId(value: string) {
    this._defaultProjectId = value;
  }
  public resetDefaultProjectId() {
    this._defaultProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProjectIdInput() {
    return this._defaultProjectId;
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

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // send_welcome_email - computed: false, optional: true, required: false
  private _sendWelcomeEmail?: boolean | cdktf.IResolvable; 
  public get sendWelcomeEmail() {
    return this.getBooleanAttribute('send_welcome_email');
  }
  public set sendWelcomeEmail(value: boolean | cdktf.IResolvable) {
    this._sendWelcomeEmail = value;
  }
  public resetSendWelcomeEmail() {
    this._sendWelcomeEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendWelcomeEmailInput() {
    return this._sendWelcomeEmail;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_project_id: cdktf.stringToTerraform(this._defaultProjectId),
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.stringToTerraform(this._domainId),
      email: cdktf.stringToTerraform(this._email),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      region: cdktf.stringToTerraform(this._region),
      send_welcome_email: cdktf.booleanToTerraform(this._sendWelcomeEmail),
    };
  }
}
