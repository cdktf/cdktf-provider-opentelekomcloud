// https://www.terraform.io/docs/providers/opentelekomcloud/d/cts_tracker_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCtsTrackerV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cts_tracker_v1#bucket_name DataOpentelekomcloudCtsTrackerV1#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cts_tracker_v1#file_prefix_name DataOpentelekomcloudCtsTrackerV1#file_prefix_name}
  */
  readonly filePrefixName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cts_tracker_v1#id DataOpentelekomcloudCtsTrackerV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cts_tracker_v1#project_name DataOpentelekomcloudCtsTrackerV1#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cts_tracker_v1#region DataOpentelekomcloudCtsTrackerV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cts_tracker_v1#status DataOpentelekomcloudCtsTrackerV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cts_tracker_v1#tracker_name DataOpentelekomcloudCtsTrackerV1#tracker_name}
  */
  readonly trackerName?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cts_tracker_v1 opentelekomcloud_cts_tracker_v1}
*/
export class DataOpentelekomcloudCtsTrackerV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cts_tracker_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cts_tracker_v1 opentelekomcloud_cts_tracker_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCtsTrackerV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCtsTrackerV1Config = {}) {
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
    this._projectName = config.projectName;
    this._region = config.region;
    this._status = config.status;
    this._trackerName = config.trackerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
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

  // is_send_all_key_operation - computed: true, optional: false, required: false
  public get isSendAllKeyOperation() {
    return this.getBooleanAttribute('is_send_all_key_operation');
  }

  // is_support_smn - computed: true, optional: false, required: false
  public get isSupportSmn() {
    return this.getBooleanAttribute('is_support_smn');
  }

  // need_notify_user_list - computed: true, optional: false, required: false
  public get needNotifyUserList() {
    return cdktf.Fn.tolist(this.getListAttribute('need_notify_user_list'));
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
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

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }

  // tracker_name - computed: true, optional: true, required: false
  private _trackerName?: string; 
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }
  public set trackerName(value: string) {
    this._trackerName = value;
  }
  public resetTrackerName() {
    this._trackerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerNameInput() {
    return this._trackerName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      file_prefix_name: cdktf.stringToTerraform(this._filePrefixName),
      id: cdktf.stringToTerraform(this._id),
      project_name: cdktf.stringToTerraform(this._projectName),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      tracker_name: cdktf.stringToTerraform(this._trackerName),
    };
  }
}
