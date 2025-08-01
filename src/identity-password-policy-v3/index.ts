/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityPasswordPolicyV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3#id IdentityPasswordPolicyV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3#maximum_consecutive_identical_chars IdentityPasswordPolicyV3#maximum_consecutive_identical_chars}
  */
  readonly maximumConsecutiveIdenticalChars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3#minimum_password_age IdentityPasswordPolicyV3#minimum_password_age}
  */
  readonly minimumPasswordAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3#minimum_password_length IdentityPasswordPolicyV3#minimum_password_length}
  */
  readonly minimumPasswordLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3#number_of_recent_passwords_disallowed IdentityPasswordPolicyV3#number_of_recent_passwords_disallowed}
  */
  readonly numberOfRecentPasswordsDisallowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3#password_char_combination IdentityPasswordPolicyV3#password_char_combination}
  */
  readonly passwordCharCombination?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3#password_not_username_or_invert IdentityPasswordPolicyV3#password_not_username_or_invert}
  */
  readonly passwordNotUsernameOrInvert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3#password_validity_period IdentityPasswordPolicyV3#password_validity_period}
  */
  readonly passwordValidityPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3 opentelekomcloud_identity_password_policy_v3}
*/
export class IdentityPasswordPolicyV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_identity_password_policy_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityPasswordPolicyV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityPasswordPolicyV3 to import
  * @param importFromId The id of the existing IdentityPasswordPolicyV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityPasswordPolicyV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_identity_password_policy_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_password_policy_v3 opentelekomcloud_identity_password_policy_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityPasswordPolicyV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: IdentityPasswordPolicyV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_password_policy_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.44',
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
    this._maximumConsecutiveIdenticalChars = config.maximumConsecutiveIdenticalChars;
    this._minimumPasswordAge = config.minimumPasswordAge;
    this._minimumPasswordLength = config.minimumPasswordLength;
    this._numberOfRecentPasswordsDisallowed = config.numberOfRecentPasswordsDisallowed;
    this._passwordCharCombination = config.passwordCharCombination;
    this._passwordNotUsernameOrInvert = config.passwordNotUsernameOrInvert;
    this._passwordValidityPeriod = config.passwordValidityPeriod;
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

  // maximum_consecutive_identical_chars - computed: true, optional: true, required: false
  private _maximumConsecutiveIdenticalChars?: number; 
  public get maximumConsecutiveIdenticalChars() {
    return this.getNumberAttribute('maximum_consecutive_identical_chars');
  }
  public set maximumConsecutiveIdenticalChars(value: number) {
    this._maximumConsecutiveIdenticalChars = value;
  }
  public resetMaximumConsecutiveIdenticalChars() {
    this._maximumConsecutiveIdenticalChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConsecutiveIdenticalCharsInput() {
    return this._maximumConsecutiveIdenticalChars;
  }

  // maximum_password_length - computed: true, optional: false, required: false
  public get maximumPasswordLength() {
    return this.getNumberAttribute('maximum_password_length');
  }

  // minimum_password_age - computed: true, optional: true, required: false
  private _minimumPasswordAge?: number; 
  public get minimumPasswordAge() {
    return this.getNumberAttribute('minimum_password_age');
  }
  public set minimumPasswordAge(value: number) {
    this._minimumPasswordAge = value;
  }
  public resetMinimumPasswordAge() {
    this._minimumPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordAgeInput() {
    return this._minimumPasswordAge;
  }

  // minimum_password_length - computed: false, optional: true, required: false
  private _minimumPasswordLength?: number; 
  public get minimumPasswordLength() {
    return this.getNumberAttribute('minimum_password_length');
  }
  public set minimumPasswordLength(value: number) {
    this._minimumPasswordLength = value;
  }
  public resetMinimumPasswordLength() {
    this._minimumPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordLengthInput() {
    return this._minimumPasswordLength;
  }

  // number_of_recent_passwords_disallowed - computed: false, optional: true, required: false
  private _numberOfRecentPasswordsDisallowed?: number; 
  public get numberOfRecentPasswordsDisallowed() {
    return this.getNumberAttribute('number_of_recent_passwords_disallowed');
  }
  public set numberOfRecentPasswordsDisallowed(value: number) {
    this._numberOfRecentPasswordsDisallowed = value;
  }
  public resetNumberOfRecentPasswordsDisallowed() {
    this._numberOfRecentPasswordsDisallowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfRecentPasswordsDisallowedInput() {
    return this._numberOfRecentPasswordsDisallowed;
  }

  // password_char_combination - computed: true, optional: true, required: false
  private _passwordCharCombination?: number; 
  public get passwordCharCombination() {
    return this.getNumberAttribute('password_char_combination');
  }
  public set passwordCharCombination(value: number) {
    this._passwordCharCombination = value;
  }
  public resetPasswordCharCombination() {
    this._passwordCharCombination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCharCombinationInput() {
    return this._passwordCharCombination;
  }

  // password_not_username_or_invert - computed: false, optional: true, required: false
  private _passwordNotUsernameOrInvert?: boolean | cdktf.IResolvable; 
  public get passwordNotUsernameOrInvert() {
    return this.getBooleanAttribute('password_not_username_or_invert');
  }
  public set passwordNotUsernameOrInvert(value: boolean | cdktf.IResolvable) {
    this._passwordNotUsernameOrInvert = value;
  }
  public resetPasswordNotUsernameOrInvert() {
    this._passwordNotUsernameOrInvert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNotUsernameOrInvertInput() {
    return this._passwordNotUsernameOrInvert;
  }

  // password_requirements - computed: true, optional: false, required: false
  public get passwordRequirements() {
    return this.getStringAttribute('password_requirements');
  }

  // password_validity_period - computed: true, optional: true, required: false
  private _passwordValidityPeriod?: number; 
  public get passwordValidityPeriod() {
    return this.getNumberAttribute('password_validity_period');
  }
  public set passwordValidityPeriod(value: number) {
    this._passwordValidityPeriod = value;
  }
  public resetPasswordValidityPeriod() {
    this._passwordValidityPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordValidityPeriodInput() {
    return this._passwordValidityPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      maximum_consecutive_identical_chars: cdktf.numberToTerraform(this._maximumConsecutiveIdenticalChars),
      minimum_password_age: cdktf.numberToTerraform(this._minimumPasswordAge),
      minimum_password_length: cdktf.numberToTerraform(this._minimumPasswordLength),
      number_of_recent_passwords_disallowed: cdktf.numberToTerraform(this._numberOfRecentPasswordsDisallowed),
      password_char_combination: cdktf.numberToTerraform(this._passwordCharCombination),
      password_not_username_or_invert: cdktf.booleanToTerraform(this._passwordNotUsernameOrInvert),
      password_validity_period: cdktf.numberToTerraform(this._passwordValidityPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_consecutive_identical_chars: {
        value: cdktf.numberToHclTerraform(this._maximumConsecutiveIdenticalChars),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_password_age: {
        value: cdktf.numberToHclTerraform(this._minimumPasswordAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_password_length: {
        value: cdktf.numberToHclTerraform(this._minimumPasswordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_recent_passwords_disallowed: {
        value: cdktf.numberToHclTerraform(this._numberOfRecentPasswordsDisallowed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_char_combination: {
        value: cdktf.numberToHclTerraform(this._passwordCharCombination),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_not_username_or_invert: {
        value: cdktf.booleanToHclTerraform(this._passwordNotUsernameOrInvert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_validity_period: {
        value: cdktf.numberToHclTerraform(this._passwordValidityPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
