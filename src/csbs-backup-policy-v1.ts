// https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsbsBackupPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#common CsbsBackupPolicyV1#common}
  */
  readonly common?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#description CsbsBackupPolicyV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#name CsbsBackupPolicyV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#provider_id CsbsBackupPolicyV1#provider_id}
  */
  readonly providerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#region CsbsBackupPolicyV1#region}
  */
  readonly region?: string;
  /**
  * resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#resource CsbsBackupPolicyV1#resource}
  */
  readonly resource: CsbsBackupPolicyV1Resource[];
  /**
  * scheduled_operation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#scheduled_operation CsbsBackupPolicyV1#scheduled_operation}
  */
  readonly scheduledOperation: CsbsBackupPolicyV1ScheduledOperation;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#tags CsbsBackupPolicyV1#tags}
  */
  readonly tags?: CsbsBackupPolicyV1Tags[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#timeouts CsbsBackupPolicyV1#timeouts}
  */
  readonly timeouts?: CsbsBackupPolicyV1Timeouts;
}
export interface CsbsBackupPolicyV1Resource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#id CsbsBackupPolicyV1#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#name CsbsBackupPolicyV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#type CsbsBackupPolicyV1#type}
  */
  readonly type: string;
}

function csbsBackupPolicyV1ResourceToTerraform(struct?: CsbsBackupPolicyV1Resource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CsbsBackupPolicyV1ScheduledOperation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#day_backups CsbsBackupPolicyV1#day_backups}
  */
  readonly dayBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#description CsbsBackupPolicyV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#enabled CsbsBackupPolicyV1#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#max_backups CsbsBackupPolicyV1#max_backups}
  */
  readonly maxBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#month_backups CsbsBackupPolicyV1#month_backups}
  */
  readonly monthBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#name CsbsBackupPolicyV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#operation_type CsbsBackupPolicyV1#operation_type}
  */
  readonly operationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#permanent CsbsBackupPolicyV1#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#retention_duration_days CsbsBackupPolicyV1#retention_duration_days}
  */
  readonly retentionDurationDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#timezone CsbsBackupPolicyV1#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#trigger_pattern CsbsBackupPolicyV1#trigger_pattern}
  */
  readonly triggerPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#week_backups CsbsBackupPolicyV1#week_backups}
  */
  readonly weekBackups?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#year_backups CsbsBackupPolicyV1#year_backups}
  */
  readonly yearBackups?: number;
}

function csbsBackupPolicyV1ScheduledOperationToTerraform(struct?: CsbsBackupPolicyV1ScheduledOperationOutputReference | CsbsBackupPolicyV1ScheduledOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // day_backups - computed: false, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

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

  // max_backups - computed: false, optional: true, required: false
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

  // month_backups - computed: false, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // permanent - computed: true, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable | undefined; 
  public get permanent() {
    return this.getBooleanAttribute('permanent') as any;
  }
  public set permanent(value: boolean | cdktf.IResolvable | undefined) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent
  }

  // retention_duration_days - computed: false, optional: true, required: false
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string | undefined; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string | undefined) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
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
    return this._triggerPattern
  }

  // week_backups - computed: false, optional: true, required: false
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

  // year_backups - computed: false, optional: true, required: false
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
export interface CsbsBackupPolicyV1Tags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#key CsbsBackupPolicyV1#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#value CsbsBackupPolicyV1#value}
  */
  readonly value: string;
}

function csbsBackupPolicyV1TagsToTerraform(struct?: CsbsBackupPolicyV1Tags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CsbsBackupPolicyV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#create CsbsBackupPolicyV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html#delete CsbsBackupPolicyV1#delete}
  */
  readonly delete?: string;
}

function csbsBackupPolicyV1TimeoutsToTerraform(struct?: CsbsBackupPolicyV1TimeoutsOutputReference | CsbsBackupPolicyV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class CsbsBackupPolicyV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html opentelekomcloud_csbs_backup_policy_v1}
*/
export class CsbsBackupPolicyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_csbs_backup_policy_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1.html opentelekomcloud_csbs_backup_policy_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsbsBackupPolicyV1Config
  */
  public constructor(scope: Construct, id: string, config: CsbsBackupPolicyV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_csbs_backup_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._common = config.common;
    this._description = config.description;
    this._name = config.name;
    this._providerId = config.providerId;
    this._region = config.region;
    this._resource = config.resource;
    this._scheduledOperation = config.scheduledOperation;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // common - computed: false, optional: true, required: false
  private _common?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get common() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('common') as any;
  }
  public set common(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._common = value;
  }
  public resetCommon() {
    this._common = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonInput() {
    return this._common
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // provider_id - computed: false, optional: true, required: false
  private _providerId?: string | undefined; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string | undefined) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: CsbsBackupPolicyV1Resource[]; 
  public get resource() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource') as any;
  }
  public set resource(value: CsbsBackupPolicyV1Resource[]) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }

  // scheduled_operation - computed: false, optional: false, required: true
  private _scheduledOperation?: CsbsBackupPolicyV1ScheduledOperation; 
  private __scheduledOperationOutput = new CsbsBackupPolicyV1ScheduledOperationOutputReference(this as any, "scheduled_operation", true);
  public get scheduledOperation() {
    return this.__scheduledOperationOutput;
  }
  public putScheduledOperation(value: CsbsBackupPolicyV1ScheduledOperation) {
    this._scheduledOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledOperationInput() {
    return this._scheduledOperation
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CsbsBackupPolicyV1Tags[] | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CsbsBackupPolicyV1Tags[] | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CsbsBackupPolicyV1Timeouts | undefined; 
  private __timeoutsOutput = new CsbsBackupPolicyV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CsbsBackupPolicyV1Timeouts | undefined) {
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
      common: cdktf.hashMapper(cdktf.anyToTerraform)(this._common),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      provider_id: cdktf.stringToTerraform(this._providerId),
      region: cdktf.stringToTerraform(this._region),
      resource: cdktf.listMapper(csbsBackupPolicyV1ResourceToTerraform)(this._resource),
      scheduled_operation: csbsBackupPolicyV1ScheduledOperationToTerraform(this._scheduledOperation),
      tags: cdktf.listMapper(csbsBackupPolicyV1TagsToTerraform)(this._tags),
      timeouts: csbsBackupPolicyV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
