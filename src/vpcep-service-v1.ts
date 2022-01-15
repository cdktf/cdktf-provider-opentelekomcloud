// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcepServiceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#approval_enabled VpcepServiceV1#approval_enabled}
  */
  readonly approvalEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#name VpcepServiceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#pool_id VpcepServiceV1#pool_id}
  */
  readonly poolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#port_id VpcepServiceV1#port_id}
  */
  readonly portId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#server_type VpcepServiceV1#server_type}
  */
  readonly serverType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#service_type VpcepServiceV1#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#tags VpcepServiceV1#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#tcp_proxy VpcepServiceV1#tcp_proxy}
  */
  readonly tcpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#vip_port_id VpcepServiceV1#vip_port_id}
  */
  readonly vipPortId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#vpc_id VpcepServiceV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#port VpcepServiceV1#port}
  */
  readonly port: VpcepServiceV1Port[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#timeouts VpcepServiceV1#timeouts}
  */
  readonly timeouts?: VpcepServiceV1Timeouts;
}
export interface VpcepServiceV1Port {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#client_port VpcepServiceV1#client_port}
  */
  readonly clientPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#protocol VpcepServiceV1#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#server_port VpcepServiceV1#server_port}
  */
  readonly serverPort: number;
}

export function vpcepServiceV1PortToTerraform(struct?: VpcepServiceV1Port): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_port: cdktf.numberToTerraform(struct!.clientPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    server_port: cdktf.numberToTerraform(struct!.serverPort),
  }
}

export interface VpcepServiceV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1#default VpcepServiceV1#default}
  */
  readonly default?: string;
}

export function vpcepServiceV1TimeoutsToTerraform(struct?: VpcepServiceV1TimeoutsOutputReference | VpcepServiceV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class VpcepServiceV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpcepServiceV1Timeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcepServiceV1Timeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1 opentelekomcloud_vpcep_service_v1}
*/
export class VpcepServiceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpcep_service_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_service_v1 opentelekomcloud_vpcep_service_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcepServiceV1Config
  */
  public constructor(scope: Construct, id: string, config: VpcepServiceV1Config) {
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
    this._approvalEnabled = config.approvalEnabled;
    this._name = config.name;
    this._poolId = config.poolId;
    this._portId = config.portId;
    this._serverType = config.serverType;
    this._serviceType = config.serviceType;
    this._tags = config.tags;
    this._tcpProxy = config.tcpProxy;
    this._vipPortId = config.vipPortId;
    this._vpcId = config.vpcId;
    this._port = config.port;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_enabled - computed: false, optional: true, required: false
  private _approvalEnabled?: boolean | cdktf.IResolvable; 
  public get approvalEnabled() {
    return this.getBooleanAttribute('approval_enabled') as any;
  }
  public set approvalEnabled(value: boolean | cdktf.IResolvable) {
    this._approvalEnabled = value;
  }
  public resetApprovalEnabled() {
    this._approvalEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalEnabledInput() {
    return this._approvalEnabled;
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

  // pool_id - computed: true, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // tags - computed: true, optional: true, required: false
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

  // tcp_proxy - computed: true, optional: true, required: false
  private _tcpProxy?: string; 
  public get tcpProxy() {
    return this.getStringAttribute('tcp_proxy');
  }
  public set tcpProxy(value: string) {
    this._tcpProxy = value;
  }
  public resetTcpProxy() {
    this._tcpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProxyInput() {
    return this._tcpProxy;
  }

  // vip_port_id - computed: true, optional: true, required: false
  private _vipPortId?: string; 
  public get vipPortId() {
    return this.getStringAttribute('vip_port_id');
  }
  public set vipPortId(value: string) {
    this._vipPortId = value;
  }
  public resetVipPortId() {
    this._vipPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortIdInput() {
    return this._vipPortId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // port - computed: false, optional: false, required: true
  private _port?: VpcepServiceV1Port[]; 
  public get port() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('port') as any;
  }
  public set port(value: VpcepServiceV1Port[]) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcepServiceV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcepServiceV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approval_enabled: cdktf.booleanToTerraform(this._approvalEnabled),
      name: cdktf.stringToTerraform(this._name),
      pool_id: cdktf.stringToTerraform(this._poolId),
      port_id: cdktf.stringToTerraform(this._portId),
      server_type: cdktf.stringToTerraform(this._serverType),
      service_type: cdktf.stringToTerraform(this._serviceType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tcp_proxy: cdktf.stringToTerraform(this._tcpProxy),
      vip_port_id: cdktf.stringToTerraform(this._vipPortId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      port: cdktf.listMapper(vpcepServiceV1PortToTerraform)(this._port),
      timeouts: vpcepServiceV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
