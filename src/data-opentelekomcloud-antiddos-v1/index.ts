// https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudAntiddosV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1#floating_ip_address DataOpentelekomcloudAntiddosV1#floating_ip_address}
  */
  readonly floatingIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1#floating_ip_id DataOpentelekomcloudAntiddosV1#floating_ip_id}
  */
  readonly floatingIpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1#id DataOpentelekomcloudAntiddosV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1#region DataOpentelekomcloudAntiddosV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1#status DataOpentelekomcloudAntiddosV1#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1 opentelekomcloud_antiddos_v1}
*/
export class DataOpentelekomcloudAntiddosV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_antiddos_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/antiddos_v1 opentelekomcloud_antiddos_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudAntiddosV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudAntiddosV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_antiddos_v1',
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
    this._floatingIpAddress = config.floatingIpAddress;
    this._floatingIpId = config.floatingIpId;
    this._id = config.id;
    this._region = config.region;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bps_attack - computed: true, optional: false, required: false
  public get bpsAttack() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('bps_attack')));
  }

  // bps_in - computed: true, optional: false, required: false
  public get bpsIn() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('bps_in')));
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('end_time')));
  }

  // floating_ip_address - computed: true, optional: true, required: false
  private _floatingIpAddress?: string; 
  public get floatingIpAddress() {
    return this.getStringAttribute('floating_ip_address');
  }
  public set floatingIpAddress(value: string) {
    this._floatingIpAddress = value;
  }
  public resetFloatingIpAddress() {
    this._floatingIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpAddressInput() {
    return this._floatingIpAddress;
  }

  // floating_ip_id - computed: true, optional: true, required: false
  private _floatingIpId?: string; 
  public get floatingIpId() {
    return this.getStringAttribute('floating_ip_id');
  }
  public set floatingIpId(value: string) {
    this._floatingIpId = value;
  }
  public resetFloatingIpId() {
    this._floatingIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpIdInput() {
    return this._floatingIpId;
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

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // period_start - computed: true, optional: false, required: false
  public get periodStart() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('period_start')));
  }

  // pps_attack - computed: true, optional: false, required: false
  public get ppsAttack() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('pps_attack')));
  }

  // pps_in - computed: true, optional: false, required: false
  public get ppsIn() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('pps_in')));
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

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('start_time')));
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // total_bps - computed: true, optional: false, required: false
  public get totalBps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('total_bps')));
  }

  // total_pps - computed: true, optional: false, required: false
  public get totalPps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('total_pps')));
  }

  // traffic_cleaning_status - computed: true, optional: false, required: false
  public get trafficCleaningStatus() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('traffic_cleaning_status')));
  }

  // trigger_bps - computed: true, optional: false, required: false
  public get triggerBps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('trigger_bps')));
  }

  // trigger_http_pps - computed: true, optional: false, required: false
  public get triggerHttpPps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('trigger_http_pps')));
  }

  // trigger_pps - computed: true, optional: false, required: false
  public get triggerPps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('trigger_pps')));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      floating_ip_address: cdktf.stringToTerraform(this._floatingIpAddress),
      floating_ip_id: cdktf.stringToTerraform(this._floatingIpId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
