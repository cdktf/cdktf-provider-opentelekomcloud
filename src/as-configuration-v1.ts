// https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsConfigurationV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#region AsConfigurationV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#scaling_configuration_name AsConfigurationV1#scaling_configuration_name}
  */
  readonly scalingConfigurationName: string;
  /**
  * instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#instance_config AsConfigurationV1#instance_config}
  */
  readonly instanceConfig: AsConfigurationV1InstanceConfig;
}
export interface AsConfigurationV1InstanceConfigDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#disk_type AsConfigurationV1#disk_type}
  */
  readonly diskType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#kms_id AsConfigurationV1#kms_id}
  */
  readonly kmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#size AsConfigurationV1#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#volume_type AsConfigurationV1#volume_type}
  */
  readonly volumeType: string;
}

export function asConfigurationV1InstanceConfigDiskToTerraform(struct?: AsConfigurationV1InstanceConfigDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    kms_id: cdktf.stringToTerraform(struct!.kmsId),
    size: cdktf.numberToTerraform(struct!.size),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface AsConfigurationV1InstanceConfigPersonality {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#content AsConfigurationV1#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#path AsConfigurationV1#path}
  */
  readonly path: string;
}

export function asConfigurationV1InstanceConfigPersonalityToTerraform(struct?: AsConfigurationV1InstanceConfigPersonality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface AsConfigurationV1InstanceConfigPublicIpEipBandwidth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#charging_mode AsConfigurationV1#charging_mode}
  */
  readonly chargingMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#share_type AsConfigurationV1#share_type}
  */
  readonly shareType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#size AsConfigurationV1#size}
  */
  readonly size: number;
}

export function asConfigurationV1InstanceConfigPublicIpEipBandwidthToTerraform(struct?: AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference | AsConfigurationV1InstanceConfigPublicIpEipBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    charging_mode: cdktf.stringToTerraform(struct!.chargingMode),
    share_type: cdktf.stringToTerraform(struct!.shareType),
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export class AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsConfigurationV1InstanceConfigPublicIpEipBandwidth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chargingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargingMode = this._chargingMode;
    }
    if (this._shareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareType = this._shareType;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsConfigurationV1InstanceConfigPublicIpEipBandwidth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chargingMode = undefined;
      this._shareType = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chargingMode = value.chargingMode;
      this._shareType = value.shareType;
      this._size = value.size;
    }
  }

  // charging_mode - computed: false, optional: false, required: true
  private _chargingMode?: string; 
  public get chargingMode() {
    return this.getStringAttribute('charging_mode');
  }
  public set chargingMode(value: string) {
    this._chargingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chargingModeInput() {
    return this._chargingMode;
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
    return this._shareType;
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
}
export interface AsConfigurationV1InstanceConfigPublicIpEip {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#ip_type AsConfigurationV1#ip_type}
  */
  readonly ipType: string;
  /**
  * bandwidth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#bandwidth AsConfigurationV1#bandwidth}
  */
  readonly bandwidth: AsConfigurationV1InstanceConfigPublicIpEipBandwidth;
}

export function asConfigurationV1InstanceConfigPublicIpEipToTerraform(struct?: AsConfigurationV1InstanceConfigPublicIpEipOutputReference | AsConfigurationV1InstanceConfigPublicIpEip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_type: cdktf.stringToTerraform(struct!.ipType),
    bandwidth: asConfigurationV1InstanceConfigPublicIpEipBandwidthToTerraform(struct!.bandwidth),
  }
}

export class AsConfigurationV1InstanceConfigPublicIpEipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsConfigurationV1InstanceConfigPublicIpEip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    if (this._bandwidth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsConfigurationV1InstanceConfigPublicIpEip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipType = undefined;
      this._bandwidth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipType = value.ipType;
      this._bandwidth.internalValue = value.bandwidth;
    }
  }

  // ip_type - computed: false, optional: false, required: true
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth = new AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }
  public putBandwidth(value: AsConfigurationV1InstanceConfigPublicIpEipBandwidth) {
    this._bandwidth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth.internalValue;
  }
}
export interface AsConfigurationV1InstanceConfigPublicIp {
  /**
  * eip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#eip AsConfigurationV1#eip}
  */
  readonly eip: AsConfigurationV1InstanceConfigPublicIpEip;
}

export function asConfigurationV1InstanceConfigPublicIpToTerraform(struct?: AsConfigurationV1InstanceConfigPublicIpOutputReference | AsConfigurationV1InstanceConfigPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eip: asConfigurationV1InstanceConfigPublicIpEipToTerraform(struct!.eip),
  }
}

