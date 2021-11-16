// https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingSecgroupV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_v2.html#delete_default_rules NetworkingSecgroupV2#delete_default_rules}
  */
  readonly deleteDefaultRules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_v2.html#description NetworkingSecgroupV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_v2.html#name NetworkingSecgroupV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_v2.html#region NetworkingSecgroupV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_v2.html#tenant_id NetworkingSecgroupV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_v2.html#timeouts NetworkingSecgroupV2#timeouts}
  */
  readonly timeouts?: NetworkingSecgroupV2Timeouts;
}
export interface NetworkingSecgroupV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_v2.html#delete NetworkingSecgroupV2#delete}
  */
  readonly delete?: string;
}

function networkingSecgroupV2TimeoutsToTerraform(struct?: NetworkingSecgroupV2TimeoutsOutputReference | NetworkingSecgroupV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class NetworkingSecgroupV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_v2.html opentelekomcloud_networking_secgroup_v2}
*/
export class NetworkingSecgroupV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_networking_secgroup_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_v2.html opentelekomcloud_networking_secgroup_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingSecgroupV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingSecgroupV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_secgroup_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deleteDefaultRules = config.deleteDefaultRules;
    this._description = config.description;
    this._name = config.name;
    this._region = config.region;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_default_rules - computed: false, optional: true, required: false
  private _deleteDefaultRules?: boolean | cdktf.IResolvable | undefined; 
  public get deleteDefaultRules() {
    return this.getBooleanAttribute('delete_default_rules') as any;
  }
  public set deleteDefaultRules(value: boolean | cdktf.IResolvable | undefined) {
    this._deleteDefaultRules = value;
  }
  public resetDeleteDefaultRules() {
    this._deleteDefaultRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDefaultRulesInput() {
    return this._deleteDefaultRules
  }

  // description - computed: true, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string | undefined; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkingSecgroupV2Timeouts | undefined; 
  private __timeoutsOutput = new NetworkingSecgroupV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NetworkingSecgroupV2Timeouts | undefined) {
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
      delete_default_rules: cdktf.booleanToTerraform(this._deleteDefaultRules),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: networkingSecgroupV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
