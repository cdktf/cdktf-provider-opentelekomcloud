// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnaasSiteConnectionV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#admin_state_up VpnaasSiteConnectionV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#description VpnaasSiteConnectionV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}
  */
  readonly ikepolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#initiator VpnaasSiteConnectionV2#initiator}
  */
  readonly initiator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}
  */
  readonly ipsecpolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}
  */
  readonly localEpGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#local_id VpnaasSiteConnectionV2#local_id}
  */
  readonly localId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#mtu VpnaasSiteConnectionV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#name VpnaasSiteConnectionV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#peer_address VpnaasSiteConnectionV2#peer_address}
  */
  readonly peerAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}
  */
  readonly peerCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}
  */
  readonly peerEpGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#peer_id VpnaasSiteConnectionV2#peer_id}
  */
  readonly peerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#psk VpnaasSiteConnectionV2#psk}
  */
  readonly psk: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#region VpnaasSiteConnectionV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#tags VpnaasSiteConnectionV2#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#tenant_id VpnaasSiteConnectionV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#value_specs VpnaasSiteConnectionV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}
  */
  readonly vpnserviceId: string;
  /**
  * dpd block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#dpd VpnaasSiteConnectionV2#dpd}
  */
  readonly dpd?: VpnaasSiteConnectionV2Dpd[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#timeouts VpnaasSiteConnectionV2#timeouts}
  */
  readonly timeouts?: VpnaasSiteConnectionV2Timeouts;
}
export interface VpnaasSiteConnectionV2Dpd {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#action VpnaasSiteConnectionV2#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#interval VpnaasSiteConnectionV2#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#timeout VpnaasSiteConnectionV2#timeout}
  */
  readonly timeout?: number;
}

function vpnaasSiteConnectionV2DpdToTerraform(struct?: VpnaasSiteConnectionV2Dpd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    interval: cdktf.numberToTerraform(struct!.interval),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}

export interface VpnaasSiteConnectionV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#create VpnaasSiteConnectionV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#delete VpnaasSiteConnectionV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html#update VpnaasSiteConnectionV2#update}
  */
  readonly update?: string;
}

