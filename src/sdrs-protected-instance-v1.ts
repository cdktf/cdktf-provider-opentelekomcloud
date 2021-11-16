// https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdrsProtectedInstanceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#delete_target_eip SdrsProtectedInstanceV1#delete_target_eip}
  */
  readonly deleteTargetEip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#delete_target_server SdrsProtectedInstanceV1#delete_target_server}
  */
  readonly deleteTargetServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#description SdrsProtectedInstanceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#group_id SdrsProtectedInstanceV1#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#ip_address SdrsProtectedInstanceV1#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#name SdrsProtectedInstanceV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#server_id SdrsProtectedInstanceV1#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#subnet_id SdrsProtectedInstanceV1#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#tags SdrsProtectedInstanceV1#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#timeouts SdrsProtectedInstanceV1#timeouts}
  */
  readonly timeouts?: SdrsProtectedInstanceV1Timeouts;
}
export interface SdrsProtectedInstanceV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#create SdrsProtectedInstanceV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html#delete SdrsProtectedInstanceV1#delete}
  */
  readonly delete?: string;
}

function sdrsProtectedInstanceV1TimeoutsToTerraform(struct?: SdrsProtectedInstanceV1TimeoutsOutputReference | SdrsProtectedInstanceV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class SdrsProtectedInstanceV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html opentelekomcloud_sdrs_protected_instance_v1}
*/
export class SdrsProtectedInstanceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_sdrs_protected_instance_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protected_instance_v1.html opentelekomcloud_sdrs_protected_instance_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdrsProtectedInstanceV1Config
  */
  public constructor(scope: Construct, id: string, config: SdrsProtectedInstanceV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_sdrs_protected_instance_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deleteTargetEip = config.deleteTargetEip;
    this._deleteTargetServer = config.deleteTargetServer;
    this._description = config.description;
    this._groupId = config.groupId;
    this._ipAddress = config.ipAddress;
    this._name = config.name;
    this._serverId = config.serverId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delete_target_eip - computed: false, optional: true, required: false
  private _deleteTargetEip?: boolean | cdktf.IResolvable | undefined; 
  public get deleteTargetEip() {
    return this.getBooleanAttribute('delete_target_eip') as any;
  }
  public set deleteTargetEip(value: boolean | cdktf.IResolvable | undefined) {
    this._deleteTargetEip = value;
  }
  public resetDeleteTargetEip() {
    this._deleteTargetEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteTargetEipInput() {
    return this._deleteTargetEip
  }

  // delete_target_server - computed: false, optional: true, required: false
  private _deleteTargetServer?: boolean | cdktf.IResolvable | undefined; 
  public get deleteTargetServer() {
    return this.getBooleanAttribute('delete_target_server') as any;
  }
  public set deleteTargetServer(value: boolean | cdktf.IResolvable | undefined) {
    this._deleteTargetServer = value;
  }
  public resetDeleteTargetServer() {
    this._deleteTargetServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteTargetServerInput() {
    return this._deleteTargetServer
  }

  // description - computed: false, optional: true, required: false
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

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string | undefined; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
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
    return this._name
  }

  // priority_station - computed: true, optional: false, required: false
  public get priorityStation() {
    return this.getStringAttribute('priority_station');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string | undefined; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SdrsProtectedInstanceV1Timeouts | undefined; 
  private __timeoutsOutput = new SdrsProtectedInstanceV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SdrsProtectedInstanceV1Timeouts | undefined) {
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
      delete_target_eip: cdktf.booleanToTerraform(this._deleteTargetEip),
      delete_target_server: cdktf.booleanToTerraform(this._deleteTargetServer),
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.stringToTerraform(this._groupId),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      name: cdktf.stringToTerraform(this._name),
      server_id: cdktf.stringToTerraform(this._serverId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: sdrsProtectedInstanceV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
