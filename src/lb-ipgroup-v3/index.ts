// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_ipgroup_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbIpgroupV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_ipgroup_v3#description LbIpgroupV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_ipgroup_v3#id LbIpgroupV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_ipgroup_v3#name LbIpgroupV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_ipgroup_v3#project_id LbIpgroupV3#project_id}
  */
  readonly projectId?: string;
  /**
  * ip_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_ipgroup_v3#ip_list LbIpgroupV3#ip_list}
  */
  readonly ipList: LbIpgroupV3IpList[] | cdktf.IResolvable;
}
export interface LbIpgroupV3IpList {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_ipgroup_v3#description LbIpgroupV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_ipgroup_v3#ip LbIpgroupV3#ip}
  */
  readonly ip: string;
}

export function lbIpgroupV3IpListToTerraform(struct?: LbIpgroupV3IpList | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export class LbIpgroupV3IpListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LbIpgroupV3IpList | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbIpgroupV3IpList | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._ip = value.ip;
    }
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class LbIpgroupV3IpListList extends cdktf.ComplexList {
  public internalValue? : LbIpgroupV3IpList[] | cdktf.IResolvable

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
  public get(index: number): LbIpgroupV3IpListOutputReference {
    return new LbIpgroupV3IpListOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_ipgroup_v3 opentelekomcloud_lb_ipgroup_v3}
*/
export class LbIpgroupV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lb_ipgroup_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_ipgroup_v3 opentelekomcloud_lb_ipgroup_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbIpgroupV3Config
  */
  public constructor(scope: Construct, id: string, config: LbIpgroupV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_ipgroup_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.34.1',
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
    this._name = config.name;
    this._projectId = config.projectId;
    this._ipList.internalValue = config.ipList;
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

  // listeners - computed: true, optional: false, required: false
  public get listeners() {
    return cdktf.Fn.tolist(this.getListAttribute('listeners'));
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // ip_list - computed: false, optional: false, required: true
  private _ipList = new LbIpgroupV3IpListList(this, "ip_list", true);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: LbIpgroupV3IpList[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      ip_list: cdktf.listMapper(lbIpgroupV3IpListToTerraform, true)(this._ipList.internalValue),
    };
  }
}
