/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_policy_definitions_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudRmsPolicyDefinitionsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_policy_definitions_v1#id DataOpentelekomcloudRmsPolicyDefinitionsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_policy_definitions_v1#keywords DataOpentelekomcloudRmsPolicyDefinitionsV1#keywords}
  */
  readonly keywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_policy_definitions_v1#name DataOpentelekomcloudRmsPolicyDefinitionsV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_policy_definitions_v1#policy_rule_type DataOpentelekomcloudRmsPolicyDefinitionsV1#policy_rule_type}
  */
  readonly policyRuleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_policy_definitions_v1#policy_type DataOpentelekomcloudRmsPolicyDefinitionsV1#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_policy_definitions_v1#trigger_type DataOpentelekomcloudRmsPolicyDefinitionsV1#trigger_type}
  */
  readonly triggerType?: string;
}
export interface DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions {
}

export function dataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsToTerraform(struct?: DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsToHclTerraform(struct?: DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keywords - computed: true, optional: false, required: false
  public get keywords() {
    return this.getListAttribute('keywords');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // policy_rule - computed: true, optional: false, required: false
  public get policyRule() {
    return this.getStringAttribute('policy_rule');
  }

  // policy_rule_type - computed: true, optional: false, required: false
  public get policyRuleType() {
    return this.getStringAttribute('policy_rule_type');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // trigger_type - computed: true, optional: false, required: false
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
}

export class DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference {
    return new DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_policy_definitions_v1 opentelekomcloud_rms_policy_definitions_v1}
*/
export class DataOpentelekomcloudRmsPolicyDefinitionsV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_rms_policy_definitions_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudRmsPolicyDefinitionsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudRmsPolicyDefinitionsV1 to import
  * @param importFromId The id of the existing DataOpentelekomcloudRmsPolicyDefinitionsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_policy_definitions_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudRmsPolicyDefinitionsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_rms_policy_definitions_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_policy_definitions_v1 opentelekomcloud_rms_policy_definitions_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudRmsPolicyDefinitionsV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudRmsPolicyDefinitionsV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rms_policy_definitions_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.44',
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
    this._id = config.id;
    this._keywords = config.keywords;
    this._name = config.name;
    this._policyRuleType = config.policyRuleType;
    this._policyType = config.policyType;
    this._triggerType = config.triggerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definitions - computed: true, optional: false, required: false
  private _definitions = new DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList(this, "definitions", false);
  public get definitions() {
    return this._definitions;
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

  // keywords - computed: false, optional: true, required: false
  private _keywords?: string[]; 
  public get keywords() {
    return this.getListAttribute('keywords');
  }
  public set keywords(value: string[]) {
    this._keywords = value;
  }
  public resetKeywords() {
    this._keywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
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

  // policy_rule_type - computed: false, optional: true, required: false
  private _policyRuleType?: string; 
  public get policyRuleType() {
    return this.getStringAttribute('policy_rule_type');
  }
  public set policyRuleType(value: string) {
    this._policyRuleType = value;
  }
  public resetPolicyRuleType() {
    this._policyRuleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleTypeInput() {
    return this._policyRuleType;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // trigger_type - computed: false, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keywords),
      name: cdktf.stringToTerraform(this._name),
      policy_rule_type: cdktf.stringToTerraform(this._policyRuleType),
      policy_type: cdktf.stringToTerraform(this._policyType),
      trigger_type: cdktf.stringToTerraform(this._triggerType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keywords: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keywords),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_rule_type: {
        value: cdktf.stringToHclTerraform(this._policyRuleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_type: {
        value: cdktf.stringToHclTerraform(this._triggerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