export class AsConfigurationV1InstanceConfigPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsConfigurationV1InstanceConfigPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eip = this._eip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsConfigurationV1InstanceConfigPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eip.internalValue = value.eip;
    }
  }

  // eip - computed: false, optional: false, required: true
  private _eip = new AsConfigurationV1InstanceConfigPublicIpEipOutputReference(this, "eip");
  public get eip() {
    return this._eip;
  }
  public putEip(value: AsConfigurationV1InstanceConfigPublicIpEip) {
    this._eip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInput() {
    return this._eip.internalValue;
  }
}
export interface AsConfigurationV1InstanceConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#flavor AsConfigurationV1#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#image AsConfigurationV1#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#instance_id AsConfigurationV1#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#key_name AsConfigurationV1#key_name}
  */
  readonly keyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#metadata AsConfigurationV1#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#security_groups AsConfigurationV1#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#user_data AsConfigurationV1#user_data}
  */
  readonly userData?: string;
  /**
  * disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#disk AsConfigurationV1#disk}
  */
  readonly disk?: AsConfigurationV1InstanceConfigDisk[] | cdktf.IResolvable;
  /**
  * personality block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#personality AsConfigurationV1#personality}
  */
  readonly personality?: AsConfigurationV1InstanceConfigPersonality[] | cdktf.IResolvable;
  /**
  * public_ip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1#public_ip AsConfigurationV1#public_ip}
  */
  readonly publicIp?: AsConfigurationV1InstanceConfigPublicIp;
}

export function asConfigurationV1InstanceConfigToTerraform(struct?: AsConfigurationV1InstanceConfigOutputReference | AsConfigurationV1InstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flavor: cdktf.stringToTerraform(struct!.flavor),
    image: cdktf.stringToTerraform(struct!.image),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    user_data: cdktf.stringToTerraform(struct!.userData),
    disk: cdktf.listMapper(asConfigurationV1InstanceConfigDiskToTerraform)(struct!.disk),
    personality: cdktf.listMapper(asConfigurationV1InstanceConfigPersonalityToTerraform)(struct!.personality),
    public_ip: asConfigurationV1InstanceConfigPublicIpToTerraform(struct!.publicIp),
  }
}

export class AsConfigurationV1InstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsConfigurationV1InstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._personality !== undefined) {
      hasAnyValues = true;
      internalValueResult.personality = this._personality;
    }
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsConfigurationV1InstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flavor = undefined;
      this._image = undefined;
      this._instanceId = undefined;
      this._keyName = undefined;
      this._metadata = undefined;
      this._securityGroups = undefined;
      this._userData = undefined;
      this._disk = undefined;
      this._personality = undefined;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flavor = value.flavor;
      this._image = value.image;
      this._instanceId = value.instanceId;
      this._keyName = value.keyName;
      this._metadata = value.metadata;
      this._securityGroups = value.securityGroups;
      this._userData = value.userData;
      this._disk = value.disk;
      this._personality = value.personality;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // flavor - computed: false, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // disk - computed: false, optional: true, required: false
  private _disk?: AsConfigurationV1InstanceConfigDisk[] | cdktf.IResolvable; 
  public get disk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('disk');
  }
  public set disk(value: AsConfigurationV1InstanceConfigDisk[] | cdktf.IResolvable) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // personality - computed: false, optional: true, required: false
  private _personality?: AsConfigurationV1InstanceConfigPersonality[] | cdktf.IResolvable; 
  public get personality() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('personality');
  }
  public set personality(value: AsConfigurationV1InstanceConfigPersonality[] | cdktf.IResolvable) {
    this._personality = value;
  }
  public resetPersonality() {
    this._personality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalityInput() {
    return this._personality;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp = new AsConfigurationV1InstanceConfigPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: AsConfigurationV1InstanceConfigPublicIp) {
    this._publicIp.internalValue = value;
  }
  public resetPublicIp() {
    this._publicIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1 opentelekomcloud_as_configuration_v1}
*/
export class AsConfigurationV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_as_configuration_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_configuration_v1 opentelekomcloud_as_configuration_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsConfigurationV1Config
  */
  public constructor(scope: Construct, id: string, config: AsConfigurationV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_as_configuration_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.28.2',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._region = config.region;
    this._scalingConfigurationName = config.scalingConfigurationName;
    this._instanceConfig.internalValue = config.instanceConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // scaling_configuration_name - computed: false, optional: false, required: true
  private _scalingConfigurationName?: string; 
  public get scalingConfigurationName() {
    return this.getStringAttribute('scaling_configuration_name');
  }
  public set scalingConfigurationName(value: string) {
    this._scalingConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationNameInput() {
    return this._scalingConfigurationName;
  }

  // instance_config - computed: false, optional: false, required: true
  private _instanceConfig = new AsConfigurationV1InstanceConfigOutputReference(this, "instance_config");
  public get instanceConfig() {
    return this._instanceConfig;
  }
  public putInstanceConfig(value: AsConfigurationV1InstanceConfig) {
    this._instanceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigInput() {
    return this._instanceConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
      scaling_configuration_name: cdktf.stringToTerraform(this._scalingConfigurationName),
      instance_config: asConfigurationV1InstanceConfigToTerraform(this._instanceConfig.internalValue),
    };
  }
}
