/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ErRouteTableV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3#description ErRouteTableV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3#id ErRouteTableV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3#instance_id ErRouteTableV3#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3#name ErRouteTableV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3#tags ErRouteTableV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3#timeouts ErRouteTableV3#timeouts}
  */
  readonly timeouts?: ErRouteTableV3Timeouts;
}
export interface ErRouteTableV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3#create ErRouteTableV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3#delete ErRouteTableV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3#update ErRouteTableV3#update}
  */
  readonly update?: string;
}

export function erRouteTableV3TimeoutsToTerraform(struct?: ErRouteTableV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function erRouteTableV3TimeoutsToHclTerraform(struct?: ErRouteTableV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ErRouteTableV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ErRouteTableV3Timeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErRouteTableV3Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3 opentelekomcloud_er_route_table_v3}
*/
export class ErRouteTableV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_er_route_table_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ErRouteTableV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ErRouteTableV3 to import
  * @param importFromId The id of the existing ErRouteTableV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ErRouteTableV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_er_route_table_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/er_route_table_v3 opentelekomcloud_er_route_table_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ErRouteTableV3Config
  */
  public constructor(scope: Construct, id: string, config: ErRouteTableV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_er_route_table_v3',
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
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_default_association - computed: true, optional: false, required: false
  public get isDefaultAssociation() {
    return this.getBooleanAttribute('is_default_association');
  }

  // is_default_propagation - computed: true, optional: false, required: false
  public get isDefaultPropagation() {
    return this.getBooleanAttribute('is_default_propagation');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ErRouteTableV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ErRouteTableV3Timeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: erRouteTableV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: erRouteTableV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ErRouteTableV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
