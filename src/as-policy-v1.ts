// https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#alarm_id AsPolicyV1#alarm_id}
  */
  readonly alarmId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#cool_down_time AsPolicyV1#cool_down_time}
  */
  readonly coolDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#region AsPolicyV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#scaling_group_id AsPolicyV1#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#scaling_policy_name AsPolicyV1#scaling_policy_name}
  */
  readonly scalingPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#scaling_policy_type AsPolicyV1#scaling_policy_type}
  */
  readonly scalingPolicyType: string;
  /**
  * scaling_policy_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#scaling_policy_action AsPolicyV1#scaling_policy_action}
  */
  readonly scalingPolicyAction?: AsPolicyV1ScalingPolicyAction;
  /**
  * scheduled_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#scheduled_policy AsPolicyV1#scheduled_policy}
  */
  readonly scheduledPolicy?: AsPolicyV1ScheduledPolicy;
}
export interface AsPolicyV1ScalingPolicyAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#instance_number AsPolicyV1#instance_number}
  */
  readonly instanceNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#operation AsPolicyV1#operation}
  */
  readonly operation?: string;
}

function asPolicyV1ScalingPolicyActionToTerraform(struct?: AsPolicyV1ScalingPolicyActionOutputReference | AsPolicyV1ScalingPolicyAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_number: cdktf.numberToTerraform(struct!.instanceNumber),
    operation: cdktf.stringToTerraform(struct!.operation),
  }
}

export class AsPolicyV1ScalingPolicyActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // instance_number - computed: false, optional: true, required: false
  private _instanceNumber?: number | undefined; 
  public get instanceNumber() {
    return this.getNumberAttribute('instance_number');
  }
  public set instanceNumber(value: number | undefined) {
    this._instanceNumber = value;
  }
  public resetInstanceNumber() {
    this._instanceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNumberInput() {
    return this._instanceNumber
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string | undefined; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string | undefined) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation
  }
}
export interface AsPolicyV1ScheduledPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#end_time AsPolicyV1#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#launch_time AsPolicyV1#launch_time}
  */
  readonly launchTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#recurrence_type AsPolicyV1#recurrence_type}
  */
  readonly recurrenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#recurrence_value AsPolicyV1#recurrence_value}
  */
  readonly recurrenceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html#start_time AsPolicyV1#start_time}
  */
  readonly startTime?: string;
}

function asPolicyV1ScheduledPolicyToTerraform(struct?: AsPolicyV1ScheduledPolicyOutputReference | AsPolicyV1ScheduledPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class AsPolicyV1ScheduledPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string | undefined; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string | undefined) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime
  }

  // launch_time - computed: false, optional: false, required: true
  private _launchTime?: string; 
  public get launchTime() {
    return this.getStringAttribute('launch_time');
  }
  public set launchTime(value: string) {
    this._launchTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTimeInput() {
    return this._launchTime
  }

  // recurrence_type - computed: false, optional: true, required: false
  private _recurrenceType?: string | undefined; 
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string | undefined) {
    this._recurrenceType = value;
  }
  public resetRecurrenceType() {
    this._recurrenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType
  }

  // recurrence_value - computed: false, optional: true, required: false
  private _recurrenceValue?: string | undefined; 
  public get recurrenceValue() {
    return this.getStringAttribute('recurrence_value');
  }
  public set recurrenceValue(value: string | undefined) {
    this._recurrenceValue = value;
  }
  public resetRecurrenceValue() {
    this._recurrenceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceValueInput() {
    return this._recurrenceValue
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string | undefined; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html opentelekomcloud_as_policy_v1}
*/
export class AsPolicyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_as_policy_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1.html opentelekomcloud_as_policy_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsPolicyV1Config
  */
  public constructor(scope: Construct, id: string, config: AsPolicyV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_as_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alarmId = config.alarmId;
    this._coolDownTime = config.coolDownTime;
    this._region = config.region;
    this._scalingGroupId = config.scalingGroupId;
    this._scalingPolicyName = config.scalingPolicyName;
    this._scalingPolicyType = config.scalingPolicyType;
    this._scalingPolicyAction = config.scalingPolicyAction;
    this._scheduledPolicy = config.scheduledPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_id - computed: false, optional: true, required: false
  private _alarmId?: string | undefined; 
  public get alarmId() {
    return this.getStringAttribute('alarm_id');
  }
  public set alarmId(value: string | undefined) {
    this._alarmId = value;
  }
  public resetAlarmId() {
    this._alarmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmIdInput() {
    return this._alarmId
  }

  // cool_down_time - computed: false, optional: true, required: false
  private _coolDownTime?: number | undefined; 
  public get coolDownTime() {
    return this.getNumberAttribute('cool_down_time');
  }
  public set coolDownTime(value: number | undefined) {
    this._coolDownTime = value;
  }
  public resetCoolDownTime() {
    this._coolDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownTimeInput() {
    return this._coolDownTime
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId
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
    return this._scalingPolicyName
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
    return this._scalingPolicyType
  }

  // scaling_policy_action - computed: false, optional: true, required: false
  private _scalingPolicyAction?: AsPolicyV1ScalingPolicyAction | undefined; 
  private __scalingPolicyActionOutput = new AsPolicyV1ScalingPolicyActionOutputReference(this as any, "scaling_policy_action", true);
  public get scalingPolicyAction() {
    return this.__scalingPolicyActionOutput;
  }
  public putScalingPolicyAction(value: AsPolicyV1ScalingPolicyAction | undefined) {
    this._scalingPolicyAction = value;
  }
  public resetScalingPolicyAction() {
    this._scalingPolicyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyActionInput() {
    return this._scalingPolicyAction
  }

  // scheduled_policy - computed: false, optional: true, required: false
  private _scheduledPolicy?: AsPolicyV1ScheduledPolicy | undefined; 
  private __scheduledPolicyOutput = new AsPolicyV1ScheduledPolicyOutputReference(this as any, "scheduled_policy", true);
  public get scheduledPolicy() {
    return this.__scheduledPolicyOutput;
  }
  public putScheduledPolicy(value: AsPolicyV1ScheduledPolicy | undefined) {
    this._scheduledPolicy = value;
  }
  public resetScheduledPolicy() {
    this._scheduledPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledPolicyInput() {
    return this._scheduledPolicy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_id: cdktf.stringToTerraform(this._alarmId),
      cool_down_time: cdktf.numberToTerraform(this._coolDownTime),
      region: cdktf.stringToTerraform(this._region),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      scaling_policy_name: cdktf.stringToTerraform(this._scalingPolicyName),
      scaling_policy_type: cdktf.stringToTerraform(this._scalingPolicyType),
      scaling_policy_action: asPolicyV1ScalingPolicyActionToTerraform(this._scalingPolicyAction),
      scheduled_policy: asPolicyV1ScheduledPolicyToTerraform(this._scheduledPolicy),
    };
  }
}
