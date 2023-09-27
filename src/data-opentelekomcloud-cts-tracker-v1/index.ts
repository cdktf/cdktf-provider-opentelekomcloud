// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cts_tracker_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCtsTrackerV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cts_tracker_v1#id DataOpentelekomcloudCtsTrackerV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cts_tracker_v1#tracker_name DataOpentelekomcloudCtsTrackerV1#tracker_name}
  */
  readonly trackerName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cts_tracker_v1 opentelekomcloud_cts_tracker_v1}
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
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cts_tracker_v1 opentelekomcloud_cts_tracker_v1} Data Source
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
        providerVersion: '1.35.8',
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
    this._trackerName = config.trackerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // file_prefix_name - computed: true, optional: false, required: false
  public get filePrefixName() {
    return this.getStringAttribute('file_prefix_name');
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

  // is_lts_enabled - computed: true, optional: false, required: false
  public get isLtsEnabled() {
    return this.getBooleanAttribute('is_lts_enabled');
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
      id: cdktf.stringToTerraform(this._id),
      tracker_name: cdktf.stringToTerraform(this._trackerName),
    };
  }
}
