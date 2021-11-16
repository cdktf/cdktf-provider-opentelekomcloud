// https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImsImageV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#cmk_id ImsImageV2#cmk_id}
  */
  readonly cmkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#description ImsImageV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#image_url ImsImageV2#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#instance_id ImsImageV2#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#is_config ImsImageV2#is_config}
  */
  readonly isConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#max_ram ImsImageV2#max_ram}
  */
  readonly maxRam?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#min_disk ImsImageV2#min_disk}
  */
  readonly minDisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#min_ram ImsImageV2#min_ram}
  */
  readonly minRam?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#name ImsImageV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#os_version ImsImageV2#os_version}
  */
  readonly osVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#tags ImsImageV2#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#type ImsImageV2#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#timeouts ImsImageV2#timeouts}
  */
  readonly timeouts?: ImsImageV2Timeouts;
}
export interface ImsImageV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#create ImsImageV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html#delete ImsImageV2#delete}
  */
  readonly delete?: string;
}

function imsImageV2TimeoutsToTerraform(struct?: ImsImageV2TimeoutsOutputReference | ImsImageV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ImsImageV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html opentelekomcloud_ims_image_v2}
*/
export class ImsImageV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_ims_image_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_image_v2.html opentelekomcloud_ims_image_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImsImageV2Config
  */
  public constructor(scope: Construct, id: string, config: ImsImageV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_ims_image_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cmkId = config.cmkId;
    this._description = config.description;
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cmk_id - computed: false, optional: true, required: false
  private _cmkId?: string | undefined; 
  public get cmkId() {
    return this.getStringAttribute('cmk_id');
  }
  public set cmkId(value: string | undefined) {
    this._cmkId = value;
  }
  public resetCmkId() {
    this._cmkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkIdInput() {
    return this._cmkId
  }

  // data_origin - computed: true, optional: false, required: false
  public get dataOrigin() {
    return this.getStringAttribute('data_origin');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_size - computed: true, optional: false, required: false
  public get imageSize() {
    return this.getStringAttribute('image_size');
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string | undefined; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string | undefined) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string | undefined; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string | undefined) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId
  }

  // is_config - computed: false, optional: true, required: false
  private _isConfig?: boolean | cdktf.IResolvable | undefined; 
  public get isConfig() {
    return this.getBooleanAttribute('is_config') as any;
  }
  public set isConfig(value: boolean | cdktf.IResolvable | undefined) {
    this._isConfig = value;
  }
  public resetIsConfig() {
    this._isConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConfigInput() {
    return this._isConfig
  }

  // max_ram - computed: false, optional: true, required: false
  private _maxRam?: number | undefined; 
  public get maxRam() {
    return this.getNumberAttribute('max_ram');
  }
  public set maxRam(value: number | undefined) {
    this._maxRam = value;
  }
  public resetMaxRam() {
    this._maxRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRamInput() {
    return this._maxRam
  }

  // min_disk - computed: false, optional: true, required: false
  private _minDisk?: number | undefined; 
  public get minDisk() {
    return this.getNumberAttribute('min_disk');
  }
  public set minDisk(value: number | undefined) {
    this._minDisk = value;
  }
  public resetMinDisk() {
    this._minDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDiskInput() {
    return this._minDisk
  }

  // min_ram - computed: false, optional: true, required: false
  private _minRam?: number | undefined; 
  public get minRam() {
    return this.getNumberAttribute('min_ram');
  }
  public set minRam(value: number | undefined) {
    this._minRam = value;
  }
  public resetMinRam() {
    this._minRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRamInput() {
    return this._minRam
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

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string | undefined; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string | undefined) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion
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

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ImsImageV2Timeouts | undefined; 
  private __timeoutsOutput = new ImsImageV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ImsImageV2Timeouts | undefined) {
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
      cmk_id: cdktf.stringToTerraform(this._cmkId),
      description: cdktf.stringToTerraform(this._description),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_config: cdktf.booleanToTerraform(this._isConfig),
      max_ram: cdktf.numberToTerraform(this._maxRam),
      min_disk: cdktf.numberToTerraform(this._minDisk),
      min_ram: cdktf.numberToTerraform(this._minRam),
      name: cdktf.stringToTerraform(this._name),
      os_version: cdktf.stringToTerraform(this._osVersion),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      timeouts: imsImageV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
