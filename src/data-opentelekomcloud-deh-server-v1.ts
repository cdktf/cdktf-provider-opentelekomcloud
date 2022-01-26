// https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_server_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudDehServerV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_server_v1#dedicated_host_id DataOpentelekomcloudDehServerV1#dedicated_host_id}
  */
  readonly dedicatedHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_server_v1#region DataOpentelekomcloudDehServerV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_server_v1#server_id DataOpentelekomcloudDehServerV1#server_id}
  */
  readonly serverId?: string;
  /**
  * addresses block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_server_v1#addresses DataOpentelekomcloudDehServerV1#addresses}
  */
  readonly addresses?: DataOpentelekomcloudDehServerV1Addresses[] | cdktf.IResolvable;
}
export interface DataOpentelekomcloudDehServerV1Addresses {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_server_v1#fixed_ip_v4 DataOpentelekomcloudDehServerV1#fixed_ip_v4}
  */
  readonly fixedIpV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_server_v1#name DataOpentelekomcloudDehServerV1#name}
  */
  readonly name?: string;
}

export function dataOpentelekomcloudDehServerV1AddressesToTerraform(struct?: DataOpentelekomcloudDehServerV1Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_ip_v4: cdktf.stringToTerraform(struct!.fixedIpV4),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_server_v1 opentelekomcloud_deh_server_v1}
*/
export class DataOpentelekomcloudDehServerV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_deh_server_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_server_v1 opentelekomcloud_deh_server_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudDehServerV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudDehServerV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_deh_server_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dedicatedHostId = config.dedicatedHostId;
    this._region = config.region;
    this._serverId = config.serverId;
    this._addresses = config.addresses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_host_id - computed: false, optional: true, required: false
  private _dedicatedHostId?: string; 
  public get dedicatedHostId() {
    return this.getStringAttribute('dedicated_host_id');
  }
  public set dedicatedHostId(value: string) {
    this._dedicatedHostId = value;
  }
  public resetDedicatedHostId() {
    this._dedicatedHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostIdInput() {
    return this._dedicatedHostId;
  }

  // flavor - computed: true, optional: false, required: false
  public flavor(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'flavor').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'metadata').lookup(key);
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // server_id - computed: false, optional: true, required: false
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  public resetServerId() {
    this._serverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: DataOpentelekomcloudDehServerV1Addresses[] | cdktf.IResolvable; 
  public get addresses() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('addresses');
  }
  public set addresses(value: DataOpentelekomcloudDehServerV1Addresses[] | cdktf.IResolvable) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_host_id: cdktf.stringToTerraform(this._dedicatedHostId),
      region: cdktf.stringToTerraform(this._region),
      server_id: cdktf.stringToTerraform(this._serverId),
      addresses: cdktf.listMapper(dataOpentelekomcloudDehServerV1AddressesToTerraform)(this._addresses),
    };
  }
}
