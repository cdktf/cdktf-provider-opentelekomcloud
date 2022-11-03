// https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CbrPolicyV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#enabled CbrPolicyV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#id CbrPolicyV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#name CbrPolicyV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#operation_type CbrPolicyV3#operation_type}
  */
  readonly operationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#trigger_pattern CbrPolicyV3#trigger_pattern}
  */
  readonly triggerPattern: string[];
  /**
  * operation_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#operation_definition CbrPolicyV3#operation_definition}
  */
  readonly operationDefinition?: CbrPolicyV3OperationDefinition;
}
export interface CbrPolicyV3OperationDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#day_backups CbrPolicyV3#day_backups}
  */
  readonly dayBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#max_backups CbrPolicyV3#max_backups}
  */
  readonly maxBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#month_backups CbrPolicyV3#month_backups}
  */
  readonly monthBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#retention_duration_days CbrPolicyV3#retention_duration_days}
  */
  readonly retentionDurationDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#timezone CbrPolicyV3#timezone}
  */
  readonly timezone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#week_backups CbrPolicyV3#week_backups}
  */
  readonly weekBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3#year_backups CbrPolicyV3#year_backups}
  */
  readonly yearBackups?: number;
}

export function cbrPolicyV3OperationDefinitionToTerraform(struct?: CbrPolicyV3OperationDefinitionOutputReference | CbrPolicyV3OperationDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CbrPolicyV3OperationDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayBackups = this._dayBackups;
    }
    if (this._maxBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackups = this._maxBackups;
    }
    if (this._monthBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthBackups = this._monthBackups;
    }
    if (this._retentionDurationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDurationDays = this._retentionDurationDays;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._weekBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekBackups = this._weekBackups;
    }
    if (this._yearBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearBackups = this._yearBackups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbrPolicyV3OperationDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayBackups = undefined;
      this._maxBackups = undefined;
      this._monthBackups = undefined;
      this._retentionDurationDays = undefined;
      this._timezone = undefined;
      this._weekBackups = undefined;
      this._yearBackups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayBackups = value.dayBackups;
      this._maxBackups = value.maxBackups;
      this._monthBackups = value.monthBackups;
      this._retentionDurationDays = value.retentionDurationDays;
      this._timezone = value.timezone;
      this._weekBackups = value.weekBackups;
      this._yearBackups = value.yearBackups;
    }
  }

  // day_backups - computed: true, optional: true, required: false
  private _dayBackups?: number; 
  public get dayBackups() {
    return this.getNumberAttribute('day_backups');
  }
  public set dayBackups(value: number) {
    this._dayBackups = value;
  }
  public resetDayBackups() {
    this._dayBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayBackupsInput() {
    return this._dayBackups;
  }

  // max_backups - computed: true, optional: true, required: false
  private _maxBackups?: number; 
  public get maxBackups() {
    return this.getNumberAttribute('max_backups');
  }
  public set maxBackups(value: number) {
    this._maxBackups = value;
  }
  public resetMaxBackups() {
    this._maxBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackupsInput() {
    return this._maxBackups;
  }

  // month_backups - computed: true, optional: true, required: false
  private _monthBackups?: number; 
  public get monthBackups() {
    return this.getNumberAttribute('month_backups');
  }
  public set monthBackups(value: number) {
    this._monthBackups = value;
  }
  public resetMonthBackups() {
    this._monthBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthBackupsInput() {
    return this._monthBackups;
  }

  // retention_duration_days - computed: true, optional: true, required: false
  private _retentionDurationDays?: number; 
  public get retentionDurationDays() {
    return this.getNumberAttribute('retention_duration_days');
  }
  public set retentionDurationDays(value: number) {
    this._retentionDurationDays = value;
  }
  public resetRetentionDurationDays() {
    this._retentionDurationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationDaysInput() {
    return this._retentionDurationDays;
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
    return this._timezone;
  }

  // week_backups - computed: true, optional: true, required: false
  private _weekBackups?: number; 
  public get weekBackups() {
    return this.getNumberAttribute('week_backups');
  }
  public set weekBackups(value: number) {
    this._weekBackups = value;
  }
  public resetWeekBackups() {
    this._weekBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekBackupsInput() {
    return this._weekBackups;
  }

  // year_backups - computed: true, optional: true, required: false
  private _yearBackups?: number; 
  public get yearBackups() {
    return this.getNumberAttribute('year_backups');
  }
  public set yearBackups(value: number) {
    this._yearBackups = value;
  }
  public resetYearBackups() {
    this._yearBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearBackupsInput() {
    return this._yearBackups;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3 opentelekomcloud_cbr_policy_v3}
*/
export class CbrPolicyV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cbr_policy_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_policy_v3 opentelekomcloud_cbr_policy_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CbrPolicyV3Config
  */
  public constructor(scope: Construct, id: string, config: CbrPolicyV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cbr_policy_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.31.7',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._operationType = config.operationType;
    this._triggerPattern = config.triggerPattern;
    this._operationDefinition.internalValue = config.operationDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
    return this._name;
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
    return this._operationType;
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
    return this._triggerPattern;
  }

  // operation_definition - computed: false, optional: true, required: false
  private _operationDefinition = new CbrPolicyV3OperationDefinitionOutputReference(this, "operation_definition");
  public get operationDefinition() {
    return this._operationDefinition;
  }
  public putOperationDefinition(value: CbrPolicyV3OperationDefinition) {
    this._operationDefinition.internalValue = value;
  }
  public resetOperationDefinition() {
    this._operationDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationDefinitionInput() {
    return this._operationDefinition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      operation_type: cdktf.stringToTerraform(this._operationType),
      trigger_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerPattern),
      operation_definition: cbrPolicyV3OperationDefinitionToTerraform(this._operationDefinition.internalValue),
    };
  }
}
