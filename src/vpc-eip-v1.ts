// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEipV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#region VpcEipV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#tags VpcEipV1#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#value_specs VpcEipV1#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * bandwidth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#bandwidth VpcEipV1#bandwidth}
  */
  readonly bandwidth: VpcEipV1Bandwidth;
  /**
  * publicip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#publicip VpcEipV1#publicip}
  */
  readonly publicip: VpcEipV1Publicip;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#timeouts VpcEipV1#timeouts}
  */
  readonly timeouts?: VpcEipV1Timeouts;
}
export interface VpcEipV1Bandwidth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#charge_mode VpcEipV1#charge_mode}
  */
  readonly chargeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#name VpcEipV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#share_type VpcEipV1#share_type}
  */
  readonly shareType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#size VpcEipV1#size}
  */
  readonly size: number;
}

function vpcEipV1BandwidthToTerraform(struct?: VpcEipV1BandwidthOutputReference | VpcEipV1Bandwidth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    charge_mode: cdktf.stringToTerraform(struct!.chargeMode),
    name: cdktf.stringToTerraform(struct!.name),
    share_type: cdktf.stringToTerraform(struct!.shareType),
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export class VpcEipV1BandwidthOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // charge_mode - computed: true, optional: true, required: false
  private _chargeMode?: string | undefined; 
  public get chargeMode() {
    return this.getStringAttribute('charge_mode');
  }
  public set chargeMode(value: string | undefined) {
    this._chargeMode = value;
  }
  public resetChargeMode() {
    this._chargeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeModeInput() {
    return this._chargeMode
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

  // share_type - computed: false, optional: false, required: true
  private _shareType?: string; 
  public get shareType() {
    return this.getStringAttribute('share_type');
  }
  public set shareType(value: string) {
    this._shareType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareTypeInput() {
    return this._shareType
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
  }
}
export interface VpcEipV1Publicip {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#ip_address VpcEipV1#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#port_id VpcEipV1#port_id}
  */
  readonly portId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#type VpcEipV1#type}
  */
  readonly type: string;
}

function vpcEipV1PublicipToTerraform(struct?: VpcEipV1PublicipOutputReference | VpcEipV1Publicip): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port_id: cdktf.stringToTerraform(struct!.portId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class VpcEipV1PublicipOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string | undefined; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
  }

  // port_id - computed: true, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface VpcEipV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#create VpcEipV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html#delete VpcEipV1#delete}
  */
  readonly delete?: string;
}

function vpcEipV1TimeoutsToTerraform(struct?: VpcEipV1TimeoutsOutputReference | VpcEipV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class VpcEipV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html opentelekomcloud_vpc_eip_v1}
*/
export class VpcEipV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpc_eip_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_eip_v1.html opentelekomcloud_vpc_eip_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEipV1Config
  */
  public constructor(scope: Construct, id: string, config: VpcEipV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_eip_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._region = config.region;
    this._tags = config.tags;
    this._valueSpecs = config.valueSpecs;
    this._bandwidth = config.bandwidth;
    this._publicip = config.publicip;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: VpcEipV1Bandwidth; 
  private __bandwidthOutput = new VpcEipV1BandwidthOutputReference(this as any, "bandwidth", true);
  public get bandwidth() {
    return this.__bandwidthOutput;
  }
  public putBandwidth(value: VpcEipV1Bandwidth) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth
  }

  // publicip - computed: false, optional: false, required: true
  private _publicip?: VpcEipV1Publicip; 
  private __publicipOutput = new VpcEipV1PublicipOutputReference(this as any, "publicip", true);
  public get publicip() {
    return this.__publicipOutput;
  }
  public putPublicip(value: VpcEipV1Publicip) {
    this._publicip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicipInput() {
    return this._publicip
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcEipV1Timeouts | undefined; 
  private __timeoutsOutput = new VpcEipV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VpcEipV1Timeouts | undefined) {
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
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      value_specs: cdktf.hashMapper(cdktf.anyToTerraform)(this._valueSpecs),
      bandwidth: vpcEipV1BandwidthToTerraform(this._bandwidth),
      publicip: vpcEipV1PublicipToTerraform(this._publicip),
      timeouts: vpcEipV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
