# `lbListenerV3` Submodule <a name="`lbListenerV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbListenerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListenerV3 <a name="LbListenerV3" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3 opentelekomcloud_lb_listener_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v3.LbListenerV3;

LbListenerV3.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .loadbalancerId(java.lang.String)
    .protocol(java.lang.String)
    .protocolPort(java.lang.Number)
//  .adminStateUp(java.lang.Boolean)
//  .adminStateUp(IResolvable)
//  .advancedForwarding(java.lang.Boolean)
//  .advancedForwarding(IResolvable)
//  .clientCaTlsContainerRef(java.lang.String)
//  .clientTimeout(java.lang.Number)
//  .defaultPoolId(java.lang.String)
//  .defaultTlsContainerRef(java.lang.String)
//  .description(java.lang.String)
//  .http2Enable(java.lang.Boolean)
//  .http2Enable(IResolvable)
//  .id(java.lang.String)
//  .insertHeaders(LbListenerV3InsertHeaders)
//  .ipGroup(IResolvable)
//  .ipGroup(java.util.List<LbListenerV3IpGroup>)
//  .keepAliveTimeout(java.lang.Number)
//  .memberRetryEnable(java.lang.Boolean)
//  .memberRetryEnable(IResolvable)
//  .memberTimeout(java.lang.Number)
//  .name(java.lang.String)
//  .securityPolicyId(java.lang.String)
//  .sniContainerRefs(java.util.List<java.lang.String>)
//  .sniMatchAlgo(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tlsCiphersPolicy(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.protocolPort">protocolPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.advancedForwarding">advancedForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.clientCaTlsContainerRef">clientCaTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.clientTimeout">clientTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.defaultPoolId">defaultPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#description LbListenerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.http2Enable">http2Enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.insertHeaders">insertHeaders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | insert_headers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.ipGroup">ipGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>></code> | ip_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.keepAliveTimeout">keepAliveTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.memberRetryEnable">memberRetryEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.memberTimeout">memberTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#name LbListenerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.securityPolicyId">securityPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.sniContainerRefs">sniContainerRefs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.sniMatchAlgo">sniMatchAlgo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#tags LbListenerV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.tlsCiphersPolicy">tlsCiphersPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.loadbalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}.

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.protocolPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.adminStateUp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}.

---

##### `advancedForwarding`<sup>Optional</sup> <a name="advancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.advancedForwarding"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}.

---

##### `clientCaTlsContainerRef`<sup>Optional</sup> <a name="clientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.clientCaTlsContainerRef"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}.

---

##### `clientTimeout`<sup>Optional</sup> <a name="clientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.clientTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}.

---

##### `defaultPoolId`<sup>Optional</sup> <a name="defaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.defaultPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}.

---

##### `defaultTlsContainerRef`<sup>Optional</sup> <a name="defaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.defaultTlsContainerRef"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#description LbListenerV3#description}.

---

##### `http2Enable`<sup>Optional</sup> <a name="http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.http2Enable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insertHeaders`<sup>Optional</sup> <a name="insertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.insertHeaders"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

insert_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#insert_headers LbListenerV3#insert_headers}

---

##### `ipGroup`<sup>Optional</sup> <a name="ipGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.ipGroup"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>>

ip_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#ip_group LbListenerV3#ip_group}

---

##### `keepAliveTimeout`<sup>Optional</sup> <a name="keepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.keepAliveTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}.

---

##### `memberRetryEnable`<sup>Optional</sup> <a name="memberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.memberRetryEnable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}.

---

##### `memberTimeout`<sup>Optional</sup> <a name="memberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.memberTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#name LbListenerV3#name}.

---

##### `securityPolicyId`<sup>Optional</sup> <a name="securityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.securityPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}.

---

##### `sniContainerRefs`<sup>Optional</sup> <a name="sniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.sniContainerRefs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}.

---

##### `sniMatchAlgo`<sup>Optional</sup> <a name="sniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.sniMatchAlgo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#tags LbListenerV3#tags}.

---

