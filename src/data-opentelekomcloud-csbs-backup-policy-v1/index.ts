// https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCsbsBackupPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#id DataOpentelekomcloudCsbsBackupPolicyV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#name DataOpentelekomcloudCsbsBackupPolicyV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#region DataOpentelekomcloudCsbsBackupPolicyV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#status DataOpentelekomcloudCsbsBackupPolicyV1#status}
  */
  readonly status?: string;
}
export interface DataOpentelekomcloudCsbsBackupPolicyV1Resource {
}

export function dataOpentelekomcloudCsbsBackupPolicyV1ResourceToTerraform(struct?: DataOpentelekomcloudCsbsBackupPolicyV1Resource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudCsbsBackupPolicyV1Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudCsbsBackupPolicyV1Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOpentelekomcloudCsbsBackupPolicyV1ResourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference {
    return new DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation {
}

export function dataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationToTerraform(struct?: DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_backups - computed: true, optional: false, required: false
  public get maxBackups() {
    return this.getNumberAttribute('max_backups');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operation_type - computed: true, optional: false, required: false
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }

  // permanent - computed: true, optional: false, required: false
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }

  // retention_duration_days - computed: true, optional: false, required: false
  public get retentionDurationDays() {
    return this.getNumberAttribute('retention_duration_days');
  }

  // trigger_id - computed: true, optional: false, required: false
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
  }

  // trigger_name - computed: true, optional: false, required: false
  public get triggerName() {
    return this.getStringAttribute('trigger_name');
  }

  // trigger_pattern - computed: true, optional: false, required: false
  public get triggerPattern() {
    return this.getStringAttribute('trigger_pattern');
  }

  // trigger_type - computed: true, optional: false, required: false
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
}

export class DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference {
    return new DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudCsbsBackupPolicyV1Tags {
}

export function dataOpentelekomcloudCsbsBackupPolicyV1TagsToTerraform(struct?: DataOpentelekomcloudCsbsBackupPolicyV1Tags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudCsbsBackupPolicyV1Tags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudCsbsBackupPolicyV1Tags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOpentelekomcloudCsbsBackupPolicyV1TagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference {
    return new DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1 opentelekomcloud_csbs_backup_policy_v1}
*/
export class DataOpentelekomcloudCsbsBackupPolicyV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_csbs_backup_policy_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1 opentelekomcloud_csbs_backup_policy_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCsbsBackupPolicyV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCsbsBackupPolicyV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_csbs_backup_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.32.1',
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // common - computed: true, optional: false, required: false
  private _common = new cdktf.StringMap(this, "common");
  public get common() {
    return this._common;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
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

  // resource - computed: true, optional: false, required: false
  private _resource = new DataOpentelekomcloudCsbsBackupPolicyV1ResourceList(this, "resource", true);
  public get resource() {
    return this._resource;
  }

  // scheduled_operation - computed: true, optional: false, required: false
  private _scheduledOperation = new DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList(this, "scheduled_operation", true);
  public get scheduledOperation() {
    return this._scheduledOperation;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOpentelekomcloudCsbsBackupPolicyV1TagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
