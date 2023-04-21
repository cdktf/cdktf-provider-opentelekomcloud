// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CceNodeV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#annotations CceNodeV3#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#availability_zone CceNodeV3#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#bandwidth_charge_mode CceNodeV3#bandwidth_charge_mode}
  */
  readonly bandwidthChargeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#bandwidth_size CceNodeV3#bandwidth_size}
  */
  readonly bandwidthSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#billing_mode CceNodeV3#billing_mode}
  */
  readonly billingMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#cluster_id CceNodeV3#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#docker_base_size CceNodeV3#docker_base_size}
  */
  readonly dockerBaseSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#docker_lvm_config_override CceNodeV3#docker_lvm_config_override}
  */
  readonly dockerLvmConfigOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#ecs_performance_type CceNodeV3#ecs_performance_type}
  */
  readonly ecsPerformanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#eip_count CceNodeV3#eip_count}
  */
  readonly eipCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#eip_ids CceNodeV3#eip_ids}
  */
  readonly eipIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_param_charging_mode CceNodeV3#extend_param_charging_mode}
  */
  readonly extendParamChargingMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#flavor_id CceNodeV3#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#id CceNodeV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#iptype CceNodeV3#iptype}
  */
  readonly iptype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#k8s_tags CceNodeV3#k8s_tags}
  */
  readonly k8STags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#key_pair CceNodeV3#key_pair}
  */
  readonly keyPair: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#labels CceNodeV3#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#max_pods CceNodeV3#max_pods}
  */
  readonly maxPods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#name CceNodeV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#order_id CceNodeV3#order_id}
  */
  readonly orderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#os CceNodeV3#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#postinstall CceNodeV3#postinstall}
  */
  readonly postinstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#preinstall CceNodeV3#preinstall}
  */
  readonly preinstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#private_ip CceNodeV3#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#product_id CceNodeV3#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#public_key CceNodeV3#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#region CceNodeV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#runtime CceNodeV3#runtime}
  */
  readonly runtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#sharetype CceNodeV3#sharetype}
  */
  readonly sharetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#subnet_id CceNodeV3#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#tags CceNodeV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * data_volumes block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#data_volumes CceNodeV3#data_volumes}
  */
  readonly dataVolumes: CceNodeV3DataVolumes[] | cdktf.IResolvable;
  /**
  * root_volume block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#root_volume CceNodeV3#root_volume}
  */
  readonly rootVolume: CceNodeV3RootVolume;
  /**
  * taints block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#taints CceNodeV3#taints}
  */
  readonly taints?: CceNodeV3Taints[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#timeouts CceNodeV3#timeouts}
  */
  readonly timeouts?: CceNodeV3Timeouts;
}
export interface CceNodeV3DataVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}
  */
  readonly extendParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}
  */
  readonly extendParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}
  */
  readonly kmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#size CceNodeV3#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}
  */
  readonly volumetype: string;
}

export function cceNodeV3DataVolumesToTerraform(struct?: CceNodeV3DataVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extend_param: cdktf.stringToTerraform(struct!.extendParam),
    extend_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extendParams),
    kms_id: cdktf.stringToTerraform(struct!.kmsId),
    size: cdktf.numberToTerraform(struct!.size),
    volumetype: cdktf.stringToTerraform(struct!.volumetype),
  }
}

export class CceNodeV3DataVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CceNodeV3DataVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendParam = this._extendParam;
    }
    if (this._extendParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendParams = this._extendParams;
    }
    if (this._kmsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsId = this._kmsId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._volumetype !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumetype = this._volumetype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodeV3DataVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extendParam = undefined;
      this._extendParams = undefined;
      this._kmsId = undefined;
      this._size = undefined;
      this._volumetype = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extendParam = value.extendParam;
      this._extendParams = value.extendParams;
      this._kmsId = value.kmsId;
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

  // extend_params - computed: true, optional: true, required: false
  private _extendParams?: { [key: string]: string }; 
  public get extendParams() {
    return this.getStringMapAttribute('extend_params');
  }
  public set extendParams(value: { [key: string]: string }) {
    this._extendParams = value;
  }
  public resetExtendParams() {
    this._extendParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendParamsInput() {
    return this._extendParams;
  }

  // kms_id - computed: false, optional: true, required: false
  private _kmsId?: string; 
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }
  public set kmsId(value: string) {
    this._kmsId = value;
  }
  public resetKmsId() {
    this._kmsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsIdInput() {
    return this._kmsId;
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

export class CceNodeV3DataVolumesList extends cdktf.ComplexList {
  public internalValue? : CceNodeV3DataVolumes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CceNodeV3DataVolumesOutputReference {
    return new CceNodeV3DataVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceNodeV3RootVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}
  */
  readonly extendParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}
  */
  readonly extendParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}
  */
  readonly kmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#size CceNodeV3#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}
  */
  readonly volumetype: string;
}

export function cceNodeV3RootVolumeToTerraform(struct?: CceNodeV3RootVolumeOutputReference | CceNodeV3RootVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extend_param: cdktf.stringToTerraform(struct!.extendParam),
    extend_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extendParams),
    kms_id: cdktf.stringToTerraform(struct!.kmsId),
    size: cdktf.numberToTerraform(struct!.size),
    volumetype: cdktf.stringToTerraform(struct!.volumetype),
  }
}

