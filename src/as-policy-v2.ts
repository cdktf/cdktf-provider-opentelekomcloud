// https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#alarm_id AsPolicyV2#alarm_id}
  */
  readonly alarmId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#cool_down_time AsPolicyV2#cool_down_time}
  */
  readonly coolDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#region AsPolicyV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#scaling_policy_name AsPolicyV2#scaling_policy_name}
  */
  readonly scalingPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#scaling_policy_type AsPolicyV2#scaling_policy_type}
  */
  readonly scalingPolicyType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#scaling_resource_id AsPolicyV2#scaling_resource_id}
  */
  readonly scalingResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#scaling_resource_type AsPolicyV2#scaling_resource_type}
  */
  readonly scalingResourceType: string;
  /**
  * scaling_policy_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#scaling_policy_action AsPolicyV2#scaling_policy_action}
  */
  readonly scalingPolicyAction?: AsPolicyV2ScalingPolicyAction[] | cdktf.IResolvable;
  /**
  * scheduled_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#scheduled_policy AsPolicyV2#scheduled_policy}
  */
  readonly scheduledPolicy?: AsPolicyV2ScheduledPolicy[] | cdktf.IResolvable;
}
export interface AsPolicyV2Metadata {
}

export function asPolicyV2MetadataToTerraform(struct?: AsPolicyV2Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AsPolicyV2MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AsPolicyV2Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsPolicyV2Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_share_type - computed: true, optional: false, required: false
  public get bandwidthShareType() {
    return this.getStringAttribute('bandwidth_share_type');
  }

  // eip_address - computed: true, optional: false, required: false
  public get eipAddress() {
    return this.getStringAttribute('eip_address');
  }

  // eip_id - computed: true, optional: false, required: false
  public get eipId() {
    return this.getStringAttribute('eip_id');
  }
}

export class AsPolicyV2MetadataList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AsPolicyV2MetadataOutputReference {
    return new AsPolicyV2MetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsPolicyV2ScalingPolicyAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#limits AsPolicyV2#limits}
  */
  readonly limits?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#operation AsPolicyV2#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#percentage AsPolicyV2#percentage}
  */
  readonly percentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#size AsPolicyV2#size}
  */
  readonly size?: number;
}

export function asPolicyV2ScalingPolicyActionToTerraform(struct?: AsPolicyV2ScalingPolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.numberToTerraform(struct!.limits),
    operation: cdktf.stringToTerraform(struct!.operation),
    percentage: cdktf.numberToTerraform(struct!.percentage),
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export interface AsPolicyV2ScheduledPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#end_time AsPolicyV2#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#launch_time AsPolicyV2#launch_time}
  */
  readonly launchTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#recurrence_type AsPolicyV2#recurrence_type}
  */
  readonly recurrenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#recurrence_value AsPolicyV2#recurrence_value}
  */
  readonly recurrenceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2#start_time AsPolicyV2#start_time}
  */
  readonly startTime?: string;
}

export function asPolicyV2ScheduledPolicyToTerraform(struct?: AsPolicyV2ScheduledPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    launch_time: cdktf.stringToTerraform(struct!.launchTime),
    recurrence_type: cdktf.stringToTerraform(struct!.recurrenceType),
    recurrence_value: cdktf.stringToTerraform(struct!.recurrenceValue),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2 opentelekomcloud_as_policy_v2}
