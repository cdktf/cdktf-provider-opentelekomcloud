// https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#access_ip_v4 ComputeInstanceV2#access_ip_v4}
  */
  readonly accessIpV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#access_ip_v6 ComputeInstanceV2#access_ip_v6}
  */
  readonly accessIpV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#admin_pass ComputeInstanceV2#admin_pass}
  */
  readonly adminPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#auto_recovery ComputeInstanceV2#auto_recovery}
  */
  readonly autoRecovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#availability_zone ComputeInstanceV2#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#config_drive ComputeInstanceV2#config_drive}
  */
  readonly configDrive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#flavor_id ComputeInstanceV2#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#flavor_name ComputeInstanceV2#flavor_name}
  */
  readonly flavorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#id ComputeInstanceV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#image_id ComputeInstanceV2#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#image_name ComputeInstanceV2#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#key_pair ComputeInstanceV2#key_pair}
  */
  readonly keyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#metadata ComputeInstanceV2#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#name ComputeInstanceV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#power_state ComputeInstanceV2#power_state}
  */
  readonly powerState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#region ComputeInstanceV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#security_groups ComputeInstanceV2#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#ssh_private_key_path ComputeInstanceV2#ssh_private_key_path}
  */
  readonly sshPrivateKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#stop_before_destroy ComputeInstanceV2#stop_before_destroy}
  */
  readonly stopBeforeDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#tags ComputeInstanceV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#user_data ComputeInstanceV2#user_data}
  */
  readonly userData?: string;
  /**
  * block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#block_device ComputeInstanceV2#block_device}
  */
  readonly blockDevice?: ComputeInstanceV2BlockDevice[] | cdktf.IResolvable;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#network ComputeInstanceV2#network}
  */
  readonly network?: ComputeInstanceV2Network[] | cdktf.IResolvable;
  /**
  * scheduler_hints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#scheduler_hints ComputeInstanceV2#scheduler_hints}
  */
  readonly schedulerHints?: ComputeInstanceV2SchedulerHints[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#timeouts ComputeInstanceV2#timeouts}
  */
  readonly timeouts?: ComputeInstanceV2Timeouts;
}
export interface ComputeInstanceV2VolumeAttached {
}

export function computeInstanceV2VolumeAttachedToTerraform(struct?: ComputeInstanceV2VolumeAttached): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ComputeInstanceV2VolumeAttachedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceV2VolumeAttached | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceV2VolumeAttached | undefined) {
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
}

export class ComputeInstanceV2VolumeAttachedList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInstanceV2VolumeAttachedOutputReference {
    return new ComputeInstanceV2VolumeAttachedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceV2BlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#boot_index ComputeInstanceV2#boot_index}
  */
  readonly bootIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#delete_on_termination ComputeInstanceV2#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#destination_type ComputeInstanceV2#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#device_name ComputeInstanceV2#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#guest_format ComputeInstanceV2#guest_format}
  */
  readonly guestFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#source_type ComputeInstanceV2#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#uuid ComputeInstanceV2#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#volume_size ComputeInstanceV2#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#volume_type ComputeInstanceV2#volume_type}
  */
  readonly volumeType?: string;
}

