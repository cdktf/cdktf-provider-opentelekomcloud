// https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvsVolumeV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#availability_zone EvsVolumeV3#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#backup_id EvsVolumeV3#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#cascade EvsVolumeV3#cascade}
  */
  readonly cascade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#description EvsVolumeV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#device_type EvsVolumeV3#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#image_id EvsVolumeV3#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#kms_id EvsVolumeV3#kms_id}
  */
  readonly kmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#multiattach EvsVolumeV3#multiattach}
  */
  readonly multiattach?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#name EvsVolumeV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#size EvsVolumeV3#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#snapshot_id EvsVolumeV3#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#tags EvsVolumeV3#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#volume_type EvsVolumeV3#volume_type}
  */
  readonly volumeType: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#timeouts EvsVolumeV3#timeouts}
  */
  readonly timeouts?: EvsVolumeV3Timeouts;
}
export class EvsVolumeV3Attachment extends cdktf.ComplexComputedList {

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
}
export interface EvsVolumeV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#create EvsVolumeV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html#delete EvsVolumeV3#delete}
  */
  readonly delete?: string;
}

export function evsVolumeV3TimeoutsToTerraform(struct?: EvsVolumeV3TimeoutsOutputReference | EvsVolumeV3Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class EvsVolumeV3TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EvsVolumeV3Timeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvsVolumeV3Timeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html opentelekomcloud_evs_volume_v3}
*/
export class EvsVolumeV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_evs_volume_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/evs_volume_v3.html opentelekomcloud_evs_volume_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvsVolumeV3Config
  */
  public constructor(scope: Construct, id: string, config: EvsVolumeV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_evs_volume_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._backupId = config.backupId;
    this._cascade = config.cascade;
    this._description = config.description;
    this._deviceType = config.deviceType;
    this._imageId = config.imageId;
    this._kmsId = config.kmsId;
    this._multiattach = config.multiattach;
    this._name = config.name;
    this._size = config.size;
    this._snapshotId = config.snapshotId;
    this._tags = config.tags;
    this._volumeType = config.volumeType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment - computed: true, optional: false, required: false
  public attachment(index: string) {
    return new EvsVolumeV3Attachment(this, 'attachment', index);
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

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // cascade - computed: false, optional: true, required: false
  private _cascade?: boolean | cdktf.IResolvable; 
  public get cascade() {
    return this.getBooleanAttribute('cascade') as any;
  }
  public set cascade(value: boolean | cdktf.IResolvable) {
    this._cascade = value;
  }
  public resetCascade() {
    this._cascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeInput() {
    return this._cascade;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: true, required: false
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

  // multiattach - computed: false, optional: true, required: false
  private _multiattach?: boolean | cdktf.IResolvable; 
  public get multiattach() {
    return this.getBooleanAttribute('multiattach') as any;
  }
  public set multiattach(value: boolean | cdktf.IResolvable) {
    this._multiattach = value;
  }
  public resetMultiattach() {
    this._multiattach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiattachInput() {
    return this._multiattach;
  }

  // name - computed: false, optional: true, required: false
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

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // wwn - computed: true, optional: false, required: false
  public get wwn() {
    return this.getStringAttribute('wwn');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EvsVolumeV3TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EvsVolumeV3Timeouts) {
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
      backup_id: cdktf.stringToTerraform(this._backupId),
      cascade: cdktf.booleanToTerraform(this._cascade),
      description: cdktf.stringToTerraform(this._description),
      device_type: cdktf.stringToTerraform(this._deviceType),
      image_id: cdktf.stringToTerraform(this._imageId),
      kms_id: cdktf.stringToTerraform(this._kmsId),
      multiattach: cdktf.booleanToTerraform(this._multiattach),
      name: cdktf.stringToTerraform(this._name),
      size: cdktf.numberToTerraform(this._size),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      volume_type: cdktf.stringToTerraform(this._volumeType),
      timeouts: evsVolumeV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
