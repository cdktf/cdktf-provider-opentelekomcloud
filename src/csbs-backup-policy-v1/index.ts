// https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsbsBackupPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#common CsbsBackupPolicyV1#common}
  */
  readonly common?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#provider_id CsbsBackupPolicyV1#provider_id}
  */
  readonly providerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#region CsbsBackupPolicyV1#region}
  */
  readonly region?: string;
  /**
  * resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#resource CsbsBackupPolicyV1#resource}
  */
  readonly resource: CsbsBackupPolicyV1Resource[] | cdktf.IResolvable;
  /**
  * scheduled_operation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#scheduled_operation CsbsBackupPolicyV1#scheduled_operation}
  */
  readonly scheduledOperation: CsbsBackupPolicyV1ScheduledOperation;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#tags CsbsBackupPolicyV1#tags}
  */
  readonly tags?: CsbsBackupPolicyV1Tags[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#timeouts CsbsBackupPolicyV1#timeouts}
  */
  readonly timeouts?: CsbsBackupPolicyV1Timeouts;
}
export interface CsbsBackupPolicyV1Resource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#type CsbsBackupPolicyV1#type}
  */
  readonly type: string;
}

export function csbsBackupPolicyV1ResourceToTerraform(struct?: CsbsBackupPolicyV1Resource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CsbsBackupPolicyV1ResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CsbsBackupPolicyV1Resource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsbsBackupPolicyV1Resource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
    return this._type;
  }
}

export class CsbsBackupPolicyV1ResourceList extends cdktf.ComplexList {
  public internalValue? : CsbsBackupPolicyV1Resource[] | cdktf.IResolvable

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
  public get(index: number): CsbsBackupPolicyV1ResourceOutputReference {
    return new CsbsBackupPolicyV1ResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsbsBackupPolicyV1ScheduledOperation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#day_backups CsbsBackupPolicyV1#day_backups}
  */
  readonly dayBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#enabled CsbsBackupPolicyV1#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#max_backups CsbsBackupPolicyV1#max_backups}
  */
  readonly maxBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#month_backups CsbsBackupPolicyV1#month_backups}
  */
  readonly monthBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#operation_type CsbsBackupPolicyV1#operation_type}
  */
  readonly operationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#permanent CsbsBackupPolicyV1#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#retention_duration_days CsbsBackupPolicyV1#retention_duration_days}
  */
  readonly retentionDurationDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#timezone CsbsBackupPolicyV1#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#trigger_pattern CsbsBackupPolicyV1#trigger_pattern}
  */
  readonly triggerPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#week_backups CsbsBackupPolicyV1#week_backups}
  */
  readonly weekBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#year_backups CsbsBackupPolicyV1#year_backups}
  */
  readonly yearBackups?: number;
}

export function csbsBackupPolicyV1ScheduledOperationToTerraform(struct?: CsbsBackupPolicyV1ScheduledOperationOutputReference | CsbsBackupPolicyV1ScheduledOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_backups: cdktf.numberToTerraform(struct!.dayBackups),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_backups: cdktf.numberToTerraform(struct!.maxBackups),
    month_backups: cdktf.numberToTerraform(struct!.monthBackups),
    name: cdktf.stringToTerraform(struct!.name),
    operation_type: cdktf.stringToTerraform(struct!.operationType),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    retention_duration_days: cdktf.numberToTerraform(struct!.retentionDurationDays),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    trigger_pattern: cdktf.stringToTerraform(struct!.triggerPattern),
    week_backups: cdktf.numberToTerraform(struct!.weekBackups),
    year_backups: cdktf.numberToTerraform(struct!.yearBackups),
  }
}

