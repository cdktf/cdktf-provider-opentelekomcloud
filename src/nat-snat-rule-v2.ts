// https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatSnatRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html#cidr NatSnatRuleV2#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html#floating_ip_id NatSnatRuleV2#floating_ip_id}
  */
  readonly floatingIpId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html#nat_gateway_id NatSnatRuleV2#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html#network_id NatSnatRuleV2#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html#region NatSnatRuleV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html#source_type NatSnatRuleV2#source_type}
  */
  readonly sourceType?: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html#timeouts NatSnatRuleV2#timeouts}
  */
  readonly timeouts?: NatSnatRuleV2Timeouts;
}
export interface NatSnatRuleV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html#create NatSnatRuleV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html#delete NatSnatRuleV2#delete}
  */
  readonly delete?: string;
}

function natSnatRuleV2TimeoutsToTerraform(struct?: NatSnatRuleV2TimeoutsOutputReference | NatSnatRuleV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class NatSnatRuleV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html opentelekomcloud_nat_snat_rule_v2}
*/
export class NatSnatRuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_nat_snat_rule_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/nat_snat_rule_v2.html opentelekomcloud_nat_snat_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatSnatRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: NatSnatRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_nat_snat_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cidr = config.cidr;
    this._floatingIpId = config.floatingIpId;
    this._natGatewayId = config.natGatewayId;
    this._networkId = config.networkId;
    this._region = config.region;
    this._sourceType = config.sourceType;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string | undefined; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string | undefined) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string | undefined; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string | undefined) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId
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

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: number | undefined; 
  public get sourceType() {
    return this.getNumberAttribute('source_type');
  }
  public set sourceType(value: number | undefined) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NatSnatRuleV2Timeouts | undefined; 
  private __timeoutsOutput = new NatSnatRuleV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NatSnatRuleV2Timeouts | undefined) {
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
      cidr: cdktf.stringToTerraform(this._cidr),
      floating_ip_id: cdktf.stringToTerraform(this._floatingIpId),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      network_id: cdktf.stringToTerraform(this._networkId),
      region: cdktf.stringToTerraform(this._region),
      source_type: cdktf.numberToTerraform(this._sourceType),
      timeouts: natSnatRuleV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
