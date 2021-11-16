// https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSecgroupV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#description ComputeSecgroupV2#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#name ComputeSecgroupV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#region ComputeSecgroupV2#region}
  */
  readonly region?: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#rule ComputeSecgroupV2#rule}
  */
  readonly rule?: ComputeSecgroupV2Rule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#timeouts ComputeSecgroupV2#timeouts}
  */
  readonly timeouts?: ComputeSecgroupV2Timeouts;
}
export interface ComputeSecgroupV2Rule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#cidr ComputeSecgroupV2#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#from_group_id ComputeSecgroupV2#from_group_id}
  */
  readonly fromGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#from_port ComputeSecgroupV2#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#ip_protocol ComputeSecgroupV2#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#self ComputeSecgroupV2#self}
  */
  readonly selfAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#to_port ComputeSecgroupV2#to_port}
  */
  readonly toPort: number;
}

function computeSecgroupV2RuleToTerraform(struct?: ComputeSecgroupV2Rule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    from_group_id: cdktf.stringToTerraform(struct!.fromGroupId),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    self: cdktf.booleanToTerraform(struct!.selfAttribute),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface ComputeSecgroupV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html#delete ComputeSecgroupV2#delete}
  */
  readonly delete?: string;
}

function computeSecgroupV2TimeoutsToTerraform(struct?: ComputeSecgroupV2TimeoutsOutputReference | ComputeSecgroupV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeSecgroupV2TimeoutsOutputReference extends cdktf.ComplexObject {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html opentelekomcloud_compute_secgroup_v2}
*/
export class ComputeSecgroupV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_compute_secgroup_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2.html opentelekomcloud_compute_secgroup_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSecgroupV2Config
  */
  public constructor(scope: Construct, id: string, config: ComputeSecgroupV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_compute_secgroup_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._region = config.region;
    this._rule = config.rule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rule - computed: false, optional: true, required: false
  private _rule?: ComputeSecgroupV2Rule[] | undefined; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: ComputeSecgroupV2Rule[] | undefined) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeSecgroupV2Timeouts | undefined; 
  private __timeoutsOutput = new ComputeSecgroupV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeSecgroupV2Timeouts | undefined) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      rule: cdktf.listMapper(computeSecgroupV2RuleToTerraform)(this._rule),
      timeouts: computeSecgroupV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