export class CceNodeV3RootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CceNodeV3RootVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendParam = this._extendParam;
    }
    if (this._extendParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendParams = this._extendParams;
    }
    if (this._kmsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsId = this._kmsId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._volumetype !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumetype = this._volumetype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodeV3RootVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extendParam = undefined;
      this._extendParams = undefined;
      this._kmsId = undefined;
      this._size = undefined;
      this._volumetype = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extendParam = value.extendParam;
      this._extendParams = value.extendParams;
      this._kmsId = value.kmsId;
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

  // extend_params - computed: true, optional: true, required: false
  private _extendParams?: { [key: string]: string }; 
  public get extendParams() {
    return this.getStringMapAttribute('extend_params');
  }
  public set extendParams(value: { [key: string]: string }) {
    this._extendParams = value;
  }
  public resetExtendParams() {
    this._extendParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendParamsInput() {
    return this._extendParams;
  }

  // kms_id - computed: false, optional: true, required: false
  private _kmsId?: string; 
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }
  public set kmsId(value: string) {
    this._kmsId = value;
  }
  public resetKmsId() {
    this._kmsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsIdInput() {
    return this._kmsId;
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
export interface CceNodeV3Taints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#effect CceNodeV3#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#key CceNodeV3#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#value CceNodeV3#value}
  */
  readonly value: string;
}

export function cceNodeV3TaintsToTerraform(struct?: CceNodeV3Taints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class CceNodeV3TaintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CceNodeV3Taints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodeV3Taints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CceNodeV3TaintsList extends cdktf.ComplexList {
  public internalValue? : CceNodeV3Taints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CceNodeV3TaintsOutputReference {
    return new CceNodeV3TaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceNodeV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#create CceNodeV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#delete CceNodeV3#delete}
  */
  readonly delete?: string;
}

export function cceNodeV3TimeoutsToTerraform(struct?: CceNodeV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class CceNodeV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CceNodeV3Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodeV3Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3 opentelekomcloud_cce_node_v3}
*/
export class CceNodeV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cce_node_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3 opentelekomcloud_cce_node_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CceNodeV3Config
  */
  public constructor(scope: Construct, id: string, config: CceNodeV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cce_node_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.34.2',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._availabilityZone = config.availabilityZone;
    this._bandwidthChargeMode = config.bandwidthChargeMode;
    this._bandwidthSize = config.bandwidthSize;
    this._billingMode = config.billingMode;
    this._clusterId = config.clusterId;
    this._dockerBaseSize = config.dockerBaseSize;
    this._dockerLvmConfigOverride = config.dockerLvmConfigOverride;
    this._ecsPerformanceType = config.ecsPerformanceType;
    this._eipCount = config.eipCount;
    this._eipIds = config.eipIds;
    this._extendParamChargingMode = config.extendParamChargingMode;
    this._flavorId = config.flavorId;
    this._id = config.id;
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
    this._runtime = config.runtime;
    this._sharetype = config.sharetype;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._dataVolumes.internalValue = config.dataVolumes;
    this._rootVolume.internalValue = config.rootVolume;
    this._taints.internalValue = config.taints;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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
    return this._availabilityZone;
  }

  // bandwidth_charge_mode - computed: true, optional: true, required: false
  private _bandwidthChargeMode?: string; 
  public get bandwidthChargeMode() {
    return this.getStringAttribute('bandwidth_charge_mode');
  }
  public set bandwidthChargeMode(value: string) {
    this._bandwidthChargeMode = value;
  }
  public resetBandwidthChargeMode() {
    this._bandwidthChargeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthChargeModeInput() {
    return this._bandwidthChargeMode;
  }

  // bandwidth_size - computed: false, optional: true, required: false
  private _bandwidthSize?: number; 
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }
  public set bandwidthSize(value: number) {
    this._bandwidthSize = value;
  }
  public resetBandwidthSize() {
    this._bandwidthSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthSizeInput() {
    return this._bandwidthSize;
  }

  // billing_mode - computed: true, optional: true, required: false
  private _billingMode?: number; 
  public get billingMode() {
    return this.getNumberAttribute('billing_mode');
  }
  public set billingMode(value: number) {
    this._billingMode = value;
  }
  public resetBillingMode() {
    this._billingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingModeInput() {
    return this._billingMode;
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

  // ecs_performance_type - computed: false, optional: true, required: false
  private _ecsPerformanceType?: string; 
  public get ecsPerformanceType() {
    return this.getStringAttribute('ecs_performance_type');
  }
  public set ecsPerformanceType(value: string) {
    this._ecsPerformanceType = value;
  }
  public resetEcsPerformanceType() {
    this._ecsPerformanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsPerformanceTypeInput() {
    return this._ecsPerformanceType;
  }

  // eip_count - computed: true, optional: true, required: false
  private _eipCount?: number; 
  public get eipCount() {
    return this.getNumberAttribute('eip_count');
  }
  public set eipCount(value: number) {
    this._eipCount = value;
  }
  public resetEipCount() {
    this._eipCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipCountInput() {
    return this._eipCount;
  }

  // eip_ids - computed: false, optional: true, required: false
  private _eipIds?: string[]; 
  public get eipIds() {
    return cdktf.Fn.tolist(this.getListAttribute('eip_ids'));
  }
  public set eipIds(value: string[]) {
    this._eipIds = value;
  }
  public resetEipIds() {
    this._eipIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipIdsInput() {
    return this._eipIds;
  }

  // extend_param_charging_mode - computed: false, optional: true, required: false
  private _extendParamChargingMode?: number; 
  public get extendParamChargingMode() {
    return this.getNumberAttribute('extend_param_charging_mode');
  }
  public set extendParamChargingMode(value: number) {
    this._extendParamChargingMode = value;
  }
  public resetExtendParamChargingMode() {
    this._extendParamChargingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendParamChargingModeInput() {
    return this._extendParamChargingMode;
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
    return this._flavorId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // iptype - computed: true, optional: true, required: false
  private _iptype?: string; 
  public get iptype() {
    return this.getStringAttribute('iptype');
  }
  public set iptype(value: string) {
    this._iptype = value;
  }
  public resetIptype() {
    this._iptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptypeInput() {
    return this._iptype;
  }

  // k8s_tags - computed: true, optional: true, required: false
  private _k8STags?: { [key: string]: string }; 
  public get k8STags() {
    return this.getStringMapAttribute('k8s_tags');
  }
  public set k8STags(value: { [key: string]: string }) {
    this._k8STags = value;
  }
  public resetK8STags() {
    this._k8STags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8STagsInput() {
    return this._k8STags;
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
    return this._keyPair;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // order_id - computed: false, optional: true, required: false
  private _orderId?: string; 
  public get orderId() {
    return this.getStringAttribute('order_id');
  }
  public set orderId(value: string) {
    this._orderId = value;
  }
  public resetOrderId() {
    this._orderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIdInput() {
    return this._orderId;
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

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // product_id - computed: false, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }

  // sharetype - computed: true, optional: true, required: false
  private _sharetype?: string; 
  public get sharetype() {
    return this.getStringAttribute('sharetype');
  }
  public set sharetype(value: string) {
    this._sharetype = value;
  }
  public resetSharetype() {
    this._sharetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharetypeInput() {
    return this._sharetype;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: true, required: false
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // data_volumes - computed: false, optional: false, required: true
  private _dataVolumes = new CceNodeV3DataVolumesList(this, "data_volumes", false);
  public get dataVolumes() {
    return this._dataVolumes;
  }
  public putDataVolumes(value: CceNodeV3DataVolumes[] | cdktf.IResolvable) {
    this._dataVolumes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumesInput() {
    return this._dataVolumes.internalValue;
  }

  // root_volume - computed: false, optional: false, required: true
  private _rootVolume = new CceNodeV3RootVolumeOutputReference(this, "root_volume");
  public get rootVolume() {
    return this._rootVolume;
  }
  public putRootVolume(value: CceNodeV3RootVolume) {
    this._rootVolume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeInput() {
    return this._rootVolume.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new CceNodeV3TaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: CceNodeV3Taints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CceNodeV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CceNodeV3Timeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      bandwidth_charge_mode: cdktf.stringToTerraform(this._bandwidthChargeMode),
      bandwidth_size: cdktf.numberToTerraform(this._bandwidthSize),
      billing_mode: cdktf.numberToTerraform(this._billingMode),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      docker_base_size: cdktf.numberToTerraform(this._dockerBaseSize),
      docker_lvm_config_override: cdktf.stringToTerraform(this._dockerLvmConfigOverride),
      ecs_performance_type: cdktf.stringToTerraform(this._ecsPerformanceType),
      eip_count: cdktf.numberToTerraform(this._eipCount),
      eip_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eipIds),
      extend_param_charging_mode: cdktf.numberToTerraform(this._extendParamChargingMode),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      id: cdktf.stringToTerraform(this._id),
      iptype: cdktf.stringToTerraform(this._iptype),
      k8s_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._k8STags),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
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
      runtime: cdktf.stringToTerraform(this._runtime),
      sharetype: cdktf.stringToTerraform(this._sharetype),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      data_volumes: cdktf.listMapper(cceNodeV3DataVolumesToTerraform, true)(this._dataVolumes.internalValue),
      root_volume: cceNodeV3RootVolumeToTerraform(this._rootVolume.internalValue),
      taints: cdktf.listMapper(cceNodeV3TaintsToTerraform, true)(this._taints.internalValue),
      timeouts: cceNodeV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
