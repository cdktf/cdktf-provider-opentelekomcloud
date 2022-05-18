// https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_nameservers_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudDnsNameserversV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_nameservers_v2#zone_id DataOpentelekomcloudDnsNameserversV2#zone_id}
  */
  readonly zoneId?: string;
  /**
  * nameservers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_nameservers_v2#nameservers DataOpentelekomcloudDnsNameserversV2#nameservers}
  */
  readonly nameservers?: DataOpentelekomcloudDnsNameserversV2Nameservers[] | cdktf.IResolvable;
}
export interface DataOpentelekomcloudDnsNameserversV2Nameservers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_nameservers_v2#hostname DataOpentelekomcloudDnsNameserversV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_nameservers_v2#priority DataOpentelekomcloudDnsNameserversV2#priority}
  */
  readonly priority?: number;
}

export function dataOpentelekomcloudDnsNameserversV2NameserversToTerraform(struct?: DataOpentelekomcloudDnsNameserversV2Nameservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_nameservers_v2 opentelekomcloud_dns_nameservers_v2}
*/
export class DataOpentelekomcloudDnsNameserversV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dns_nameservers_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_nameservers_v2 opentelekomcloud_dns_nameservers_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudDnsNameserversV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudDnsNameserversV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dns_nameservers_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.29.3',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._zoneId = config.zoneId;
    this._nameservers = config.nameservers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: DataOpentelekomcloudDnsNameserversV2Nameservers[] | cdktf.IResolvable; 
  public get nameservers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('nameservers');
  }
  public set nameservers(value: DataOpentelekomcloudDnsNameserversV2Nameservers[] | cdktf.IResolvable) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      zone_id: cdktf.stringToTerraform(this._zoneId),
      nameservers: cdktf.listMapper(dataOpentelekomcloudDnsNameserversV2NameserversToTerraform)(this._nameservers),
    };
  }
}
