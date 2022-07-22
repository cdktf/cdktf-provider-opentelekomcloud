// https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_group_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsGroupV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_group_v1#id DmsGroupV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_group_v1#name DmsGroupV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_group_v1#queue_id DmsGroupV1#queue_id}
  */
  readonly queueId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_group_v1 opentelekomcloud_dms_group_v1}
*/
export class DmsGroupV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dms_group_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_group_v1 opentelekomcloud_dms_group_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsGroupV1Config
  */
  public constructor(scope: Construct, id: string, config: DmsGroupV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dms_group_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.30.1',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._name = config.name;
    this._queueId = config.queueId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_deadletters - computed: true, optional: false, required: false
  public get availableDeadletters() {
    return this.getNumberAttribute('available_deadletters');
  }

  // available_messages - computed: true, optional: false, required: false
  public get availableMessages() {
    return this.getNumberAttribute('available_messages');
  }

  // consumed_messages - computed: true, optional: false, required: false
  public get consumedMessages() {
    return this.getNumberAttribute('consumed_messages');
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

  // produced_deadletters - computed: true, optional: false, required: false
  public get producedDeadletters() {
    return this.getNumberAttribute('produced_deadletters');
  }

  // produced_messages - computed: true, optional: false, required: false
  public get producedMessages() {
    return this.getNumberAttribute('produced_messages');
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      queue_id: cdktf.stringToTerraform(this._queueId),
    };
  }
}
