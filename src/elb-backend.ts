// https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_backend.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElbBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_backend.html#address ElbBackend#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_backend.html#listener_id ElbBackend#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_backend.html#server_id ElbBackend#server_id}
  */
  readonly serverId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_backend.html#timeouts ElbBackend#timeouts}
  */
  readonly timeouts?: ElbBackendTimeouts;
}
export interface ElbBackendTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_backend.html#create ElbBackend#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_backend.html#delete ElbBackend#delete}
  */
  readonly delete?: string;
}

function elbBackendTimeoutsToTerraform(struct?: ElbBackendTimeoutsOutputReference | ElbBackendTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ElbBackendTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_backend.html opentelekomcloud_elb_backend}
*/
export class ElbBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_elb_backend";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_backend.html opentelekomcloud_elb_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElbBackendConfig
  */
  public constructor(scope: Construct, id: string, config: ElbBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_elb_backend',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._address = config.address;
    this._listenerId = config.listenerId;
    this._serverId = config.serverId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ElbBackendTimeouts | undefined; 
  private __timeoutsOutput = new ElbBackendTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ElbBackendTimeouts | undefined) {
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
      address: cdktf.stringToTerraform(this._address),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      server_id: cdktf.stringToTerraform(this._serverId),
      timeouts: elbBackendTimeoutsToTerraform(this._timeouts),
    };
  }
}
