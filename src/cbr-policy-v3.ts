// https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CbrPolicyV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#enabled CbrPolicyV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#name CbrPolicyV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#operation_type CbrPolicyV3#operation_type}
  */
  readonly operationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#trigger_pattern CbrPolicyV3#trigger_pattern}
  */
  readonly triggerPattern: string[];
  /**
  * operation_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#operation_definition CbrPolicyV3#operation_definition}
  */
  readonly operationDefinition?: CbrPolicyV3OperationDefinition;
}
export interface CbrPolicyV3OperationDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#day_backups CbrPolicyV3#day_backups}
  */
  readonly dayBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#max_backups CbrPolicyV3#max_backups}
  */
  readonly maxBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#month_backups CbrPolicyV3#month_backups}
  */
  readonly monthBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#retention_duration_days CbrPolicyV3#retention_duration_days}
  */
  readonly retentionDurationDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#timezone CbrPolicyV3#timezone}
  */
  readonly timezone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#week_backups CbrPolicyV3#week_backups}
  */
  readonly weekBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html#year_backups CbrPolicyV3#year_backups}
  */
  readonly yearBackups?: number;
}

function cbrPolicyV3OperationDefinitionToTerraform(struct?: CbrPolicyV3OperationDefinitionOutputReference | CbrPolicyV3OperationDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_backups: cdktf.numberToTerraform(struct!.dayBackups),
    max_backups: cdktf.numberToTerraform(struct!.maxBackups),
    month_backups: cdktf.numberToTerraform(struct!.monthBackups),
    retention_duration_days: cdktf.numberToTerraform(struct!.retentionDurationDays),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    week_backups: cdktf.numberToTerraform(struct!.weekBackups),
    year_backups: cdktf.numberToTerraform(struct!.yearBackups),
  }
}

export class CbrPolicyV3OperationDefinitionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // day_backups - computed: true, optional: true, required: false
  private _dayBackups?: number | undefined; 
  public get dayBackups() {
    return this.getNumberAttribute('day_backups');
  }
  public set dayBackups(value: number | undefined) {
    this._dayBackups = value;
  }
  public resetDayBackups() {
    this._dayBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayBackupsInput() {
    return this._dayBackups
  }

  // max_backups - computed: true, optional: true, required: false
  private _maxBackups?: number | undefined; 
  public get maxBackups() {
    return this.getNumberAttribute('max_backups');
  }
  public set maxBackups(value: number | undefined) {
    this._maxBackups = value;
  }
  public resetMaxBackups() {
    this._maxBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackupsInput() {
    return this._maxBackups
  }

  // month_backups - computed: true, optional: true, required: false
  private _monthBackups?: number | undefined; 
  public get monthBackups() {
    return this.getNumberAttribute('month_backups');
  }
  public set monthBackups(value: number | undefined) {
    this._monthBackups = value;
  }
  public resetMonthBackups() {
    this._monthBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthBackupsInput() {
    return this._monthBackups
  }

  // retention_duration_days - computed: true, optional: true, required: false
  private _retentionDurationDays?: number | undefined; 
  public get retentionDurationDays() {
    return this.getNumberAttribute('retention_duration_days');
  }
  public set retentionDurationDays(value: number | undefined) {
    this._retentionDurationDays = value;
  }
  public resetRetentionDurationDays() {
    this._retentionDurationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationDaysInput() {
    return this._retentionDurationDays
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // week_backups - computed: true, optional: true, required: false
  private _weekBackups?: number | undefined; 
  public get weekBackups() {
    return this.getNumberAttribute('week_backups');
  }
  public set weekBackups(value: number | undefined) {
    this._weekBackups = value;
  }
  public resetWeekBackups() {
    this._weekBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekBackupsInput() {
    return this._weekBackups
  }

  // year_backups - computed: true, optional: true, required: false
  private _yearBackups?: number | undefined; 
  public get yearBackups() {
    return this.getNumberAttribute('year_backups');
  }
  public set yearBackups(value: number | undefined) {
    this._yearBackups = value;
  }
  public resetYearBackups() {
    this._yearBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearBackupsInput() {
    return this._yearBackups
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html opentelekomcloud_cbr_policy_v3}
*/
export class CbrPolicyV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_cbr_policy_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3.html opentelekomcloud_cbr_policy_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CbrPolicyV3Config
  */
  public constructor(scope: Construct, id: string, config: CbrPolicyV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cbr_policy_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._name = config.name;
    this._operationType = config.operationType;
    this._triggerPattern = config.triggerPattern;
    this._operationDefinition = config.operationDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // operation_type - computed: false, optional: false, required: true
  private _operationType?: string; 
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }
  public set operationType(value: string) {
    this._operationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypeInput() {
    return this._operationType
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // trigger_pattern - computed: false, optional: false, required: true
  private _triggerPattern?: string[]; 
  public get triggerPattern() {
    return this.getListAttribute('trigger_pattern');
  }
  public set triggerPattern(value: string[]) {
    this._triggerPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerPatternInput() {
    return this._triggerPattern
  }

  // operation_definition - computed: false, optional: true, required: false
  private _operationDefinition?: CbrPolicyV3OperationDefinition | undefined; 
  private __operationDefinitionOutput = new CbrPolicyV3OperationDefinitionOutputReference(this as any, "operation_definition", true);
  public get operationDefinition() {
    return this.__operationDefinitionOutput;
  }
  public putOperationDefinition(value: CbrPolicyV3OperationDefinition | undefined) {
    this._operationDefinition = value;
  }
  public resetOperationDefinition() {
    this._operationDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationDefinitionInput() {
    return this._operationDefinition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      operation_type: cdktf.stringToTerraform(this._operationType),
      trigger_pattern: cdktf.listMapper(cdktf.stringToTerraform)(this._triggerPattern),
      operation_definition: cbrPolicyV3OperationDefinitionToTerraform(this._operationDefinition),
    };
  }
}