##### `tlsCiphersPolicy`<sup>Optional</sup> <a name="tlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.tlsCiphersPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders">putInsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup">putIpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdvancedForwarding">resetAdvancedForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientCaTlsContainerRef">resetClientCaTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientTimeout">resetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultPoolId">resetDefaultPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultTlsContainerRef">resetDefaultTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetHttp2Enable">resetHttp2Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetInsertHeaders">resetInsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetIpGroup">resetIpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetKeepAliveTimeout">resetKeepAliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberRetryEnable">resetMemberRetryEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberTimeout">resetMemberTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSecurityPolicyId">resetSecurityPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniContainerRefs">resetSniContainerRefs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniMatchAlgo">resetSniMatchAlgo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTlsCiphersPolicy">resetTlsCiphersPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putInsertHeaders` <a name="putInsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders"></a>

```java
public void putInsertHeaders(LbListenerV3InsertHeaders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---

##### `putIpGroup` <a name="putIpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup"></a>

```java
public void putIpGroup(IResolvable OR java.util.List<LbListenerV3IpGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdminStateUp"></a>

```java
public void resetAdminStateUp()
```

##### `resetAdvancedForwarding` <a name="resetAdvancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdvancedForwarding"></a>

```java
public void resetAdvancedForwarding()
```

##### `resetClientCaTlsContainerRef` <a name="resetClientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientCaTlsContainerRef"></a>

```java
public void resetClientCaTlsContainerRef()
```

##### `resetClientTimeout` <a name="resetClientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientTimeout"></a>

```java
public void resetClientTimeout()
```

##### `resetDefaultPoolId` <a name="resetDefaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultPoolId"></a>

```java
public void resetDefaultPoolId()
```

##### `resetDefaultTlsContainerRef` <a name="resetDefaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultTlsContainerRef"></a>

```java
public void resetDefaultTlsContainerRef()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHttp2Enable` <a name="resetHttp2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetHttp2Enable"></a>

```java
public void resetHttp2Enable()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetId"></a>

```java
public void resetId()
```

##### `resetInsertHeaders` <a name="resetInsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetInsertHeaders"></a>

```java
public void resetInsertHeaders()
```

##### `resetIpGroup` <a name="resetIpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetIpGroup"></a>

```java
public void resetIpGroup()
```

##### `resetKeepAliveTimeout` <a name="resetKeepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetKeepAliveTimeout"></a>

```java
public void resetKeepAliveTimeout()
```

##### `resetMemberRetryEnable` <a name="resetMemberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberRetryEnable"></a>

```java
public void resetMemberRetryEnable()
```

##### `resetMemberTimeout` <a name="resetMemberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberTimeout"></a>

```java
public void resetMemberTimeout()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetName"></a>

```java
public void resetName()
```

##### `resetSecurityPolicyId` <a name="resetSecurityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSecurityPolicyId"></a>

```java
public void resetSecurityPolicyId()
```

##### `resetSniContainerRefs` <a name="resetSniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniContainerRefs"></a>

```java
public void resetSniContainerRefs()
```

##### `resetSniMatchAlgo` <a name="resetSniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniMatchAlgo"></a>

```java
public void resetSniMatchAlgo()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTags"></a>

```java
public void resetTags()
```

##### `resetTlsCiphersPolicy` <a name="resetTlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTlsCiphersPolicy"></a>

```java
public void resetTlsCiphersPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbListenerV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v3.LbListenerV3;

LbListenerV3.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v3.LbListenerV3;

LbListenerV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v3.LbListenerV3;

LbListenerV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v3.LbListenerV3;

LbListenerV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LbListenerV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LbListenerV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LbListenerV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LbListenerV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LbListenerV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeaders">insertHeaders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference">LbListenerV3InsertHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroup">ipGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList">LbListenerV3IpGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUpInput">adminStateUpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwardingInput">advancedForwardingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRefInput">clientCaTlsContainerRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeoutInput">clientTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolIdInput">defaultPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRefInput">defaultTlsContainerRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2EnableInput">http2EnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeadersInput">insertHeadersInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroupInput">ipGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeoutInput">keepAliveTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerIdInput">loadbalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnableInput">memberRetryEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeoutInput">memberTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPortInput">protocolPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyIdInput">securityPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefsInput">sniContainerRefsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgoInput">sniMatchAlgoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicyInput">tlsCiphersPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwarding">advancedForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRef">clientCaTlsContainerRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeout">clientTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolId">defaultPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2Enable">http2Enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeout">keepAliveTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnable">memberRetryEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeout">memberTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPort">protocolPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyId">securityPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefs">sniContainerRefs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgo">sniMatchAlgo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicy">tlsCiphersPolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `insertHeaders`<sup>Required</sup> <a name="insertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeaders"></a>

```java
public LbListenerV3InsertHeadersOutputReference getInsertHeaders();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference">LbListenerV3InsertHeadersOutputReference</a>

---

##### `ipGroup`<sup>Required</sup> <a name="ipGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroup"></a>

```java
public LbListenerV3IpGroupList getIpGroup();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList">LbListenerV3IpGroupList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUpInput"></a>

```java
public java.lang.Object getAdminStateUpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `advancedForwardingInput`<sup>Optional</sup> <a name="advancedForwardingInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwardingInput"></a>

```java
public java.lang.Object getAdvancedForwardingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCaTlsContainerRefInput`<sup>Optional</sup> <a name="clientCaTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRefInput"></a>

```java
public java.lang.String getClientCaTlsContainerRefInput();
```

- *Type:* java.lang.String

---

##### `clientTimeoutInput`<sup>Optional</sup> <a name="clientTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeoutInput"></a>

```java
public java.lang.Number getClientTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `defaultPoolIdInput`<sup>Optional</sup> <a name="defaultPoolIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolIdInput"></a>

```java
public java.lang.String getDefaultPoolIdInput();
```

- *Type:* java.lang.String

---

##### `defaultTlsContainerRefInput`<sup>Optional</sup> <a name="defaultTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRefInput"></a>

```java
public java.lang.String getDefaultTlsContainerRefInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `http2EnableInput`<sup>Optional</sup> <a name="http2EnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2EnableInput"></a>

```java
public java.lang.Object getHttp2EnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `insertHeadersInput`<sup>Optional</sup> <a name="insertHeadersInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeadersInput"></a>

```java
public LbListenerV3InsertHeaders getInsertHeadersInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---

##### `ipGroupInput`<sup>Optional</sup> <a name="ipGroupInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroupInput"></a>

```java
public java.lang.Object getIpGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>>

---

##### `keepAliveTimeoutInput`<sup>Optional</sup> <a name="keepAliveTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeoutInput"></a>

```java
public java.lang.Number getKeepAliveTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `loadbalancerIdInput`<sup>Optional</sup> <a name="loadbalancerIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerIdInput"></a>

```java
public java.lang.String getLoadbalancerIdInput();
```

- *Type:* java.lang.String

---

##### `memberRetryEnableInput`<sup>Optional</sup> <a name="memberRetryEnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnableInput"></a>

```java
public java.lang.Object getMemberRetryEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memberTimeoutInput`<sup>Optional</sup> <a name="memberTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeoutInput"></a>

```java
public java.lang.Number getMemberTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `protocolPortInput`<sup>Optional</sup> <a name="protocolPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPortInput"></a>

```java
public java.lang.Number getProtocolPortInput();
```

- *Type:* java.lang.Number

---

##### `securityPolicyIdInput`<sup>Optional</sup> <a name="securityPolicyIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyIdInput"></a>

```java
public java.lang.String getSecurityPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `sniContainerRefsInput`<sup>Optional</sup> <a name="sniContainerRefsInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefsInput"></a>

```java
public java.util.List<java.lang.String> getSniContainerRefsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sniMatchAlgoInput`<sup>Optional</sup> <a name="sniMatchAlgoInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgoInput"></a>

```java
public java.lang.String getSniMatchAlgoInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tlsCiphersPolicyInput`<sup>Optional</sup> <a name="tlsCiphersPolicyInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicyInput"></a>

```java
public java.lang.String getTlsCiphersPolicyInput();
```

- *Type:* java.lang.String

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUp"></a>

```java
public java.lang.Object getAdminStateUp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `advancedForwarding`<sup>Required</sup> <a name="advancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwarding"></a>

```java
public java.lang.Object getAdvancedForwarding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCaTlsContainerRef`<sup>Required</sup> <a name="clientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRef"></a>

```java
public java.lang.String getClientCaTlsContainerRef();
```

- *Type:* java.lang.String

---

##### `clientTimeout`<sup>Required</sup> <a name="clientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeout"></a>

```java
public java.lang.Number getClientTimeout();
```

- *Type:* java.lang.Number

---

##### `defaultPoolId`<sup>Required</sup> <a name="defaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolId"></a>

```java
public java.lang.String getDefaultPoolId();
```

- *Type:* java.lang.String

---

##### `defaultTlsContainerRef`<sup>Required</sup> <a name="defaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRef"></a>

```java
public java.lang.String getDefaultTlsContainerRef();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `http2Enable`<sup>Required</sup> <a name="http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2Enable"></a>

```java
public java.lang.Object getHttp2Enable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keepAliveTimeout`<sup>Required</sup> <a name="keepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeout"></a>

```java
public java.lang.Number getKeepAliveTimeout();
```

- *Type:* java.lang.Number

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerId"></a>

```java
public java.lang.String getLoadbalancerId();
```

- *Type:* java.lang.String

---

##### `memberRetryEnable`<sup>Required</sup> <a name="memberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnable"></a>

```java
public java.lang.Object getMemberRetryEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memberTimeout`<sup>Required</sup> <a name="memberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeout"></a>

```java
public java.lang.Number getMemberTimeout();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPort"></a>

```java
public java.lang.Number getProtocolPort();
```

- *Type:* java.lang.Number

---

##### `securityPolicyId`<sup>Required</sup> <a name="securityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyId"></a>

```java
public java.lang.String getSecurityPolicyId();
```

- *Type:* java.lang.String

---

##### `sniContainerRefs`<sup>Required</sup> <a name="sniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefs"></a>

```java
public java.util.List<java.lang.String> getSniContainerRefs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sniMatchAlgo`<sup>Required</sup> <a name="sniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgo"></a>

```java
public java.lang.String getSniMatchAlgo();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tlsCiphersPolicy`<sup>Required</sup> <a name="tlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicy"></a>

```java
public java.lang.String getTlsCiphersPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerV3Config <a name="LbListenerV3Config" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v3.LbListenerV3Config;

LbListenerV3Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .loadbalancerId(java.lang.String)
    .protocol(java.lang.String)
    .protocolPort(java.lang.Number)
//  .adminStateUp(java.lang.Boolean)
//  .adminStateUp(IResolvable)
//  .advancedForwarding(java.lang.Boolean)
//  .advancedForwarding(IResolvable)
//  .clientCaTlsContainerRef(java.lang.String)
//  .clientTimeout(java.lang.Number)
//  .defaultPoolId(java.lang.String)
//  .defaultTlsContainerRef(java.lang.String)
//  .description(java.lang.String)
//  .http2Enable(java.lang.Boolean)
//  .http2Enable(IResolvable)
//  .id(java.lang.String)
//  .insertHeaders(LbListenerV3InsertHeaders)
//  .ipGroup(IResolvable)
//  .ipGroup(java.util.List<LbListenerV3IpGroup>)
//  .keepAliveTimeout(java.lang.Number)
//  .memberRetryEnable(java.lang.Boolean)
//  .memberRetryEnable(IResolvable)
//  .memberTimeout(java.lang.Number)
//  .name(java.lang.String)
//  .securityPolicyId(java.lang.String)
//  .sniContainerRefs(java.util.List<java.lang.String>)
//  .sniMatchAlgo(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tlsCiphersPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocolPort">protocolPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.advancedForwarding">advancedForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientCaTlsContainerRef">clientCaTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientTimeout">clientTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultPoolId">defaultPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#description LbListenerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.http2Enable">http2Enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.insertHeaders">insertHeaders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | insert_headers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.ipGroup">ipGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>></code> | ip_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.keepAliveTimeout">keepAliveTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberRetryEnable">memberRetryEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberTimeout">memberTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#name LbListenerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.securityPolicyId">securityPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniContainerRefs">sniContainerRefs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniMatchAlgo">sniMatchAlgo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#tags LbListenerV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tlsCiphersPolicy">tlsCiphersPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.loadbalancerId"></a>

```java
public java.lang.String getLoadbalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}.

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocolPort"></a>

