// https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudVpcepServiceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1#id DataOpentelekomcloudVpcepServiceV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1#name DataOpentelekomcloudVpcepServiceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1#status DataOpentelekomcloudVpcepServiceV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1#tags DataOpentelekomcloudVpcepServiceV1#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataOpentelekomcloudVpcepServiceV1Port {
}

export function dataOpentelekomcloudVpcepServiceV1PortToTerraform(struct?: DataOpentelekomcloudVpcepServiceV1Port): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOpentelekomcloudVpcepServiceV1PortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpentelekomcloudVpcepServiceV1Port | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudVpcepServiceV1Port | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class DataOpentelekomcloudVpcepServiceV1PortList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudVpcepServiceV1PortOutputReference {
    return new DataOpentelekomcloudVpcepServiceV1PortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1 opentelekomcloud_vpcep_service_v1}
*/
export class DataOpentelekomcloudVpcepServiceV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_vpcep_service_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpcep_service_v1 opentelekomcloud_vpcep_service_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudVpcepServiceV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudVpcepServiceV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpcep_service_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.31.9',
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
    this._id = config.id;
    this._name = config.name;
    this._status = config.status;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_enabled - computed: true, optional: false, required: false
  public get approvalEnabled() {
    return this.getBooleanAttribute('approval_enabled');
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
  private _port = new DataOpentelekomcloudVpcepServiceV1PortList(this, "port", true);
  public get port() {
    return this._port;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
