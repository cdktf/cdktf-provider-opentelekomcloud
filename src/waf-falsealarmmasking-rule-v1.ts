// https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafFalsealarmmaskingRuleV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1.html#policy_id WafFalsealarmmaskingRuleV1#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1.html#rule WafFalsealarmmaskingRuleV1#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1.html#url WafFalsealarmmaskingRuleV1#url}
  */
  readonly url: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1.html#timeouts WafFalsealarmmaskingRuleV1#timeouts}
  */
  readonly timeouts?: WafFalsealarmmaskingRuleV1Timeouts;
}
export interface WafFalsealarmmaskingRuleV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1.html#create WafFalsealarmmaskingRuleV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1.html#delete WafFalsealarmmaskingRuleV1#delete}
  */
  readonly delete?: string;
}

function wafFalsealarmmaskingRuleV1TimeoutsToTerraform(struct?: WafFalsealarmmaskingRuleV1TimeoutsOutputReference | WafFalsealarmmaskingRuleV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class WafFalsealarmmaskingRuleV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1.html opentelekomcloud_waf_falsealarmmasking_rule_v1}
*/
export class WafFalsealarmmaskingRuleV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_waf_falsealarmmasking_rule_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_falsealarmmasking_rule_v1.html opentelekomcloud_waf_falsealarmmasking_rule_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafFalsealarmmaskingRuleV1Config
  */
  public constructor(scope: Construct, id: string, config: WafFalsealarmmaskingRuleV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_falsealarmmasking_rule_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyId = config.policyId;
    this._rule = config.rule;
    this._url = config.url;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WafFalsealarmmaskingRuleV1Timeouts | undefined; 
  private __timeoutsOutput = new WafFalsealarmmaskingRuleV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: WafFalsealarmmaskingRuleV1Timeouts | undefined) {
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
      policy_id: cdktf.stringToTerraform(this._policyId),
      rule: cdktf.stringToTerraform(this._rule),
      url: cdktf.stringToTerraform(this._url),
      timeouts: wafFalsealarmmaskingRuleV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
