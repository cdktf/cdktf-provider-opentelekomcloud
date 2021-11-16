// https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#access_ip_v4 ComputeInstanceV2#access_ip_v4}
  */
  readonly accessIpV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#access_ip_v6 ComputeInstanceV2#access_ip_v6}
  */
  readonly accessIpV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#admin_pass ComputeInstanceV2#admin_pass}
  */
  readonly adminPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#auto_recovery ComputeInstanceV2#auto_recovery}
  */
  readonly autoRecovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#availability_zone ComputeInstanceV2#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#config_drive ComputeInstanceV2#config_drive}
  */
  readonly configDrive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#flavor_id ComputeInstanceV2#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#flavor_name ComputeInstanceV2#flavor_name}
  */
  readonly flavorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#image_id ComputeInstanceV2#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#image_name ComputeInstanceV2#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#key_pair ComputeInstanceV2#key_pair}
  */
  readonly keyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#metadata ComputeInstanceV2#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#name ComputeInstanceV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#power_state ComputeInstanceV2#power_state}
  */
  readonly powerState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#region ComputeInstanceV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#security_groups ComputeInstanceV2#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#stop_before_destroy ComputeInstanceV2#stop_before_destroy}
  */
  readonly stopBeforeDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#tags ComputeInstanceV2#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#user_data ComputeInstanceV2#user_data}
  */
  readonly userData?: string;
  /**
  * block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#block_device ComputeInstanceV2#block_device}
  */
  readonly blockDevice?: ComputeInstanceV2BlockDevice[];
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#network ComputeInstanceV2#network}
  */
  readonly network?: ComputeInstanceV2Network[];
  /**
  * scheduler_hints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#scheduler_hints ComputeInstanceV2#scheduler_hints}
  */
  readonly schedulerHints?: ComputeInstanceV2SchedulerHints[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#timeouts ComputeInstanceV2#timeouts}
  */
  readonly timeouts?: ComputeInstanceV2Timeouts;
}
export class ComputeInstanceV2VolumeAttached extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface ComputeInstanceV2BlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#boot_index ComputeInstanceV2#boot_index}
  */
  readonly bootIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#delete_on_termination ComputeInstanceV2#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#destination_type ComputeInstanceV2#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#device_name ComputeInstanceV2#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#guest_format ComputeInstanceV2#guest_format}
  */
  readonly guestFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#source_type ComputeInstanceV2#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#uuid ComputeInstanceV2#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#volume_size ComputeInstanceV2#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#volume_type ComputeInstanceV2#volume_type}
  */
  readonly volumeType?: string;
}

function computeInstanceV2BlockDeviceToTerraform(struct?: ComputeInstanceV2BlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface ComputeInstanceV2Network {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#access_network ComputeInstanceV2#access_network}
  */
  readonly accessNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#fixed_ip_v4 ComputeInstanceV2#fixed_ip_v4}
  */
  readonly fixedIpV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#fixed_ip_v6 ComputeInstanceV2#fixed_ip_v6}
  */
  readonly fixedIpV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#name ComputeInstanceV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#port ComputeInstanceV2#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#uuid ComputeInstanceV2#uuid}
  */
  readonly uuid?: string;
}

function computeInstanceV2NetworkToTerraform(struct?: ComputeInstanceV2Network): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface ComputeInstanceV2SchedulerHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#build_near_host_ip ComputeInstanceV2#build_near_host_ip}
  */
  readonly buildNearHostIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#deh_id ComputeInstanceV2#deh_id}
  */
  readonly dehId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#different_host ComputeInstanceV2#different_host}
  */
  readonly differentHost?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#group ComputeInstanceV2#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#query ComputeInstanceV2#query}
  */
  readonly query?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#same_host ComputeInstanceV2#same_host}
  */
  readonly sameHost?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#target_cell ComputeInstanceV2#target_cell}
  */
  readonly targetCell?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#tenancy ComputeInstanceV2#tenancy}
  */
  readonly tenancy?: string;
}

