# `lbListenerV2` Submodule <a name="`lbListenerV2` Submodule" id="@cdktf/provider-opentelekomcloud.lbListenerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListenerV2 <a name="LbListenerV2" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2 opentelekomcloud_lb_listener_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v2.LbListenerV2;

LbListenerV2.Builder.create(Construct scope, java.lang.String id)
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
//  .clientCaTlsContainerRef(java.lang.String)
//  .defaultPoolId(java.lang.String)
//  .defaultTlsContainerRef(java.lang.String)
//  .description(java.lang.String)
//  .http2Enable(java.lang.Boolean)
//  .http2Enable(IResolvable)
//  .id(java.lang.String)
//  .ipGroup(IResolvable)
//  .ipGroup(java.util.List<LbListenerV2IpGroup>)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .sniContainerRefs(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tenantId(java.lang.String)
//  .timeouts(LbListenerV2Timeouts)
//  .tlsCiphersPolicy(java.lang.String)
//  .transparentClientIpEnable(java.lang.Boolean)
//  .transparentClientIpEnable(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.protocolPort">protocolPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.clientCaTlsContainerRef">clientCaTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#client_ca_tls_container_ref LbListenerV2#client_ca_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.defaultPoolId">defaultPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#description LbListenerV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.http2Enable">http2Enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#http2_enable LbListenerV2#http2_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#id LbListenerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.ipGroup">ipGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup">LbListenerV2IpGroup</a>></code> | ip_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#name LbListenerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#region LbListenerV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.sniContainerRefs">sniContainerRefs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tags LbListenerV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.tlsCiphersPolicy">tlsCiphersPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tls_ciphers_policy LbListenerV2#tls_ciphers_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.transparentClientIpEnable">transparentClientIpEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#transparent_client_ip_enable LbListenerV2#transparent_client_ip_enable}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.loadbalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}.

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.protocolPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.adminStateUp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}.

---

##### `clientCaTlsContainerRef`<sup>Optional</sup> <a name="clientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.clientCaTlsContainerRef"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#client_ca_tls_container_ref LbListenerV2#client_ca_tls_container_ref}.

---

##### `defaultPoolId`<sup>Optional</sup> <a name="defaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.defaultPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}.

---

##### `defaultTlsContainerRef`<sup>Optional</sup> <a name="defaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.defaultTlsContainerRef"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#description LbListenerV2#description}.

---

##### `http2Enable`<sup>Optional</sup> <a name="http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.http2Enable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#http2_enable LbListenerV2#http2_enable}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#id LbListenerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipGroup`<sup>Optional</sup> <a name="ipGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.ipGroup"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup">LbListenerV2IpGroup</a>>

ip_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#ip_group LbListenerV2#ip_group}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#name LbListenerV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#region LbListenerV2#region}.

---

##### `sniContainerRefs`<sup>Optional</sup> <a name="sniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.sniContainerRefs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tags LbListenerV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#timeouts LbListenerV2#timeouts}

---

##### `tlsCiphersPolicy`<sup>Optional</sup> <a name="tlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.tlsCiphersPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tls_ciphers_policy LbListenerV2#tls_ciphers_policy}.

---

##### `transparentClientIpEnable`<sup>Optional</sup> <a name="transparentClientIpEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.Initializer.parameter.transparentClientIpEnable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#transparent_client_ip_enable LbListenerV2#transparent_client_ip_enable}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.putIpGroup">putIpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetClientCaTlsContainerRef">resetClientCaTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetDefaultPoolId">resetDefaultPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetDefaultTlsContainerRef">resetDefaultTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetHttp2Enable">resetHttp2Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetIpGroup">resetIpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetSniContainerRefs">resetSniContainerRefs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetTlsCiphersPolicy">resetTlsCiphersPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetTransparentClientIpEnable">resetTransparentClientIpEnable</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpGroup` <a name="putIpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.putIpGroup"></a>

