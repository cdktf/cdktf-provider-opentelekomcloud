// https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CceNodePoolV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#availability_zone CceNodePoolV3#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#cluster_id CceNodePoolV3#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#docker_base_size CceNodePoolV3#docker_base_size}
  */
  readonly dockerBaseSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}
  */
  readonly dockerLvmConfigOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#flavor CceNodePoolV3#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#initial_node_count CceNodePoolV3#initial_node_count}
  */
  readonly initialNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#k8s_tags CceNodePoolV3#k8s_tags}
  */
  readonly k8STags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#key_pair CceNodePoolV3#key_pair}
  */
  readonly keyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#max_node_count CceNodePoolV3#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#max_pods CceNodePoolV3#max_pods}
  */
  readonly maxPods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#min_node_count CceNodePoolV3#min_node_count}
  */
  readonly minNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#name CceNodePoolV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#os CceNodePoolV3#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#password CceNodePoolV3#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#postinstall CceNodePoolV3#postinstall}
  */
  readonly postinstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#preinstall CceNodePoolV3#preinstall}
  */
  readonly preinstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#priority CceNodePoolV3#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}
  */
  readonly scaleDownCooldownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#scale_enable CceNodePoolV3#scale_enable}
  */
  readonly scaleEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#server_group_reference CceNodePoolV3#server_group_reference}
  */
  readonly serverGroupReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#subnet_id CceNodePoolV3#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#user_tags CceNodePoolV3#user_tags}
  */
  readonly userTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * data_volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#data_volumes CceNodePoolV3#data_volumes}
  */
  readonly dataVolumes: CceNodePoolV3DataVolumes[];
  /**
  * root_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#root_volume CceNodePoolV3#root_volume}
  */
  readonly rootVolume: CceNodePoolV3RootVolume;
  /**
  * taints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#taints CceNodePoolV3#taints}
  */
  readonly taints?: CceNodePoolV3Taints[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#timeouts CceNodePoolV3#timeouts}
  */
  readonly timeouts?: CceNodePoolV3Timeouts;
}
export interface CceNodePoolV3DataVolumes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#extend_param CceNodePoolV3#extend_param}
  */
  readonly extendParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#kms_id CceNodePoolV3#kms_id}
  */
  readonly kmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#size CceNodePoolV3#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#volumetype CceNodePoolV3#volumetype}
  */
  readonly volumetype: string;
}

export function cceNodePoolV3DataVolumesToTerraform(struct?: CceNodePoolV3DataVolumes): any {
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

export interface CceNodePoolV3RootVolume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#extend_param CceNodePoolV3#extend_param}
  */
  readonly extendParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#size CceNodePoolV3#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#volumetype CceNodePoolV3#volumetype}
  */
  readonly volumetype: string;
}

export function cceNodePoolV3RootVolumeToTerraform(struct?: CceNodePoolV3RootVolumeOutputReference | CceNodePoolV3RootVolume): any {
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

export class CceNodePoolV3RootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CceNodePoolV3RootVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendParam) {
      hasAnyValues = true;
      internalValueResult.extendParam = this._extendParam;
    }
    if (this._size) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._volumetype) {
      hasAnyValues = true;
      internalValueResult.volumetype = this._volumetype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodePoolV3RootVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extendParam = undefined;
      this._size = undefined;
      this._volumetype = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extendParam = value.extendParam;
      this._size = value.size;
      this._volumetype = value.volumetype;
    }
  }

  // extend_param - computed: false, optional: true, required: false
  private _extendParam?: string; 
  public get extendParam() {
    return this.getStringAttribute('extend_param');
  }
  public set extendParam(value: string) {
    this._extendParam = value;
  }
  public resetExtendParam() {
    this._extendParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendParamInput() {
    return this._extendParam;
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
    return this._size;
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
    return this._volumetype;
  }
}
export interface CceNodePoolV3Taints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#effect CceNodePoolV3#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#key CceNodePoolV3#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#value CceNodePoolV3#value}
  */
  readonly value: string;
}

export function cceNodePoolV3TaintsToTerraform(struct?: CceNodePoolV3Taints): any {
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

export interface CceNodePoolV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#create CceNodePoolV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#default CceNodePoolV3#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#delete CceNodePoolV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html#update CceNodePoolV3#update}
  */
  readonly update?: string;
}