function computeInstanceV2SchedulerHintsToTerraform(struct?: ComputeInstanceV2SchedulerHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_near_host_ip: cdktf.stringToTerraform(struct!.buildNearHostIp),
    deh_id: cdktf.stringToTerraform(struct!.dehId),
    different_host: cdktf.listMapper(cdktf.stringToTerraform)(struct!.differentHost),
    group: cdktf.stringToTerraform(struct!.group),
    query: cdktf.listMapper(cdktf.stringToTerraform)(struct!.query),
    same_host: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sameHost),
    target_cell: cdktf.stringToTerraform(struct!.targetCell),
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
  }
}

export interface ComputeInstanceV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#create ComputeInstanceV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#delete ComputeInstanceV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html#update ComputeInstanceV2#update}
  */
  readonly update?: string;
}

function computeInstanceV2TimeoutsToTerraform(struct?: ComputeInstanceV2TimeoutsOutputReference | ComputeInstanceV2Timeouts): any {
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

export class ComputeInstanceV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html opentelekomcloud_compute_instance_v2}
*/
export class ComputeInstanceV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_compute_instance_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2.html opentelekomcloud_compute_instance_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceV2Config
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_compute_instance_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessIpV4 = config.accessIpV4;
    this._accessIpV6 = config.accessIpV6;
    this._adminPass = config.adminPass;
    this._autoRecovery = config.autoRecovery;
    this._availabilityZone = config.availabilityZone;
    this._configDrive = config.configDrive;
    this._flavorId = config.flavorId;
    this._flavorName = config.flavorName;
    this._imageId = config.imageId;
    this._imageName = config.imageName;
    this._keyPair = config.keyPair;
    this._metadata = config.metadata;
    this._name = config.name;
    this._powerState = config.powerState;
    this._region = config.region;
    this._securityGroups = config.securityGroups;
    this._stopBeforeDestroy = config.stopBeforeDestroy;
    this._tags = config.tags;
    this._userData = config.userData;
    this._blockDevice = config.blockDevice;
    this._network = config.network;
    this._schedulerHints = config.schedulerHints;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_ip_v4 - computed: true, optional: true, required: false
  private _accessIpV4?: string | undefined; 
  public get accessIpV4() {
    return this.getStringAttribute('access_ip_v4');
  }
  public set accessIpV4(value: string | undefined) {
    this._accessIpV4 = value;
  }
  public resetAccessIpV4() {
    this._accessIpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIpV4Input() {
    return this._accessIpV4
  }

  // access_ip_v6 - computed: true, optional: true, required: false
  private _accessIpV6?: string | undefined; 
  public get accessIpV6() {
    return this.getStringAttribute('access_ip_v6');
  }
  public set accessIpV6(value: string | undefined) {
    this._accessIpV6 = value;
  }
  public resetAccessIpV6() {
    this._accessIpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIpV6Input() {
    return this._accessIpV6
  }

  // admin_pass - computed: false, optional: true, required: false
  private _adminPass?: string | undefined; 
  public get adminPass() {
    return this.getStringAttribute('admin_pass');
  }
  public set adminPass(value: string | undefined) {
    this._adminPass = value;
  }
  public resetAdminPass() {
    this._adminPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPassInput() {
    return this._adminPass
  }

  // all_metadata - computed: true, optional: false, required: false
  public allMetadata(key: string): string {
    return new cdktf.StringMap(this, 'all_metadata').lookup(key);
  }

  // auto_recovery - computed: true, optional: true, required: false
  private _autoRecovery?: boolean | cdktf.IResolvable | undefined; 
  public get autoRecovery() {
    return this.getBooleanAttribute('auto_recovery') as any;
  }
  public set autoRecovery(value: boolean | cdktf.IResolvable | undefined) {
    this._autoRecovery = value;
  }
  public resetAutoRecovery() {
    this._autoRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryInput() {
    return this._autoRecovery
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string | undefined; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // config_drive - computed: false, optional: true, required: false
  private _configDrive?: boolean | cdktf.IResolvable | undefined; 
  public get configDrive() {
    return this.getBooleanAttribute('config_drive') as any;
  }
  public set configDrive(value: boolean | cdktf.IResolvable | undefined) {
    this._configDrive = value;
  }
  public resetConfigDrive() {
    this._configDrive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDriveInput() {
    return this._configDrive
  }

  // flavor_id - computed: true, optional: true, required: false
  private _flavorId?: string | undefined; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string | undefined) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId
  }

  // flavor_name - computed: true, optional: true, required: false
  private _flavorName?: string | undefined; 
  public get flavorName() {
    return this.getStringAttribute('flavor_name');
  }
  public set flavorName(value: string | undefined) {
    this._flavorName = value;
  }
  public resetFlavorName() {
    this._flavorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorNameInput() {
    return this._flavorName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string | undefined; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string | undefined) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string | undefined; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string | undefined) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName
  }

  // key_pair - computed: false, optional: true, required: false
  private _keyPair?: string | undefined; 
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string | undefined) {
    this._keyPair = value;
  }
  public resetKeyPair() {
    this._keyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairInput() {
    return this._keyPair
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // power_state - computed: false, optional: true, required: false
  private _powerState?: string | undefined; 
  public get powerState() {
    return this.getStringAttribute('power_state');
  }
  public set powerState(value: string | undefined) {
    this._powerState = value;
  }
  public resetPowerState() {
    this._powerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState
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

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[] | undefined; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[] | undefined) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // stop_before_destroy - computed: false, optional: true, required: false
  private _stopBeforeDestroy?: boolean | cdktf.IResolvable | undefined; 
  public get stopBeforeDestroy() {
    return this.getBooleanAttribute('stop_before_destroy') as any;
  }
  public set stopBeforeDestroy(value: boolean | cdktf.IResolvable | undefined) {
    this._stopBeforeDestroy = value;
  }
  public resetStopBeforeDestroy() {
    this._stopBeforeDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopBeforeDestroyInput() {
    return this._stopBeforeDestroy
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

  // user_data - computed: false, optional: true, required: false
  private _userData?: string | undefined; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string | undefined) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData
  }

  // volume_attached - computed: true, optional: false, required: false
  public volumeAttached(index: string) {
    return new ComputeInstanceV2VolumeAttached(this, 'volume_attached', index);
  }

  // block_device - computed: false, optional: true, required: false
  private _blockDevice?: ComputeInstanceV2BlockDevice[] | undefined; 
  public get blockDevice() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('block_device') as any;
  }
  public set blockDevice(value: ComputeInstanceV2BlockDevice[] | undefined) {
    this._blockDevice = value;
  }
  public resetBlockDevice() {
    this._blockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceInput() {
    return this._blockDevice
  }

  // network - computed: false, optional: true, required: false
  private _network?: ComputeInstanceV2Network[] | undefined; 
  public get network() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network') as any;
  }
  public set network(value: ComputeInstanceV2Network[] | undefined) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // scheduler_hints - computed: false, optional: true, required: false
  private _schedulerHints?: ComputeInstanceV2SchedulerHints[] | undefined; 
  public get schedulerHints() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scheduler_hints') as any;
  }
  public set schedulerHints(value: ComputeInstanceV2SchedulerHints[] | undefined) {
    this._schedulerHints = value;
  }
  public resetSchedulerHints() {
    this._schedulerHints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerHintsInput() {
    return this._schedulerHints
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeInstanceV2Timeouts | undefined; 
  private __timeoutsOutput = new ComputeInstanceV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeInstanceV2Timeouts | undefined) {
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
      access_ip_v4: cdktf.stringToTerraform(this._accessIpV4),
      access_ip_v6: cdktf.stringToTerraform(this._accessIpV6),
      admin_pass: cdktf.stringToTerraform(this._adminPass),
      auto_recovery: cdktf.booleanToTerraform(this._autoRecovery),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      config_drive: cdktf.booleanToTerraform(this._configDrive),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      flavor_name: cdktf.stringToTerraform(this._flavorName),
      image_id: cdktf.stringToTerraform(this._imageId),
      image_name: cdktf.stringToTerraform(this._imageName),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      power_state: cdktf.stringToTerraform(this._powerState),
      region: cdktf.stringToTerraform(this._region),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      stop_before_destroy: cdktf.booleanToTerraform(this._stopBeforeDestroy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      block_device: cdktf.listMapper(computeInstanceV2BlockDeviceToTerraform)(this._blockDevice),
      network: cdktf.listMapper(computeInstanceV2NetworkToTerraform)(this._network),
      scheduler_hints: cdktf.listMapper(computeInstanceV2SchedulerHintsToTerraform)(this._schedulerHints),
      timeouts: computeInstanceV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
