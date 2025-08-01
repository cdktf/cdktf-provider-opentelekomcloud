/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#alarm_id AsPolicyV1#alarm_id}
  */
  readonly alarmId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#cool_down_time AsPolicyV1#cool_down_time}
  */
  readonly coolDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#id AsPolicyV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#region AsPolicyV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#scaling_group_id AsPolicyV1#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#scaling_policy_name AsPolicyV1#scaling_policy_name}
  */
  readonly scalingPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#scaling_policy_type AsPolicyV1#scaling_policy_type}
  */
  readonly scalingPolicyType: string;
  /**
  * scaling_policy_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#scaling_policy_action AsPolicyV1#scaling_policy_action}
  */
  readonly scalingPolicyAction?: AsPolicyV1ScalingPolicyAction;
  /**
  * scheduled_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#scheduled_policy AsPolicyV1#scheduled_policy}
  */
  readonly scheduledPolicy?: AsPolicyV1ScheduledPolicy;
}
export interface AsPolicyV1ScalingPolicyAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#instance_number AsPolicyV1#instance_number}
  */
  readonly instanceNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#operation AsPolicyV1#operation}
  */
  readonly operation?: string;
}

export function asPolicyV1ScalingPolicyActionToTerraform(struct?: AsPolicyV1ScalingPolicyActionOutputReference | AsPolicyV1ScalingPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_number: cdktf.numberToTerraform(struct!.instanceNumber),
    operation: cdktf.stringToTerraform(struct!.operation),
  }
}


export function asPolicyV1ScalingPolicyActionToHclTerraform(struct?: AsPolicyV1ScalingPolicyActionOutputReference | AsPolicyV1ScalingPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_number: {
      value: cdktf.numberToHclTerraform(struct!.instanceNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsPolicyV1ScalingPolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsPolicyV1ScalingPolicyAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceNumber = this._instanceNumber;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsPolicyV1ScalingPolicyAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceNumber = undefined;
      this._operation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceNumber = value.instanceNumber;
      this._operation = value.operation;
    }
  }

  // instance_number - computed: false, optional: true, required: false
  private _instanceNumber?: number; 
  public get instanceNumber() {
    return this.getNumberAttribute('instance_number');
  }
  public set instanceNumber(value: number) {
    this._instanceNumber = value;
  }
  public resetInstanceNumber() {
    this._instanceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNumberInput() {
    return this._instanceNumber;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }
}
export interface AsPolicyV1ScheduledPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#end_time AsPolicyV1#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#launch_time AsPolicyV1#launch_time}
  */
  readonly launchTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#recurrence_type AsPolicyV1#recurrence_type}
  */
  readonly recurrenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#recurrence_value AsPolicyV1#recurrence_value}
  */
  readonly recurrenceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#start_time AsPolicyV1#start_time}
  */
  readonly startTime?: string;
}

