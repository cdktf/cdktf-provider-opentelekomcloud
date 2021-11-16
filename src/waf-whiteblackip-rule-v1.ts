// https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_whiteblackip_rule_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafWhiteblackipRuleV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_whiteblackip_rule_v1.html#addr WafWhiteblackipRuleV1#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_whiteblackip_rule_v1.html#policy_id WafWhiteblackipRuleV1#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_whiteblackip_rule_v1.html#white WafWhiteblackipRuleV1#white}
  */
  readonly white?: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_whiteblackip_rule_v1.html#timeouts WafWhiteblackipRuleV1#timeouts}
  */
  readonly timeouts?: WafWhiteblackipRuleV1Timeouts;
}
export interface WafWhiteblackipRuleV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_whiteblackip_rule_v1.html#create WafWhiteblackipRuleV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_whiteblackip_rule_v1.html#delete WafWhiteblackipRuleV1#delete}
  */
  readonly delete?: string;
}

function wafWhiteblackipRuleV1TimeoutsToTerraform(struct?: WafWhiteblackipRuleV1TimeoutsOutputReference | WafWhiteblackipRuleV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class WafWhiteblackipRuleV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_whiteblackip_rule_v1.html opentelekomcloud_waf_whiteblackip_rule_v1}
*/
export class WafWhiteblackipRuleV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_waf_whiteblackip_rule_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_whiteblackip_rule_v1.html opentelekomcloud_waf_whiteblackip_rule_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafWhiteblackipRuleV1Config
  */
  public constructor(scope: Construct, id: string, config: WafWhiteblackipRuleV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_whiteblackip_rule_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addr = config.addr;
    this._policyId = config.policyId;
    this._white = config.white;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId
  }

  // white - computed: false, optional: true, required: false
  private _white?: number | undefined; 
  public get white() {
    return this.getNumberAttribute('white');
  }
  public set white(value: number | undefined) {
    this._white = value;
  }
  public resetWhite() {
    this._white = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteInput() {
    return this._white
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WafWhiteblackipRuleV1Timeouts | undefined; 
  private __timeoutsOutput = new WafWhiteblackipRuleV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: WafWhiteblackipRuleV1Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      policy_id: cdktf.stringToTerraform(this._policyId),
      white: cdktf.numberToTerraform(this._white),
      timeouts: wafWhiteblackipRuleV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