```java
public java.lang.Number getProtocolPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.adminStateUp"></a>

```java
public java.lang.Object getAdminStateUp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}.

---

##### `advancedForwarding`<sup>Optional</sup> <a name="advancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.advancedForwarding"></a>

```java
public java.lang.Object getAdvancedForwarding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}.

---

##### `clientCaTlsContainerRef`<sup>Optional</sup> <a name="clientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientCaTlsContainerRef"></a>

```java
public java.lang.String getClientCaTlsContainerRef();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}.

---

##### `clientTimeout`<sup>Optional</sup> <a name="clientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientTimeout"></a>

```java
public java.lang.Number getClientTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}.

---

##### `defaultPoolId`<sup>Optional</sup> <a name="defaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultPoolId"></a>

```java
public java.lang.String getDefaultPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}.

---

##### `defaultTlsContainerRef`<sup>Optional</sup> <a name="defaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultTlsContainerRef"></a>

```java
public java.lang.String getDefaultTlsContainerRef();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#description LbListenerV3#description}.

---

##### `http2Enable`<sup>Optional</sup> <a name="http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.http2Enable"></a>

```java
public java.lang.Object getHttp2Enable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insertHeaders`<sup>Optional</sup> <a name="insertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.insertHeaders"></a>

```java
public LbListenerV3InsertHeaders getInsertHeaders();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

