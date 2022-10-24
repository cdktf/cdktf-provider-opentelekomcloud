// https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcsInstanceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#access_user DcsInstanceV1#access_user}
  */
  readonly accessUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}
  */
  readonly availableZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}
  */
  readonly backupAt?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}
  */
  readonly beginAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#capacity DcsInstanceV1#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#description DcsInstanceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#enable_whitelist DcsInstanceV1#enable_whitelist}
  */
  readonly enableWhitelist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#engine DcsInstanceV1#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#id DcsInstanceV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}
  */
  readonly maintainBegin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}
  */
  readonly maintainEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#name DcsInstanceV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#password DcsInstanceV1#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#period_type DcsInstanceV1#period_type}
  */
  readonly periodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#product_id DcsInstanceV1#product_id}
  */
  readonly productId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#save_days DcsInstanceV1#save_days}
  */
  readonly saveDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * backup_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#backup_policy DcsInstanceV1#backup_policy}
  */
  readonly backupPolicy?: DcsInstanceV1BackupPolicy;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#configuration DcsInstanceV1#configuration}
  */
  readonly configuration?: DcsInstanceV1Configuration[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#timeouts DcsInstanceV1#timeouts}
  */
  readonly timeouts?: DcsInstanceV1Timeouts;
  /**
  * whitelist block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#whitelist DcsInstanceV1#whitelist}
  */
  readonly whitelist?: DcsInstanceV1Whitelist[] | cdktf.IResolvable;
}
export interface DcsInstanceV1BackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}
  */
  readonly backupAt: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}
  */
  readonly beginAt: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#period_type DcsInstanceV1#period_type}
  */
  readonly periodType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#save_days DcsInstanceV1#save_days}
  */
  readonly saveDays?: number;
}

export function dcsInstanceV1BackupPolicyToTerraform(struct?: DcsInstanceV1BackupPolicyOutputReference | DcsInstanceV1BackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_at: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.backupAt),
    backup_type: cdktf.stringToTerraform(struct!.backupType),
    begin_at: cdktf.stringToTerraform(struct!.beginAt),
    period_type: cdktf.stringToTerraform(struct!.periodType),
    save_days: cdktf.numberToTerraform(struct!.saveDays),
  }
}

export class DcsInstanceV1BackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcsInstanceV1BackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupAt = this._backupAt;
    }
    if (this._backupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupType = this._backupType;
    }
    if (this._beginAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginAt = this._beginAt;
    }
    if (this._periodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodType = this._periodType;
    }
    if (this._saveDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveDays = this._saveDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcsInstanceV1BackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupAt = undefined;
      this._backupType = undefined;
      this._beginAt = undefined;
      this._periodType = undefined;
      this._saveDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupAt = value.backupAt;
      this._backupType = value.backupType;
      this._beginAt = value.beginAt;
      this._periodType = value.periodType;
      this._saveDays = value.saveDays;
    }
  }

  // backup_at - computed: false, optional: false, required: true
  private _backupAt?: number[]; 
  public get backupAt() {
    return this.getNumberListAttribute('backup_at');
  }
  public set backupAt(value: number[]) {
    this._backupAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAtInput() {
    return this._backupAt;
  }

  // backup_type - computed: false, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // begin_at - computed: false, optional: false, required: true
  private _beginAt?: string; 
  public get beginAt() {
    return this.getStringAttribute('begin_at');
  }
  public set beginAt(value: string) {
    this._beginAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginAtInput() {
    return this._beginAt;
  }

  // period_type - computed: false, optional: false, required: true
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }

  // save_days - computed: false, optional: true, required: false
  private _saveDays?: number; 
  public get saveDays() {
    return this.getNumberAttribute('save_days');
  }
  public set saveDays(value: number) {
    this._saveDays = value;
  }
  public resetSaveDays() {
    this._saveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveDaysInput() {
    return this._saveDays;
  }
}
export interface DcsInstanceV1Configuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#parameter_id DcsInstanceV1#parameter_id}
  */
  readonly parameterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#parameter_name DcsInstanceV1#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#parameter_value DcsInstanceV1#parameter_value}
  */
  readonly parameterValue: string;
}

