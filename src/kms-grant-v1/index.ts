// https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_grant_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsGrantV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_grant_v1#grantee_principal KmsGrantV1#grantee_principal}
  */
  readonly granteePrincipal: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_grant_v1#id KmsGrantV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_grant_v1#key_id KmsGrantV1#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_grant_v1#name KmsGrantV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_grant_v1#operations KmsGrantV1#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_grant_v1#retiring_principal KmsGrantV1#retiring_principal}
  */
  readonly retiringPrincipal?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_grant_v1 opentelekomcloud_kms_grant_v1}
*/
export class KmsGrantV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_kms_grant_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/kms_grant_v1 opentelekomcloud_kms_grant_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsGrantV1Config
  */
  public constructor(scope: Construct, id: string, config: KmsGrantV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_kms_grant_v1',
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
    this._granteePrincipal = config.granteePrincipal;
    this._id = config.id;
    this._keyId = config.keyId;
    this._name = config.name;
    this._operations = config.operations;
    this._retiringPrincipal = config.retiringPrincipal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // grantee_principal - computed: false, optional: false, required: true
  private _granteePrincipal?: string; 
  public get granteePrincipal() {
    return this.getStringAttribute('grantee_principal');
  }
  public set granteePrincipal(value: string) {
    this._granteePrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteePrincipalInput() {
    return this._granteePrincipal;
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

  // issuing_principal - computed: true, optional: false, required: false
  public get issuingPrincipal() {
    return this.getStringAttribute('issuing_principal');
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

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // retiring_principal - computed: false, optional: true, required: false
  private _retiringPrincipal?: string; 
  public get retiringPrincipal() {
    return this.getStringAttribute('retiring_principal');
  }
  public set retiringPrincipal(value: string) {
    this._retiringPrincipal = value;
  }
  public resetRetiringPrincipal() {
    this._retiringPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retiringPrincipalInput() {
    return this._retiringPrincipal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      grantee_principal: cdktf.stringToTerraform(this._granteePrincipal),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      name: cdktf.stringToTerraform(this._name),
      operations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operations),
      retiring_principal: cdktf.stringToTerraform(this._retiringPrincipal),
    };
  }
}
