/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#client_ca_tls_container_ref LbListenerV2#client_ca_tls_container_ref}
  */
  readonly clientCaTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}
  */
  readonly defaultPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}
  */
  readonly defaultTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#description LbListenerV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#http2_enable LbListenerV2#http2_enable}
  */
  readonly http2Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#id LbListenerV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#name LbListenerV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#region LbListenerV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}
  */
  readonly sniContainerRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#tags LbListenerV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#tls_ciphers_policy LbListenerV2#tls_ciphers_policy}
  */
  readonly tlsCiphersPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#transparent_client_ip_enable LbListenerV2#transparent_client_ip_enable}
  */
  readonly transparentClientIpEnable?: boolean | cdktf.IResolvable;
  /**
  * ip_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#ip_group LbListenerV2#ip_group}
  */
  readonly ipGroup?: LbListenerV2IpGroup;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#timeouts LbListenerV2#timeouts}
  */
  readonly timeouts?: LbListenerV2Timeouts;
}
export interface LbListenerV2IpGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#enable LbListenerV2#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#id LbListenerV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#type LbListenerV2#type}
  */
  readonly type?: string;
}

export function lbListenerV2IpGroupToTerraform(struct?: LbListenerV2IpGroupOutputReference | LbListenerV2IpGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function lbListenerV2IpGroupToHclTerraform(struct?: LbListenerV2IpGroupOutputReference | LbListenerV2IpGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerV2IpGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbListenerV2IpGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerV2IpGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface LbListenerV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#create LbListenerV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#delete LbListenerV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#update LbListenerV2#update}
  */
  readonly update?: string;
}

export function lbListenerV2TimeoutsToTerraform(struct?: LbListenerV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lbListenerV2TimeoutsToHclTerraform(struct?: LbListenerV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LbListenerV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2 opentelekomcloud_lb_listener_v2}
*/
export class LbListenerV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lb_listener_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbListenerV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbListenerV2 to import
  * @param importFromId The id of the existing LbListenerV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbListenerV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_lb_listener_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/lb_listener_v2 opentelekomcloud_lb_listener_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbListenerV2Config
  */
  public constructor(scope: Construct, id: string, config: LbListenerV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_listener_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.44',
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
    this._adminStateUp = config.adminStateUp;
    this._clientCaTlsContainerRef = config.clientCaTlsContainerRef;
    this._defaultPoolId = config.defaultPoolId;
    this._defaultTlsContainerRef = config.defaultTlsContainerRef;
    this._description = config.description;
    this._http2Enable = config.http2Enable;
    this._id = config.id;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolPort = config.protocolPort;
    this._region = config.region;
    this._sniContainerRefs = config.sniContainerRefs;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._tlsCiphersPolicy = config.tlsCiphersPolicy;
    this._transparentClientIpEnable = config.transparentClientIpEnable;
    this._ipGroup.internalValue = config.ipGroup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp;
  }

  // client_ca_tls_container_ref - computed: true, optional: true, required: false
  private _clientCaTlsContainerRef?: string; 
  public get clientCaTlsContainerRef() {
    return this.getStringAttribute('client_ca_tls_container_ref');
  }
  public set clientCaTlsContainerRef(value: string) {
    this._clientCaTlsContainerRef = value;
  }
  public resetClientCaTlsContainerRef() {
    this._clientCaTlsContainerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaTlsContainerRefInput() {
    return this._clientCaTlsContainerRef;
  }

  // default_pool_id - computed: true, optional: true, required: false
  private _defaultPoolId?: string; 
  public get defaultPoolId() {
    return this.getStringAttribute('default_pool_id');
  }
  public set defaultPoolId(value: string) {
    this._defaultPoolId = value;
  }
  public resetDefaultPoolId() {
    this._defaultPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolIdInput() {
    return this._defaultPoolId;
  }

  // default_tls_container_ref - computed: true, optional: true, required: false
  private _defaultTlsContainerRef?: string; 
  public get defaultTlsContainerRef() {
    return this.getStringAttribute('default_tls_container_ref');
  }
  public set defaultTlsContainerRef(value: string) {
    this._defaultTlsContainerRef = value;
  }
  public resetDefaultTlsContainerRef() {
    this._defaultTlsContainerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTlsContainerRefInput() {
    return this._defaultTlsContainerRef;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // http2_enable - computed: false, optional: true, required: false
  private _http2Enable?: boolean | cdktf.IResolvable; 
  public get http2Enable() {
    return this.getBooleanAttribute('http2_enable');
  }
  public set http2Enable(value: boolean | cdktf.IResolvable) {
    this._http2Enable = value;
  }
  public resetHttp2Enable() {
    this._http2Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnableInput() {
    return this._http2Enable;
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
    return this._loadbalancerId;
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
    return this._protocol;
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
    return this._protocolPort;
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

  // sni_container_refs - computed: false, optional: true, required: false
  private _sniContainerRefs?: string[]; 
  public get sniContainerRefs() {
    return cdktf.Fn.tolist(this.getListAttribute('sni_container_refs'));
  }
  public set sniContainerRefs(value: string[]) {
    this._sniContainerRefs = value;
  }
  public resetSniContainerRefs() {
    this._sniContainerRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniContainerRefsInput() {
    return this._sniContainerRefs;
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

  // tls_ciphers_policy - computed: false, optional: true, required: false
  private _tlsCiphersPolicy?: string; 
  public get tlsCiphersPolicy() {
    return this.getStringAttribute('tls_ciphers_policy');
  }
  public set tlsCiphersPolicy(value: string) {
    this._tlsCiphersPolicy = value;
  }
  public resetTlsCiphersPolicy() {
    this._tlsCiphersPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersPolicyInput() {
    return this._tlsCiphersPolicy;
  }

  // transparent_client_ip_enable - computed: true, optional: true, required: false
  private _transparentClientIpEnable?: boolean | cdktf.IResolvable; 
  public get transparentClientIpEnable() {
    return this.getBooleanAttribute('transparent_client_ip_enable');
  }
  public set transparentClientIpEnable(value: boolean | cdktf.IResolvable) {
    this._transparentClientIpEnable = value;
  }
  public resetTransparentClientIpEnable() {
    this._transparentClientIpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentClientIpEnableInput() {
    return this._transparentClientIpEnable;
  }

  // ip_group - computed: false, optional: true, required: false
  private _ipGroup = new LbListenerV2IpGroupOutputReference(this, "ip_group");
  public get ipGroup() {
    return this._ipGroup;
  }
  public putIpGroup(value: LbListenerV2IpGroup) {
    this._ipGroup.internalValue = value;
  }
  public resetIpGroup() {
    this._ipGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGroupInput() {
    return this._ipGroup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbListenerV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbListenerV2Timeouts) {
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
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      client_ca_tls_container_ref: cdktf.stringToTerraform(this._clientCaTlsContainerRef),
      default_pool_id: cdktf.stringToTerraform(this._defaultPoolId),
      default_tls_container_ref: cdktf.stringToTerraform(this._defaultTlsContainerRef),
      description: cdktf.stringToTerraform(this._description),
      http2_enable: cdktf.booleanToTerraform(this._http2Enable),
      id: cdktf.stringToTerraform(this._id),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_port: cdktf.numberToTerraform(this._protocolPort),
      region: cdktf.stringToTerraform(this._region),
      sni_container_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sniContainerRefs),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tls_ciphers_policy: cdktf.stringToTerraform(this._tlsCiphersPolicy),
      transparent_client_ip_enable: cdktf.booleanToTerraform(this._transparentClientIpEnable),
      ip_group: lbListenerV2IpGroupToTerraform(this._ipGroup.internalValue),
      timeouts: lbListenerV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state_up: {
        value: cdktf.booleanToHclTerraform(this._adminStateUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_ca_tls_container_ref: {
        value: cdktf.stringToHclTerraform(this._clientCaTlsContainerRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_pool_id: {
        value: cdktf.stringToHclTerraform(this._defaultPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_tls_container_ref: {
        value: cdktf.stringToHclTerraform(this._defaultTlsContainerRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2_enable: {
        value: cdktf.booleanToHclTerraform(this._http2Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._loadbalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_port: {
        value: cdktf.numberToHclTerraform(this._protocolPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_container_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sniContainerRefs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_ciphers_policy: {
        value: cdktf.stringToHclTerraform(this._tlsCiphersPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transparent_client_ip_enable: {
        value: cdktf.booleanToHclTerraform(this._transparentClientIpEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_group: {
        value: lbListenerV2IpGroupToHclTerraform(this._ipGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbListenerV2IpGroupList",
      },
      timeouts: {
        value: lbListenerV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LbListenerV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
