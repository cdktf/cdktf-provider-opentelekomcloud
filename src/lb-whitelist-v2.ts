// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbWhitelistV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2.html#enable_whitelist LbWhitelistV2#enable_whitelist}
  */
  readonly enableWhitelist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2.html#listener_id LbWhitelistV2#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2.html#tenant_id LbWhitelistV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2.html#whitelist LbWhitelistV2#whitelist}
  */
  readonly whitelist?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2.html#timeouts LbWhitelistV2#timeouts}
  */
  readonly timeouts?: LbWhitelistV2Timeouts;
}
export interface LbWhitelistV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2.html#create LbWhitelistV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2.html#delete LbWhitelistV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2.html#update LbWhitelistV2#update}
  */
  readonly update?: string;
}

function lbWhitelistV2TimeoutsToTerraform(struct?: LbWhitelistV2TimeoutsOutputReference | LbWhitelistV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class LbWhitelistV2TimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2.html opentelekomcloud_lb_whitelist_v2}
*/
export class LbWhitelistV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_whitelist_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2.html opentelekomcloud_lb_whitelist_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbWhitelistV2Config
  */
  public constructor(scope: Construct, id: string, config: LbWhitelistV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_whitelist_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enableWhitelist = config.enableWhitelist;
    this._listenerId = config.listenerId;
    this._tenantId = config.tenantId;
    this._whitelist = config.whitelist;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_whitelist - computed: false, optional: true, required: false
  private _enableWhitelist?: boolean | cdktf.IResolvable | undefined; 
  public get enableWhitelist() {
    return this.getBooleanAttribute('enable_whitelist') as any;
  }
  public set enableWhitelist(value: boolean | cdktf.IResolvable | undefined) {
    this._enableWhitelist = value;
  }
  public resetEnableWhitelist() {
    this._enableWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWhitelistInput() {
    return this._enableWhitelist
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string | undefined; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist?: string | undefined; 
  public get whitelist() {
    return this.getStringAttribute('whitelist');
  }
  public set whitelist(value: string | undefined) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbWhitelistV2Timeouts | undefined; 
  private __timeoutsOutput = new LbWhitelistV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LbWhitelistV2Timeouts | undefined) {
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
      enable_whitelist: cdktf.booleanToTerraform(this._enableWhitelist),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      whitelist: cdktf.stringToTerraform(this._whitelist),
      timeouts: lbWhitelistV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
