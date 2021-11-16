// https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatGatewayV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html#description NatGatewayV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html#internal_network_id NatGatewayV2#internal_network_id}
  */
  readonly internalNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html#name NatGatewayV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html#region NatGatewayV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html#router_id NatGatewayV2#router_id}
  */
  readonly routerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html#spec NatGatewayV2#spec}
  */
  readonly spec: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html#tenant_id NatGatewayV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html#timeouts NatGatewayV2#timeouts}
  */
  readonly timeouts?: NatGatewayV2Timeouts;
}
export interface NatGatewayV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html#create NatGatewayV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html#delete NatGatewayV2#delete}
  */
  readonly delete?: string;
}

function natGatewayV2TimeoutsToTerraform(struct?: NatGatewayV2TimeoutsOutputReference | NatGatewayV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class NatGatewayV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html opentelekomcloud_nat_gateway_v2}
*/
export class NatGatewayV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_nat_gateway_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_gateway_v2.html opentelekomcloud_nat_gateway_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatGatewayV2Config
  */
  public constructor(scope: Construct, id: string, config: NatGatewayV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_nat_gateway_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._internalNetworkId = config.internalNetworkId;
    this._name = config.name;
    this._region = config.region;
    this._routerId = config.routerId;
    this._spec = config.spec;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // internal_network_id - computed: false, optional: false, required: true
  private _internalNetworkId?: string; 
  public get internalNetworkId() {
    return this.getStringAttribute('internal_network_id');
  }
  public set internalNetworkId(value: string) {
    this._internalNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalNetworkIdInput() {
    return this._internalNetworkId
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

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
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
  private _timeouts?: NatGatewayV2Timeouts | undefined; 
  private __timeoutsOutput = new NatGatewayV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NatGatewayV2Timeouts | undefined) {
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
      internal_network_id: cdktf.stringToTerraform(this._internalNetworkId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      router_id: cdktf.stringToTerraform(this._routerId),
      spec: cdktf.stringToTerraform(this._spec),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: natGatewayV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