function vpnaasSiteConnectionV2TimeoutsToTerraform(struct?: VpnaasSiteConnectionV2TimeoutsOutputReference | VpnaasSiteConnectionV2Timeouts): any {
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

export class VpnaasSiteConnectionV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html opentelekomcloud_vpnaas_site_connection_v2}
*/
export class VpnaasSiteConnectionV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpnaas_site_connection_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2.html opentelekomcloud_vpnaas_site_connection_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnaasSiteConnectionV2Config
  */
  public constructor(scope: Construct, id: string, config: VpnaasSiteConnectionV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpnaas_site_connection_v2',
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
    this._ikepolicyId = config.ikepolicyId;
    this._initiator = config.initiator;
    this._ipsecpolicyId = config.ipsecpolicyId;
    this._localEpGroupId = config.localEpGroupId;
    this._localId = config.localId;
    this._mtu = config.mtu;
    this._name = config.name;
    this._peerAddress = config.peerAddress;
    this._peerCidrs = config.peerCidrs;
    this._peerEpGroupId = config.peerEpGroupId;
    this._peerId = config.peerId;
    this._psk = config.psk;
    this._region = config.region;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._valueSpecs = config.valueSpecs;
    this._vpnserviceId = config.vpnserviceId;
    this._dpd = config.dpd;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ikepolicy_id - computed: false, optional: false, required: true
  private _ikepolicyId?: string; 
  public get ikepolicyId() {
    return this.getStringAttribute('ikepolicy_id');
  }
  public set ikepolicyId(value: string) {
    this._ikepolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikepolicyIdInput() {
    return this._ikepolicyId
  }

  // initiator - computed: true, optional: true, required: false
  private _initiator?: string | undefined; 
  public get initiator() {
    return this.getStringAttribute('initiator');
  }
  public set initiator(value: string | undefined) {
    this._initiator = value;
  }
  public resetInitiator() {
    this._initiator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator
  }

  // ipsecpolicy_id - computed: false, optional: false, required: true
  private _ipsecpolicyId?: string; 
  public get ipsecpolicyId() {
    return this.getStringAttribute('ipsecpolicy_id');
  }
  public set ipsecpolicyId(value: string) {
    this._ipsecpolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecpolicyIdInput() {
    return this._ipsecpolicyId
  }

  // local_ep_group_id - computed: false, optional: true, required: false
  private _localEpGroupId?: string | undefined; 
  public get localEpGroupId() {
    return this.getStringAttribute('local_ep_group_id');
  }
  public set localEpGroupId(value: string | undefined) {
    this._localEpGroupId = value;
  }
  public resetLocalEpGroupId() {
    this._localEpGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localEpGroupIdInput() {
    return this._localEpGroupId
  }

  // local_id - computed: false, optional: true, required: false
  private _localId?: string | undefined; 
  public get localId() {
    return this.getStringAttribute('local_id');
  }
  public set localId(value: string | undefined) {
    this._localId = value;
  }
  public resetLocalId() {
    this._localId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdInput() {
    return this._localId
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number | undefined; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number | undefined) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu
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

  // peer_address - computed: false, optional: false, required: true
  private _peerAddress?: string; 
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }
  public set peerAddress(value: string) {
    this._peerAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress
  }

  // peer_cidrs - computed: false, optional: true, required: false
  private _peerCidrs?: string[] | undefined; 
  public get peerCidrs() {
    return this.getListAttribute('peer_cidrs');
  }
  public set peerCidrs(value: string[] | undefined) {
    this._peerCidrs = value;
  }
  public resetPeerCidrs() {
    this._peerCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCidrsInput() {
    return this._peerCidrs
  }

  // peer_ep_group_id - computed: false, optional: true, required: false
  private _peerEpGroupId?: string | undefined; 
  public get peerEpGroupId() {
    return this.getStringAttribute('peer_ep_group_id');
  }
  public set peerEpGroupId(value: string | undefined) {
    this._peerEpGroupId = value;
  }
  public resetPeerEpGroupId() {
    this._peerEpGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerEpGroupIdInput() {
    return this._peerEpGroupId
  }

  // peer_id - computed: false, optional: false, required: true
  private _peerId?: string; 
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }
  public set peerId(value: string) {
    this._peerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId
  }

  // psk - computed: false, optional: false, required: true
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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

  // vpnservice_id - computed: false, optional: false, required: true
  private _vpnserviceId?: string; 
  public get vpnserviceId() {
    return this.getStringAttribute('vpnservice_id');
  }
  public set vpnserviceId(value: string) {
    this._vpnserviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnserviceIdInput() {
    return this._vpnserviceId
  }

  // dpd - computed: false, optional: true, required: false
  private _dpd?: VpnaasSiteConnectionV2Dpd[] | undefined; 
  public get dpd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dpd') as any;
  }
  public set dpd(value: VpnaasSiteConnectionV2Dpd[] | undefined) {
    this._dpd = value;
  }
  public resetDpd() {
    this._dpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdInput() {
    return this._dpd
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpnaasSiteConnectionV2Timeouts | undefined; 
  private __timeoutsOutput = new VpnaasSiteConnectionV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VpnaasSiteConnectionV2Timeouts | undefined) {
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
      ikepolicy_id: cdktf.stringToTerraform(this._ikepolicyId),
      initiator: cdktf.stringToTerraform(this._initiator),
      ipsecpolicy_id: cdktf.stringToTerraform(this._ipsecpolicyId),
      local_ep_group_id: cdktf.stringToTerraform(this._localEpGroupId),
      local_id: cdktf.stringToTerraform(this._localId),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      peer_address: cdktf.stringToTerraform(this._peerAddress),
      peer_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(this._peerCidrs),
      peer_ep_group_id: cdktf.stringToTerraform(this._peerEpGroupId),
      peer_id: cdktf.stringToTerraform(this._peerId),
      psk: cdktf.stringToTerraform(this._psk),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      value_specs: cdktf.hashMapper(cdktf.anyToTerraform)(this._valueSpecs),
      vpnservice_id: cdktf.stringToTerraform(this._vpnserviceId),
      dpd: cdktf.listMapper(vpnaasSiteConnectionV2DpdToTerraform)(this._dpd),
      timeouts: vpnaasSiteConnectionV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
