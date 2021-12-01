// https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudVpcepServiceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1.html#name DataOpentelekomcloudVpcepServiceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1.html#status DataOpentelekomcloudVpcepServiceV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1.html#tags DataOpentelekomcloudVpcepServiceV1#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataOpentelekomcloudVpcepServiceV1Port extends cdktf.ComplexComputedList {

  // client_port - computed: true, optional: false, required: false
  public get clientPort() {
    return this.getNumberAttribute('client_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // server_port - computed: true, optional: false, required: false
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1.html opentelekomcloud_vpcep_service_v1}
*/
export class DataOpentelekomcloudVpcepServiceV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpcep_service_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1.html opentelekomcloud_vpcep_service_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudVpcepServiceV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudVpcepServiceV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpcep_service_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._status = config.status;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_enabled - computed: true, optional: false, required: false
  public get approvalEnabled() {
    return this.getBooleanAttribute('approval_enabled') as any;
  }

  // connection_count - computed: true, optional: false, required: false
  public get connectionCount() {
    return this.getNumberAttribute('connection_count');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
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

  // port - computed: true, optional: false, required: false
  public port(index: string) {
    return new DataOpentelekomcloudVpcepServiceV1Port(this, 'port', index);
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tcp_proxy - computed: true, optional: false, required: false
  public get tcpProxy() {
    return this.getStringAttribute('tcp_proxy');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vip_port_id - computed: true, optional: false, required: false
  public get vipPortId() {
    return this.getStringAttribute('vip_port_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
