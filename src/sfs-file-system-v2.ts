// https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SfsFileSystemV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#access_level SfsFileSystemV2#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#access_to SfsFileSystemV2#access_to}
  */
  readonly accessTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#access_type SfsFileSystemV2#access_type}
  */
  readonly accessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#availability_zone SfsFileSystemV2#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#description SfsFileSystemV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#is_public SfsFileSystemV2#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#metadata SfsFileSystemV2#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#name SfsFileSystemV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#region SfsFileSystemV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#share_proto SfsFileSystemV2#share_proto}
  */
  readonly shareProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#size SfsFileSystemV2#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#tags SfsFileSystemV2#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#timeouts SfsFileSystemV2#timeouts}
  */
  readonly timeouts?: SfsFileSystemV2Timeouts;
}
export interface SfsFileSystemV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#create SfsFileSystemV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html#delete SfsFileSystemV2#delete}
  */
  readonly delete?: string;
}

function sfsFileSystemV2TimeoutsToTerraform(struct?: SfsFileSystemV2TimeoutsOutputReference | SfsFileSystemV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class SfsFileSystemV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html opentelekomcloud_sfs_file_system_v2}
*/
export class SfsFileSystemV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_sfs_file_system_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_file_system_v2.html opentelekomcloud_sfs_file_system_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SfsFileSystemV2Config
  */
  public constructor(scope: Construct, id: string, config: SfsFileSystemV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_sfs_file_system_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessLevel = config.accessLevel;
    this._accessTo = config.accessTo;
    this._accessType = config.accessType;
    this._availabilityZone = config.availabilityZone;
    this._description = config.description;
    this._isPublic = config.isPublic;
    this._metadata = config.metadata;
    this._name = config.name;
    this._region = config.region;
    this._shareProto = config.shareProto;
    this._size = config.size;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string | undefined; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string | undefined) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel
  }

  // access_rule_status - computed: true, optional: false, required: false
  public get accessRuleStatus() {
    return this.getStringAttribute('access_rule_status');
  }

  // access_to - computed: false, optional: true, required: false
  private _accessTo?: string | undefined; 
  public get accessTo() {
    return this.getStringAttribute('access_to');
  }
  public set accessTo(value: string | undefined) {
    this._accessTo = value;
  }
  public resetAccessTo() {
    this._accessTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessToInput() {
    return this._accessTo
  }

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string | undefined; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string | undefined) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType
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

  // description - computed: true, optional: true, required: false
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

  // export_location - computed: true, optional: false, required: false
  public get exportLocation() {
    return this.getStringAttribute('export_location');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable | undefined; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public') as any;
  }
  public set isPublic(value: boolean | cdktf.IResolvable | undefined) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic
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

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // share_access_id - computed: true, optional: false, required: false
  public get shareAccessId() {
    return this.getStringAttribute('share_access_id');
  }

  // share_proto - computed: false, optional: true, required: false
  private _shareProto?: string | undefined; 
  public get shareProto() {
    return this.getStringAttribute('share_proto');
  }
  public set shareProto(value: string | undefined) {
    this._shareProto = value;
  }
  public resetShareProto() {
    this._shareProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareProtoInput() {
    return this._shareProto
  }

  // share_type - computed: true, optional: false, required: false
  public get shareType() {
    return this.getStringAttribute('share_type');
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
    return this._size
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SfsFileSystemV2Timeouts | undefined; 
  private __timeoutsOutput = new SfsFileSystemV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SfsFileSystemV2Timeouts | undefined) {
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
      access_level: cdktf.stringToTerraform(this._accessLevel),
      access_to: cdktf.stringToTerraform(this._accessTo),
      access_type: cdktf.stringToTerraform(this._accessType),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      description: cdktf.stringToTerraform(this._description),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      share_proto: cdktf.stringToTerraform(this._shareProto),
      size: cdktf.numberToTerraform(this._size),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: sfsFileSystemV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