insert_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#insert_headers LbListenerV3#insert_headers}

---

##### `ipGroup`<sup>Optional</sup> <a name="ipGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.ipGroup"></a>

```java
public java.lang.Object getIpGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>>

ip_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#ip_group LbListenerV3#ip_group}

---

##### `keepAliveTimeout`<sup>Optional</sup> <a name="keepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.keepAliveTimeout"></a>

```java
public java.lang.Number getKeepAliveTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}.

---

##### `memberRetryEnable`<sup>Optional</sup> <a name="memberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberRetryEnable"></a>

```java
public java.lang.Object getMemberRetryEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}.

---

##### `memberTimeout`<sup>Optional</sup> <a name="memberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberTimeout"></a>

```java
public java.lang.Number getMemberTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#name LbListenerV3#name}.

---

##### `securityPolicyId`<sup>Optional</sup> <a name="securityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.securityPolicyId"></a>

```java
public java.lang.String getSecurityPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}.

---

##### `sniContainerRefs`<sup>Optional</sup> <a name="sniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniContainerRefs"></a>

```java
public java.util.List<java.lang.String> getSniContainerRefs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}.

---

##### `sniMatchAlgo`<sup>Optional</sup> <a name="sniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniMatchAlgo"></a>

```java
public java.lang.String getSniMatchAlgo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#tags LbListenerV3#tags}.

---

##### `tlsCiphersPolicy`<sup>Optional</sup> <a name="tlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tlsCiphersPolicy"></a>

```java
public java.lang.String getTlsCiphersPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}.

