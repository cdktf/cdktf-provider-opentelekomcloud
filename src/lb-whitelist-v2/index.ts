// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbWhitelistV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2#enable_whitelist LbWhitelistV2#enable_whitelist}
  */
  readonly enableWhitelist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2#id LbWhitelistV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2#listener_id LbWhitelistV2#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2#tenant_id LbWhitelistV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2#whitelist LbWhitelistV2#whitelist}
  */
  readonly whitelist?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2 opentelekomcloud_lb_whitelist_v2}
*/
export class LbWhitelistV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lb_whitelist_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_whitelist_v2 opentelekomcloud_lb_whitelist_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbWhitelistV2Config
  */
  public constructor(scope: Construct, id: string, config: LbWhitelistV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_whitelist_v2',
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
    this._enableWhitelist = config.enableWhitelist;
    this._id = config.id;
    this._listenerId = config.listenerId;
    this._tenantId = config.tenantId;
    this._whitelist = config.whitelist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_whitelist - computed: false, optional: true, required: false
  private _enableWhitelist?: boolean | cdktf.IResolvable; 
  public get enableWhitelist() {
    return this.getBooleanAttribute('enable_whitelist');
  }
  public set enableWhitelist(value: boolean | cdktf.IResolvable) {
    this._enableWhitelist = value;
  }
  public resetEnableWhitelist() {
    this._enableWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWhitelistInput() {
    return this._enableWhitelist;
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
    return this._listenerId;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist?: string; 
  public get whitelist() {
    return this.getStringAttribute('whitelist');
  }
  public set whitelist(value: string) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_whitelist: cdktf.booleanToTerraform(this._enableWhitelist),
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      whitelist: cdktf.stringToTerraform(this._whitelist),
    };
  }
}
