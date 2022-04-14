// https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_share_access_rules_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SfsShareAccessRulesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_share_access_rules_v2#share_id SfsShareAccessRulesV2#share_id}
  */
  readonly shareId: string;
  /**
  * access_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_share_access_rules_v2#access_rule SfsShareAccessRulesV2#access_rule}
  */
  readonly accessRule: SfsShareAccessRulesV2AccessRule[] | cdktf.IResolvable;
}
export interface SfsShareAccessRulesV2AccessRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_share_access_rules_v2#access_level SfsShareAccessRulesV2#access_level}
  */
  readonly accessLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_share_access_rules_v2#access_to SfsShareAccessRulesV2#access_to}
  */
  readonly accessTo: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_share_access_rules_v2#access_type SfsShareAccessRulesV2#access_type}
  */
  readonly accessType?: string;
}

export function sfsShareAccessRulesV2AccessRuleToTerraform(struct?: SfsShareAccessRulesV2AccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    access_to: cdktf.stringToTerraform(struct!.accessTo),
    access_type: cdktf.stringToTerraform(struct!.accessType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_share_access_rules_v2 opentelekomcloud_sfs_share_access_rules_v2}
*/
export class SfsShareAccessRulesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_sfs_share_access_rules_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_share_access_rules_v2 opentelekomcloud_sfs_share_access_rules_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SfsShareAccessRulesV2Config
  */
  public constructor(scope: Construct, id: string, config: SfsShareAccessRulesV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_sfs_share_access_rules_v2',
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
    this._shareId = config.shareId;
    this._accessRule = config.accessRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // share_id - computed: false, optional: false, required: true
  private _shareId?: string; 
  public get shareId() {
    return this.getStringAttribute('share_id');
  }
  public set shareId(value: string) {
    this._shareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdInput() {
    return this._shareId;
  }

  // access_rule - computed: false, optional: false, required: true
  private _accessRule?: SfsShareAccessRulesV2AccessRule[] | cdktf.IResolvable; 
  public get accessRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_rule');
  }
  public set accessRule(value: SfsShareAccessRulesV2AccessRule[] | cdktf.IResolvable) {
    this._accessRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRuleInput() {
    return this._accessRule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      share_id: cdktf.stringToTerraform(this._shareId),
      access_rule: cdktf.listMapper(sfsShareAccessRulesV2AccessRuleToTerraform)(this._accessRule),
    };
  }
}
