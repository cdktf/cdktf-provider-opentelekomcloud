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

function cesAlarmruleAlarmActionsToTerraform(struct?: CesAlarmruleAlarmActions): any {
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

function cesAlarmruleConditionToTerraform(struct?: CesAlarmruleConditionOutputReference | CesAlarmruleCondition): any {
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
    return this._comparisonOperator
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
    return this._count
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
    return this._filter
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
    return this._period
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string | undefined; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string | undefined) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
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
    return this._value
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

function cesAlarmruleInsufficientdataActionsToTerraform(struct?: CesAlarmruleInsufficientdataActions): any {
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

function cesAlarmruleMetricDimensionsToTerraform(struct?: CesAlarmruleMetricDimensions): any {
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

function cesAlarmruleMetricToTerraform(struct?: CesAlarmruleMetricOutputReference | CesAlarmruleMetric): any {
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
    return this._metricName
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
    return this._namespace
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
    return this._dimensions
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

function cesAlarmruleOkActionsToTerraform(struct?: CesAlarmruleOkActions): any {
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

function cesAlarmruleTimeoutsToTerraform(struct?: CesAlarmruleTimeoutsOutputReference | CesAlarmruleTimeouts): any {
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
    this._condition = config.condition;
    this._insufficientdataActions = config.insufficientdataActions;
    this._metric = config.metric;
    this._okActions = config.okActions;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_action_enabled - computed: false, optional: true, required: false
  private _alarmActionEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get alarmActionEnabled() {
    return this.getBooleanAttribute('alarm_action_enabled') as any;
  }
  public set alarmActionEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._alarmActionEnabled = value;
  }
  public resetAlarmActionEnabled() {
    this._alarmActionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionEnabledInput() {
    return this._alarmActionEnabled
  }

  // alarm_description - computed: false, optional: true, required: false
  private _alarmDescription?: string | undefined; 
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }
  public set alarmDescription(value: string | undefined) {
    this._alarmDescription = value;
  }
  public resetAlarmDescription() {
    this._alarmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmDescriptionInput() {
    return this._alarmDescription
  }

  // alarm_enabled - computed: false, optional: true, required: false
  private _alarmEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get alarmEnabled() {
    return this.getBooleanAttribute('alarm_enabled') as any;
  }
  public set alarmEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._alarmEnabled = value;
  }
  public resetAlarmEnabled() {
    this._alarmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmEnabledInput() {
    return this._alarmEnabled
  }

  // alarm_level - computed: false, optional: true, required: false
  private _alarmLevel?: number | undefined; 
  public get alarmLevel() {
    return this.getNumberAttribute('alarm_level');
  }
  public set alarmLevel(value: number | undefined) {
    this._alarmLevel = value;
  }
  public resetAlarmLevel() {
    this._alarmLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmLevelInput() {
    return this._alarmLevel
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
    return this._alarmName
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
  private _alarmActions?: CesAlarmruleAlarmActions[] | undefined; 
  public get alarmActions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('alarm_actions') as any;
  }
  public set alarmActions(value: CesAlarmruleAlarmActions[] | undefined) {
    this._alarmActions = value;
  }
  public resetAlarmActions() {
    this._alarmActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionsInput() {
    return this._alarmActions
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: CesAlarmruleCondition; 
  private __conditionOutput = new CesAlarmruleConditionOutputReference(this as any, "condition", true);
  public get condition() {
    return this.__conditionOutput;
  }
  public putCondition(value: CesAlarmruleCondition) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // insufficientdata_actions - computed: false, optional: true, required: false
  private _insufficientdataActions?: CesAlarmruleInsufficientdataActions[] | undefined; 
  public get insufficientdataActions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('insufficientdata_actions') as any;
  }
  public set insufficientdataActions(value: CesAlarmruleInsufficientdataActions[] | undefined) {
    this._insufficientdataActions = value;
  }
  public resetInsufficientdataActions() {
    this._insufficientdataActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insufficientdataActionsInput() {
    return this._insufficientdataActions
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: CesAlarmruleMetric; 
  private __metricOutput = new CesAlarmruleMetricOutputReference(this as any, "metric", true);
  public get metric() {
    return this.__metricOutput;
  }
  public putMetric(value: CesAlarmruleMetric) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric
  }

  // ok_actions - computed: false, optional: true, required: false
  private _okActions?: CesAlarmruleOkActions[] | undefined; 
  public get okActions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ok_actions') as any;
  }
  public set okActions(value: CesAlarmruleOkActions[] | undefined) {
    this._okActions = value;
  }
  public resetOkActions() {
    this._okActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okActionsInput() {
    return this._okActions
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CesAlarmruleTimeouts | undefined; 
  private __timeoutsOutput = new CesAlarmruleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CesAlarmruleTimeouts | undefined) {
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
      alarm_action_enabled: cdktf.booleanToTerraform(this._alarmActionEnabled),
      alarm_description: cdktf.stringToTerraform(this._alarmDescription),
      alarm_enabled: cdktf.booleanToTerraform(this._alarmEnabled),
      alarm_level: cdktf.numberToTerraform(this._alarmLevel),
      alarm_name: cdktf.stringToTerraform(this._alarmName),
      alarm_actions: cdktf.listMapper(cesAlarmruleAlarmActionsToTerraform)(this._alarmActions),
      condition: cesAlarmruleConditionToTerraform(this._condition),
      insufficientdata_actions: cdktf.listMapper(cesAlarmruleInsufficientdataActionsToTerraform)(this._insufficientdataActions),
      metric: cesAlarmruleMetricToTerraform(this._metric),
      ok_actions: cdktf.listMapper(cesAlarmruleOkActionsToTerraform)(this._okActions),
      timeouts: cesAlarmruleTimeoutsToTerraform(this._timeouts),
    };
  }
}
