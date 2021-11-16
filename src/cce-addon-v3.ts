// https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_addon_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CceAddonV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_addon_v3.html#cluster_id CceAddonV3#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_addon_v3.html#template_name CceAddonV3#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_addon_v3.html#template_version CceAddonV3#template_version}
  */
  readonly templateVersion: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_addon_v3.html#timeouts CceAddonV3#timeouts}
  */
  readonly timeouts?: CceAddonV3Timeouts;
  /**
  * values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_addon_v3.html#values CceAddonV3#values}
  */
  readonly values: CceAddonV3Values;
}
export interface CceAddonV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_addon_v3.html#delete CceAddonV3#delete}
  */
  readonly delete?: string;
}

function cceAddonV3TimeoutsToTerraform(struct?: CceAddonV3TimeoutsOutputReference | CceAddonV3Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class CceAddonV3TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
export interface CceAddonV3Values {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_addon_v3.html#basic CceAddonV3#basic}
  */
  readonly basic: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_addon_v3.html#custom CceAddonV3#custom}
  */
  readonly custom: { [key: string]: string } | cdktf.IResolvable;
}

function cceAddonV3ValuesToTerraform(struct?: CceAddonV3ValuesOutputReference | CceAddonV3Values): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.basic),
    custom: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.custom),
  }
}

export class CceAddonV3ValuesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // basic - computed: false, optional: false, required: true
  private _basic?: { [key: string]: string } | cdktf.IResolvable; 
  public get basic() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('basic') as any;
  }
  public set basic(value: { [key: string]: string } | cdktf.IResolvable) {
    this._basic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic
  }

  // custom - computed: false, optional: false, required: true
  private _custom?: { [key: string]: string } | cdktf.IResolvable; 
  public get custom() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom') as any;
  }
  public set custom(value: { [key: string]: string } | cdktf.IResolvable) {
    this._custom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_addon_v3.html opentelekomcloud_cce_addon_v3}
*/
export class CceAddonV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_cce_addon_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_addon_v3.html opentelekomcloud_cce_addon_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CceAddonV3Config
  */
  public constructor(scope: Construct, id: string, config: CceAddonV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cce_addon_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._templateName = config.templateName;
    this._templateVersion = config.templateVersion;
    this._timeouts = config.timeouts;
    this._values = config.values;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName
  }

  // template_version - computed: false, optional: false, required: true
  private _templateVersion?: string; 
  public get templateVersion() {
    return this.getStringAttribute('template_version');
  }
  public set templateVersion(value: string) {
    this._templateVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVersionInput() {
    return this._templateVersion
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CceAddonV3Timeouts | undefined; 
  private __timeoutsOutput = new CceAddonV3TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CceAddonV3Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // values - computed: false, optional: false, required: true
  private _values?: CceAddonV3Values; 
  private __valuesOutput = new CceAddonV3ValuesOutputReference(this as any, "values", true);
  public get values() {
    return this.__valuesOutput;
  }
  public putValues(value: CceAddonV3Values) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      template_name: cdktf.stringToTerraform(this._templateName),
      template_version: cdktf.stringToTerraform(this._templateVersion),
      timeouts: cceAddonV3TimeoutsToTerraform(this._timeouts),
      values: cceAddonV3ValuesToTerraform(this._values),
    };
  }
}
