// https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingNetworkV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#admin_state_up NetworkingNetworkV2#admin_state_up}
  */
  readonly adminStateUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#name NetworkingNetworkV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#region NetworkingNetworkV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#shared NetworkingNetworkV2#shared}
  */
  readonly shared?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#tenant_id NetworkingNetworkV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#value_specs NetworkingNetworkV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * segments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#segments NetworkingNetworkV2#segments}
  */
  readonly segments?: NetworkingNetworkV2Segments[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#timeouts NetworkingNetworkV2#timeouts}
  */
  readonly timeouts?: NetworkingNetworkV2Timeouts;
}
export interface NetworkingNetworkV2Segments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#network_type NetworkingNetworkV2#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#physical_network NetworkingNetworkV2#physical_network}
  */
  readonly physicalNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#segmentation_id NetworkingNetworkV2#segmentation_id}
  */
  readonly segmentationId?: number;
}

function networkingNetworkV2SegmentsToTerraform(struct?: NetworkingNetworkV2Segments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_type: cdktf.stringToTerraform(struct!.networkType),
    physical_network: cdktf.stringToTerraform(struct!.physicalNetwork),
    segmentation_id: cdktf.numberToTerraform(struct!.segmentationId),
  }
}

export interface NetworkingNetworkV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#create NetworkingNetworkV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html#delete NetworkingNetworkV2#delete}
  */
  readonly delete?: string;
}

function networkingNetworkV2TimeoutsToTerraform(struct?: NetworkingNetworkV2TimeoutsOutputReference | NetworkingNetworkV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class NetworkingNetworkV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html opentelekomcloud_networking_network_v2}
*/
export class NetworkingNetworkV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_networking_network_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_network_v2.html opentelekomcloud_networking_network_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingNetworkV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkingNetworkV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_network_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminStateUp = config.adminStateUp;
    this._name = config.name;
    this._region = config.region;
    this._shared = config.shared;
    this._tenantId = config.tenantId;
    this._valueSpecs = config.valueSpecs;
    this._segments = config.segments;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: true, optional: true, required: false
  private _adminStateUp?: string | undefined; 
  public get adminStateUp() {
    return this.getStringAttribute('admin_state_up');
  }
  public set adminStateUp(value: string | undefined) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // shared - computed: true, optional: true, required: false
  private _shared?: string | undefined; 
  public get shared() {
    return this.getStringAttribute('shared');
  }
  public set shared(value: string | undefined) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared
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

  // segments - computed: false, optional: true, required: false
  private _segments?: NetworkingNetworkV2Segments[] | undefined; 
  public get segments() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('segments') as any;
  }
  public set segments(value: NetworkingNetworkV2Segments[] | undefined) {
    this._segments = value;
  }
  public resetSegments() {
    this._segments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkingNetworkV2Timeouts | undefined; 
  private __timeoutsOutput = new NetworkingNetworkV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NetworkingNetworkV2Timeouts | undefined) {
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
      admin_state_up: cdktf.stringToTerraform(this._adminStateUp),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      shared: cdktf.stringToTerraform(this._shared),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      value_specs: cdktf.hashMapper(cdktf.anyToTerraform)(this._valueSpecs),
      segments: cdktf.listMapper(networkingNetworkV2SegmentsToTerraform)(this._segments),
      timeouts: networkingNetworkV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
