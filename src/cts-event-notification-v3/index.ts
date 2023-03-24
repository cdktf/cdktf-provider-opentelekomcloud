// https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CtsEventNotificationV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#id CtsEventNotificationV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#notification_name CtsEventNotificationV3#notification_name}
  */
  readonly notificationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#operation_type CtsEventNotificationV3#operation_type}
  */
  readonly operationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#status CtsEventNotificationV3#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#topic_id CtsEventNotificationV3#topic_id}
  */
  readonly topicId?: string;
  /**
  * notify_user_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#notify_user_list CtsEventNotificationV3#notify_user_list}
  */
  readonly notifyUserList?: CtsEventNotificationV3NotifyUserList[] | cdktf.IResolvable;
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#operations CtsEventNotificationV3#operations}
  */
  readonly operations?: CtsEventNotificationV3Operations[] | cdktf.IResolvable;
}
export interface CtsEventNotificationV3NotifyUserList {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#user_group CtsEventNotificationV3#user_group}
  */
  readonly userGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#user_list CtsEventNotificationV3#user_list}
  */
  readonly userList: string[];
}

export function ctsEventNotificationV3NotifyUserListToTerraform(struct?: CtsEventNotificationV3NotifyUserList | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_group: cdktf.stringToTerraform(struct!.userGroup),
    user_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userList),
  }
}

export class CtsEventNotificationV3NotifyUserListOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CtsEventNotificationV3NotifyUserList | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    if (this._userList !== undefined) {
      hasAnyValues = true;
      internalValueResult.userList = this._userList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CtsEventNotificationV3NotifyUserList | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userGroup = undefined;
      this._userList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userGroup = value.userGroup;
      this._userList = value.userList;
    }
  }

  // user_group - computed: false, optional: false, required: true
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }

  // user_list - computed: false, optional: false, required: true
  private _userList?: string[]; 
  public get userList() {
    return this.getListAttribute('user_list');
  }
  public set userList(value: string[]) {
    this._userList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userListInput() {
    return this._userList;
  }
}

export class CtsEventNotificationV3NotifyUserListList extends cdktf.ComplexList {
  public internalValue? : CtsEventNotificationV3NotifyUserList[] | cdktf.IResolvable

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
  public get(index: number): CtsEventNotificationV3NotifyUserListOutputReference {
    return new CtsEventNotificationV3NotifyUserListOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CtsEventNotificationV3Operations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#resource_type CtsEventNotificationV3#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#service_type CtsEventNotificationV3#service_type}
  */
  readonly serviceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3#trace_names CtsEventNotificationV3#trace_names}
  */
  readonly traceNames: string[];
}

export function ctsEventNotificationV3OperationsToTerraform(struct?: CtsEventNotificationV3Operations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    trace_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.traceNames),
  }
}

export class CtsEventNotificationV3OperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CtsEventNotificationV3Operations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._traceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceNames = this._traceNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CtsEventNotificationV3Operations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceType = undefined;
      this._serviceType = undefined;
      this._traceNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceType = value.resourceType;
      this._serviceType = value.serviceType;
      this._traceNames = value.traceNames;
    }
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // trace_names - computed: false, optional: false, required: true
  private _traceNames?: string[]; 
  public get traceNames() {
    return this.getListAttribute('trace_names');
  }
  public set traceNames(value: string[]) {
    this._traceNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get traceNamesInput() {
    return this._traceNames;
  }
}

export class CtsEventNotificationV3OperationsList extends cdktf.ComplexList {
  public internalValue? : CtsEventNotificationV3Operations[] | cdktf.IResolvable

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
  public get(index: number): CtsEventNotificationV3OperationsOutputReference {
    return new CtsEventNotificationV3OperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3 opentelekomcloud_cts_event_notification_v3}
*/
export class CtsEventNotificationV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cts_event_notification_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_event_notification_v3 opentelekomcloud_cts_event_notification_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CtsEventNotificationV3Config
  */
  public constructor(scope: Construct, id: string, config: CtsEventNotificationV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cts_event_notification_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.34.0',
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
    this._notificationName = config.notificationName;
    this._operationType = config.operationType;
    this._status = config.status;
    this._topicId = config.topicId;
    this._notifyUserList.internalValue = config.notifyUserList;
    this._operations.internalValue = config.operations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
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

  // notification_id - computed: true, optional: false, required: false
  public get notificationId() {
    return this.getStringAttribute('notification_id');
  }

  // notification_name - computed: false, optional: false, required: true
  private _notificationName?: string; 
  public get notificationName() {
    return this.getStringAttribute('notification_name');
  }
  public set notificationName(value: string) {
    this._notificationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationNameInput() {
    return this._notificationName;
  }

  // notification_type - computed: true, optional: false, required: false
  public get notificationType() {
    return this.getStringAttribute('notification_type');
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
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

  // topic_id - computed: true, optional: true, required: false
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

  // notify_user_list - computed: false, optional: true, required: false
  private _notifyUserList = new CtsEventNotificationV3NotifyUserListList(this, "notify_user_list", false);
  public get notifyUserList() {
    return this._notifyUserList;
  }
  public putNotifyUserList(value: CtsEventNotificationV3NotifyUserList[] | cdktf.IResolvable) {
    this._notifyUserList.internalValue = value;
  }
  public resetNotifyUserList() {
    this._notifyUserList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyUserListInput() {
    return this._notifyUserList.internalValue;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new CtsEventNotificationV3OperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: CtsEventNotificationV3Operations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      notification_name: cdktf.stringToTerraform(this._notificationName),
      operation_type: cdktf.stringToTerraform(this._operationType),
      status: cdktf.stringToTerraform(this._status),
      topic_id: cdktf.stringToTerraform(this._topicId),
      notify_user_list: cdktf.listMapper(ctsEventNotificationV3NotifyUserListToTerraform, true)(this._notifyUserList.internalValue),
      operations: cdktf.listMapper(ctsEventNotificationV3OperationsToTerraform, true)(this._operations.internalValue),
    };
  }
}