export class CsbsBackupPolicyV1ScheduledOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsbsBackupPolicyV1ScheduledOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayBackups = this._dayBackups;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackups = this._maxBackups;
    }
    if (this._monthBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthBackups = this._monthBackups;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationType = this._operationType;
    }
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    if (this._retentionDurationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDurationDays = this._retentionDurationDays;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._triggerPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerPattern = this._triggerPattern;
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

  public set internalValue(value: CsbsBackupPolicyV1ScheduledOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayBackups = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._maxBackups = undefined;
      this._monthBackups = undefined;
      this._name = undefined;
      this._operationType = undefined;
      this._permanent = undefined;
      this._retentionDurationDays = undefined;
      this._timezone = undefined;
      this._triggerPattern = undefined;
      this._weekBackups = undefined;
      this._yearBackups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayBackups = value.dayBackups;
      this._description = value.description;
      this._enabled = value.enabled;
      this._maxBackups = value.maxBackups;
      this._monthBackups = value.monthBackups;
      this._name = value.name;
      this._operationType = value.operationType;
      this._permanent = value.permanent;
      this._retentionDurationDays = value.retentionDurationDays;
      this._timezone = value.timezone;
      this._triggerPattern = value.triggerPattern;
      this._weekBackups = value.weekBackups;
      this._yearBackups = value.yearBackups;
    }
  }

  // day_backups - computed: false, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_backups - computed: false, optional: true, required: false
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

  // month_backups - computed: false, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // permanent - computed: true, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
  }

  // retention_duration_days - computed: false, optional: true, required: false
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // trigger_id - computed: true, optional: false, required: false
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
  }

  // trigger_name - computed: true, optional: false, required: false
  public get triggerName() {
    return this.getStringAttribute('trigger_name');
  }

  // trigger_pattern - computed: false, optional: false, required: true
  private _triggerPattern?: string; 
  public get triggerPattern() {
    return this.getStringAttribute('trigger_pattern');
  }
  public set triggerPattern(value: string) {
    this._triggerPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerPatternInput() {
    return this._triggerPattern;
  }

  // trigger_type - computed: true, optional: false, required: false
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }

  // week_backups - computed: false, optional: true, required: false
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

  // year_backups - computed: false, optional: true, required: false
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
export interface CsbsBackupPolicyV1Tags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#key CsbsBackupPolicyV1#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#value CsbsBackupPolicyV1#value}
  */
  readonly value: string;
}

export function csbsBackupPolicyV1TagsToTerraform(struct?: CsbsBackupPolicyV1Tags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class CsbsBackupPolicyV1TagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CsbsBackupPolicyV1Tags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsbsBackupPolicyV1Tags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
    return this._value;
  }
}

export class CsbsBackupPolicyV1TagsList extends cdktf.ComplexList {
  public internalValue? : CsbsBackupPolicyV1Tags[] | cdktf.IResolvable

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
  public get(index: number): CsbsBackupPolicyV1TagsOutputReference {
    return new CsbsBackupPolicyV1TagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsbsBackupPolicyV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#create CsbsBackupPolicyV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#delete CsbsBackupPolicyV1#delete}
  */
  readonly delete?: string;
}

export function csbsBackupPolicyV1TimeoutsToTerraform(struct?: CsbsBackupPolicyV1TimeoutsOutputReference | CsbsBackupPolicyV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class CsbsBackupPolicyV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsbsBackupPolicyV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsbsBackupPolicyV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1 opentelekomcloud_csbs_backup_policy_v1}
*/
export class CsbsBackupPolicyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_csbs_backup_policy_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1 opentelekomcloud_csbs_backup_policy_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsbsBackupPolicyV1Config
  */
  public constructor(scope: Construct, id: string, config: CsbsBackupPolicyV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_csbs_backup_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.34.1',
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
    this._common = config.common;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._providerId = config.providerId;
    this._region = config.region;
    this._resource.internalValue = config.resource;
    this._scheduledOperation.internalValue = config.scheduledOperation;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // common - computed: false, optional: true, required: false
  private _common?: { [key: string]: string }; 
  public get common() {
    return this.getStringMapAttribute('common');
  }
  public set common(value: { [key: string]: string }) {
    this._common = value;
  }
  public resetCommon() {
    this._common = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonInput() {
    return this._common;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // provider_id - computed: false, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new CsbsBackupPolicyV1ResourceList(this, "resource", true);
  public get resource() {
    return this._resource;
  }
  public putResource(value: CsbsBackupPolicyV1Resource[] | cdktf.IResolvable) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // scheduled_operation - computed: false, optional: false, required: true
  private _scheduledOperation = new CsbsBackupPolicyV1ScheduledOperationOutputReference(this, "scheduled_operation");
  public get scheduledOperation() {
    return this._scheduledOperation;
  }
  public putScheduledOperation(value: CsbsBackupPolicyV1ScheduledOperation) {
    this._scheduledOperation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledOperationInput() {
    return this._scheduledOperation.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CsbsBackupPolicyV1TagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CsbsBackupPolicyV1Tags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsbsBackupPolicyV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsbsBackupPolicyV1Timeouts) {
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
      common: cdktf.hashMapper(cdktf.stringToTerraform)(this._common),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      provider_id: cdktf.stringToTerraform(this._providerId),
      region: cdktf.stringToTerraform(this._region),
      resource: cdktf.listMapper(csbsBackupPolicyV1ResourceToTerraform, true)(this._resource.internalValue),
      scheduled_operation: csbsBackupPolicyV1ScheduledOperationToTerraform(this._scheduledOperation.internalValue),
      tags: cdktf.listMapper(csbsBackupPolicyV1TagsToTerraform, true)(this._tags.internalValue),
      timeouts: csbsBackupPolicyV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
