// https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_queue_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsQueueV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_queue_v1#description DmsQueueV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_queue_v1#id DmsQueueV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_queue_v1#max_consume_count DmsQueueV1#max_consume_count}
  */
  readonly maxConsumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_queue_v1#name DmsQueueV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_queue_v1#queue_mode DmsQueueV1#queue_mode}
  */
  readonly queueMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_queue_v1#redrive_policy DmsQueueV1#redrive_policy}
  */
  readonly redrivePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_queue_v1#retention_hours DmsQueueV1#retention_hours}
  */
  readonly retentionHours?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_queue_v1 opentelekomcloud_dms_queue_v1}
*/
export class DmsQueueV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dms_queue_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_queue_v1 opentelekomcloud_dms_queue_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsQueueV1Config
  */
  public constructor(scope: Construct, id: string, config: DmsQueueV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dms_queue_v1',
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
    this._description = config.description;
    this._id = config.id;
    this._maxConsumeCount = config.maxConsumeCount;
    this._name = config.name;
    this._queueMode = config.queueMode;
    this._redrivePolicy = config.redrivePolicy;
    this._retentionHours = config.retentionHours;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
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

  // group_count - computed: true, optional: false, required: false
  public get groupCount() {
    return this.getNumberAttribute('group_count');
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

  // max_consume_count - computed: true, optional: true, required: false
  private _maxConsumeCount?: number; 
  public get maxConsumeCount() {
    return this.getNumberAttribute('max_consume_count');
  }
  public set maxConsumeCount(value: number) {
    this._maxConsumeCount = value;
  }
  public resetMaxConsumeCount() {
    this._maxConsumeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConsumeCountInput() {
    return this._maxConsumeCount;
  }

  // max_msg_size_byte - computed: true, optional: false, required: false
  public get maxMsgSizeByte() {
    return this.getNumberAttribute('max_msg_size_byte');
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

  // produced_messages - computed: true, optional: false, required: false
  public get producedMessages() {
    return this.getNumberAttribute('produced_messages');
  }

  // queue_mode - computed: true, optional: true, required: false
  private _queueMode?: string; 
  public get queueMode() {
    return this.getStringAttribute('queue_mode');
  }
  public set queueMode(value: string) {
    this._queueMode = value;
  }
  public resetQueueMode() {
    this._queueMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueModeInput() {
    return this._queueMode;
  }

  // redrive_policy - computed: true, optional: true, required: false
  private _redrivePolicy?: string; 
  public get redrivePolicy() {
    return this.getStringAttribute('redrive_policy');
  }
  public set redrivePolicy(value: string) {
    this._redrivePolicy = value;
  }
  public resetRedrivePolicy() {
    this._redrivePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redrivePolicyInput() {
    return this._redrivePolicy;
  }

  // reservation - computed: true, optional: false, required: false
  public get reservation() {
    return this.getNumberAttribute('reservation');
  }

  // retention_hours - computed: true, optional: true, required: false
  private _retentionHours?: number; 
  public get retentionHours() {
    return this.getNumberAttribute('retention_hours');
  }
  public set retentionHours(value: number) {
    this._retentionHours = value;
  }
  public resetRetentionHours() {
    this._retentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionHoursInput() {
    return this._retentionHours;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      max_consume_count: cdktf.numberToTerraform(this._maxConsumeCount),
      name: cdktf.stringToTerraform(this._name),
      queue_mode: cdktf.stringToTerraform(this._queueMode),
      redrive_policy: cdktf.stringToTerraform(this._redrivePolicy),
      retention_hours: cdktf.numberToTerraform(this._retentionHours),
    };
  }
}
