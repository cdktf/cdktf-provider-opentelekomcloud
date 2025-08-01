/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dms_flavor_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudDmsFlavorV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dms_flavor_v2#arch_type DataOpentelekomcloudDmsFlavorV2#arch_type}
  */
  readonly archType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dms_flavor_v2#availability_zones DataOpentelekomcloudDmsFlavorV2#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dms_flavor_v2#charging_mode DataOpentelekomcloudDmsFlavorV2#charging_mode}
  */
  readonly chargingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dms_flavor_v2#flavor_id DataOpentelekomcloudDmsFlavorV2#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dms_flavor_v2#id DataOpentelekomcloudDmsFlavorV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dms_flavor_v2#storage_spec_code DataOpentelekomcloudDmsFlavorV2#storage_spec_code}
  */
  readonly storageSpecCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dms_flavor_v2#type DataOpentelekomcloudDmsFlavorV2#type}
  */
  readonly type?: string;
}
export interface DataOpentelekomcloudDmsFlavorV2FlavorsIos {
}

export function dataOpentelekomcloudDmsFlavorV2FlavorsIosToTerraform(struct?: DataOpentelekomcloudDmsFlavorV2FlavorsIos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudDmsFlavorV2FlavorsIosToHclTerraform(struct?: DataOpentelekomcloudDmsFlavorV2FlavorsIos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpentelekomcloudDmsFlavorV2FlavorsIos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudDmsFlavorV2FlavorsIos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // storage_spec_code - computed: true, optional: false, required: false
  public get storageSpecCode() {
    return this.getStringAttribute('storage_spec_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unavailability_zones - computed: true, optional: false, required: false
  public get unavailabilityZones() {
    return this.getListAttribute('unavailability_zones');
  }
}

export class DataOpentelekomcloudDmsFlavorV2FlavorsIosList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference {
    return new DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudDmsFlavorV2FlavorsProperties {
}

export function dataOpentelekomcloudDmsFlavorV2FlavorsPropertiesToTerraform(struct?: DataOpentelekomcloudDmsFlavorV2FlavorsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudDmsFlavorV2FlavorsPropertiesToHclTerraform(struct?: DataOpentelekomcloudDmsFlavorV2FlavorsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpentelekomcloudDmsFlavorV2FlavorsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudDmsFlavorV2FlavorsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flavor_alias - computed: true, optional: false, required: false
  public get flavorAlias() {
    return this.getStringAttribute('flavor_alias');
  }

  // max_bandwidth_per_broker - computed: true, optional: false, required: false
  public get maxBandwidthPerBroker() {
    return this.getNumberAttribute('max_bandwidth_per_broker');
  }

  // max_broker - computed: true, optional: false, required: false
  public get maxBroker() {
    return this.getNumberAttribute('max_broker');
  }

  // max_consumer_per_broker - computed: true, optional: false, required: false
  public get maxConsumerPerBroker() {
    return this.getNumberAttribute('max_consumer_per_broker');
  }

  // max_partition_per_broker - computed: true, optional: false, required: false
  public get maxPartitionPerBroker() {
    return this.getNumberAttribute('max_partition_per_broker');
  }

  // max_storage_per_node - computed: true, optional: false, required: false
  public get maxStoragePerNode() {
    return this.getNumberAttribute('max_storage_per_node');
  }

  // max_tps_per_broker - computed: true, optional: false, required: false
  public get maxTpsPerBroker() {
    return this.getNumberAttribute('max_tps_per_broker');
  }

  // min_broker - computed: true, optional: false, required: false
  public get minBroker() {
    return this.getNumberAttribute('min_broker');
  }

  // min_storage_per_node - computed: true, optional: false, required: false
  public get minStoragePerNode() {
    return this.getNumberAttribute('min_storage_per_node');
  }
}

export class DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference {
    return new DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties {
}

export function dataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesToTerraform(struct?: DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesToHclTerraform(struct?: DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_node - computed: true, optional: false, required: false
  public get maxNode() {
    return this.getNumberAttribute('max_node');
  }

  // max_task - computed: true, optional: false, required: false
  public get maxTask() {
    return this.getNumberAttribute('max_task');
  }

  // min_node - computed: true, optional: false, required: false
  public get minNode() {
    return this.getNumberAttribute('min_node');
  }

  // min_task - computed: true, optional: false, required: false
  public get minTask() {
    return this.getNumberAttribute('min_task');
  }
}

export class DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference {
    return new DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures {
}

export function dataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesToTerraform(struct?: DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesToHclTerraform(struct?: DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
}

export class DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference {
    return new DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudDmsFlavorV2Flavors {
}

export function dataOpentelekomcloudDmsFlavorV2FlavorsToTerraform(struct?: DataOpentelekomcloudDmsFlavorV2Flavors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudDmsFlavorV2FlavorsToHclTerraform(struct?: DataOpentelekomcloudDmsFlavorV2Flavors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpentelekomcloudDmsFlavorV2Flavors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudDmsFlavorV2Flavors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arch_types - computed: true, optional: false, required: false
  public get archTypes() {
    return this.getListAttribute('arch_types');
  }

  // charging_modes - computed: true, optional: false, required: false
  public get chargingModes() {
    return this.getListAttribute('charging_modes');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ios - computed: true, optional: false, required: false
  private _ios = new DataOpentelekomcloudDmsFlavorV2FlavorsIosList(this, "ios", false);
  public get ios() {
    return this._ios;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // support_features - computed: true, optional: false, required: false
  private _supportFeatures = new DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList(this, "support_features", false);
  public get supportFeatures() {
    return this._supportFeatures;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vm_specification - computed: true, optional: false, required: false
  public get vmSpecification() {
    return this.getStringAttribute('vm_specification');
  }
}

export class DataOpentelekomcloudDmsFlavorV2FlavorsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference {
    return new DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dms_flavor_v2 opentelekomcloud_dms_flavor_v2}
*/
export class DataOpentelekomcloudDmsFlavorV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dms_flavor_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudDmsFlavorV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudDmsFlavorV2 to import
  * @param importFromId The id of the existing DataOpentelekomcloudDmsFlavorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dms_flavor_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudDmsFlavorV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_dms_flavor_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dms_flavor_v2 opentelekomcloud_dms_flavor_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudDmsFlavorV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudDmsFlavorV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dms_flavor_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.44',
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
    this._archType = config.archType;
    this._availabilityZones = config.availabilityZones;
    this._chargingMode = config.chargingMode;
    this._flavorId = config.flavorId;
    this._id = config.id;
    this._storageSpecCode = config.storageSpecCode;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch_type - computed: false, optional: true, required: false
  private _archType?: string; 
  public get archType() {
    return this.getStringAttribute('arch_type');
  }
  public set archType(value: string) {
    this._archType = value;
  }
  public resetArchType() {
    this._archType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archTypeInput() {
    return this._archType;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // charging_mode - computed: false, optional: true, required: false
  private _chargingMode?: string; 
  public get chargingMode() {
    return this.getStringAttribute('charging_mode');
  }
  public set chargingMode(value: string) {
    this._chargingMode = value;
  }
  public resetChargingMode() {
    this._chargingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargingModeInput() {
    return this._chargingMode;
  }

  // flavor_id - computed: false, optional: true, required: false
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // flavors - computed: true, optional: false, required: false
  private _flavors = new DataOpentelekomcloudDmsFlavorV2FlavorsList(this, "flavors", false);
  public get flavors() {
    return this._flavors;
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // storage_spec_code - computed: false, optional: true, required: false
  private _storageSpecCode?: string; 
  public get storageSpecCode() {
    return this.getStringAttribute('storage_spec_code');
  }
  public set storageSpecCode(value: string) {
    this._storageSpecCode = value;
  }
  public resetStorageSpecCode() {
    this._storageSpecCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSpecCodeInput() {
    return this._storageSpecCode;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // versions - computed: true, optional: false, required: false
  public get versions() {
    return this.getListAttribute('versions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arch_type: cdktf.stringToTerraform(this._archType),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      charging_mode: cdktf.stringToTerraform(this._chargingMode),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      id: cdktf.stringToTerraform(this._id),
      storage_spec_code: cdktf.stringToTerraform(this._storageSpecCode),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arch_type: {
        value: cdktf.stringToHclTerraform(this._archType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      charging_mode: {
        value: cdktf.stringToHclTerraform(this._chargingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_spec_code: {
        value: cdktf.stringToHclTerraform(this._storageSpecCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
