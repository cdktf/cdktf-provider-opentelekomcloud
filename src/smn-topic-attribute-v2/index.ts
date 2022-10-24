// https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmnTopicAttributeV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2#attribute_name SmnTopicAttributeV2#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2#id SmnTopicAttributeV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2#topic_attribute SmnTopicAttributeV2#topic_attribute}
  */
  readonly topicAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2#topic_urn SmnTopicAttributeV2#topic_urn}
  */
  readonly topicUrn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2 opentelekomcloud_smn_topic_attribute_v2}
*/
export class SmnTopicAttributeV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_smn_topic_attribute_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2 opentelekomcloud_smn_topic_attribute_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmnTopicAttributeV2Config
  */
  public constructor(scope: Construct, id: string, config: SmnTopicAttributeV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_smn_topic_attribute_v2',
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
    this._attributeName = config.attributeName;
    this._id = config.id;
    this._topicAttribute = config.topicAttribute;
    this._topicUrn = config.topicUrn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
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

  // topic_attribute - computed: false, optional: false, required: true
  private _topicAttribute?: string; 
  public get topicAttribute() {
    return this.getStringAttribute('topic_attribute');
  }
  public set topicAttribute(value: string) {
    this._topicAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicAttributeInput() {
    return this._topicAttribute;
  }

  // topic_urn - computed: false, optional: false, required: true
  private _topicUrn?: string; 
  public get topicUrn() {
    return this.getStringAttribute('topic_urn');
  }
  public set topicUrn(value: string) {
    this._topicUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicUrnInput() {
    return this._topicUrn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_name: cdktf.stringToTerraform(this._attributeName),
      id: cdktf.stringToTerraform(this._id),
      topic_attribute: cdktf.stringToTerraform(this._topicAttribute),
      topic_urn: cdktf.stringToTerraform(this._topicUrn),
    };
  }
}