```java
public void putIpGroup(IResolvable OR java.util.List<LbListenerV2IpGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.putIpGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup">LbListenerV2IpGroup</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.putTimeouts"></a>

```java
public void putTimeouts(LbListenerV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetAdminStateUp"></a>

```java
public void resetAdminStateUp()
```

##### `resetClientCaTlsContainerRef` <a name="resetClientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetClientCaTlsContainerRef"></a>

```java
public void resetClientCaTlsContainerRef()
```

##### `resetDefaultPoolId` <a name="resetDefaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetDefaultPoolId"></a>

```java
public void resetDefaultPoolId()
```

##### `resetDefaultTlsContainerRef` <a name="resetDefaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetDefaultTlsContainerRef"></a>

```java
public void resetDefaultTlsContainerRef()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHttp2Enable` <a name="resetHttp2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetHttp2Enable"></a>

```java
public void resetHttp2Enable()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetId"></a>

```java
public void resetId()
```

##### `resetIpGroup` <a name="resetIpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetIpGroup"></a>

```java
public void resetIpGroup()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSniContainerRefs` <a name="resetSniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetSniContainerRefs"></a>

```java
public void resetSniContainerRefs()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetTags"></a>

```java
public void resetTags()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsCiphersPolicy` <a name="resetTlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetTlsCiphersPolicy"></a>

```java
public void resetTlsCiphersPolicy()
```

##### `resetTransparentClientIpEnable` <a name="resetTransparentClientIpEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.resetTransparentClientIpEnable"></a>

```java
public void resetTransparentClientIpEnable()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbListenerV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v2.LbListenerV2;

LbListenerV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v2.LbListenerV2;

LbListenerV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v2.LbListenerV2;

LbListenerV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v2.LbListenerV2;

LbListenerV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LbListenerV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LbListenerV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LbListenerV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LbListenerV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LbListenerV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.ipGroup">ipGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList">LbListenerV2IpGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference">LbListenerV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.clientCaTlsContainerRefInput">clientCaTlsContainerRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.defaultPoolIdInput">defaultPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.defaultTlsContainerRefInput">defaultTlsContainerRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.http2EnableInput">http2EnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.ipGroupInput">ipGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup">LbListenerV2IpGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.loadbalancerIdInput">loadbalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.protocolPortInput">protocolPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.sniContainerRefsInput">sniContainerRefsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tlsCiphersPolicyInput">tlsCiphersPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.transparentClientIpEnableInput">transparentClientIpEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.clientCaTlsContainerRef">clientCaTlsContainerRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.defaultPoolId">defaultPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.http2Enable">http2Enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.protocolPort">protocolPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.sniContainerRefs">sniContainerRefs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tlsCiphersPolicy">tlsCiphersPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.transparentClientIpEnable">transparentClientIpEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipGroup`<sup>Required</sup> <a name="ipGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.ipGroup"></a>

```java
public LbListenerV2IpGroupList getIpGroup();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList">LbListenerV2IpGroupList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.timeouts"></a>

```java
public LbListenerV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference">LbListenerV2TimeoutsOutputReference</a>

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.adminStateUpInput"></a>

```java
public java.lang.Object getAdminStateUpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCaTlsContainerRefInput`<sup>Optional</sup> <a name="clientCaTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.clientCaTlsContainerRefInput"></a>

```java
public java.lang.String getClientCaTlsContainerRefInput();
```

- *Type:* java.lang.String

---

##### `defaultPoolIdInput`<sup>Optional</sup> <a name="defaultPoolIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.defaultPoolIdInput"></a>

```java
public java.lang.String getDefaultPoolIdInput();
```

- *Type:* java.lang.String

---

##### `defaultTlsContainerRefInput`<sup>Optional</sup> <a name="defaultTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.defaultTlsContainerRefInput"></a>

```java
public java.lang.String getDefaultTlsContainerRefInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `http2EnableInput`<sup>Optional</sup> <a name="http2EnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.http2EnableInput"></a>

```java
public java.lang.Object getHttp2EnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipGroupInput`<sup>Optional</sup> <a name="ipGroupInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.ipGroupInput"></a>

```java
public java.lang.Object getIpGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup">LbListenerV2IpGroup</a>>

---

##### `loadbalancerIdInput`<sup>Optional</sup> <a name="loadbalancerIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.loadbalancerIdInput"></a>

```java
public java.lang.String getLoadbalancerIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `protocolPortInput`<sup>Optional</sup> <a name="protocolPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.protocolPortInput"></a>

```java
public java.lang.Number getProtocolPortInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sniContainerRefsInput`<sup>Optional</sup> <a name="sniContainerRefsInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.sniContainerRefsInput"></a>

```java
public java.util.List<java.lang.String> getSniContainerRefsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>

---

##### `tlsCiphersPolicyInput`<sup>Optional</sup> <a name="tlsCiphersPolicyInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tlsCiphersPolicyInput"></a>

```java
public java.lang.String getTlsCiphersPolicyInput();
```

- *Type:* java.lang.String

---

##### `transparentClientIpEnableInput`<sup>Optional</sup> <a name="transparentClientIpEnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.transparentClientIpEnableInput"></a>

```java
public java.lang.Object getTransparentClientIpEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.adminStateUp"></a>

```java
public java.lang.Object getAdminStateUp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCaTlsContainerRef`<sup>Required</sup> <a name="clientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.clientCaTlsContainerRef"></a>

```java
public java.lang.String getClientCaTlsContainerRef();
```

- *Type:* java.lang.String

---

##### `defaultPoolId`<sup>Required</sup> <a name="defaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.defaultPoolId"></a>

```java
public java.lang.String getDefaultPoolId();
```

- *Type:* java.lang.String

---

##### `defaultTlsContainerRef`<sup>Required</sup> <a name="defaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.defaultTlsContainerRef"></a>

```java
public java.lang.String getDefaultTlsContainerRef();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `http2Enable`<sup>Required</sup> <a name="http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.http2Enable"></a>

```java
public java.lang.Object getHttp2Enable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.loadbalancerId"></a>

```java
public java.lang.String getLoadbalancerId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.protocolPort"></a>

```java
public java.lang.Number getProtocolPort();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sniContainerRefs`<sup>Required</sup> <a name="sniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.sniContainerRefs"></a>

```java
public java.util.List<java.lang.String> getSniContainerRefs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `tlsCiphersPolicy`<sup>Required</sup> <a name="tlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tlsCiphersPolicy"></a>

```java
public java.lang.String getTlsCiphersPolicy();
```

- *Type:* java.lang.String

---

##### `transparentClientIpEnable`<sup>Required</sup> <a name="transparentClientIpEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.transparentClientIpEnable"></a>

```java
public java.lang.Object getTransparentClientIpEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerV2Config <a name="LbListenerV2Config" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v2.LbListenerV2Config;

LbListenerV2Config.builder()
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
//  .clientCaTlsContainerRef(java.lang.String)
//  .defaultPoolId(java.lang.String)
//  .defaultTlsContainerRef(java.lang.String)
//  .description(java.lang.String)
//  .http2Enable(java.lang.Boolean)
//  .http2Enable(IResolvable)
//  .id(java.lang.String)
//  .ipGroup(IResolvable)
//  .ipGroup(java.util.List<LbListenerV2IpGroup>)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .sniContainerRefs(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tenantId(java.lang.String)
//  .timeouts(LbListenerV2Timeouts)
//  .tlsCiphersPolicy(java.lang.String)
//  .transparentClientIpEnable(java.lang.Boolean)
//  .transparentClientIpEnable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.protocolPort">protocolPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.clientCaTlsContainerRef">clientCaTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#client_ca_tls_container_ref LbListenerV2#client_ca_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.defaultPoolId">defaultPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#description LbListenerV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.http2Enable">http2Enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#http2_enable LbListenerV2#http2_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#id LbListenerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.ipGroup">ipGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup">LbListenerV2IpGroup</a>></code> | ip_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#name LbListenerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#region LbListenerV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.sniContainerRefs">sniContainerRefs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tags LbListenerV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.tlsCiphersPolicy">tlsCiphersPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tls_ciphers_policy LbListenerV2#tls_ciphers_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.transparentClientIpEnable">transparentClientIpEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#transparent_client_ip_enable LbListenerV2#transparent_client_ip_enable}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.loadbalancerId"></a>

```java
public java.lang.String getLoadbalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}.

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.protocolPort"></a>

```java
public java.lang.Number getProtocolPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.adminStateUp"></a>

```java
public java.lang.Object getAdminStateUp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}.

---

##### `clientCaTlsContainerRef`<sup>Optional</sup> <a name="clientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.clientCaTlsContainerRef"></a>

```java
public java.lang.String getClientCaTlsContainerRef();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#client_ca_tls_container_ref LbListenerV2#client_ca_tls_container_ref}.

---

##### `defaultPoolId`<sup>Optional</sup> <a name="defaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.defaultPoolId"></a>

```java
public java.lang.String getDefaultPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}.

---

##### `defaultTlsContainerRef`<sup>Optional</sup> <a name="defaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.defaultTlsContainerRef"></a>

```java
public java.lang.String getDefaultTlsContainerRef();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#description LbListenerV2#description}.

---

##### `http2Enable`<sup>Optional</sup> <a name="http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.http2Enable"></a>

```java
public java.lang.Object getHttp2Enable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#http2_enable LbListenerV2#http2_enable}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#id LbListenerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipGroup`<sup>Optional</sup> <a name="ipGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.ipGroup"></a>

```java
public java.lang.Object getIpGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup">LbListenerV2IpGroup</a>>

ip_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#ip_group LbListenerV2#ip_group}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#name LbListenerV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#region LbListenerV2#region}.

---

##### `sniContainerRefs`<sup>Optional</sup> <a name="sniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.sniContainerRefs"></a>

```java
public java.util.List<java.lang.String> getSniContainerRefs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tags LbListenerV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.timeouts"></a>

```java
public LbListenerV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#timeouts LbListenerV2#timeouts}

---

##### `tlsCiphersPolicy`<sup>Optional</sup> <a name="tlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.tlsCiphersPolicy"></a>

```java
public java.lang.String getTlsCiphersPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#tls_ciphers_policy LbListenerV2#tls_ciphers_policy}.

---

##### `transparentClientIpEnable`<sup>Optional</sup> <a name="transparentClientIpEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Config.property.transparentClientIpEnable"></a>

```java
public java.lang.Object getTransparentClientIpEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#transparent_client_ip_enable LbListenerV2#transparent_client_ip_enable}.

---

### LbListenerV2IpGroup <a name="LbListenerV2IpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v2.LbListenerV2IpGroup;

LbListenerV2IpGroup.builder()
    .id(java.lang.String)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#id LbListenerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#enable LbListenerV2#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#type LbListenerV2#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#id LbListenerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#enable LbListenerV2#enable}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#type LbListenerV2#type}.

---

### LbListenerV2Timeouts <a name="LbListenerV2Timeouts" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v2.LbListenerV2Timeouts;

LbListenerV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#create LbListenerV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#delete LbListenerV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#update LbListenerV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#create LbListenerV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#delete LbListenerV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/lb_listener_v2#update LbListenerV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerV2IpGroupList <a name="LbListenerV2IpGroupList" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v2.LbListenerV2IpGroupList;

new LbListenerV2IpGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.get"></a>

```java
public LbListenerV2IpGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup">LbListenerV2IpGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup">LbListenerV2IpGroup</a>>

---


### LbListenerV2IpGroupOutputReference <a name="LbListenerV2IpGroupOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v2.LbListenerV2IpGroupOutputReference;

new LbListenerV2IpGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup">LbListenerV2IpGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2IpGroup">LbListenerV2IpGroup</a>

---


### LbListenerV2TimeoutsOutputReference <a name="LbListenerV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_listener_v2.LbListenerV2TimeoutsOutputReference;

new LbListenerV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>

---



