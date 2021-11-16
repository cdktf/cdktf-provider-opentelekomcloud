// https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CceNodeV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#annotations CceNodeV3#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#availability_zone CceNodeV3#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#bandwidth_charge_mode CceNodeV3#bandwidth_charge_mode}
  */
  readonly bandwidthChargeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#bandwidth_size CceNodeV3#bandwidth_size}
  */
  readonly bandwidthSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#billing_mode CceNodeV3#billing_mode}
  */
  readonly billingMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#cluster_id CceNodeV3#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#ecs_performance_type CceNodeV3#ecs_performance_type}
  */
  readonly ecsPerformanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#eip_count CceNodeV3#eip_count}
  */
  readonly eipCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#eip_ids CceNodeV3#eip_ids}
  */
  readonly eipIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#extend_param_charging_mode CceNodeV3#extend_param_charging_mode}
  */
  readonly extendParamChargingMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#flavor_id CceNodeV3#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#iptype CceNodeV3#iptype}
  */
  readonly iptype?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#k8s_tags CceNodeV3#k8s_tags}
  */
  readonly k8STags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#key_pair CceNodeV3#key_pair}
  */
  readonly keyPair: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#labels CceNodeV3#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#max_pods CceNodeV3#max_pods}
  */
  readonly maxPods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#name CceNodeV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#order_id CceNodeV3#order_id}
  */
  readonly orderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#os CceNodeV3#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#postinstall CceNodeV3#postinstall}
  */
  readonly postinstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#preinstall CceNodeV3#preinstall}
  */
  readonly preinstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#private_ip CceNodeV3#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#product_id CceNodeV3#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#public_key CceNodeV3#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#region CceNodeV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#sharetype CceNodeV3#sharetype}
  */
  readonly sharetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#subnet_id CceNodeV3#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#tags CceNodeV3#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * data_volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#data_volumes CceNodeV3#data_volumes}
  */
  readonly dataVolumes: CceNodeV3DataVolumes[];
  /**
  * root_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#root_volume CceNodeV3#root_volume}
  */
  readonly rootVolume: CceNodeV3RootVolume;
  /**
  * taints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#taints CceNodeV3#taints}
  */
  readonly taints?: CceNodeV3Taints[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#timeouts CceNodeV3#timeouts}
  */
  readonly timeouts?: CceNodeV3Timeouts;
}
export interface CceNodeV3DataVolumes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#extend_param CceNodeV3#extend_param}
  */
  readonly extendParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#kms_id CceNodeV3#kms_id}
  */
  readonly kmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#size CceNodeV3#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#volumetype CceNodeV3#volumetype}
  */
  readonly volumetype: string;
}

function cceNodeV3DataVolumesToTerraform(struct?: CceNodeV3DataVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extend_param: cdktf.stringToTerraform(struct!.extendParam),
    kms_id: cdktf.stringToTerraform(struct!.kmsId),
    size: cdktf.numberToTerraform(struct!.size),
    volumetype: cdktf.stringToTerraform(struct!.volumetype),
  }
}

export interface CceNodeV3RootVolume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#extend_param CceNodeV3#extend_param}
  */
  readonly extendParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#size CceNodeV3#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#volumetype CceNodeV3#volumetype}
  */
  readonly volumetype: string;
}

function cceNodeV3RootVolumeToTerraform(struct?: CceNodeV3RootVolumeOutputReference | CceNodeV3RootVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extend_param: cdktf.stringToTerraform(struct!.extendParam),
    size: cdktf.numberToTerraform(struct!.size),
    volumetype: cdktf.stringToTerraform(struct!.volumetype),
  }
}

