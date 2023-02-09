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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cts_tracker_v1#is_lts_enabled CtsTrackerV1#is_lts_enabled}
  */
  readonly isLtsEnabled?: boolean | cdktf.IResolvable;
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
        providerVersion: '1.33.0',
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
    this._isLtsEnabled = config.isLtsEnabled;
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

  // is_lts_enabled - computed: true, optional: true, required: false
  private _isLtsEnabled?: boolean | cdktf.IResolvable; 
  public get isLtsEnabled() {
    return this.getBooleanAttribute('is_lts_enabled');
  }
  public set isLtsEnabled(value: boolean | cdktf.IResolvable) {
    this._isLtsEnabled = value;
  }
  public resetIsLtsEnabled() {
    this._isLtsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLtsEnabledInput() {
    return this._isLtsEnabled;
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_topic_name - computed: true, optional: false, required: false
  public get logTopicName() {
    return this.getStringAttribute('log_topic_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
      is_lts_enabled: cdktf.booleanToTerraform(this._isLtsEnabled),
      timeouts: ctsTrackerV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
