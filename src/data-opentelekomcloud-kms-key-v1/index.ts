// https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudKmsKeyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1#default_key_flag DataOpentelekomcloudKmsKeyV1#default_key_flag}
  */
  readonly defaultKeyFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1#domain_id DataOpentelekomcloudKmsKeyV1#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1#id DataOpentelekomcloudKmsKeyV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1#key_alias DataOpentelekomcloudKmsKeyV1#key_alias}
  */
  readonly keyAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1#key_description DataOpentelekomcloudKmsKeyV1#key_description}
  */
  readonly keyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1#key_id DataOpentelekomcloudKmsKeyV1#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1#key_state DataOpentelekomcloudKmsKeyV1#key_state}
  */
  readonly keyState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1#origin DataOpentelekomcloudKmsKeyV1#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1#realm DataOpentelekomcloudKmsKeyV1#realm}
  */
  readonly realm?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1 opentelekomcloud_kms_key_v1}
*/
export class DataOpentelekomcloudKmsKeyV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_kms_key_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_key_v1 opentelekomcloud_kms_key_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudKmsKeyV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudKmsKeyV1Config = {}) {
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
    this._defaultKeyFlag = config.defaultKeyFlag;
    this._domainId = config.domainId;
    this._id = config.id;
    this._keyAlias = config.keyAlias;
    this._keyDescription = config.keyDescription;
    this._keyId = config.keyId;
    this._keyState = config.keyState;
    this._origin = config.origin;
    this._realm = config.realm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // default_key_flag - computed: true, optional: true, required: false
  private _defaultKeyFlag?: string; 
  public get defaultKeyFlag() {
    return this.getStringAttribute('default_key_flag');
  }
  public set defaultKeyFlag(value: string) {
    this._defaultKeyFlag = value;
  }
  public resetDefaultKeyFlag() {
    this._defaultKeyFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultKeyFlagInput() {
    return this._defaultKeyFlag;
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
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

  // key_alias - computed: true, optional: true, required: false
  private _keyAlias?: string; 
  public get keyAlias() {
    return this.getStringAttribute('key_alias');
  }
  public set keyAlias(value: string) {
    this._keyAlias = value;
  }
  public resetKeyAlias() {
    this._keyAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAliasInput() {
    return this._keyAlias;
  }

  // key_description - computed: true, optional: true, required: false
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

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_state - computed: true, optional: true, required: false
  private _keyState?: string; 
  public get keyState() {
    return this.getStringAttribute('key_state');
  }
  public set keyState(value: string) {
    this._keyState = value;
  }
  public resetKeyState() {
    this._keyState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStateInput() {
    return this._keyState;
  }

  // origin - computed: true, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

  // scheduled_deletion_date - computed: true, optional: false, required: false
  public get scheduledDeletionDate() {
    return this.getStringAttribute('scheduled_deletion_date');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_key_flag: cdktf.stringToTerraform(this._defaultKeyFlag),
      domain_id: cdktf.stringToTerraform(this._domainId),
      id: cdktf.stringToTerraform(this._id),
      key_alias: cdktf.stringToTerraform(this._keyAlias),
      key_description: cdktf.stringToTerraform(this._keyDescription),
      key_id: cdktf.stringToTerraform(this._keyId),
      key_state: cdktf.stringToTerraform(this._keyState),
      origin: cdktf.stringToTerraform(this._origin),
      realm: cdktf.stringToTerraform(this._realm),
    };
  }
}
