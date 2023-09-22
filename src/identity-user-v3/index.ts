/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityUserV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3#access_type IdentityUserV3#access_type}
  */
  readonly accessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3#country_code IdentityUserV3#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3#description IdentityUserV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3#email IdentityUserV3#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3#id IdentityUserV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3#name IdentityUserV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3#password IdentityUserV3#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3#phone IdentityUserV3#phone}
  */
  readonly phone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3#pwd_reset IdentityUserV3#pwd_reset}
  */
  readonly pwdReset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3#send_welcome_email IdentityUserV3#send_welcome_email}
  */
  readonly sendWelcomeEmail?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3 opentelekomcloud_identity_user_v3}
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
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/identity_user_v3 opentelekomcloud_identity_user_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityUserV3Config
  */
  public constructor(scope: Construct, id: string, config: IdentityUserV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_user_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.35.8',
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
    this._accessType = config.accessType;
    this._countryCode = config.countryCode;
    this._description = config.description;
    this._email = config.email;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._phone = config.phone;
    this._pwdReset = config.pwdReset;
    this._sendWelcomeEmail = config.sendWelcomeEmail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
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

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
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

  // last_login - computed: true, optional: false, required: false
  public get lastLogin() {
    return this.getStringAttribute('last_login');
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

  // password_strength - computed: true, optional: false, required: false
  public get passwordStrength() {
    return this.getStringAttribute('password_strength');
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // pwd_reset - computed: false, optional: true, required: false
  private _pwdReset?: boolean | cdktf.IResolvable; 
  public get pwdReset() {
    return this.getBooleanAttribute('pwd_reset');
  }
  public set pwdReset(value: boolean | cdktf.IResolvable) {
    this._pwdReset = value;
  }
  public resetPwdReset() {
    this._pwdReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdResetInput() {
    return this._pwdReset;
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
      access_type: cdktf.stringToTerraform(this._accessType),
      country_code: cdktf.stringToTerraform(this._countryCode),
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      phone: cdktf.stringToTerraform(this._phone),
      pwd_reset: cdktf.booleanToTerraform(this._pwdReset),
      send_welcome_email: cdktf.booleanToTerraform(this._sendWelcomeEmail),
    };
  }
}
