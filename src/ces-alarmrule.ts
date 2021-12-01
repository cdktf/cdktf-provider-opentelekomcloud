// https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CesAlarmruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#alarm_action_enabled CesAlarmrule#alarm_action_enabled}
  */
  readonly alarmActionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#alarm_description CesAlarmrule#alarm_description}
  */
  readonly alarmDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#alarm_enabled CesAlarmrule#alarm_enabled}
  */
  readonly alarmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#alarm_level CesAlarmrule#alarm_level}
  */
  readonly alarmLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#alarm_name CesAlarmrule#alarm_name}
  */
  readonly alarmName: string;
  /**
  * alarm_actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#alarm_actions CesAlarmrule#alarm_actions}
  */
  readonly alarmActions?: CesAlarmruleAlarmActions[];
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#condition CesAlarmrule#condition}
  */
  readonly condition: CesAlarmruleCondition;
  /**
  * insufficientdata_actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#insufficientdata_actions CesAlarmrule#insufficientdata_actions}
  */
  readonly insufficientdataActions?: CesAlarmruleInsufficientdataActions[];
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#metric CesAlarmrule#metric}
  */
  readonly metric: CesAlarmruleMetric;
  /**
  * ok_actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#ok_actions CesAlarmrule#ok_actions}
  */
  readonly okActions?: CesAlarmruleOkActions[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#timeouts CesAlarmrule#timeouts}
  */
  readonly timeouts?: CesAlarmruleTimeouts;
}
export interface CesAlarmruleAlarmActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#notification_list CesAlarmrule#notification_list}
  */
  readonly notificationList: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#type CesAlarmrule#type}
  */
  readonly type: string;
}

export function cesAlarmruleAlarmActionsToTerraform(struct?: CesAlarmruleAlarmActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notificationList),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CesAlarmruleCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#comparison_operator CesAlarmrule#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#count CesAlarmrule#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#filter CesAlarmrule#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#period CesAlarmrule#period}
  */
  readonly period: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#unit CesAlarmrule#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#value CesAlarmrule#value}
  */
  readonly value: number;
}

export function cesAlarmruleConditionToTerraform(struct?: CesAlarmruleConditionOutputReference | CesAlarmruleCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    count: cdktf.numberToTerraform(struct!.count),
    filter: cdktf.stringToTerraform(struct!.filter),
    period: cdktf.numberToTerraform(struct!.period),
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class CesAlarmruleConditionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CesAlarmruleCondition | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._comparisonOperator) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._count) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._filter) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._period) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAlarmruleCondition | undefined) {
    if (value === undefined) {
      this._comparisonOperator = undefined;
      this._count = undefined;
      this._filter = undefined;
      this._period = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._comparisonOperator = value.comparisonOperator;
      this._count = value.count;
      this._filter = value.filter;
      this._period = value.period;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CesAlarmruleInsufficientdataActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#notification_list CesAlarmrule#notification_list}
  */
  readonly notificationList: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#type CesAlarmrule#type}
  */
  readonly type: string;
}

export function cesAlarmruleInsufficientdataActionsToTerraform(struct?: CesAlarmruleInsufficientdataActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notificationList),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CesAlarmruleMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#name CesAlarmrule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#value CesAlarmrule#value}
  */
  readonly value: string;
}

export function cesAlarmruleMetricDimensionsToTerraform(struct?: CesAlarmruleMetricDimensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CesAlarmruleMetric {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#metric_name CesAlarmrule#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#namespace CesAlarmrule#namespace}
  */
  readonly namespace: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#dimensions CesAlarmrule#dimensions}
  */
  readonly dimensions: CesAlarmruleMetricDimensions[];
}

export function cesAlarmruleMetricToTerraform(struct?: CesAlarmruleMetricOutputReference | CesAlarmruleMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    dimensions: cdktf.listMapper(cesAlarmruleMetricDimensionsToTerraform)(struct!.dimensions),
  }
}

export class CesAlarmruleMetricOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CesAlarmruleMetric | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._metricName) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._dimensions) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAlarmruleMetric | undefined) {
    if (value === undefined) {
      this._metricName = undefined;
      this._namespace = undefined;
      this._dimensions = undefined;
    }
    else {
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._dimensions = value.dimensions;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // dimensions - computed: false, optional: false, required: true
  private _dimensions?: CesAlarmruleMetricDimensions[]; 
  public get dimensions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dimensions') as any;
  }
  public set dimensions(value: CesAlarmruleMetricDimensions[]) {
    this._dimensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }
}
export interface CesAlarmruleOkActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#notification_list CesAlarmrule#notification_list}
  */
  readonly notificationList: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#type CesAlarmrule#type}
  */
  readonly type: string;
}

export function cesAlarmruleOkActionsToTerraform(struct?: CesAlarmruleOkActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notificationList),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CesAlarmruleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#create CesAlarmrule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#delete CesAlarmrule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html#update CesAlarmrule#update}
  */
  readonly update?: string;
}

