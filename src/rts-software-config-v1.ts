// https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RtsSoftwareConfigV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html#config RtsSoftwareConfigV1#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html#group RtsSoftwareConfigV1#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html#input_values RtsSoftwareConfigV1#input_values}
  */
  readonly inputValues?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html#name RtsSoftwareConfigV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html#options RtsSoftwareConfigV1#options}
  */
  readonly options?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html#output_values RtsSoftwareConfigV1#output_values}
  */
  readonly outputValues?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html#region RtsSoftwareConfigV1#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html#timeouts RtsSoftwareConfigV1#timeouts}
  */
  readonly timeouts?: RtsSoftwareConfigV1Timeouts;
}
export interface RtsSoftwareConfigV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html#create RtsSoftwareConfigV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html#delete RtsSoftwareConfigV1#delete}
  */
  readonly delete?: string;
}

function rtsSoftwareConfigV1TimeoutsToTerraform(struct?: RtsSoftwareConfigV1TimeoutsOutputReference | RtsSoftwareConfigV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class RtsSoftwareConfigV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html opentelekomcloud_rts_software_config_v1}
*/
export class RtsSoftwareConfigV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_rts_software_config_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_config_v1.html opentelekomcloud_rts_software_config_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RtsSoftwareConfigV1Config
  */
  public constructor(scope: Construct, id: string, config: RtsSoftwareConfigV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rts_software_config_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._config = config.config;
    this._group = config.group;
    this._inputValues = config.inputValues;
    this._name = config.name;
    this._options = config.options;
    this._outputValues = config.outputValues;
    this._region = config.region;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: string | undefined; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string | undefined) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }

  // group - computed: false, optional: true, required: false
  private _group?: string | undefined; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string | undefined) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_values - computed: false, optional: true, required: false
  private _inputValues?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get inputValues() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('input_values') as any;
  }
  public set inputValues(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._inputValues = value;
  }
  public resetInputValues() {
    this._inputValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputValuesInput() {
    return this._inputValues
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
    return this._name
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get options() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // output_values - computed: false, optional: true, required: false
  private _outputValues?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get outputValues() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('output_values') as any;
  }
  public set outputValues(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._outputValues = value;
  }
  public resetOutputValues() {
    this._outputValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputValuesInput() {
    return this._outputValues
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RtsSoftwareConfigV1Timeouts | undefined; 
  private __timeoutsOutput = new RtsSoftwareConfigV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: RtsSoftwareConfigV1Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      group: cdktf.stringToTerraform(this._group),
      input_values: cdktf.listMapper(cdktf.hashMapper(cdktf.anyToTerraform))(this._inputValues),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.hashMapper(cdktf.anyToTerraform)(this._options),
      output_values: cdktf.listMapper(cdktf.hashMapper(cdktf.anyToTerraform))(this._outputValues),
      region: cdktf.stringToTerraform(this._region),
      timeouts: rtsSoftwareConfigV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
