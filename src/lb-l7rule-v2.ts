// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbL7RuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#admin_state_up LbL7RuleV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#compare_type LbL7RuleV2#compare_type}
  */
  readonly compareType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#key LbL7RuleV2#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#l7policy_id LbL7RuleV2#l7policy_id}
  */
  readonly l7PolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#region LbL7RuleV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#tenant_id LbL7RuleV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#type LbL7RuleV2#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#value LbL7RuleV2#value}
  */
  readonly value: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#timeouts LbL7RuleV2#timeouts}
  */
  readonly timeouts?: LbL7RuleV2Timeouts;
}
export interface LbL7RuleV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#create LbL7RuleV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#delete LbL7RuleV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html#update LbL7RuleV2#update}
  */
  readonly update?: string;
}

function lbL7RuleV2TimeoutsToTerraform(struct?: LbL7RuleV2TimeoutsOutputReference | LbL7RuleV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class LbL7RuleV2TimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html opentelekomcloud_lb_l7rule_v2}
*/
export class LbL7RuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_l7rule_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_l7rule_v2.html opentelekomcloud_lb_l7rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbL7RuleV2Config
  */
  public constructor(scope: Construct, id: string, config: LbL7RuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_l7rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminStateUp = config.adminStateUp;
    this._compareType = config.compareType;
    this._key = config.key;
    this._l7PolicyId = config.l7PolicyId;
    this._region = config.region;
    this._tenantId = config.tenantId;
    this._type = config.type;
    this._value = config.value;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable | undefined; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up') as any;
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable | undefined) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp
  }

  // compare_type - computed: false, optional: false, required: true
  private _compareType?: string; 
  public get compareType() {
    return this.getStringAttribute('compare_type');
  }
  public set compareType(value: string) {
    this._compareType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareTypeInput() {
    return this._compareType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // l7policy_id - computed: false, optional: false, required: true
  private _l7PolicyId?: string; 
  public get l7PolicyId() {
    return this.getStringAttribute('l7policy_id');
  }
  public set l7PolicyId(value: string) {
    this._l7PolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l7PolicyIdInput() {
    return this._l7PolicyId
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string | undefined; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbL7RuleV2Timeouts | undefined; 
  private __timeoutsOutput = new LbL7RuleV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LbL7RuleV2Timeouts | undefined) {
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
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      compare_type: cdktf.stringToTerraform(this._compareType),
      key: cdktf.stringToTerraform(this._key),
      l7policy_id: cdktf.stringToTerraform(this._l7PolicyId),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      timeouts: lbL7RuleV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
