// https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}
  */
  readonly allowCancelDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#id KmsKeyV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#is_enabled KmsKeyV1#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#key_alias KmsKeyV1#key_alias}
  */
  readonly keyAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#key_description KmsKeyV1#key_description}
  */
  readonly keyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#pending_days KmsKeyV1#pending_days}
  */
  readonly pendingDays?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#realm KmsKeyV1#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}
  */
  readonly rotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}
  */
  readonly rotationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1#tags KmsKeyV1#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1 opentelekomcloud_kms_key_v1}
*/
export class KmsKeyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_kms_key_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_key_v1 opentelekomcloud_kms_key_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsKeyV1Config
  */
  public constructor(scope: Construct, id: string, config: KmsKeyV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_kms_key_v1',
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
    this._allowCancelDeletion = config.allowCancelDeletion;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._keyAlias = config.keyAlias;
    this._keyDescription = config.keyDescription;
    this._pendingDays = config.pendingDays;
    this._realm = config.realm;
    this._rotationEnabled = config.rotationEnabled;
    this._rotationInterval = config.rotationInterval;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_cancel_deletion - computed: false, optional: true, required: false
  private _allowCancelDeletion?: boolean | cdktf.IResolvable; 
  public get allowCancelDeletion() {
    return this.getBooleanAttribute('allow_cancel_deletion');
  }
  public set allowCancelDeletion(value: boolean | cdktf.IResolvable) {
    this._allowCancelDeletion = value;
  }
  public resetAllowCancelDeletion() {
    this._allowCancelDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCancelDeletionInput() {
    return this._allowCancelDeletion;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // default_key_flag - computed: true, optional: false, required: false
  public get defaultKeyFlag() {
    return this.getStringAttribute('default_key_flag');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // key_alias - computed: false, optional: false, required: true
  private _keyAlias?: string; 
  public get keyAlias() {
    return this.getStringAttribute('key_alias');
  }
  public set keyAlias(value: string) {
    this._keyAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAliasInput() {
    return this._keyAlias;
  }

  // key_description - computed: false, optional: true, required: false
  private _keyDescription?: string; 
  public get keyDescription() {
    return this.getStringAttribute('key_description');
  }
  public set keyDescription(value: string) {
    this._keyDescription = value;
  }
  public resetKeyDescription() {
    this._keyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDescriptionInput() {
    return this._keyDescription;
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // pending_days - computed: false, optional: true, required: false
  private _pendingDays?: string; 
  public get pendingDays() {
    return this.getStringAttribute('pending_days');
  }
  public set pendingDays(value: string) {
    this._pendingDays = value;
  }
  public resetPendingDays() {
    this._pendingDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDaysInput() {
    return this._pendingDays;
  }

  // realm - computed: true, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // rotation_enabled - computed: false, optional: true, required: false
  private _rotationEnabled?: boolean | cdktf.IResolvable; 
  public get rotationEnabled() {
    return this.getBooleanAttribute('rotation_enabled');
  }
  public set rotationEnabled(value: boolean | cdktf.IResolvable) {
    this._rotationEnabled = value;
  }
  public resetRotationEnabled() {
    this._rotationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationEnabledInput() {
    return this._rotationEnabled;
  }

  // rotation_interval - computed: true, optional: true, required: false
  private _rotationInterval?: number; 
  public get rotationInterval() {
    return this.getNumberAttribute('rotation_interval');
  }
  public set rotationInterval(value: number) {
    this._rotationInterval = value;
  }
  public resetRotationInterval() {
    this._rotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }

  // rotation_number - computed: true, optional: false, required: false
  public get rotationNumber() {
    return this.getNumberAttribute('rotation_number');
  }

  // scheduled_deletion_date - computed: true, optional: false, required: false
  public get scheduledDeletionDate() {
    return this.getStringAttribute('scheduled_deletion_date');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_cancel_deletion: cdktf.booleanToTerraform(this._allowCancelDeletion),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      key_alias: cdktf.stringToTerraform(this._keyAlias),
      key_description: cdktf.stringToTerraform(this._keyDescription),
      pending_days: cdktf.stringToTerraform(this._pendingDays),
      realm: cdktf.stringToTerraform(this._realm),
      rotation_enabled: cdktf.booleanToTerraform(this._rotationEnabled),
      rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
