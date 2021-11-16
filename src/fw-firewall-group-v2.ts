// https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwFirewallGroupV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#admin_state_up FwFirewallGroupV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#description FwFirewallGroupV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#egress_policy_id FwFirewallGroupV2#egress_policy_id}
  */
  readonly egressPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#ingress_policy_id FwFirewallGroupV2#ingress_policy_id}
  */
  readonly ingressPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#name FwFirewallGroupV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#ports FwFirewallGroupV2#ports}
  */
  readonly ports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#region FwFirewallGroupV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#tenant_id FwFirewallGroupV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#value_specs FwFirewallGroupV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#timeouts FwFirewallGroupV2#timeouts}
  */
  readonly timeouts?: FwFirewallGroupV2Timeouts;
}
export interface FwFirewallGroupV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#create FwFirewallGroupV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#delete FwFirewallGroupV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html#update FwFirewallGroupV2#update}
  */
  readonly update?: string;
}

function fwFirewallGroupV2TimeoutsToTerraform(struct?: FwFirewallGroupV2TimeoutsOutputReference | FwFirewallGroupV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class FwFirewallGroupV2TimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html opentelekomcloud_fw_firewall_group_v2}
*/
export class FwFirewallGroupV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_fw_firewall_group_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/fw_firewall_group_v2.html opentelekomcloud_fw_firewall_group_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwFirewallGroupV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: FwFirewallGroupV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_fw_firewall_group_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminStateUp = config.adminStateUp;
    this._description = config.description;
    this._egressPolicyId = config.egressPolicyId;
    this._ingressPolicyId = config.ingressPolicyId;
    this._name = config.name;
    this._ports = config.ports;
    this._region = config.region;
    this._tenantId = config.tenantId;
    this._valueSpecs = config.valueSpecs;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable | undefined; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up') as any;
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable | undefined) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp
  }

  // description - computed: false, optional: true, required: false
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

  // egress_policy_id - computed: false, optional: true, required: false
  private _egressPolicyId?: string | undefined; 
  public get egressPolicyId() {
    return this.getStringAttribute('egress_policy_id');
  }
  public set egressPolicyId(value: string | undefined) {
    this._egressPolicyId = value;
  }
  public resetEgressPolicyId() {
    this._egressPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPolicyIdInput() {
    return this._egressPolicyId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_policy_id - computed: false, optional: true, required: false
  private _ingressPolicyId?: string | undefined; 
  public get ingressPolicyId() {
    return this.getStringAttribute('ingress_policy_id');
  }
  public set ingressPolicyId(value: string | undefined) {
    this._ingressPolicyId = value;
  }
  public resetIngressPolicyId() {
    this._ingressPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPolicyIdInput() {
    return this._ingressPolicyId
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: string[] | undefined; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[] | undefined) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports
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

  // value_specs - computed: false, optional: true, required: false
  private _valueSpecs?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get valueSpecs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('value_specs') as any;
  }
  public set valueSpecs(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._valueSpecs = value;
  }
  public resetValueSpecs() {
    this._valueSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSpecsInput() {
    return this._valueSpecs
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FwFirewallGroupV2Timeouts | undefined; 
  private __timeoutsOutput = new FwFirewallGroupV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: FwFirewallGroupV2Timeouts | undefined) {
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
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      description: cdktf.stringToTerraform(this._description),
      egress_policy_id: cdktf.stringToTerraform(this._egressPolicyId),
      ingress_policy_id: cdktf.stringToTerraform(this._ingressPolicyId),
      name: cdktf.stringToTerraform(this._name),
      ports: cdktf.listMapper(cdktf.stringToTerraform)(this._ports),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      value_specs: cdktf.hashMapper(cdktf.anyToTerraform)(this._valueSpecs),
      timeouts: fwFirewallGroupV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