---

### LbListenerV3InsertHeaders <a name="LbListenerV3InsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v3.LbListenerV3InsertHeaders;

LbListenerV3InsertHeaders.builder()
//  .forwardedForPort(java.lang.Boolean)
//  .forwardedForPort(IResolvable)
//  .forwardedHost(java.lang.Boolean)
//  .forwardedHost(IResolvable)
//  .forwardedPort(java.lang.Boolean)
//  .forwardedPort(IResolvable)
//  .forwardElbIp(java.lang.Boolean)
//  .forwardElbIp(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedForPort">forwardedForPort</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedHost">forwardedHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedPort">forwardedPort</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardElbIp">forwardElbIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}. |

---

##### `forwardedForPort`<sup>Optional</sup> <a name="forwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedForPort"></a>

```java
public java.lang.Object getForwardedForPort();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}.

---

##### `forwardedHost`<sup>Optional</sup> <a name="forwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedHost"></a>

```java
public java.lang.Object getForwardedHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}.

---

##### `forwardedPort`<sup>Optional</sup> <a name="forwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedPort"></a>

```java
public java.lang.Object getForwardedPort();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}.

---

##### `forwardElbIp`<sup>Optional</sup> <a name="forwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardElbIp"></a>

```java
public java.lang.Object getForwardElbIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}.

