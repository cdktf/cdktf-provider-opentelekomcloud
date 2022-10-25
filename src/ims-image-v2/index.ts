// https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImsImageV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#cmk_id ImsImageV2#cmk_id}
  */
  readonly cmkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#description ImsImageV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#id ImsImageV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#image_url ImsImageV2#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#instance_id ImsImageV2#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#is_config ImsImageV2#is_config}
  */
  readonly isConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#max_ram ImsImageV2#max_ram}
  */
  readonly maxRam?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#min_disk ImsImageV2#min_disk}
  */
  readonly minDisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#min_ram ImsImageV2#min_ram}
  */
  readonly minRam?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#name ImsImageV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#os_version ImsImageV2#os_version}
  */
  readonly osVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#tags ImsImageV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#type ImsImageV2#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#timeouts ImsImageV2#timeouts}
  */
  readonly timeouts?: ImsImageV2Timeouts;
}
export interface ImsImageV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#create ImsImageV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2#delete ImsImageV2#delete}
  */
  readonly delete?: string;
}

export function imsImageV2TimeoutsToTerraform(struct?: ImsImageV2TimeoutsOutputReference | ImsImageV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ImsImageV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImsImageV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ImsImageV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2 opentelekomcloud_ims_image_v2}
*/
export class ImsImageV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_ims_image_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2 opentelekomcloud_ims_image_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImsImageV2Config
  */
  public constructor(scope: Construct, id: string, config: ImsImageV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_ims_image_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.31.6',
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
    this._cmkId = config.cmkId;
    this._description = config.description;
    this._id = config.id;
    this._imageUrl = config.imageUrl;
    this._instanceId = config.instanceId;
    this._isConfig = config.isConfig;
    this._maxRam = config.maxRam;
    this._minDisk = config.minDisk;
    this._minRam = config.minRam;
    this._name = config.name;
    this._osVersion = config.osVersion;
    this._tags = config.tags;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cmk_id - computed: false, optional: true, required: false
  private _cmkId?: string; 
  public get cmkId() {
    return this.getStringAttribute('cmk_id');
  }
  public set cmkId(value: string) {
    this._cmkId = value;
  }
  public resetCmkId() {
    this._cmkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkIdInput() {
    return this._cmkId;
  }

  // data_origin - computed: true, optional: false, required: false
  public get dataOrigin() {
    return this.getStringAttribute('data_origin');
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

  // disk_format - computed: true, optional: false, required: false
  public get diskFormat() {
    return this.getStringAttribute('disk_format');
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
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

  // image_size - computed: true, optional: false, required: false
  public get imageSize() {
    return this.getStringAttribute('image_size');
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
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

  // is_config - computed: false, optional: true, required: false
  private _isConfig?: boolean | cdktf.IResolvable; 
  public get isConfig() {
    return this.getBooleanAttribute('is_config');
  }
  public set isConfig(value: boolean | cdktf.IResolvable) {
    this._isConfig = value;
  }
  public resetIsConfig() {
    this._isConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConfigInput() {
    return this._isConfig;
  }

  // max_ram - computed: false, optional: true, required: false
  private _maxRam?: number; 
  public get maxRam() {
    return this.getNumberAttribute('max_ram');
  }
  public set maxRam(value: number) {
    this._maxRam = value;
  }
  public resetMaxRam() {
    this._maxRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRamInput() {
    return this._maxRam;
  }

  // min_disk - computed: false, optional: true, required: false
  private _minDisk?: number; 
  public get minDisk() {
    return this.getNumberAttribute('min_disk');
  }
  public set minDisk(value: number) {
    this._minDisk = value;
  }
  public resetMinDisk() {
    this._minDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDiskInput() {
    return this._minDisk;
  }

  // min_ram - computed: false, optional: true, required: false
  private _minRam?: number; 
  public get minRam() {
    return this.getNumberAttribute('min_ram');
  }
  public set minRam(value: number) {
    this._minRam = value;
  }
  public resetMinRam() {
    this._minRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRamInput() {
    return this._minRam;
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

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ImsImageV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ImsImageV2Timeouts) {
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
      cmk_id: cdktf.stringToTerraform(this._cmkId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_config: cdktf.booleanToTerraform(this._isConfig),
      max_ram: cdktf.numberToTerraform(this._maxRam),
      min_disk: cdktf.numberToTerraform(this._minDisk),
      min_ram: cdktf.numberToTerraform(this._minRam),
      name: cdktf.stringToTerraform(this._name),
      os_version: cdktf.stringToTerraform(this._osVersion),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      timeouts: imsImageV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
