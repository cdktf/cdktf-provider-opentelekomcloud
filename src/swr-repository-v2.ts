// https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_repository_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwrRepositoryV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_repository_v2#category SwrRepositoryV2#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_repository_v2#description SwrRepositoryV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_repository_v2#is_public SwrRepositoryV2#is_public}
  */
  readonly isPublic: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_repository_v2#name SwrRepositoryV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_repository_v2#organization SwrRepositoryV2#organization}
  */
  readonly organization: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_repository_v2#timeouts SwrRepositoryV2#timeouts}
  */
  readonly timeouts?: SwrRepositoryV2Timeouts;
}
export interface SwrRepositoryV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_repository_v2#default SwrRepositoryV2#default}
  */
  readonly default?: string;
}

export function swrRepositoryV2TimeoutsToTerraform(struct?: SwrRepositoryV2TimeoutsOutputReference | SwrRepositoryV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class SwrRepositoryV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SwrRepositoryV2Timeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwrRepositoryV2Timeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_repository_v2 opentelekomcloud_swr_repository_v2}
*/
export class SwrRepositoryV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_swr_repository_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_repository_v2 opentelekomcloud_swr_repository_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwrRepositoryV2Config
  */
  public constructor(scope: Construct, id: string, config: SwrRepositoryV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_swr_repository_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._category = config.category;
    this._description = config.description;
    this._isPublic = config.isPublic;
    this._name = config.name;
    this._organization = config.organization;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_path - computed: true, optional: false, required: false
  public get internalPath() {
    return this.getStringAttribute('internal_path');
  }

  // is_public - computed: false, optional: false, required: true
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
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

  // num_images - computed: true, optional: false, required: false
  public get numImages() {
    return this.getNumberAttribute('num_images');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // repository_id - computed: true, optional: false, required: false
  public get repositoryId() {
    return this.getNumberAttribute('repository_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SwrRepositoryV2TimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SwrRepositoryV2Timeouts) {
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
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      timeouts: swrRepositoryV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
