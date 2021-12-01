// https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudKmsDataKeyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1.html#datakey_length DataOpentelekomcloudKmsDataKeyV1#datakey_length}
  */
  readonly datakeyLength: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1.html#encryption_context DataOpentelekomcloudKmsDataKeyV1#encryption_context}
  */
  readonly encryptionContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1.html#key_id DataOpentelekomcloudKmsDataKeyV1#key_id}
  */
  readonly keyId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1.html opentelekomcloud_kms_data_key_v1}
*/
export class DataOpentelekomcloudKmsDataKeyV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_kms_data_key_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1.html opentelekomcloud_kms_data_key_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudKmsDataKeyV1Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudKmsDataKeyV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_kms_data_key_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._datakeyLength = config.datakeyLength;
    this._encryptionContext = config.encryptionContext;
    this._keyId = config.keyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipher_text - computed: true, optional: false, required: false
  public get cipherText() {
    return this.getStringAttribute('cipher_text');
  }

  // datakey_length - computed: false, optional: false, required: true
  private _datakeyLength?: string; 
  public get datakeyLength() {
    return this.getStringAttribute('datakey_length');
  }
  public set datakeyLength(value: string) {
    this._datakeyLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datakeyLengthInput() {
    return this._datakeyLength;
  }

  // encryption_context - computed: false, optional: true, required: false
  private _encryptionContext?: string; 
  public get encryptionContext() {
    return this.getStringAttribute('encryption_context');
  }
  public set encryptionContext(value: string) {
    this._encryptionContext = value;
  }
  public resetEncryptionContext() {
    this._encryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContextInput() {
    return this._encryptionContext;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // plain_text - computed: true, optional: false, required: false
  public get plainText() {
    return this.getStringAttribute('plain_text');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datakey_length: cdktf.stringToTerraform(this._datakeyLength),
      encryption_context: cdktf.stringToTerraform(this._encryptionContext),
      key_id: cdktf.stringToTerraform(this._keyId),
    };
  }
}