export function computeInstanceV2BlockDeviceToTerraform(struct?: ComputeInstanceV2BlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_index: cdktf.numberToTerraform(struct!.bootIndex),
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    guest_format: cdktf.stringToTerraform(struct!.guestFormat),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class ComputeInstanceV2BlockDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceV2BlockDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootIndex = this._bootIndex;
    }
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._guestFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestFormat = this._guestFormat;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceV2BlockDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootIndex = undefined;
      this._deleteOnTermination = undefined;
      this._destinationType = undefined;
      this._deviceName = undefined;
      this._guestFormat = undefined;
      this._sourceType = undefined;
      this._uuid = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootIndex = value.bootIndex;
      this._deleteOnTermination = value.deleteOnTermination;
      this._destinationType = value.destinationType;
      this._deviceName = value.deviceName;
      this._guestFormat = value.guestFormat;
      this._sourceType = value.sourceType;
      this._uuid = value.uuid;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // boot_index - computed: false, optional: true, required: false
  private _bootIndex?: number; 
  public get bootIndex() {
    return this.getNumberAttribute('boot_index');
  }
  public set bootIndex(value: number) {
    this._bootIndex = value;
  }
  public resetBootIndex() {
    this._bootIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootIndexInput() {
    return this._bootIndex;
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // destination_type - computed: false, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // guest_format - computed: false, optional: true, required: false
  private _guestFormat?: string; 
  public get guestFormat() {
    return this.getStringAttribute('guest_format');
  }
  public set guestFormat(value: string) {
    this._guestFormat = value;
  }
  public resetGuestFormat() {
    this._guestFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestFormatInput() {
    return this._guestFormat;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class ComputeInstanceV2BlockDeviceList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceV2BlockDevice[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceV2BlockDeviceOutputReference {
    return new ComputeInstanceV2BlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceV2Network {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#access_network ComputeInstanceV2#access_network}
  */
  readonly accessNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#fixed_ip_v4 ComputeInstanceV2#fixed_ip_v4}
  */
  readonly fixedIpV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#fixed_ip_v6 ComputeInstanceV2#fixed_ip_v6}
  */
  readonly fixedIpV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#name ComputeInstanceV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#port ComputeInstanceV2#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#uuid ComputeInstanceV2#uuid}
  */
  readonly uuid?: string;
}

export function computeInstanceV2NetworkToTerraform(struct?: ComputeInstanceV2Network | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_network: cdktf.booleanToTerraform(struct!.accessNetwork),
    fixed_ip_v4: cdktf.stringToTerraform(struct!.fixedIpV4),
    fixed_ip_v6: cdktf.stringToTerraform(struct!.fixedIpV6),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}

export class ComputeInstanceV2NetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceV2Network | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessNetwork = this._accessNetwork;
    }
    if (this._fixedIpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpV4 = this._fixedIpV4;
    }
    if (this._fixedIpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpV6 = this._fixedIpV6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceV2Network | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessNetwork = undefined;
      this._fixedIpV4 = undefined;
      this._fixedIpV6 = undefined;
      this._name = undefined;
      this._port = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessNetwork = value.accessNetwork;
      this._fixedIpV4 = value.fixedIpV4;
      this._fixedIpV6 = value.fixedIpV6;
      this._name = value.name;
      this._port = value.port;
      this._uuid = value.uuid;
    }
  }

  // access_network - computed: false, optional: true, required: false
  private _accessNetwork?: boolean | cdktf.IResolvable; 
  public get accessNetwork() {
    return this.getBooleanAttribute('access_network');
  }
  public set accessNetwork(value: boolean | cdktf.IResolvable) {
    this._accessNetwork = value;
  }
  public resetAccessNetwork() {
    this._accessNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessNetworkInput() {
    return this._accessNetwork;
  }

  // fixed_ip_v4 - computed: true, optional: true, required: false
  private _fixedIpV4?: string; 
  public get fixedIpV4() {
    return this.getStringAttribute('fixed_ip_v4');
  }
  public set fixedIpV4(value: string) {
    this._fixedIpV4 = value;
  }
  public resetFixedIpV4() {
    this._fixedIpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpV4Input() {
    return this._fixedIpV4;
  }

  // fixed_ip_v6 - computed: true, optional: true, required: false
  private _fixedIpV6?: string; 
  public get fixedIpV6() {
    return this.getStringAttribute('fixed_ip_v6');
  }
  public set fixedIpV6(value: string) {
    this._fixedIpV6 = value;
  }
  public resetFixedIpV6() {
    this._fixedIpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpV6Input() {
    return this._fixedIpV6;
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
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

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class ComputeInstanceV2NetworkList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceV2Network[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceV2NetworkOutputReference {
    return new ComputeInstanceV2NetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceV2SchedulerHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#build_near_host_ip ComputeInstanceV2#build_near_host_ip}
  */
  readonly buildNearHostIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#deh_id ComputeInstanceV2#deh_id}
  */
  readonly dehId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#different_host ComputeInstanceV2#different_host}
  */
  readonly differentHost?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#group ComputeInstanceV2#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#query ComputeInstanceV2#query}
  */
  readonly query?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#same_host ComputeInstanceV2#same_host}
  */
  readonly sameHost?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#target_cell ComputeInstanceV2#target_cell}
  */
  readonly targetCell?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#tenancy ComputeInstanceV2#tenancy}
  */
  readonly tenancy?: string;
}

export function computeInstanceV2SchedulerHintsToTerraform(struct?: ComputeInstanceV2SchedulerHints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_near_host_ip: cdktf.stringToTerraform(struct!.buildNearHostIp),
    deh_id: cdktf.stringToTerraform(struct!.dehId),
    different_host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.differentHost),
    group: cdktf.stringToTerraform(struct!.group),
    query: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.query),
    same_host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sameHost),
    target_cell: cdktf.stringToTerraform(struct!.targetCell),
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
  }
}

export class ComputeInstanceV2SchedulerHintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceV2SchedulerHints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildNearHostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildNearHostIp = this._buildNearHostIp;
    }
    if (this._dehId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dehId = this._dehId;
    }
    if (this._differentHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.differentHost = this._differentHost;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._sameHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameHost = this._sameHost;
    }
    if (this._targetCell !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCell = this._targetCell;
    }
    if (this._tenancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancy = this._tenancy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceV2SchedulerHints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildNearHostIp = undefined;
      this._dehId = undefined;
      this._differentHost = undefined;
      this._group = undefined;
      this._query = undefined;
      this._sameHost = undefined;
      this._targetCell = undefined;
      this._tenancy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildNearHostIp = value.buildNearHostIp;
      this._dehId = value.dehId;
      this._differentHost = value.differentHost;
      this._group = value.group;
      this._query = value.query;
      this._sameHost = value.sameHost;
      this._targetCell = value.targetCell;
      this._tenancy = value.tenancy;
    }
  }

  // build_near_host_ip - computed: false, optional: true, required: false
  private _buildNearHostIp?: string; 
  public get buildNearHostIp() {
    return this.getStringAttribute('build_near_host_ip');
  }
  public set buildNearHostIp(value: string) {
    this._buildNearHostIp = value;
  }
  public resetBuildNearHostIp() {
    this._buildNearHostIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildNearHostIpInput() {
    return this._buildNearHostIp;
  }

  // deh_id - computed: false, optional: true, required: false
  private _dehId?: string; 
  public get dehId() {
    return this.getStringAttribute('deh_id');
  }
  public set dehId(value: string) {
    this._dehId = value;
  }
  public resetDehId() {
    this._dehId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dehIdInput() {
    return this._dehId;
  }

  // different_host - computed: false, optional: true, required: false
  private _differentHost?: string[]; 
  public get differentHost() {
    return this.getListAttribute('different_host');
  }
  public set differentHost(value: string[]) {
    this._differentHost = value;
  }
  public resetDifferentHost() {
    this._differentHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get differentHostInput() {
    return this._differentHost;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string[]; 
  public get query() {
    return this.getListAttribute('query');
  }
  public set query(value: string[]) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // same_host - computed: false, optional: true, required: false
  private _sameHost?: string[]; 
  public get sameHost() {
    return this.getListAttribute('same_host');
  }
  public set sameHost(value: string[]) {
    this._sameHost = value;
  }
  public resetSameHost() {
    this._sameHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameHostInput() {
    return this._sameHost;
  }

  // target_cell - computed: false, optional: true, required: false
  private _targetCell?: string; 
  public get targetCell() {
    return this.getStringAttribute('target_cell');
  }
  public set targetCell(value: string) {
    this._targetCell = value;
  }
  public resetTargetCell() {
    this._targetCell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCellInput() {
    return this._targetCell;
  }

  // tenancy - computed: false, optional: true, required: false
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }
}

export class ComputeInstanceV2SchedulerHintsList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceV2SchedulerHints[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceV2SchedulerHintsOutputReference {
    return new ComputeInstanceV2SchedulerHintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#create ComputeInstanceV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#delete ComputeInstanceV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#update ComputeInstanceV2#update}
  */
  readonly update?: string;
}

export function computeInstanceV2TimeoutsToTerraform(struct?: ComputeInstanceV2TimeoutsOutputReference | ComputeInstanceV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputeInstanceV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceV2Timeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2 opentelekomcloud_compute_instance_v2}
*/
export class ComputeInstanceV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_compute_instance_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2 opentelekomcloud_compute_instance_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceV2Config
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_compute_instance_v2',
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
    this._accessIpV4 = config.accessIpV4;
    this._accessIpV6 = config.accessIpV6;
    this._adminPass = config.adminPass;
    this._autoRecovery = config.autoRecovery;
    this._availabilityZone = config.availabilityZone;
    this._configDrive = config.configDrive;
    this._flavorId = config.flavorId;
    this._flavorName = config.flavorName;
    this._id = config.id;
    this._imageId = config.imageId;
    this._imageName = config.imageName;
    this._keyPair = config.keyPair;
    this._metadata = config.metadata;
    this._name = config.name;
    this._powerState = config.powerState;
    this._region = config.region;
    this._securityGroups = config.securityGroups;
    this._sshPrivateKeyPath = config.sshPrivateKeyPath;
    this._stopBeforeDestroy = config.stopBeforeDestroy;
    this._tags = config.tags;
    this._userData = config.userData;
    this._blockDevice.internalValue = config.blockDevice;
    this._network.internalValue = config.network;
    this._schedulerHints.internalValue = config.schedulerHints;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_ip_v4 - computed: true, optional: true, required: false
  private _accessIpV4?: string; 
  public get accessIpV4() {
    return this.getStringAttribute('access_ip_v4');
  }
  public set accessIpV4(value: string) {
    this._accessIpV4 = value;
  }
  public resetAccessIpV4() {
    this._accessIpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIpV4Input() {
    return this._accessIpV4;
  }

  // access_ip_v6 - computed: true, optional: true, required: false
  private _accessIpV6?: string; 
  public get accessIpV6() {
    return this.getStringAttribute('access_ip_v6');
  }
  public set accessIpV6(value: string) {
    this._accessIpV6 = value;
  }
  public resetAccessIpV6() {
    this._accessIpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIpV6Input() {
    return this._accessIpV6;
  }

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

  // all_metadata - computed: true, optional: false, required: false
  private _allMetadata = new cdktf.StringMap(this, "all_metadata");
  public get allMetadata() {
    return this._allMetadata;
  }

  // auto_recovery - computed: true, optional: true, required: false
  private _autoRecovery?: boolean | cdktf.IResolvable; 
  public get autoRecovery() {
    return this.getBooleanAttribute('auto_recovery');
  }
  public set autoRecovery(value: boolean | cdktf.IResolvable) {
    this._autoRecovery = value;
  }
  public resetAutoRecovery() {
    this._autoRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryInput() {
    return this._autoRecovery;
  }

  // availability_zone - computed: true, optional: true, required: false
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

  // config_drive - computed: false, optional: true, required: false
  private _configDrive?: boolean | cdktf.IResolvable; 
  public get configDrive() {
    return this.getBooleanAttribute('config_drive');
  }
  public set configDrive(value: boolean | cdktf.IResolvable) {
    this._configDrive = value;
  }
  public resetConfigDrive() {
    this._configDrive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDriveInput() {
    return this._configDrive;
  }

  // encrypted_password - computed: true, optional: false, required: false
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }

  // flavor_id - computed: true, optional: true, required: false
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

  // flavor_name - computed: true, optional: true, required: false
  private _flavorName?: string; 
  public get flavorName() {
    return this.getStringAttribute('flavor_name');
  }
  public set flavorName(value: string) {
    this._flavorName = value;
  }
  public resetFlavorName() {
    this._flavorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorNameInput() {
    return this._flavorName;
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // power_state - computed: false, optional: true, required: false
  private _powerState?: string; 
  public get powerState() {
    return this.getStringAttribute('power_state');
  }
  public set powerState(value: string) {
    this._powerState = value;
  }
  public resetPowerState() {
    this._powerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState;
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

  // security_groups - computed: true, optional: true, required: false
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

  // ssh_private_key_path - computed: false, optional: true, required: false
  private _sshPrivateKeyPath?: string; 
  public get sshPrivateKeyPath() {
    return this.getStringAttribute('ssh_private_key_path');
  }
  public set sshPrivateKeyPath(value: string) {
    this._sshPrivateKeyPath = value;
  }
  public resetSshPrivateKeyPath() {
    this._sshPrivateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyPathInput() {
    return this._sshPrivateKeyPath;
  }

  // stop_before_destroy - computed: false, optional: true, required: false
  private _stopBeforeDestroy?: boolean | cdktf.IResolvable; 
  public get stopBeforeDestroy() {
    return this.getBooleanAttribute('stop_before_destroy');
  }
  public set stopBeforeDestroy(value: boolean | cdktf.IResolvable) {
    this._stopBeforeDestroy = value;
  }
  public resetStopBeforeDestroy() {
    this._stopBeforeDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopBeforeDestroyInput() {
    return this._stopBeforeDestroy;
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

  // volume_attached - computed: true, optional: false, required: false
  private _volumeAttached = new ComputeInstanceV2VolumeAttachedList(this, "volume_attached", false);
  public get volumeAttached() {
    return this._volumeAttached;
  }

  // block_device - computed: false, optional: true, required: false
  private _blockDevice = new ComputeInstanceV2BlockDeviceList(this, "block_device", false);
  public get blockDevice() {
    return this._blockDevice;
  }
  public putBlockDevice(value: ComputeInstanceV2BlockDevice[] | cdktf.IResolvable) {
    this._blockDevice.internalValue = value;
  }
  public resetBlockDevice() {
    this._blockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceInput() {
    return this._blockDevice.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ComputeInstanceV2NetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: ComputeInstanceV2Network[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // scheduler_hints - computed: false, optional: true, required: false
  private _schedulerHints = new ComputeInstanceV2SchedulerHintsList(this, "scheduler_hints", true);
  public get schedulerHints() {
    return this._schedulerHints;
  }
  public putSchedulerHints(value: ComputeInstanceV2SchedulerHints[] | cdktf.IResolvable) {
    this._schedulerHints.internalValue = value;
  }
  public resetSchedulerHints() {
    this._schedulerHints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerHintsInput() {
    return this._schedulerHints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeInstanceV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInstanceV2Timeouts) {
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
      access_ip_v4: cdktf.stringToTerraform(this._accessIpV4),
      access_ip_v6: cdktf.stringToTerraform(this._accessIpV6),
      admin_pass: cdktf.stringToTerraform(this._adminPass),
      auto_recovery: cdktf.booleanToTerraform(this._autoRecovery),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      config_drive: cdktf.booleanToTerraform(this._configDrive),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      flavor_name: cdktf.stringToTerraform(this._flavorName),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      image_name: cdktf.stringToTerraform(this._imageName),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      power_state: cdktf.stringToTerraform(this._powerState),
      region: cdktf.stringToTerraform(this._region),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      ssh_private_key_path: cdktf.stringToTerraform(this._sshPrivateKeyPath),
      stop_before_destroy: cdktf.booleanToTerraform(this._stopBeforeDestroy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      block_device: cdktf.listMapper(computeInstanceV2BlockDeviceToTerraform, true)(this._blockDevice.internalValue),
      network: cdktf.listMapper(computeInstanceV2NetworkToTerraform, true)(this._network.internalValue),
      scheduler_hints: cdktf.listMapper(computeInstanceV2SchedulerHintsToTerraform, true)(this._schedulerHints.internalValue),
      timeouts: computeInstanceV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
