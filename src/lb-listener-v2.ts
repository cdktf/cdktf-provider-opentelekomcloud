// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#admin_state_up LbListenerV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#client_ca_tls_container_ref LbListenerV2#client_ca_tls_container_ref}
  */
  readonly clientCaTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#default_pool_id LbListenerV2#default_pool_id}
  */
  readonly defaultPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#default_tls_container_ref LbListenerV2#default_tls_container_ref}
  */
  readonly defaultTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#description LbListenerV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#http2_enable LbListenerV2#http2_enable}
  */
  readonly http2Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#loadbalancer_id LbListenerV2#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#name LbListenerV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#protocol LbListenerV2#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#protocol_port LbListenerV2#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#region LbListenerV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#sni_container_refs LbListenerV2#sni_container_refs}
  */
  readonly sniContainerRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#tags LbListenerV2#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#tenant_id LbListenerV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#tls_ciphers_policy LbListenerV2#tls_ciphers_policy}
  */
  readonly tlsCiphersPolicy?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#timeouts LbListenerV2#timeouts}
  */
  readonly timeouts?: LbListenerV2Timeouts;
}
export interface LbListenerV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#create LbListenerV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#delete LbListenerV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html#update LbListenerV2#update}
  */
  readonly update?: string;
}

function lbListenerV2TimeoutsToTerraform(struct?: LbListenerV2TimeoutsOutputReference | LbListenerV2Timeouts): any {
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

export class LbListenerV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html opentelekomcloud_lb_listener_v2}
*/
export class LbListenerV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_listener_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v2.html opentelekomcloud_lb_listener_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbListenerV2Config
  */
  public constructor(scope: Construct, id: string, config: LbListenerV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_listener_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminStateUp = config.adminStateUp;
    this._clientCaTlsContainerRef = config.clientCaTlsContainerRef;
    this._defaultPoolId = config.defaultPoolId;
    this._defaultTlsContainerRef = config.defaultTlsContainerRef;
    this._description = config.description;
    this._http2Enable = config.http2Enable;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolPort = config.protocolPort;
    this._region = config.region;
    this._sniContainerRefs = config.sniContainerRefs;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._tlsCiphersPolicy = config.tlsCiphersPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable | undefined; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up') as any;
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable | undefined) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp
  }

  // client_ca_tls_container_ref - computed: true, optional: true, required: false
  private _clientCaTlsContainerRef?: string | undefined; 
  public get clientCaTlsContainerRef() {
    return this.getStringAttribute('client_ca_tls_container_ref');
  }
  public set clientCaTlsContainerRef(value: string | undefined) {
    this._clientCaTlsContainerRef = value;
  }
  public resetClientCaTlsContainerRef() {
    this._clientCaTlsContainerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaTlsContainerRefInput() {
    return this._clientCaTlsContainerRef
  }

  // default_pool_id - computed: true, optional: true, required: false
  private _defaultPoolId?: string | undefined; 
  public get defaultPoolId() {
    return this.getStringAttribute('default_pool_id');
  }
  public set defaultPoolId(value: string | undefined) {
    this._defaultPoolId = value;
  }
  public resetDefaultPoolId() {
    this._defaultPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolIdInput() {
    return this._defaultPoolId
  }

  // default_tls_container_ref - computed: true, optional: true, required: false
  private _defaultTlsContainerRef?: string | undefined; 
  public get defaultTlsContainerRef() {
    return this.getStringAttribute('default_tls_container_ref');
  }
  public set defaultTlsContainerRef(value: string | undefined) {
    this._defaultTlsContainerRef = value;
  }
  public resetDefaultTlsContainerRef() {
    this._defaultTlsContainerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTlsContainerRefInput() {
    return this._defaultTlsContainerRef
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

  // http2_enable - computed: false, optional: true, required: false
  private _http2Enable?: boolean | cdktf.IResolvable | undefined; 
  public get http2Enable() {
    return this.getBooleanAttribute('http2_enable') as any;
  }
  public set http2Enable(value: boolean | cdktf.IResolvable | undefined) {
    this._http2Enable = value;
  }
  public resetHttp2Enable() {
    this._http2Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnableInput() {
    return this._http2Enable
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sni_container_refs - computed: false, optional: true, required: false
  private _sniContainerRefs?: string[] | undefined; 
  public get sniContainerRefs() {
    return this.getListAttribute('sni_container_refs');
  }
  public set sniContainerRefs(value: string[] | undefined) {
    this._sniContainerRefs = value;
  }
  public resetSniContainerRefs() {
    this._sniContainerRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniContainerRefsInput() {
    return this._sniContainerRefs
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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

  // tls_ciphers_policy - computed: false, optional: true, required: false
  private _tlsCiphersPolicy?: string | undefined; 
  public get tlsCiphersPolicy() {
    return this.getStringAttribute('tls_ciphers_policy');
  }
  public set tlsCiphersPolicy(value: string | undefined) {
    this._tlsCiphersPolicy = value;
  }
  public resetTlsCiphersPolicy() {
    this._tlsCiphersPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersPolicyInput() {
    return this._tlsCiphersPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbListenerV2Timeouts | undefined; 
  private __timeoutsOutput = new LbListenerV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LbListenerV2Timeouts | undefined) {
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
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      client_ca_tls_container_ref: cdktf.stringToTerraform(this._clientCaTlsContainerRef),
      default_pool_id: cdktf.stringToTerraform(this._defaultPoolId),
      default_tls_container_ref: cdktf.stringToTerraform(this._defaultTlsContainerRef),
      description: cdktf.stringToTerraform(this._description),
      http2_enable: cdktf.booleanToTerraform(this._http2Enable),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_port: cdktf.numberToTerraform(this._protocolPort),
      region: cdktf.stringToTerraform(this._region),
      sni_container_refs: cdktf.listMapper(cdktf.stringToTerraform)(this._sniContainerRefs),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tls_ciphers_policy: cdktf.stringToTerraform(this._tlsCiphersPolicy),
      timeouts: lbListenerV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
