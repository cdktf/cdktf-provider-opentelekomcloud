// https://www.terraform.io/docs/providers/opentelekomcloud/r/logtank_group_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogtankGroupV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/logtank_group_v2#group_name LogtankGroupV2#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/logtank_group_v2#id LogtankGroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/logtank_group_v2#ttl_in_days LogtankGroupV2#ttl_in_days}
  */
  readonly ttlInDays?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/logtank_group_v2 opentelekomcloud_logtank_group_v2}
*/
export class LogtankGroupV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_logtank_group_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/logtank_group_v2 opentelekomcloud_logtank_group_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogtankGroupV2Config
  */
  public constructor(scope: Construct, id: string, config: LogtankGroupV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_logtank_group_v2',
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
    this._groupName = config.groupName;
    this._id = config.id;
    this._ttlInDays = config.ttlInDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ttl_in_days - computed: true, optional: true, required: false
  private _ttlInDays?: number; 
  public get ttlInDays() {
    return this.getNumberAttribute('ttl_in_days');
  }
  public set ttlInDays(value: number) {
    this._ttlInDays = value;
  }
  public resetTtlInDays() {
    this._ttlInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInDaysInput() {
    return this._ttlInDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      ttl_in_days: cdktf.numberToTerraform(this._ttlInDays),
    };
  }
}