export function dcsInstanceV1ConfigurationToTerraform(struct?: DcsInstanceV1Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_id: cdktf.stringToTerraform(struct!.parameterId),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export class DcsInstanceV1ConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DcsInstanceV1Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterId = this._parameterId;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcsInstanceV1Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterId = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterId = value.parameterId;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_id - computed: false, optional: false, required: true
  private _parameterId?: string; 
  public get parameterId() {
    return this.getStringAttribute('parameter_id');
  }
  public set parameterId(value: string) {
    this._parameterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterIdInput() {
    return this._parameterId;
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class DcsInstanceV1ConfigurationList extends cdktf.ComplexList {
  public internalValue? : DcsInstanceV1Configuration[] | cdktf.IResolvable

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
  public get(index: number): DcsInstanceV1ConfigurationOutputReference {
    return new DcsInstanceV1ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DcsInstanceV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#create DcsInstanceV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#delete DcsInstanceV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#update DcsInstanceV1#update}
  */
  readonly update?: string;
}

export function dcsInstanceV1TimeoutsToTerraform(struct?: DcsInstanceV1TimeoutsOutputReference | DcsInstanceV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DcsInstanceV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcsInstanceV1Timeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcsInstanceV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
export interface DcsInstanceV1Whitelist {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#group_name DcsInstanceV1#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#ip_list DcsInstanceV1#ip_list}
  */
  readonly ipList: string[];
}

export function dcsInstanceV1WhitelistToTerraform(struct?: DcsInstanceV1Whitelist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipList),
  }
}

export class DcsInstanceV1WhitelistOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DcsInstanceV1Whitelist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._ipList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcsInstanceV1Whitelist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._ipList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._ipList = value.ipList;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // ip_list - computed: false, optional: false, required: true
  private _ipList?: string[]; 
  public get ipList() {
    return this.getListAttribute('ip_list');
  }
  public set ipList(value: string[]) {
    this._ipList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }
}

export class DcsInstanceV1WhitelistList extends cdktf.ComplexList {
  public internalValue? : DcsInstanceV1Whitelist[] | cdktf.IResolvable

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
  public get(index: number): DcsInstanceV1WhitelistOutputReference {
    return new DcsInstanceV1WhitelistOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1 opentelekomcloud_dcs_instance_v1}
*/
export class DcsInstanceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dcs_instance_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1 opentelekomcloud_dcs_instance_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcsInstanceV1Config
  */
  public constructor(scope: Construct, id: string, config: DcsInstanceV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dcs_instance_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.31.6',
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
    this._accessUser = config.accessUser;
    this._availableZones = config.availableZones;
    this._backupAt = config.backupAt;
    this._backupType = config.backupType;
    this._beginAt = config.beginAt;
    this._capacity = config.capacity;
    this._description = config.description;
    this._enableWhitelist = config.enableWhitelist;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._maintainBegin = config.maintainBegin;
    this._maintainEnd = config.maintainEnd;
    this._name = config.name;
    this._password = config.password;
    this._periodType = config.periodType;
    this._productId = config.productId;
    this._saveDays = config.saveDays;
    this._securityGroupId = config.securityGroupId;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._backupPolicy.internalValue = config.backupPolicy;
    this._configuration.internalValue = config.configuration;
    this._timeouts.internalValue = config.timeouts;
    this._whitelist.internalValue = config.whitelist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_user - computed: true, optional: true, required: false
  private _accessUser?: string; 
  public get accessUser() {
    return this.getStringAttribute('access_user');
  }
  public set accessUser(value: string) {
    this._accessUser = value;
  }
  public resetAccessUser() {
    this._accessUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessUserInput() {
    return this._accessUser;
  }

  // available_zones - computed: false, optional: false, required: true
  private _availableZones?: string[]; 
  public get availableZones() {
    return this.getListAttribute('available_zones');
  }
  public set availableZones(value: string[]) {
    this._availableZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZonesInput() {
    return this._availableZones;
  }

  // backup_at - computed: false, optional: true, required: false
  private _backupAt?: number[]; 
  public get backupAt() {
    return this.getNumberListAttribute('backup_at');
  }
  public set backupAt(value: number[]) {
    this._backupAt = value;
  }
  public resetBackupAt() {
    this._backupAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAtInput() {
    return this._backupAt;
  }

  // backup_type - computed: false, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // begin_at - computed: false, optional: true, required: false
  private _beginAt?: string; 
  public get beginAt() {
    return this.getStringAttribute('begin_at');
  }
  public set beginAt(value: string) {
    this._beginAt = value;
  }
  public resetBeginAt() {
    this._beginAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginAtInput() {
    return this._beginAt;
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // enable_whitelist - computed: true, optional: true, required: false
  private _enableWhitelist?: boolean | cdktf.IResolvable; 
  public get enableWhitelist() {
    return this.getBooleanAttribute('enable_whitelist');
  }
  public set enableWhitelist(value: boolean | cdktf.IResolvable) {
    this._enableWhitelist = value;
  }
  public resetEnableWhitelist() {
    this._enableWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWhitelistInput() {
    return this._enableWhitelist;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // internal_version - computed: true, optional: false, required: false
  public get internalVersion() {
    return this.getStringAttribute('internal_version');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // maintain_begin - computed: true, optional: true, required: false
  private _maintainBegin?: string; 
  public get maintainBegin() {
    return this.getStringAttribute('maintain_begin');
  }
  public set maintainBegin(value: string) {
    this._maintainBegin = value;
  }
  public resetMaintainBegin() {
    this._maintainBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainBeginInput() {
    return this._maintainBegin;
  }

  // maintain_end - computed: true, optional: true, required: false
  private _maintainEnd?: string; 
  public get maintainEnd() {
    return this.getStringAttribute('maintain_end');
  }
  public set maintainEnd(value: string) {
    this._maintainEnd = value;
  }
  public resetMaintainEnd() {
    this._maintainEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainEndInput() {
    return this._maintainEnd;
  }

  // max_memory - computed: true, optional: false, required: false
  public get maxMemory() {
    return this.getNumberAttribute('max_memory');
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

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getStringAttribute('order_id');
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // period_type - computed: false, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // resource_spec_code - computed: true, optional: false, required: false
  public get resourceSpecCode() {
    return this.getStringAttribute('resource_spec_code');
  }

  // save_days - computed: false, optional: true, required: false
  private _saveDays?: number; 
  public get saveDays() {
    return this.getNumberAttribute('save_days');
  }
  public set saveDays(value: number) {
    this._saveDays = value;
  }
  public resetSaveDays() {
    this._saveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveDaysInput() {
    return this._saveDays;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // used_memory - computed: true, optional: false, required: false
  public get usedMemory() {
    return this.getNumberAttribute('used_memory');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new DcsInstanceV1BackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: DcsInstanceV1BackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DcsInstanceV1ConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DcsInstanceV1Configuration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DcsInstanceV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DcsInstanceV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist = new DcsInstanceV1WhitelistList(this, "whitelist", true);
  public get whitelist() {
    return this._whitelist;
  }
  public putWhitelist(value: DcsInstanceV1Whitelist[] | cdktf.IResolvable) {
    this._whitelist.internalValue = value;
  }
  public resetWhitelist() {
    this._whitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_user: cdktf.stringToTerraform(this._accessUser),
      available_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availableZones),
      backup_at: cdktf.listMapper(cdktf.numberToTerraform, false)(this._backupAt),
      backup_type: cdktf.stringToTerraform(this._backupType),
      begin_at: cdktf.stringToTerraform(this._beginAt),
      capacity: cdktf.numberToTerraform(this._capacity),
      description: cdktf.stringToTerraform(this._description),
      enable_whitelist: cdktf.booleanToTerraform(this._enableWhitelist),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      maintain_begin: cdktf.stringToTerraform(this._maintainBegin),
      maintain_end: cdktf.stringToTerraform(this._maintainEnd),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      period_type: cdktf.stringToTerraform(this._periodType),
      product_id: cdktf.stringToTerraform(this._productId),
      save_days: cdktf.numberToTerraform(this._saveDays),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      backup_policy: dcsInstanceV1BackupPolicyToTerraform(this._backupPolicy.internalValue),
      configuration: cdktf.listMapper(dcsInstanceV1ConfigurationToTerraform, true)(this._configuration.internalValue),
      timeouts: dcsInstanceV1TimeoutsToTerraform(this._timeouts.internalValue),
      whitelist: cdktf.listMapper(dcsInstanceV1WhitelistToTerraform, true)(this._whitelist.internalValue),
    };
  }
}