export class CceNodeV3RootVolumeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // extend_param - computed: false, optional: true, required: false
  private _extendParam?: string | undefined; 
  public get extendParam() {
    return this.getStringAttribute('extend_param');
  }
  public set extendParam(value: string | undefined) {
    this._extendParam = value;
  }
  public resetExtendParam() {
    this._extendParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendParamInput() {
    return this._extendParam
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

  // volumetype - computed: false, optional: false, required: true
  private _volumetype?: string; 
  public get volumetype() {
    return this.getStringAttribute('volumetype');
  }
  public set volumetype(value: string) {
    this._volumetype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumetypeInput() {
    return this._volumetype
  }
}
export interface CceNodeV3Taints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#effect CceNodeV3#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#key CceNodeV3#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#value CceNodeV3#value}
  */
  readonly value: string;
}

function cceNodeV3TaintsToTerraform(struct?: CceNodeV3Taints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CceNodeV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#create CceNodeV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html#delete CceNodeV3#delete}
  */
  readonly delete?: string;
}

function cceNodeV3TimeoutsToTerraform(struct?: CceNodeV3TimeoutsOutputReference | CceNodeV3Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class CceNodeV3TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html opentelekomcloud_cce_node_v3}
*/
export class CceNodeV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_cce_node_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_v3.html opentelekomcloud_cce_node_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CceNodeV3Config
  */
  public constructor(scope: Construct, id: string, config: CceNodeV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cce_node_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._annotations = config.annotations;
    this._availabilityZone = config.availabilityZone;
    this._bandwidthChargeMode = config.bandwidthChargeMode;
    this._bandwidthSize = config.bandwidthSize;
    this._billingMode = config.billingMode;
    this._clusterId = config.clusterId;
    this._ecsPerformanceType = config.ecsPerformanceType;
    this._eipCount = config.eipCount;
    this._eipIds = config.eipIds;
    this._extendParamChargingMode = config.extendParamChargingMode;
    this._flavorId = config.flavorId;
    this._iptype = config.iptype;
    this._k8STags = config.k8STags;
    this._keyPair = config.keyPair;
    this._labels = config.labels;
    this._maxPods = config.maxPods;
    this._name = config.name;
    this._orderId = config.orderId;
    this._os = config.os;
    this._postinstall = config.postinstall;
    this._preinstall = config.preinstall;
    this._privateIp = config.privateIp;
    this._productId = config.productId;
    this._publicKey = config.publicKey;
    this._region = config.region;
    this._sharetype = config.sharetype;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._dataVolumes = config.dataVolumes;
    this._rootVolume = config.rootVolume;
    this._taints = config.taints;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // bandwidth_charge_mode - computed: true, optional: true, required: false
  private _bandwidthChargeMode?: string | undefined; 
  public get bandwidthChargeMode() {
    return this.getStringAttribute('bandwidth_charge_mode');
  }
  public set bandwidthChargeMode(value: string | undefined) {
    this._bandwidthChargeMode = value;
  }
  public resetBandwidthChargeMode() {
    this._bandwidthChargeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthChargeModeInput() {
    return this._bandwidthChargeMode
  }

  // bandwidth_size - computed: false, optional: true, required: false
  private _bandwidthSize?: number | undefined; 
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }
  public set bandwidthSize(value: number | undefined) {
    this._bandwidthSize = value;
  }
  public resetBandwidthSize() {
    this._bandwidthSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthSizeInput() {
    return this._bandwidthSize
  }

  // billing_mode - computed: true, optional: true, required: false
  private _billingMode?: number | undefined; 
  public get billingMode() {
    return this.getNumberAttribute('billing_mode');
  }
  public set billingMode(value: number | undefined) {
    this._billingMode = value;
  }
  public resetBillingMode() {
    this._billingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingModeInput() {
    return this._billingMode
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId
  }

  // ecs_performance_type - computed: false, optional: true, required: false
  private _ecsPerformanceType?: string | undefined; 
  public get ecsPerformanceType() {
    return this.getStringAttribute('ecs_performance_type');
  }
  public set ecsPerformanceType(value: string | undefined) {
    this._ecsPerformanceType = value;
  }
  public resetEcsPerformanceType() {
    this._ecsPerformanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsPerformanceTypeInput() {
    return this._ecsPerformanceType
  }

  // eip_count - computed: true, optional: true, required: false
  private _eipCount?: number | undefined; 
  public get eipCount() {
    return this.getNumberAttribute('eip_count');
  }
  public set eipCount(value: number | undefined) {
    this._eipCount = value;
  }
  public resetEipCount() {
    this._eipCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipCountInput() {
    return this._eipCount
  }

  // eip_ids - computed: false, optional: true, required: false
  private _eipIds?: string[] | undefined; 
  public get eipIds() {
    return this.getListAttribute('eip_ids');
  }
  public set eipIds(value: string[] | undefined) {
    this._eipIds = value;
  }
  public resetEipIds() {
    this._eipIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipIdsInput() {
    return this._eipIds
  }

  // extend_param_charging_mode - computed: false, optional: true, required: false
  private _extendParamChargingMode?: number | undefined; 
  public get extendParamChargingMode() {
    return this.getNumberAttribute('extend_param_charging_mode');
  }
  public set extendParamChargingMode(value: number | undefined) {
    this._extendParamChargingMode = value;
  }
  public resetExtendParamChargingMode() {
    this._extendParamChargingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendParamChargingModeInput() {
    return this._extendParamChargingMode
  }

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iptype - computed: true, optional: true, required: false
  private _iptype?: string | undefined; 
  public get iptype() {
    return this.getStringAttribute('iptype');
  }
  public set iptype(value: string | undefined) {
    this._iptype = value;
  }
  public resetIptype() {
    this._iptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptypeInput() {
    return this._iptype
  }

  // k8s_tags - computed: false, optional: true, required: false
  private _k8STags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get k8STags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('k8s_tags') as any;
  }
  public set k8STags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._k8STags = value;
  }
  public resetK8STags() {
    this._k8STags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8STagsInput() {
    return this._k8STags
  }

  // key_pair - computed: false, optional: false, required: true
  private _keyPair?: string; 
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string) {
    this._keyPair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairInput() {
    return this._keyPair
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // max_pods - computed: false, optional: true, required: false
  private _maxPods?: number | undefined; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number | undefined) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods
  }

  // name - computed: true, optional: true, required: false
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

  // order_id - computed: false, optional: true, required: false
  private _orderId?: string | undefined; 
  public get orderId() {
    return this.getStringAttribute('order_id');
  }
  public set orderId(value: string | undefined) {
    this._orderId = value;
  }
  public resetOrderId() {
    this._orderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIdInput() {
    return this._orderId
  }

  // os - computed: true, optional: true, required: false
  private _os?: string | undefined; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string | undefined) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os
  }

  // postinstall - computed: false, optional: true, required: false
  private _postinstall?: string | undefined; 
  public get postinstall() {
    return this.getStringAttribute('postinstall');
  }
  public set postinstall(value: string | undefined) {
    this._postinstall = value;
  }
  public resetPostinstall() {
    this._postinstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postinstallInput() {
    return this._postinstall
  }

  // preinstall - computed: false, optional: true, required: false
  private _preinstall?: string | undefined; 
  public get preinstall() {
    return this.getStringAttribute('preinstall');
  }
  public set preinstall(value: string | undefined) {
    this._preinstall = value;
  }
  public resetPreinstall() {
    this._preinstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preinstallInput() {
    return this._preinstall
  }

  // private_ip - computed: true, optional: true, required: false
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

  // product_id - computed: false, optional: true, required: false
  private _productId?: string | undefined; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string | undefined) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string | undefined; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string | undefined) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey
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

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }

  // sharetype - computed: true, optional: true, required: false
  private _sharetype?: string | undefined; 
  public get sharetype() {
    return this.getStringAttribute('sharetype');
  }
  public set sharetype(value: string | undefined) {
    this._sharetype = value;
  }
  public resetSharetype() {
    this._sharetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharetypeInput() {
    return this._sharetype
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string | undefined; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // data_volumes - computed: false, optional: false, required: true
  private _dataVolumes?: CceNodeV3DataVolumes[]; 
  public get dataVolumes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('data_volumes') as any;
  }
  public set dataVolumes(value: CceNodeV3DataVolumes[]) {
    this._dataVolumes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumesInput() {
    return this._dataVolumes
  }

  // root_volume - computed: false, optional: false, required: true
  private _rootVolume?: CceNodeV3RootVolume; 
  private __rootVolumeOutput = new CceNodeV3RootVolumeOutputReference(this as any, "root_volume", true);
  public get rootVolume() {
    return this.__rootVolumeOutput;
  }
  public putRootVolume(value: CceNodeV3RootVolume) {
    this._rootVolume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeInput() {
    return this._rootVolume
  }

  // taints - computed: false, optional: true, required: false
  private _taints?: CceNodeV3Taints[] | undefined; 
  public get taints() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('taints') as any;
  }
  public set taints(value: CceNodeV3Taints[] | undefined) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CceNodeV3Timeouts | undefined; 
  private __timeoutsOutput = new CceNodeV3TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CceNodeV3Timeouts | undefined) {
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
      annotations: cdktf.hashMapper(cdktf.anyToTerraform)(this._annotations),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      bandwidth_charge_mode: cdktf.stringToTerraform(this._bandwidthChargeMode),
      bandwidth_size: cdktf.numberToTerraform(this._bandwidthSize),
      billing_mode: cdktf.numberToTerraform(this._billingMode),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      ecs_performance_type: cdktf.stringToTerraform(this._ecsPerformanceType),
      eip_count: cdktf.numberToTerraform(this._eipCount),
      eip_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._eipIds),
      extend_param_charging_mode: cdktf.numberToTerraform(this._extendParamChargingMode),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      iptype: cdktf.stringToTerraform(this._iptype),
      k8s_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._k8STags),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      max_pods: cdktf.numberToTerraform(this._maxPods),
      name: cdktf.stringToTerraform(this._name),
      order_id: cdktf.stringToTerraform(this._orderId),
      os: cdktf.stringToTerraform(this._os),
      postinstall: cdktf.stringToTerraform(this._postinstall),
      preinstall: cdktf.stringToTerraform(this._preinstall),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      product_id: cdktf.stringToTerraform(this._productId),
      public_key: cdktf.stringToTerraform(this._publicKey),
      region: cdktf.stringToTerraform(this._region),
      sharetype: cdktf.stringToTerraform(this._sharetype),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      data_volumes: cdktf.listMapper(cceNodeV3DataVolumesToTerraform)(this._dataVolumes),
      root_volume: cceNodeV3RootVolumeToTerraform(this._rootVolume),
      taints: cdktf.listMapper(cceNodeV3TaintsToTerraform)(this._taints),
      timeouts: cceNodeV3TimeoutsToTerraform(this._timeouts),
    };
  }
}
