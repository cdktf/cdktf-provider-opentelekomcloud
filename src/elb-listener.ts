// https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElbListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#backend_port ElbListener#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#backend_protocol ElbListener#backend_protocol}
  */
  readonly backendProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#certificate_id ElbListener#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#certificates ElbListener#certificates}
  */
  readonly certificates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#cookie_timeout ElbListener#cookie_timeout}
  */
  readonly cookieTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#description ElbListener#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#lb_algorithm ElbListener#lb_algorithm}
  */
  readonly lbAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#loadbalancer_id ElbListener#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#name ElbListener#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#protocol ElbListener#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#protocol_port ElbListener#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#region ElbListener#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#session_sticky ElbListener#session_sticky}
  */
  readonly sessionSticky?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#session_sticky_type ElbListener#session_sticky_type}
  */
  readonly sessionStickyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#ssl_ciphers ElbListener#ssl_ciphers}
  */
  readonly sslCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#ssl_protocols ElbListener#ssl_protocols}
  */
  readonly sslProtocols?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#tcp_draining ElbListener#tcp_draining}
  */
  readonly tcpDraining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#tcp_draining_timeout ElbListener#tcp_draining_timeout}
  */
  readonly tcpDrainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#tcp_timeout ElbListener#tcp_timeout}
  */
  readonly tcpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#udp_timeout ElbListener#udp_timeout}
  */
  readonly udpTimeout?: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#timeouts ElbListener#timeouts}
  */
  readonly timeouts?: ElbListenerTimeouts;
}
export interface ElbListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#create ElbListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#delete ElbListener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html#update ElbListener#update}
  */
  readonly update?: string;
}