---

### LbListenerV3IpGroup <a name="LbListenerV3IpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v3.LbListenerV3IpGroup;

LbListenerV3IpGroup.builder()
    .id(java.lang.String)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#enable LbListenerV3#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#type LbListenerV3#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#enable LbListenerV3#enable}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/lb_listener_v3#type LbListenerV3#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerV3InsertHeadersOutputReference <a name="LbListenerV3InsertHeadersOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v3.LbListenerV3InsertHeadersOutputReference;

new LbListenerV3InsertHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedForPort">resetForwardedForPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedHost">resetForwardedHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedPort">resetForwardedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardElbIp">resetForwardElbIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForwardedForPort` <a name="resetForwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedForPort"></a>

```java
public void resetForwardedForPort()
```

##### `resetForwardedHost` <a name="resetForwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedHost"></a>

```java
public void resetForwardedHost()
```

##### `resetForwardedPort` <a name="resetForwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedPort"></a>

```java
public void resetForwardedPort()
```

##### `resetForwardElbIp` <a name="resetForwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardElbIp"></a>

```java
public void resetForwardElbIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPortInput">forwardedForPortInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHostInput">forwardedHostInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPortInput">forwardedPortInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIpInput">forwardElbIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPort">forwardedForPort</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHost">forwardedHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPort">forwardedPort</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIp">forwardElbIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forwardedForPortInput`<sup>Optional</sup> <a name="forwardedForPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPortInput"></a>

```java
public java.lang.Object getForwardedForPortInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardedHostInput`<sup>Optional</sup> <a name="forwardedHostInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHostInput"></a>

```java
public java.lang.Object getForwardedHostInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardedPortInput`<sup>Optional</sup> <a name="forwardedPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPortInput"></a>

```java
public java.lang.Object getForwardedPortInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardElbIpInput`<sup>Optional</sup> <a name="forwardElbIpInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIpInput"></a>

```java
public java.lang.Object getForwardElbIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardedForPort`<sup>Required</sup> <a name="forwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPort"></a>

```java
public java.lang.Object getForwardedForPort();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardedHost`<sup>Required</sup> <a name="forwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHost"></a>

```java
public java.lang.Object getForwardedHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardedPort`<sup>Required</sup> <a name="forwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPort"></a>

```java
public java.lang.Object getForwardedPort();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardElbIp`<sup>Required</sup> <a name="forwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIp"></a>

```java
public java.lang.Object getForwardElbIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.internalValue"></a>

```java
public LbListenerV3InsertHeaders getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---


### LbListenerV3IpGroupList <a name="LbListenerV3IpGroupList" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v3.LbListenerV3IpGroupList;

new LbListenerV3IpGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.get"></a>

```java
public LbListenerV3IpGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>>

---


### LbListenerV3IpGroupOutputReference <a name="LbListenerV3IpGroupOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v3.LbListenerV3IpGroupOutputReference;

new LbListenerV3IpGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

---