export function cesAlarmruleTimeoutsToTerraform(struct?: CesAlarmruleTimeoutsOutputReference | CesAlarmruleTimeouts): any {
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

export class CesAlarmruleTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CesAlarmruleTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAlarmruleTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html opentelekomcloud_ces_alarmrule}
*/
export class CesAlarmrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_ces_alarmrule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ces_alarmrule.html opentelekomcloud_ces_alarmrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CesAlarmruleConfig
  */
  public constructor(scope: Construct, id: string, config: CesAlarmruleConfig) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_ces_alarmrule',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alarmActionEnabled = config.alarmActionEnabled;
    this._alarmDescription = config.alarmDescription;
    this._alarmEnabled = config.alarmEnabled;
    this._alarmLevel = config.alarmLevel;
    this._alarmName = config.alarmName;
    this._alarmActions = config.alarmActions;
    this._condition.internalValue = config.condition;
    this._insufficientdataActions = config.insufficientdataActions;
    this._metric.internalValue = config.metric;
    this._okActions = config.okActions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_action_enabled - computed: false, optional: true, required: false
  private _alarmActionEnabled?: boolean | cdktf.IResolvable; 
  public get alarmActionEnabled() {
    return this.getBooleanAttribute('alarm_action_enabled') as any;
  }
  public set alarmActionEnabled(value: boolean | cdktf.IResolvable) {
    this._alarmActionEnabled = value;
  }
  public resetAlarmActionEnabled() {
    this._alarmActionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionEnabledInput() {
    return this._alarmActionEnabled;
  }

  // alarm_description - computed: false, optional: true, required: false
  private _alarmDescription?: string; 
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }
  public set alarmDescription(value: string) {
    this._alarmDescription = value;
  }
  public resetAlarmDescription() {
    this._alarmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmDescriptionInput() {
    return this._alarmDescription;
  }

  // alarm_enabled - computed: false, optional: true, required: false
  private _alarmEnabled?: boolean | cdktf.IResolvable; 
  public get alarmEnabled() {
    return this.getBooleanAttribute('alarm_enabled') as any;
  }
  public set alarmEnabled(value: boolean | cdktf.IResolvable) {
    this._alarmEnabled = value;
  }
  public resetAlarmEnabled() {
    this._alarmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmEnabledInput() {
    return this._alarmEnabled;
  }

  // alarm_level - computed: false, optional: true, required: false
  private _alarmLevel?: number; 
  public get alarmLevel() {
    return this.getNumberAttribute('alarm_level');
  }
  public set alarmLevel(value: number) {
    this._alarmLevel = value;
  }
  public resetAlarmLevel() {
    this._alarmLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmLevelInput() {
    return this._alarmLevel;
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }

  // alarm_state - computed: true, optional: false, required: false
  public get alarmState() {
    return this.getStringAttribute('alarm_state');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // alarm_actions - computed: false, optional: true, required: false
  private _alarmActions?: CesAlarmruleAlarmActions[]; 
  public get alarmActions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('alarm_actions') as any;
  }
  public set alarmActions(value: CesAlarmruleAlarmActions[]) {
    this._alarmActions = value;
  }
  public resetAlarmActions() {
    this._alarmActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionsInput() {
    return this._alarmActions;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new CesAlarmruleConditionOutputReference(this as any, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: CesAlarmruleCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // insufficientdata_actions - computed: false, optional: true, required: false
  private _insufficientdataActions?: CesAlarmruleInsufficientdataActions[]; 
  public get insufficientdataActions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('insufficientdata_actions') as any;
  }
  public set insufficientdataActions(value: CesAlarmruleInsufficientdataActions[]) {
    this._insufficientdataActions = value;
  }
  public resetInsufficientdataActions() {
    this._insufficientdataActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insufficientdataActionsInput() {
    return this._insufficientdataActions;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new CesAlarmruleMetricOutputReference(this as any, "metric", true);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: CesAlarmruleMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // ok_actions - computed: false, optional: true, required: false
  private _okActions?: CesAlarmruleOkActions[]; 
  public get okActions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ok_actions') as any;
  }
  public set okActions(value: CesAlarmruleOkActions[]) {
    this._okActions = value;
  }
  public resetOkActions() {
    this._okActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okActionsInput() {
    return this._okActions;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CesAlarmruleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CesAlarmruleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_action_enabled: cdktf.booleanToTerraform(this._alarmActionEnabled),
      alarm_description: cdktf.stringToTerraform(this._alarmDescription),
      alarm_enabled: cdktf.booleanToTerraform(this._alarmEnabled),
      alarm_level: cdktf.numberToTerraform(this._alarmLevel),
      alarm_name: cdktf.stringToTerraform(this._alarmName),
      alarm_actions: cdktf.listMapper(cesAlarmruleAlarmActionsToTerraform)(this._alarmActions),
      condition: cesAlarmruleConditionToTerraform(this._condition.internalValue),
      insufficientdata_actions: cdktf.listMapper(cesAlarmruleInsufficientdataActionsToTerraform)(this._insufficientdataActions),
      metric: cesAlarmruleMetricToTerraform(this._metric.internalValue),
      ok_actions: cdktf.listMapper(cesAlarmruleOkActionsToTerraform)(this._okActions),
      timeouts: cesAlarmruleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
