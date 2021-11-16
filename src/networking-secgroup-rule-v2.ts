// https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingSecgroupRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#description NetworkingSecgroupRuleV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#direction NetworkingSecgroupRuleV2#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#ethertype NetworkingSecgroupRuleV2#ethertype}
  */
  readonly ethertype: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#port_range_max NetworkingSecgroupRuleV2#port_range_max}
  */
  readonly portRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#port_range_min NetworkingSecgroupRuleV2#port_range_min}
  */
  readonly portRangeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#protocol NetworkingSecgroupRuleV2#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#region NetworkingSecgroupRuleV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#remote_group_id NetworkingSecgroupRuleV2#remote_group_id}
  */
  readonly remoteGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#remote_ip_prefix NetworkingSecgroupRuleV2#remote_ip_prefix}
  */
  readonly remoteIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#security_group_id NetworkingSecgroupRuleV2#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#tenant_id NetworkingSecgroupRuleV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#timeouts NetworkingSecgroupRuleV2#timeouts}
  */
  readonly timeouts?: NetworkingSecgroupRuleV2Timeouts;
}
export interface NetworkingSecgroupRuleV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html#delete NetworkingSecgroupRuleV2#delete}
  */
  readonly delete?: string;
}

function networkingSecgroupRuleV2TimeoutsToTerraform(struct?: NetworkingSecgroupRuleV2TimeoutsOutputReference | NetworkingSecgroupRuleV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class NetworkingSecgroupRuleV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html opentelekomcloud_networking_secgroup_rule_v2}
*/
export class NetworkingSecgroupRuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_networking_secgroup_rule_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2.html opentelekomcloud_networking_secgroup_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingSecgroupRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingSecgroupRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_secgroup_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._direction = config.direction;
    this._ethertype = config.ethertype;
    this._portRangeMax = config.portRangeMax;
    this._portRangeMin = config.portRangeMin;
    this._protocol = config.protocol;
    this._region = config.region;
    this._remoteGroupId = config.remoteGroupId;
    this._remoteIpPrefix = config.remoteIpPrefix;
    this._securityGroupId = config.securityGroupId;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction
  }

  // ethertype - computed: false, optional: false, required: true
  private _ethertype?: string; 
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }
  public set ethertype(value: string) {
    this._ethertype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port_range_max - computed: true, optional: true, required: false
  private _portRangeMax?: number | undefined; 
  public get portRangeMax() {
    return this.getNumberAttribute('port_range_max');
  }
  public set portRangeMax(value: number | undefined) {
    this._portRangeMax = value;
  }
  public resetPortRangeMax() {
    this._portRangeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeMaxInput() {
    return this._portRangeMax
  }

  // port_range_min - computed: true, optional: true, required: false
  private _portRangeMin?: number | undefined; 
  public get portRangeMin() {
    return this.getNumberAttribute('port_range_min');
  }
  public set portRangeMin(value: number | undefined) {
    this._portRangeMin = value;
  }
  public resetPortRangeMin() {
    this._portRangeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeMinInput() {
    return this._portRangeMin
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string | undefined; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
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

  // remote_group_id - computed: true, optional: true, required: false
  private _remoteGroupId?: string | undefined; 
  public get remoteGroupId() {
    return this.getStringAttribute('remote_group_id');
  }
  public set remoteGroupId(value: string | undefined) {
    this._remoteGroupId = value;
  }
  public resetRemoteGroupId() {
    this._remoteGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGroupIdInput() {
    return this._remoteGroupId
  }

  // remote_ip_prefix - computed: true, optional: true, required: false
  private _remoteIpPrefix?: string | undefined; 
  public get remoteIpPrefix() {
    return this.getStringAttribute('remote_ip_prefix');
  }
  public set remoteIpPrefix(value: string | undefined) {
    this._remoteIpPrefix = value;
  }
  public resetRemoteIpPrefix() {
    this._remoteIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpPrefixInput() {
    return this._remoteIpPrefix
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId
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
  private _timeouts?: NetworkingSecgroupRuleV2Timeouts | undefined; 
  private __timeoutsOutput = new NetworkingSecgroupRuleV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NetworkingSecgroupRuleV2Timeouts | undefined) {
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
      direction: cdktf.stringToTerraform(this._direction),
      ethertype: cdktf.stringToTerraform(this._ethertype),
      port_range_max: cdktf.numberToTerraform(this._portRangeMax),
      port_range_min: cdktf.numberToTerraform(this._portRangeMin),
      protocol: cdktf.stringToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      remote_group_id: cdktf.stringToTerraform(this._remoteGroupId),
      remote_ip_prefix: cdktf.stringToTerraform(this._remoteIpPrefix),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: networkingSecgroupRuleV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
