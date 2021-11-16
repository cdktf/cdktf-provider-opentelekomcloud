// https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatDnatRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html#external_service_port NatDnatRuleV2#external_service_port}
  */
  readonly externalServicePort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html#floating_ip_id NatDnatRuleV2#floating_ip_id}
  */
  readonly floatingIpId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html#internal_service_port NatDnatRuleV2#internal_service_port}
  */
  readonly internalServicePort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html#nat_gateway_id NatDnatRuleV2#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html#port_id NatDnatRuleV2#port_id}
  */
  readonly portId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html#private_ip NatDnatRuleV2#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html#protocol NatDnatRuleV2#protocol}
  */
  readonly protocol: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html#timeouts NatDnatRuleV2#timeouts}
  */
  readonly timeouts?: NatDnatRuleV2Timeouts;
}
export interface NatDnatRuleV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html#create NatDnatRuleV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html#delete NatDnatRuleV2#delete}
  */
  readonly delete?: string;
}

function natDnatRuleV2TimeoutsToTerraform(struct?: NatDnatRuleV2TimeoutsOutputReference | NatDnatRuleV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class NatDnatRuleV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html opentelekomcloud_nat_dnat_rule_v2}
*/
export class NatDnatRuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_nat_dnat_rule_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_dnat_rule_v2.html opentelekomcloud_nat_dnat_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatDnatRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: NatDnatRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_nat_dnat_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._externalServicePort = config.externalServicePort;
    this._floatingIpId = config.floatingIpId;
    this._internalServicePort = config.internalServicePort;
    this._natGatewayId = config.natGatewayId;
    this._portId = config.portId;
    this._privateIp = config.privateIp;
    this._protocol = config.protocol;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // external_service_port - computed: false, optional: false, required: true
  private _externalServicePort?: number; 
  public get externalServicePort() {
    return this.getNumberAttribute('external_service_port');
  }
  public set externalServicePort(value: number) {
    this._externalServicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServicePortInput() {
    return this._externalServicePort
  }

  // floating_ip_address - computed: true, optional: false, required: false
  public get floatingIpAddress() {
    return this.getStringAttribute('floating_ip_address');
  }

  // floating_ip_id - computed: false, optional: false, required: true
  private _floatingIpId?: string; 
  public get floatingIpId() {
    return this.getStringAttribute('floating_ip_id');
  }
  public set floatingIpId(value: string) {
    this._floatingIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpIdInput() {
    return this._floatingIpId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_service_port - computed: false, optional: false, required: true
  private _internalServicePort?: number; 
  public get internalServicePort() {
    return this.getNumberAttribute('internal_service_port');
  }
  public set internalServicePort(value: number) {
    this._internalServicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalServicePortInput() {
    return this._internalServicePort
  }

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId
  }

  // port_id - computed: false, optional: true, required: false
  private _portId?: string | undefined; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string | undefined) {
    this._portId = value;
  }
  public resetPortId() {
    this._portId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string | undefined; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string | undefined) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NatDnatRuleV2Timeouts | undefined; 
  private __timeoutsOutput = new NatDnatRuleV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NatDnatRuleV2Timeouts | undefined) {
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
      external_service_port: cdktf.numberToTerraform(this._externalServicePort),
      floating_ip_id: cdktf.stringToTerraform(this._floatingIpId),
      internal_service_port: cdktf.numberToTerraform(this._internalServicePort),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      port_id: cdktf.stringToTerraform(this._portId),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      protocol: cdktf.stringToTerraform(this._protocol),
      timeouts: natDnatRuleV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
