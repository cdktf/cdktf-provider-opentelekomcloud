// https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssClusterV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#admin_pass CssClusterV1#admin_pass}
  */
  readonly adminPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#enable_authority CssClusterV1#enable_authority}
  */
  readonly enableAuthority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#enable_https CssClusterV1#enable_https}
  */
  readonly enableHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#expect_node_num CssClusterV1#expect_node_num}
  */
  readonly expectNodeNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#id CssClusterV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#name CssClusterV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#tags CssClusterV1#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * datastore block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#datastore CssClusterV1#datastore}
  */
  readonly datastore?: CssClusterV1Datastore;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#node_config CssClusterV1#node_config}
  */
  readonly nodeConfig: CssClusterV1NodeConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#timeouts CssClusterV1#timeouts}
  */
  readonly timeouts?: CssClusterV1Timeouts;
}
export interface CssClusterV1Nodes {
}

export function cssClusterV1NodesToTerraform(struct?: CssClusterV1Nodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CssClusterV1NodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CssClusterV1Nodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssClusterV1Nodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CssClusterV1NodesList extends cdktf.ComplexList {

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
  public get(index: number): CssClusterV1NodesOutputReference {
    return new CssClusterV1NodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CssClusterV1Datastore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#type CssClusterV1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#version CssClusterV1#version}
  */
  readonly version?: string;
}

export function cssClusterV1DatastoreToTerraform(struct?: CssClusterV1DatastoreOutputReference | CssClusterV1Datastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class CssClusterV1DatastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssClusterV1Datastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssClusterV1Datastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._version = value.version;
    }
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface CssClusterV1NodeConfigNetworkInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#network_id CssClusterV1#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#security_group_id CssClusterV1#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#vpc_id CssClusterV1#vpc_id}
  */
  readonly vpcId: string;
}

export function cssClusterV1NodeConfigNetworkInfoToTerraform(struct?: CssClusterV1NodeConfigNetworkInfoOutputReference | CssClusterV1NodeConfigNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}

export class CssClusterV1NodeConfigNetworkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssClusterV1NodeConfigNetworkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssClusterV1NodeConfigNetworkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkId = undefined;
      this._securityGroupId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkId = value.networkId;
      this._securityGroupId = value.securityGroupId;
      this._vpcId = value.vpcId;
    }
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
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
    return this._securityGroupId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface CssClusterV1NodeConfigVolume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#encryption_key CssClusterV1#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#size CssClusterV1#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#volume_type CssClusterV1#volume_type}
  */
  readonly volumeType: string;
}

export function cssClusterV1NodeConfigVolumeToTerraform(struct?: CssClusterV1NodeConfigVolumeOutputReference | CssClusterV1NodeConfigVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    size: cdktf.numberToTerraform(struct!.size),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class CssClusterV1NodeConfigVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssClusterV1NodeConfigVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssClusterV1NodeConfigVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionKey = undefined;
      this._size = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionKey = value.encryptionKey;
      this._size = value.size;
      this._volumeType = value.volumeType;
    }
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
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

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface CssClusterV1NodeConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#availability_zone CssClusterV1#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#flavor CssClusterV1#flavor}
  */
  readonly flavor: string;
  /**
  * network_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#network_info CssClusterV1#network_info}
  */
  readonly networkInfo: CssClusterV1NodeConfigNetworkInfo;
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#volume CssClusterV1#volume}
  */
  readonly volume: CssClusterV1NodeConfigVolume;
}

export function cssClusterV1NodeConfigToTerraform(struct?: CssClusterV1NodeConfigOutputReference | CssClusterV1NodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    network_info: cssClusterV1NodeConfigNetworkInfoToTerraform(struct!.networkInfo),
    volume: cssClusterV1NodeConfigVolumeToTerraform(struct!.volume),
  }
}

