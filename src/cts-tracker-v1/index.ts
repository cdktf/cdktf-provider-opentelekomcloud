// https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CtsTrackerV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#bucket_name CtsTrackerV1#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#file_prefix_name CtsTrackerV1#file_prefix_name}
  */
  readonly filePrefixName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#id CtsTrackerV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#is_send_all_key_operation CtsTrackerV1#is_send_all_key_operation}
  */
  readonly isSendAllKeyOperation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#is_support_smn CtsTrackerV1#is_support_smn}
  */
  readonly isSupportSmn: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#need_notify_user_list CtsTrackerV1#need_notify_user_list}
  */
  readonly needNotifyUserList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#operations CtsTrackerV1#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#project_name CtsTrackerV1#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#region CtsTrackerV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#status CtsTrackerV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#topic_id CtsTrackerV1#topic_id}
  */
  readonly topicId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#timeouts CtsTrackerV1#timeouts}
  */
  readonly timeouts?: CtsTrackerV1Timeouts;
}
export interface CtsTrackerV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#create CtsTrackerV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#delete CtsTrackerV1#delete}
  */
  readonly delete?: string;
}

export function ctsTrackerV1TimeoutsToTerraform(struct?: CtsTrackerV1TimeoutsOutputReference | CtsTrackerV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class CtsTrackerV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CtsTrackerV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CtsTrackerV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1 opentelekomcloud_cts_tracker_v1}
*/
export class CtsTrackerV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cts_tracker_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1 opentelekomcloud_cts_tracker_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CtsTrackerV1Config
  */
  public constructor(scope: Construct, id: string, config: CtsTrackerV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cts_tracker_v1',
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
    this._bucketName = config.bucketName;
    this._filePrefixName = config.filePrefixName;
    this._id = config.id;
    this._isSendAllKeyOperation = config.isSendAllKeyOperation;
    this._isSupportSmn = config.isSupportSmn;
    this._needNotifyUserList = config.needNotifyUserList;
    this._operations = config.operations;
    this._projectName = config.projectName;
    this._region = config.region;
    this._status = config.status;
    this._topicId = config.topicId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // file_prefix_name - computed: true, optional: true, required: false
  private _filePrefixName?: string; 
  public get filePrefixName() {
    return this.getStringAttribute('file_prefix_name');
  }
  public set filePrefixName(value: string) {
    this._filePrefixName = value;
  }
  public resetFilePrefixName() {
    this._filePrefixName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePrefixNameInput() {
    return this._filePrefixName;
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

  // is_send_all_key_operation - computed: false, optional: true, required: false
  private _isSendAllKeyOperation?: boolean | cdktf.IResolvable; 
  public get isSendAllKeyOperation() {
    return this.getBooleanAttribute('is_send_all_key_operation');
  }
  public set isSendAllKeyOperation(value: boolean | cdktf.IResolvable) {
    this._isSendAllKeyOperation = value;
  }
  public resetIsSendAllKeyOperation() {
    this._isSendAllKeyOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSendAllKeyOperationInput() {
    return this._isSendAllKeyOperation;
  }

  // is_support_smn - computed: false, optional: false, required: true
  private _isSupportSmn?: boolean | cdktf.IResolvable; 
  public get isSupportSmn() {
    return this.getBooleanAttribute('is_support_smn');
  }
  public set isSupportSmn(value: boolean | cdktf.IResolvable) {
    this._isSupportSmn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isSupportSmnInput() {
    return this._isSupportSmn;
  }

  // need_notify_user_list - computed: true, optional: true, required: false
  private _needNotifyUserList?: string[]; 
  public get needNotifyUserList() {
    return cdktf.Fn.tolist(this.getListAttribute('need_notify_user_list'));
  }
  public set needNotifyUserList(value: string[]) {
    this._needNotifyUserList = value;
  }
  public resetNeedNotifyUserList() {
    this._needNotifyUserList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needNotifyUserListInput() {
    return this._needNotifyUserList;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
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

  // topic_id - computed: false, optional: true, required: false
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  public resetTopicId() {
    this._topicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // tracker_name - computed: true, optional: false, required: false
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CtsTrackerV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CtsTrackerV1Timeouts) {
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
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      file_prefix_name: cdktf.stringToTerraform(this._filePrefixName),
      id: cdktf.stringToTerraform(this._id),
      is_send_all_key_operation: cdktf.booleanToTerraform(this._isSendAllKeyOperation),
      is_support_smn: cdktf.booleanToTerraform(this._isSupportSmn),
      need_notify_user_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._needNotifyUserList),
      operations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operations),
      project_name: cdktf.stringToTerraform(this._projectName),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      topic_id: cdktf.stringToTerraform(this._topicId),
      timeouts: ctsTrackerV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