function elbListenerTimeoutsToTerraform(struct?: ElbListenerTimeoutsOutputReference | ElbListenerTimeouts): any {
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

export class ElbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html opentelekomcloud_elb_listener}
*/
export class ElbListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_elb_listener";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/elb_listener.html opentelekomcloud_elb_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElbListenerConfig
  */
  public constructor(scope: Construct, id: string, config: ElbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_elb_listener',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendPort = config.backendPort;
    this._backendProtocol = config.backendProtocol;
    this._certificateId = config.certificateId;
    this._certificates = config.certificates;
    this._cookieTimeout = config.cookieTimeout;
    this._description = config.description;
    this._lbAlgorithm = config.lbAlgorithm;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolPort = config.protocolPort;
    this._region = config.region;
    this._sessionSticky = config.sessionSticky;
    this._sessionStickyType = config.sessionStickyType;
    this._sslCiphers = config.sslCiphers;
    this._sslProtocols = config.sslProtocols;
    this._tcpDraining = config.tcpDraining;
    this._tcpDrainingTimeout = config.tcpDrainingTimeout;
    this._tcpTimeout = config.tcpTimeout;
    this._udpTimeout = config.udpTimeout;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_port - computed: false, optional: false, required: true
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort
  }

  // backend_protocol - computed: false, optional: false, required: true
  private _backendProtocol?: string; 
  public get backendProtocol() {
    return this.getStringAttribute('backend_protocol');
  }
  public set backendProtocol(value: string) {
    this._backendProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendProtocolInput() {
    return this._backendProtocol
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string | undefined; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string | undefined) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates?: string[] | undefined; 
  public get certificates() {
    return this.getListAttribute('certificates');
  }
  public set certificates(value: string[] | undefined) {
    this._certificates = value;
  }
  public resetCertificates() {
    this._certificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates
  }

  // cookie_timeout - computed: true, optional: true, required: false
  private _cookieTimeout?: number | undefined; 
  public get cookieTimeout() {
    return this.getNumberAttribute('cookie_timeout');
  }
  public set cookieTimeout(value: number | undefined) {
    this._cookieTimeout = value;
  }
  public resetCookieTimeout() {
    this._cookieTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieTimeoutInput() {
    return this._cookieTimeout
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lb_algorithm - computed: false, optional: false, required: true
  private _lbAlgorithm?: string; 
  public get lbAlgorithm() {
    return this.getStringAttribute('lb_algorithm');
  }
  public set lbAlgorithm(value: string) {
    this._lbAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAlgorithmInput() {
    return this._lbAlgorithm
  }

  // loadbalancer_id - computed: false, optional: false, required: true
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // protocol_port - computed: false, optional: false, required: true
  private _protocolPort?: number; 
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
  }
  public set protocolPort(value: number) {
    this._protocolPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortInput() {
    return this._protocolPort
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // session_sticky - computed: false, optional: true, required: false
  private _sessionSticky?: boolean | cdktf.IResolvable | undefined; 
  public get sessionSticky() {
    return this.getBooleanAttribute('session_sticky') as any;
  }
  public set sessionSticky(value: boolean | cdktf.IResolvable | undefined) {
    this._sessionSticky = value;
  }
  public resetSessionSticky() {
    this._sessionSticky = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStickyInput() {
    return this._sessionSticky
  }

  // session_sticky_type - computed: false, optional: true, required: false
  private _sessionStickyType?: string | undefined; 
  public get sessionStickyType() {
    return this.getStringAttribute('session_sticky_type');
  }
  public set sessionStickyType(value: string | undefined) {
    this._sessionStickyType = value;
  }
  public resetSessionStickyType() {
    this._sessionStickyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStickyTypeInput() {
    return this._sessionStickyType
  }

  // ssl_ciphers - computed: true, optional: true, required: false
  private _sslCiphers?: string | undefined; 
  public get sslCiphers() {
    return this.getStringAttribute('ssl_ciphers');
  }
  public set sslCiphers(value: string | undefined) {
    this._sslCiphers = value;
  }
  public resetSslCiphers() {
    this._sslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCiphersInput() {
    return this._sslCiphers
  }

  // ssl_protocols - computed: true, optional: true, required: false
  private _sslProtocols?: string | undefined; 
  public get sslProtocols() {
    return this.getStringAttribute('ssl_protocols');
  }
  public set sslProtocols(value: string | undefined) {
    this._sslProtocols = value;
  }
  public resetSslProtocols() {
    this._sslProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolsInput() {
    return this._sslProtocols
  }

  // tcp_draining - computed: false, optional: true, required: false
  private _tcpDraining?: boolean | cdktf.IResolvable | undefined; 
  public get tcpDraining() {
    return this.getBooleanAttribute('tcp_draining') as any;
  }
  public set tcpDraining(value: boolean | cdktf.IResolvable | undefined) {
    this._tcpDraining = value;
  }
  public resetTcpDraining() {
    this._tcpDraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDrainingInput() {
    return this._tcpDraining
  }

  // tcp_draining_timeout - computed: false, optional: true, required: false
  private _tcpDrainingTimeout?: number | undefined; 
  public get tcpDrainingTimeout() {
    return this.getNumberAttribute('tcp_draining_timeout');
  }
  public set tcpDrainingTimeout(value: number | undefined) {
    this._tcpDrainingTimeout = value;
  }
  public resetTcpDrainingTimeout() {
    this._tcpDrainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDrainingTimeoutInput() {
    return this._tcpDrainingTimeout
  }

  // tcp_timeout - computed: true, optional: true, required: false
  private _tcpTimeout?: number | undefined; 
  public get tcpTimeout() {
    return this.getNumberAttribute('tcp_timeout');
  }
  public set tcpTimeout(value: number | undefined) {
    this._tcpTimeout = value;
  }
  public resetTcpTimeout() {
    this._tcpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeoutInput() {
    return this._tcpTimeout
  }

  // udp_timeout - computed: false, optional: true, required: false
  private _udpTimeout?: number | undefined; 
  public get udpTimeout() {
    return this.getNumberAttribute('udp_timeout');
  }
  public set udpTimeout(value: number | undefined) {
    this._udpTimeout = value;
  }
  public resetUdpTimeout() {
    this._udpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutInput() {
    return this._udpTimeout
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ElbListenerTimeouts | undefined; 
  private __timeoutsOutput = new ElbListenerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ElbListenerTimeouts | undefined) {
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
      backend_port: cdktf.numberToTerraform(this._backendPort),
      backend_protocol: cdktf.stringToTerraform(this._backendProtocol),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      certificates: cdktf.listMapper(cdktf.stringToTerraform)(this._certificates),
      cookie_timeout: cdktf.numberToTerraform(this._cookieTimeout),
      description: cdktf.stringToTerraform(this._description),
      lb_algorithm: cdktf.stringToTerraform(this._lbAlgorithm),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_port: cdktf.numberToTerraform(this._protocolPort),
      region: cdktf.stringToTerraform(this._region),
      session_sticky: cdktf.booleanToTerraform(this._sessionSticky),
      session_sticky_type: cdktf.stringToTerraform(this._sessionStickyType),
      ssl_ciphers: cdktf.stringToTerraform(this._sslCiphers),
      ssl_protocols: cdktf.stringToTerraform(this._sslProtocols),
      tcp_draining: cdktf.booleanToTerraform(this._tcpDraining),
      tcp_draining_timeout: cdktf.numberToTerraform(this._tcpDrainingTimeout),
      tcp_timeout: cdktf.numberToTerraform(this._tcpTimeout),
      udp_timeout: cdktf.numberToTerraform(this._udpTimeout),
      timeouts: elbListenerTimeoutsToTerraform(this._timeouts),
    };
  }
}
