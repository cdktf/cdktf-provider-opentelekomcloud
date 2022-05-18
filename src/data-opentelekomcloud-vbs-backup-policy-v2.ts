// https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudVbsBackupPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2#id DataOpentelekomcloudVbsBackupPolicyV2#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2#name DataOpentelekomcloudVbsBackupPolicyV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2#policy_resource_count DataOpentelekomcloudVbsBackupPolicyV2#policy_resource_count}
  */
  readonly policyResourceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2#region DataOpentelekomcloudVbsBackupPolicyV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2#status DataOpentelekomcloudVbsBackupPolicyV2#status}
  */
  readonly status?: string;
  /**
  * filter_tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2#filter_tags DataOpentelekomcloudVbsBackupPolicyV2#filter_tags}
  */
  readonly filterTags?: DataOpentelekomcloudVbsBackupPolicyV2FilterTags[] | cdktf.IResolvable;
}
export interface DataOpentelekomcloudVbsBackupPolicyV2Tags {
}

export function dataOpentelekomcloudVbsBackupPolicyV2TagsToTerraform(struct?: DataOpentelekomcloudVbsBackupPolicyV2Tags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudVbsBackupPolicyV2Tags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudVbsBackupPolicyV2Tags | undefined) {
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

export class DataOpentelekomcloudVbsBackupPolicyV2TagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference {
    return new DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudVbsBackupPolicyV2FilterTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2#key DataOpentelekomcloudVbsBackupPolicyV2#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2#values DataOpentelekomcloudVbsBackupPolicyV2#values}
  */
  readonly values: string[];
}

export function dataOpentelekomcloudVbsBackupPolicyV2FilterTagsToTerraform(struct?: DataOpentelekomcloudVbsBackupPolicyV2FilterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2 opentelekomcloud_vbs_backup_policy_v2}
*/
export class DataOpentelekomcloudVbsBackupPolicyV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_vbs_backup_policy_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2 opentelekomcloud_vbs_backup_policy_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudVbsBackupPolicyV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudVbsBackupPolicyV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vbs_backup_policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.29.3',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._name = config.name;
    this._policyResourceCount = config.policyResourceCount;
    this._region = config.region;
    this._status = config.status;
    this._filterTags = config.filterTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // policy_resource_count - computed: false, optional: true, required: false
  private _policyResourceCount?: number; 
  public get policyResourceCount() {
    return this.getNumberAttribute('policy_resource_count');
  }
  public set policyResourceCount(value: number) {
    this._policyResourceCount = value;
  }
  public resetPolicyResourceCount() {
    this._policyResourceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyResourceCountInput() {
    return this._policyResourceCount;
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

  // remain_first_backup - computed: true, optional: false, required: false
  public get remainFirstBackup() {
    return this.getStringAttribute('remain_first_backup');
  }

  // rentention_num - computed: true, optional: false, required: false
  public get rententionNum() {
    return this.getNumberAttribute('rentention_num');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: false, optional: true, required: false
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
  private _tags = new DataOpentelekomcloudVbsBackupPolicyV2TagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // filter_tags - computed: false, optional: true, required: false
  private _filterTags?: DataOpentelekomcloudVbsBackupPolicyV2FilterTags[] | cdktf.IResolvable; 
  public get filterTags() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('filter_tags')));
  }
  public set filterTags(value: DataOpentelekomcloudVbsBackupPolicyV2FilterTags[] | cdktf.IResolvable) {
    this._filterTags = value;
  }
  public resetFilterTags() {
    this._filterTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTagsInput() {
    return this._filterTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_resource_count: cdktf.numberToTerraform(this._policyResourceCount),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      filter_tags: cdktf.listMapper(dataOpentelekomcloudVbsBackupPolicyV2FilterTagsToTerraform)(this._filterTags),
    };
  }
}