export function asPolicyV1ScheduledPolicyToTerraform(struct?: AsPolicyV1ScheduledPolicyOutputReference | AsPolicyV1ScheduledPolicy): any {
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


export function asPolicyV1ScheduledPolicyToHclTerraform(struct?: AsPolicyV1ScheduledPolicyOutputReference | AsPolicyV1ScheduledPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_time: {
      value: cdktf.stringToHclTerraform(struct!.launchTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence_type: {
      value: cdktf.stringToHclTerraform(struct!.recurrenceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence_value: {
      value: cdktf.stringToHclTerraform(struct!.recurrenceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsPolicyV1ScheduledPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsPolicyV1ScheduledPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._launchTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTime = this._launchTime;
    }
    if (this._recurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceType = this._recurrenceType;
    }
    if (this._recurrenceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceValue = this._recurrenceValue;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsPolicyV1ScheduledPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._launchTime = undefined;
      this._recurrenceType = undefined;
      this._recurrenceValue = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._launchTime = value.launchTime;
      this._recurrenceType = value.recurrenceType;
      this._recurrenceValue = value.recurrenceValue;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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
    return this._launchTime;
  }

  // recurrence_type - computed: false, optional: true, required: false
  private _recurrenceType?: string; 
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string) {
    this._recurrenceType = value;
  }
  public resetRecurrenceType() {
    this._recurrenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType;
  }

  // recurrence_value - computed: false, optional: true, required: false
  private _recurrenceValue?: string; 
  public get recurrenceValue() {
    return this.getStringAttribute('recurrence_value');
  }
  public set recurrenceValue(value: string) {
    this._recurrenceValue = value;
  }
  public resetRecurrenceValue() {
    this._recurrenceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceValueInput() {
    return this._recurrenceValue;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1 opentelekomcloud_as_policy_v1}
*/
export class AsPolicyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_as_policy_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsPolicyV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsPolicyV1 to import
  * @param importFromId The id of the existing AsPolicyV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsPolicyV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_as_policy_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_policy_v1 opentelekomcloud_as_policy_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsPolicyV1Config
  */
  public constructor(scope: Construct, id: string, config: AsPolicyV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_as_policy_v1',
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
    this._alarmId = config.alarmId;
    this._coolDownTime = config.coolDownTime;
    this._id = config.id;
    this._region = config.region;
    this._scalingGroupId = config.scalingGroupId;
    this._scalingPolicyName = config.scalingPolicyName;
    this._scalingPolicyType = config.scalingPolicyType;
    this._scalingPolicyAction.internalValue = config.scalingPolicyAction;
    this._scheduledPolicy.internalValue = config.scheduledPolicy;
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

  // cool_down_time - computed: false, optional: true, required: false
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
    return this._scalingGroupId;
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

  // scaling_policy_action - computed: false, optional: true, required: false
  private _scalingPolicyAction = new AsPolicyV1ScalingPolicyActionOutputReference(this, "scaling_policy_action");
  public get scalingPolicyAction() {
    return this._scalingPolicyAction;
  }
  public putScalingPolicyAction(value: AsPolicyV1ScalingPolicyAction) {
    this._scalingPolicyAction.internalValue = value;
  }
  public resetScalingPolicyAction() {
    this._scalingPolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyActionInput() {
    return this._scalingPolicyAction.internalValue;
  }

  // scheduled_policy - computed: false, optional: true, required: false
  private _scheduledPolicy = new AsPolicyV1ScheduledPolicyOutputReference(this, "scheduled_policy");
  public get scheduledPolicy() {
    return this._scheduledPolicy;
  }
  public putScheduledPolicy(value: AsPolicyV1ScheduledPolicy) {
    this._scheduledPolicy.internalValue = value;
  }
  public resetScheduledPolicy() {
    this._scheduledPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledPolicyInput() {
    return this._scheduledPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_id: cdktf.stringToTerraform(this._alarmId),
      cool_down_time: cdktf.numberToTerraform(this._coolDownTime),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      scaling_policy_name: cdktf.stringToTerraform(this._scalingPolicyName),
      scaling_policy_type: cdktf.stringToTerraform(this._scalingPolicyType),
      scaling_policy_action: asPolicyV1ScalingPolicyActionToTerraform(this._scalingPolicyAction.internalValue),
      scheduled_policy: asPolicyV1ScheduledPolicyToTerraform(this._scheduledPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_id: {
        value: cdktf.stringToHclTerraform(this._alarmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cool_down_time: {
        value: cdktf.numberToHclTerraform(this._coolDownTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_policy_name: {
        value: cdktf.stringToHclTerraform(this._scalingPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_policy_type: {
        value: cdktf.stringToHclTerraform(this._scalingPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_policy_action: {
        value: asPolicyV1ScalingPolicyActionToHclTerraform(this._scalingPolicyAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsPolicyV1ScalingPolicyActionList",
      },
      scheduled_policy: {
        value: asPolicyV1ScheduledPolicyToHclTerraform(this._scheduledPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsPolicyV1ScheduledPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