*/
export class AsPolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_as_policy_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v2 opentelekomcloud_as_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsPolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: AsPolicyV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_as_policy_v2',
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
    this._alarmId = config.alarmId;
    this._coolDownTime = config.coolDownTime;
    this._region = config.region;
    this._scalingPolicyName = config.scalingPolicyName;
    this._scalingPolicyType = config.scalingPolicyType;
    this._scalingResourceId = config.scalingResourceId;
    this._scalingResourceType = config.scalingResourceType;
    this._scalingPolicyAction = config.scalingPolicyAction;
    this._scheduledPolicy = config.scheduledPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_id - computed: false, optional: true, required: false
  private _alarmId?: string; 
  public get alarmId() {
    return this.getStringAttribute('alarm_id');
  }
  public set alarmId(value: string) {
    this._alarmId = value;
  }
  public resetAlarmId() {
    this._alarmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmIdInput() {
    return this._alarmId;
  }

  // cool_down_time - computed: true, optional: true, required: false
  private _coolDownTime?: number; 
  public get coolDownTime() {
    return this.getNumberAttribute('cool_down_time');
  }
  public set coolDownTime(value: number) {
    this._coolDownTime = value;
  }
  public resetCoolDownTime() {
    this._coolDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownTimeInput() {
    return this._coolDownTime;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new AsPolicyV2MetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
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

  // scaling_policy_name - computed: false, optional: false, required: true
  private _scalingPolicyName?: string; 
  public get scalingPolicyName() {
    return this.getStringAttribute('scaling_policy_name');
  }
  public set scalingPolicyName(value: string) {
    this._scalingPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyNameInput() {
    return this._scalingPolicyName;
  }

  // scaling_policy_type - computed: false, optional: false, required: true
  private _scalingPolicyType?: string; 
  public get scalingPolicyType() {
    return this.getStringAttribute('scaling_policy_type');
  }
  public set scalingPolicyType(value: string) {
    this._scalingPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyTypeInput() {
    return this._scalingPolicyType;
  }

  // scaling_resource_id - computed: false, optional: false, required: true
  private _scalingResourceId?: string; 
  public get scalingResourceId() {
    return this.getStringAttribute('scaling_resource_id');
  }
  public set scalingResourceId(value: string) {
    this._scalingResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingResourceIdInput() {
    return this._scalingResourceId;
  }

  // scaling_resource_type - computed: false, optional: false, required: true
  private _scalingResourceType?: string; 
  public get scalingResourceType() {
    return this.getStringAttribute('scaling_resource_type');
  }
  public set scalingResourceType(value: string) {
    this._scalingResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingResourceTypeInput() {
    return this._scalingResourceType;
  }

  // scaling_policy_action - computed: false, optional: true, required: false
  private _scalingPolicyAction?: AsPolicyV2ScalingPolicyAction[] | cdktf.IResolvable; 
  public get scalingPolicyAction() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scaling_policy_action')));
  }
  public set scalingPolicyAction(value: AsPolicyV2ScalingPolicyAction[] | cdktf.IResolvable) {
    this._scalingPolicyAction = value;
  }
  public resetScalingPolicyAction() {
    this._scalingPolicyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyActionInput() {
    return this._scalingPolicyAction;
  }

  // scheduled_policy - computed: false, optional: true, required: false
  private _scheduledPolicy?: AsPolicyV2ScheduledPolicy[] | cdktf.IResolvable; 
  public get scheduledPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scheduled_policy')));
  }
  public set scheduledPolicy(value: AsPolicyV2ScheduledPolicy[] | cdktf.IResolvable) {
    this._scheduledPolicy = value;
  }
  public resetScheduledPolicy() {
    this._scheduledPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledPolicyInput() {
    return this._scheduledPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_id: cdktf.stringToTerraform(this._alarmId),
      cool_down_time: cdktf.numberToTerraform(this._coolDownTime),
      region: cdktf.stringToTerraform(this._region),
      scaling_policy_name: cdktf.stringToTerraform(this._scalingPolicyName),
      scaling_policy_type: cdktf.stringToTerraform(this._scalingPolicyType),
      scaling_resource_id: cdktf.stringToTerraform(this._scalingResourceId),
      scaling_resource_type: cdktf.stringToTerraform(this._scalingResourceType),
      scaling_policy_action: cdktf.listMapper(asPolicyV2ScalingPolicyActionToTerraform)(this._scalingPolicyAction),
      scheduled_policy: cdktf.listMapper(asPolicyV2ScheduledPolicyToTerraform)(this._scheduledPolicy),
    };
  }
}
