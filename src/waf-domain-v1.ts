// https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafDomainV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#certificate_id WafDomainV1#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#cipher WafDomainV1#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#hostname WafDomainV1#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#policy_id WafDomainV1#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#proxy WafDomainV1#proxy}
  */
  readonly proxy: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#sip_header_list WafDomainV1#sip_header_list}
  */
  readonly sipHeaderList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#sip_header_name WafDomainV1#sip_header_name}
  */
  readonly sipHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#tls WafDomainV1#tls}
  */
  readonly tls?: string;
  /**
  * server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#server WafDomainV1#server}
  */
  readonly server: WafDomainV1Server[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#timeouts WafDomainV1#timeouts}
  */
  readonly timeouts?: WafDomainV1Timeouts;
}
export interface WafDomainV1Server {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#address WafDomainV1#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#back_protocol WafDomainV1#back_protocol}
  */
  readonly backProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#client_protocol WafDomainV1#client_protocol}
  */
  readonly clientProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#front_protocol WafDomainV1#front_protocol}
  */
  readonly frontProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#port WafDomainV1#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#server_protocol WafDomainV1#server_protocol}
  */
  readonly serverProtocol?: string;
}

function wafDomainV1ServerToTerraform(struct?: WafDomainV1Server): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    back_protocol: cdktf.stringToTerraform(struct!.backProtocol),
    client_protocol: cdktf.stringToTerraform(struct!.clientProtocol),
    front_protocol: cdktf.stringToTerraform(struct!.frontProtocol),
    port: cdktf.stringToTerraform(struct!.port),
    server_protocol: cdktf.stringToTerraform(struct!.serverProtocol),
  }
}

export interface WafDomainV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#create WafDomainV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html#delete WafDomainV1#delete}
  */
  readonly delete?: string;
}

function wafDomainV1TimeoutsToTerraform(struct?: WafDomainV1TimeoutsOutputReference | WafDomainV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class WafDomainV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html opentelekomcloud_waf_domain_v1}
*/
export class WafDomainV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_waf_domain_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_domain_v1.html opentelekomcloud_waf_domain_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafDomainV1Config
  */
  public constructor(scope: Construct, id: string, config: WafDomainV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_domain_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateId = config.certificateId;
    this._cipher = config.cipher;
    this._hostname = config.hostname;
    this._policyId = config.policyId;
    this._proxy = config.proxy;
    this._sipHeaderList = config.sipHeaderList;
    this._sipHeaderName = config.sipHeaderName;
    this._tls = config.tls;
    this._server = config.server;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_code - computed: true, optional: false, required: false
  public get accessCode() {
    return this.getStringAttribute('access_code');
  }

  // access_status - computed: true, optional: false, required: false
  public get accessStatus() {
    return this.getNumberAttribute('access_status');
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

  // cipher - computed: true, optional: true, required: false
  private _cipher?: string | undefined; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string | undefined) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string | undefined; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string | undefined) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId
  }

  // protect_status - computed: true, optional: false, required: false
  public get protectStatus() {
    return this.getNumberAttribute('protect_status');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // proxy - computed: false, optional: false, required: true
  private _proxy?: boolean | cdktf.IResolvable; 
  public get proxy() {
    return this.getBooleanAttribute('proxy') as any;
  }
  public set proxy(value: boolean | cdktf.IResolvable) {
    this._proxy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy
  }

  // sip_header_list - computed: false, optional: true, required: false
  private _sipHeaderList?: string[] | undefined; 
  public get sipHeaderList() {
    return this.getListAttribute('sip_header_list');
  }
  public set sipHeaderList(value: string[] | undefined) {
    this._sipHeaderList = value;
  }
  public resetSipHeaderList() {
    this._sipHeaderList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipHeaderListInput() {
    return this._sipHeaderList
  }

  // sip_header_name - computed: false, optional: true, required: false
  private _sipHeaderName?: string | undefined; 
  public get sipHeaderName() {
    return this.getStringAttribute('sip_header_name');
  }
  public set sipHeaderName(value: string | undefined) {
    this._sipHeaderName = value;
  }
  public resetSipHeaderName() {
    this._sipHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipHeaderNameInput() {
    return this._sipHeaderName
  }

  // sub_domain - computed: true, optional: false, required: false
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: string | undefined; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string | undefined) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls
  }

  // txt_code - computed: true, optional: false, required: false
  public get txtCode() {
    return this.getStringAttribute('txt_code');
  }

  // server - computed: false, optional: false, required: true
  private _server?: WafDomainV1Server[]; 
  public get server() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('server') as any;
  }
  public set server(value: WafDomainV1Server[]) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WafDomainV1Timeouts | undefined; 
  private __timeoutsOutput = new WafDomainV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: WafDomainV1Timeouts | undefined) {
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
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      cipher: cdktf.stringToTerraform(this._cipher),
      hostname: cdktf.stringToTerraform(this._hostname),
      policy_id: cdktf.stringToTerraform(this._policyId),
      proxy: cdktf.booleanToTerraform(this._proxy),
      sip_header_list: cdktf.listMapper(cdktf.stringToTerraform)(this._sipHeaderList),
      sip_header_name: cdktf.stringToTerraform(this._sipHeaderName),
      tls: cdktf.stringToTerraform(this._tls),
      server: cdktf.listMapper(wafDomainV1ServerToTerraform)(this._server),
      timeouts: wafDomainV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
