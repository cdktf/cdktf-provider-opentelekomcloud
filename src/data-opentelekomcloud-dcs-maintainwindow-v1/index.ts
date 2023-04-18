// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/data-sources/dcs_maintainwindow_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudDcsMaintainwindowV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/data-sources/dcs_maintainwindow_v1#begin DataOpentelekomcloudDcsMaintainwindowV1#begin}
  */
  readonly begin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/data-sources/dcs_maintainwindow_v1#default DataOpentelekomcloudDcsMaintainwindowV1#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/data-sources/dcs_maintainwindow_v1#end DataOpentelekomcloudDcsMaintainwindowV1#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/data-sources/dcs_maintainwindow_v1#id DataOpentelekomcloudDcsMaintainwindowV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/data-sources/dcs_maintainwindow_v1#seq DataOpentelekomcloudDcsMaintainwindowV1#seq}
  */
  readonly seq?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/data-sources/dcs_maintainwindow_v1 opentelekomcloud_dcs_maintainwindow_v1}
*/
export class DataOpentelekomcloudDcsMaintainwindowV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dcs_maintainwindow_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/data-sources/dcs_maintainwindow_v1 opentelekomcloud_dcs_maintainwindow_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudDcsMaintainwindowV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudDcsMaintainwindowV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dcs_maintainwindow_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.34.1',
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
    this._begin = config.begin;
    this._default = config.default;
    this._end = config.end;
    this._id = config.id;
    this._seq = config.seq;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // begin - computed: true, optional: true, required: false
  private _begin?: string; 
  public get begin() {
    return this.getStringAttribute('begin');
  }
  public set begin(value: string) {
    this._begin = value;
  }
  public resetBegin() {
    this._begin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin;
  }

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // end - computed: true, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
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

  // seq - computed: true, optional: true, required: false
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      begin: cdktf.stringToTerraform(this._begin),
      default: cdktf.booleanToTerraform(this._default),
      end: cdktf.stringToTerraform(this._end),
      id: cdktf.stringToTerraform(this._id),
      seq: cdktf.numberToTerraform(this._seq),
    };
  }
}