export function cceNodePoolV3TimeoutsToTerraform(struct?: CceNodePoolV3TimeoutsOutputReference | CceNodePoolV3Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CceNodePoolV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CceNodePoolV3Timeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodePoolV3Timeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html opentelekomcloud_cce_node_pool_v3}
*/
export class CceNodePoolV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_cce_node_pool_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3.html opentelekomcloud_cce_node_pool_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CceNodePoolV3Config
  */
  public constructor(scope: Construct, id: string, config: CceNodePoolV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cce_node_pool_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._clusterId = config.clusterId;
    this._dockerBaseSize = config.dockerBaseSize;
    this._dockerLvmConfigOverride = config.dockerLvmConfigOverride;
    this._flavor = config.flavor;
    this._initialNodeCount = config.initialNodeCount;
    this._k8STags = config.k8STags;
    this._keyPair = config.keyPair;
    this._maxNodeCount = config.maxNodeCount;
    this._maxPods = config.maxPods;
    this._minNodeCount = config.minNodeCount;
    this._name = config.name;
    this._os = config.os;
    this._password = config.password;
    this._postinstall = config.postinstall;
    this._preinstall = config.preinstall;
    this._priority = config.priority;
    this._scaleDownCooldownTime = config.scaleDownCooldownTime;
    this._scaleEnable = config.scaleEnable;
    this._serverGroupReference = config.serverGroupReference;
    this._subnetId = config.subnetId;
    this._userTags = config.userTags;
    this._dataVolumes = config.dataVolumes;
    this._rootVolume.internalValue = config.rootVolume;
    this._taints = config.taints;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
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
    return this._clusterId;
  }

  // docker_base_size - computed: false, optional: true, required: false
  private _dockerBaseSize?: number; 
  public get dockerBaseSize() {
    return this.getNumberAttribute('docker_base_size');
  }
  public set dockerBaseSize(value: number) {
    this._dockerBaseSize = value;
  }
  public resetDockerBaseSize() {
    this._dockerBaseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerBaseSizeInput() {
    return this._dockerBaseSize;
  }

  // docker_lvm_config_override - computed: false, optional: true, required: false
  private _dockerLvmConfigOverride?: string; 
  public get dockerLvmConfigOverride() {
    return this.getStringAttribute('docker_lvm_config_override');
  }
  public set dockerLvmConfigOverride(value: string) {
    this._dockerLvmConfigOverride = value;
  }
  public resetDockerLvmConfigOverride() {
    this._dockerLvmConfigOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerLvmConfigOverrideInput() {
    return this._dockerLvmConfigOverride;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_node_count - computed: false, optional: false, required: true
  private _initialNodeCount?: number; 
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }
  public set initialNodeCount(value: number) {
    this._initialNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodeCountInput() {
    return this._initialNodeCount;
  }

  // k8s_tags - computed: true, optional: true, required: false
  private _k8STags?: { [key: string]: string } | cdktf.IResolvable; 
  public get k8STags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('k8s_tags') as any;
  }
  public set k8STags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._k8STags = value;
  }
  public resetK8STags() {
    this._k8STags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8STagsInput() {
    return this._k8STags;
  }

  // key_pair - computed: false, optional: true, required: false
  private _keyPair?: string; 
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string) {
    this._keyPair = value;
  }
  public resetKeyPair() {
    this._keyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairInput() {
    return this._keyPair;
  }

  // max_node_count - computed: false, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // max_pods - computed: false, optional: true, required: false
  private _maxPods?: number; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods;
  }

  // min_node_count - computed: false, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
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
    return this._name;
  }

  // os - computed: true, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // postinstall - computed: false, optional: true, required: false
  private _postinstall?: string; 
  public get postinstall() {
    return this.getStringAttribute('postinstall');
  }
  public set postinstall(value: string) {
    this._postinstall = value;
  }
  public resetPostinstall() {
    this._postinstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postinstallInput() {
    return this._postinstall;
  }

  // preinstall - computed: false, optional: true, required: false
  private _preinstall?: string; 
  public get preinstall() {
    return this.getStringAttribute('preinstall');
  }
  public set preinstall(value: string) {
    this._preinstall = value;
  }
  public resetPreinstall() {
    this._preinstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preinstallInput() {
    return this._preinstall;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // scale_down_cooldown_time - computed: false, optional: true, required: false
  private _scaleDownCooldownTime?: number; 
  public get scaleDownCooldownTime() {
    return this.getNumberAttribute('scale_down_cooldown_time');
  }
  public set scaleDownCooldownTime(value: number) {
    this._scaleDownCooldownTime = value;
  }
  public resetScaleDownCooldownTime() {
    this._scaleDownCooldownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownCooldownTimeInput() {
    return this._scaleDownCooldownTime;
  }

  // scale_enable - computed: false, optional: true, required: false
  private _scaleEnable?: boolean | cdktf.IResolvable; 
  public get scaleEnable() {
    return this.getBooleanAttribute('scale_enable') as any;
  }
  public set scaleEnable(value: boolean | cdktf.IResolvable) {
    this._scaleEnable = value;
  }
  public resetScaleEnable() {
    this._scaleEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleEnableInput() {
    return this._scaleEnable;
  }

  // server_group_reference - computed: false, optional: true, required: false
  private _serverGroupReference?: string; 
  public get serverGroupReference() {
    return this.getStringAttribute('server_group_reference');
  }
  public set serverGroupReference(value: string) {
    this._serverGroupReference = value;
  }
  public resetServerGroupReference() {
    this._serverGroupReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupReferenceInput() {
    return this._serverGroupReference;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // user_tags - computed: false, optional: true, required: false
  private _userTags?: { [key: string]: string } | cdktf.IResolvable; 
  public get userTags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('user_tags') as any;
  }
  public set userTags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._userTags = value;
  }
  public resetUserTags() {
    this._userTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagsInput() {
    return this._userTags;
  }

  // data_volumes - computed: false, optional: false, required: true
  private _dataVolumes?: CceNodePoolV3DataVolumes[]; 
  public get dataVolumes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('data_volumes') as any;
  }
  public set dataVolumes(value: CceNodePoolV3DataVolumes[]) {
    this._dataVolumes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumesInput() {
    return this._dataVolumes;
  }

  // root_volume - computed: false, optional: false, required: true
  private _rootVolume = new CceNodePoolV3RootVolumeOutputReference(this as any, "root_volume", true);
  public get rootVolume() {
    return this._rootVolume;
  }
  public putRootVolume(value: CceNodePoolV3RootVolume) {
    this._rootVolume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeInput() {
    return this._rootVolume.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints?: CceNodePoolV3Taints[]; 
  public get taints() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('taints') as any;
  }
  public set taints(value: CceNodePoolV3Taints[]) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CceNodePoolV3TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CceNodePoolV3Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      docker_base_size: cdktf.numberToTerraform(this._dockerBaseSize),
      docker_lvm_config_override: cdktf.stringToTerraform(this._dockerLvmConfigOverride),
      flavor: cdktf.stringToTerraform(this._flavor),
      initial_node_count: cdktf.numberToTerraform(this._initialNodeCount),
      k8s_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._k8STags),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      max_node_count: cdktf.numberToTerraform(this._maxNodeCount),
      max_pods: cdktf.numberToTerraform(this._maxPods),
      min_node_count: cdktf.numberToTerraform(this._minNodeCount),
      name: cdktf.stringToTerraform(this._name),
      os: cdktf.stringToTerraform(this._os),
      password: cdktf.stringToTerraform(this._password),
      postinstall: cdktf.stringToTerraform(this._postinstall),
      preinstall: cdktf.stringToTerraform(this._preinstall),
      priority: cdktf.numberToTerraform(this._priority),
      scale_down_cooldown_time: cdktf.numberToTerraform(this._scaleDownCooldownTime),
      scale_enable: cdktf.booleanToTerraform(this._scaleEnable),
      server_group_reference: cdktf.stringToTerraform(this._serverGroupReference),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      user_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._userTags),
      data_volumes: cdktf.listMapper(cceNodePoolV3DataVolumesToTerraform)(this._dataVolumes),
      root_volume: cceNodePoolV3RootVolumeToTerraform(this._rootVolume.internalValue),
      taints: cdktf.listMapper(cceNodePoolV3TaintsToTerraform)(this._taints),
      timeouts: cceNodePoolV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