export class CssClusterV1NodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssClusterV1NodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._networkInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInfo = this._networkInfo?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssClusterV1NodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZone = undefined;
      this._flavor = undefined;
      this._networkInfo.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZone = value.availabilityZone;
      this._flavor = value.flavor;
      this._networkInfo.internalValue = value.networkInfo;
      this._volume.internalValue = value.volume;
    }
  }

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

  // network_info - computed: false, optional: false, required: true
  private _networkInfo = new CssClusterV1NodeConfigNetworkInfoOutputReference(this, "network_info");
  public get networkInfo() {
    return this._networkInfo;
  }
  public putNetworkInfo(value: CssClusterV1NodeConfigNetworkInfo) {
    this._networkInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo.internalValue;
  }

  // volume - computed: false, optional: false, required: true
  private _volume = new CssClusterV1NodeConfigVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: CssClusterV1NodeConfigVolume) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}
export interface CssClusterV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#create CssClusterV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1#update CssClusterV1#update}
  */
  readonly update?: string;
}

export function cssClusterV1TimeoutsToTerraform(struct?: CssClusterV1TimeoutsOutputReference | CssClusterV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CssClusterV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssClusterV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssClusterV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1 opentelekomcloud_css_cluster_v1}
*/
export class CssClusterV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_css_cluster_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1 opentelekomcloud_css_cluster_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssClusterV1Config
  */
  public constructor(scope: Construct, id: string, config: CssClusterV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_css_cluster_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.34.1',
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
    this._adminPass = config.adminPass;
    this._enableAuthority = config.enableAuthority;
    this._enableHttps = config.enableHttps;
    this._expectNodeNum = config.expectNodeNum;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._datastore.internalValue = config.datastore;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_pass - computed: false, optional: true, required: false
  private _adminPass?: string; 
  public get adminPass() {
    return this.getStringAttribute('admin_pass');
  }
  public set adminPass(value: string) {
    this._adminPass = value;
  }
  public resetAdminPass() {
    this._adminPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPassInput() {
    return this._adminPass;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enable_authority - computed: true, optional: true, required: false
  private _enableAuthority?: boolean | cdktf.IResolvable; 
  public get enableAuthority() {
    return this.getBooleanAttribute('enable_authority');
  }
  public set enableAuthority(value: boolean | cdktf.IResolvable) {
    this._enableAuthority = value;
  }
  public resetEnableAuthority() {
    this._enableAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAuthorityInput() {
    return this._enableAuthority;
  }

  // enable_https - computed: true, optional: true, required: false
  private _enableHttps?: boolean | cdktf.IResolvable; 
  public get enableHttps() {
    return this.getBooleanAttribute('enable_https');
  }
  public set enableHttps(value: boolean | cdktf.IResolvable) {
    this._enableHttps = value;
  }
  public resetEnableHttps() {
    this._enableHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpsInput() {
    return this._enableHttps;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // expect_node_num - computed: false, optional: true, required: false
  private _expectNodeNum?: number; 
  public get expectNodeNum() {
    return this.getNumberAttribute('expect_node_num');
  }
  public set expectNodeNum(value: number) {
    this._expectNodeNum = value;
  }
  public resetExpectNodeNum() {
    this._expectNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectNodeNumInput() {
    return this._expectNodeNum;
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

  // nodes - computed: true, optional: false, required: false
  private _nodes = new CssClusterV1NodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore = new CssClusterV1DatastoreOutputReference(this, "datastore");
  public get datastore() {
    return this._datastore;
  }
  public putDatastore(value: CssClusterV1Datastore) {
    this._datastore.internalValue = value;
  }
  public resetDatastore() {
    this._datastore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore.internalValue;
  }

  // node_config - computed: false, optional: false, required: true
  private _nodeConfig = new CssClusterV1NodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: CssClusterV1NodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CssClusterV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CssClusterV1Timeouts) {
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
      admin_pass: cdktf.stringToTerraform(this._adminPass),
      enable_authority: cdktf.booleanToTerraform(this._enableAuthority),
      enable_https: cdktf.booleanToTerraform(this._enableHttps),
      expect_node_num: cdktf.numberToTerraform(this._expectNodeNum),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      datastore: cssClusterV1DatastoreToTerraform(this._datastore.internalValue),
      node_config: cssClusterV1NodeConfigToTerraform(this._nodeConfig.internalValue),
      timeouts: cssClusterV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
