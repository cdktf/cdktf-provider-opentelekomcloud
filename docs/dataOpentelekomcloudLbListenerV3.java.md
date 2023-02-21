# `dataOpentelekomcloudLbListenerV3` Submodule <a name="`dataOpentelekomcloudLbListenerV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudLbListenerV3 <a name="DataOpentelekomcloudLbListenerV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3 opentelekomcloud_lb_listener_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_lb_listener_v3.DataOpentelekomcloudLbListenerV3;

DataOpentelekomcloudLbListenerV3.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .clientCaTlsContainerRef(java.lang.String)
//  .clientTimeout(java.lang.Number)
//  .defaultPoolId(java.lang.String)
//  .defaultTlsContainerRef(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .keepAliveTimeout(java.lang.Number)
//  .loadbalancerId(java.lang.String)
//  .memberAddress(java.lang.String)
//  .memberDeviceId(java.lang.String)
//  .memberTimeout(java.lang.Number)
//  .name(java.lang.String)
//  .protocol(java.lang.String)
//  .protocolPort(java.lang.Number)
//  .tlsCiphersPolicy(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.clientCaTlsContainerRef">clientCaTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#client_ca_tls_container_ref DataOpentelekomcloudLbListenerV3#client_ca_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.clientTimeout">clientTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#client_timeout DataOpentelekomcloudLbListenerV3#client_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.defaultPoolId">defaultPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#default_pool_id DataOpentelekomcloudLbListenerV3#default_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#default_tls_container_ref DataOpentelekomcloudLbListenerV3#default_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#description DataOpentelekomcloudLbListenerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#id DataOpentelekomcloudLbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.keepAliveTimeout">keepAliveTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#keep_alive_timeout DataOpentelekomcloudLbListenerV3#keep_alive_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#loadbalancer_id DataOpentelekomcloudLbListenerV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.memberAddress">memberAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_address DataOpentelekomcloudLbListenerV3#member_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.memberDeviceId">memberDeviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_device_id DataOpentelekomcloudLbListenerV3#member_device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.memberTimeout">memberTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_timeout DataOpentelekomcloudLbListenerV3#member_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#name DataOpentelekomcloudLbListenerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#protocol DataOpentelekomcloudLbListenerV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.protocolPort">protocolPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#protocol_port DataOpentelekomcloudLbListenerV3#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.tlsCiphersPolicy">tlsCiphersPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#tls_ciphers_policy DataOpentelekomcloudLbListenerV3#tls_ciphers_policy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientCaTlsContainerRef`<sup>Optional</sup> <a name="clientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.clientCaTlsContainerRef"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#client_ca_tls_container_ref DataOpentelekomcloudLbListenerV3#client_ca_tls_container_ref}.

---

##### `clientTimeout`<sup>Optional</sup> <a name="clientTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.clientTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#client_timeout DataOpentelekomcloudLbListenerV3#client_timeout}.

---

##### `defaultPoolId`<sup>Optional</sup> <a name="defaultPoolId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.defaultPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#default_pool_id DataOpentelekomcloudLbListenerV3#default_pool_id}.

---

##### `defaultTlsContainerRef`<sup>Optional</sup> <a name="defaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.defaultTlsContainerRef"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#default_tls_container_ref DataOpentelekomcloudLbListenerV3#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#description DataOpentelekomcloudLbListenerV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#id DataOpentelekomcloudLbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepAliveTimeout`<sup>Optional</sup> <a name="keepAliveTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.keepAliveTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#keep_alive_timeout DataOpentelekomcloudLbListenerV3#keep_alive_timeout}.

---

##### `loadbalancerId`<sup>Optional</sup> <a name="loadbalancerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.loadbalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#loadbalancer_id DataOpentelekomcloudLbListenerV3#loadbalancer_id}.

---

##### `memberAddress`<sup>Optional</sup> <a name="memberAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.memberAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_address DataOpentelekomcloudLbListenerV3#member_address}.

---

##### `memberDeviceId`<sup>Optional</sup> <a name="memberDeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.memberDeviceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_device_id DataOpentelekomcloudLbListenerV3#member_device_id}.

---

##### `memberTimeout`<sup>Optional</sup> <a name="memberTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.memberTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_timeout DataOpentelekomcloudLbListenerV3#member_timeout}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#name DataOpentelekomcloudLbListenerV3#name}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#protocol DataOpentelekomcloudLbListenerV3#protocol}.

---

##### `protocolPort`<sup>Optional</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.protocolPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#protocol_port DataOpentelekomcloudLbListenerV3#protocol_port}.

---

##### `tlsCiphersPolicy`<sup>Optional</sup> <a name="tlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.Initializer.parameter.tlsCiphersPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#tls_ciphers_policy DataOpentelekomcloudLbListenerV3#tls_ciphers_policy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetClientCaTlsContainerRef">resetClientCaTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetClientTimeout">resetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetDefaultPoolId">resetDefaultPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetDefaultTlsContainerRef">resetDefaultTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetKeepAliveTimeout">resetKeepAliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetLoadbalancerId">resetLoadbalancerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetMemberAddress">resetMemberAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetMemberDeviceId">resetMemberDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetMemberTimeout">resetMemberTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetProtocolPort">resetProtocolPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetTlsCiphersPolicy">resetTlsCiphersPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetClientCaTlsContainerRef` <a name="resetClientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetClientCaTlsContainerRef"></a>

```java
public void resetClientCaTlsContainerRef()
```

##### `resetClientTimeout` <a name="resetClientTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetClientTimeout"></a>

```java
public void resetClientTimeout()
```

##### `resetDefaultPoolId` <a name="resetDefaultPoolId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetDefaultPoolId"></a>

```java
public void resetDefaultPoolId()
```

##### `resetDefaultTlsContainerRef` <a name="resetDefaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetDefaultTlsContainerRef"></a>

```java
public void resetDefaultTlsContainerRef()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetId"></a>

```java
public void resetId()
```

##### `resetKeepAliveTimeout` <a name="resetKeepAliveTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetKeepAliveTimeout"></a>

```java
public void resetKeepAliveTimeout()
```

##### `resetLoadbalancerId` <a name="resetLoadbalancerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetLoadbalancerId"></a>

```java
public void resetLoadbalancerId()
```

##### `resetMemberAddress` <a name="resetMemberAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetMemberAddress"></a>

```java
public void resetMemberAddress()
```

##### `resetMemberDeviceId` <a name="resetMemberDeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetMemberDeviceId"></a>

```java
public void resetMemberDeviceId()
```

##### `resetMemberTimeout` <a name="resetMemberTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetMemberTimeout"></a>

```java
public void resetMemberTimeout()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetName"></a>

```java
public void resetName()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetProtocolPort` <a name="resetProtocolPort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetProtocolPort"></a>

```java
public void resetProtocolPort()
```

##### `resetTlsCiphersPolicy` <a name="resetTlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.resetTlsCiphersPolicy"></a>

```java
public void resetTlsCiphersPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_lb_listener_v3.DataOpentelekomcloudLbListenerV3;

DataOpentelekomcloudLbListenerV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_lb_listener_v3.DataOpentelekomcloudLbListenerV3;

DataOpentelekomcloudLbListenerV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_lb_listener_v3.DataOpentelekomcloudLbListenerV3;

DataOpentelekomcloudLbListenerV3.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.adminStateUp">adminStateUp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.http2Enable">http2Enable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.insertHeaders">insertHeaders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList">DataOpentelekomcloudLbListenerV3InsertHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberRetryEnable">memberRetryEnable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memoryRetryEnable">memoryRetryEnable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.sniContainerRefs">sniContainerRefs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.clientCaTlsContainerRefInput">clientCaTlsContainerRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.clientTimeoutInput">clientTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.defaultPoolIdInput">defaultPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.defaultTlsContainerRefInput">defaultTlsContainerRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.keepAliveTimeoutInput">keepAliveTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.loadbalancerIdInput">loadbalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberAddressInput">memberAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberDeviceIdInput">memberDeviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberTimeoutInput">memberTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.protocolPortInput">protocolPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.tlsCiphersPolicyInput">tlsCiphersPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.clientCaTlsContainerRef">clientCaTlsContainerRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.clientTimeout">clientTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.defaultPoolId">defaultPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.keepAliveTimeout">keepAliveTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberAddress">memberAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberDeviceId">memberDeviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberTimeout">memberTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.protocolPort">protocolPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.tlsCiphersPolicy">tlsCiphersPolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.adminStateUp"></a>

```java
public IResolvable getAdminStateUp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `http2Enable`<sup>Required</sup> <a name="http2Enable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.http2Enable"></a>

```java
public IResolvable getHttp2Enable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `insertHeaders`<sup>Required</sup> <a name="insertHeaders" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.insertHeaders"></a>

```java
public DataOpentelekomcloudLbListenerV3InsertHeadersList getInsertHeaders();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList">DataOpentelekomcloudLbListenerV3InsertHeadersList</a>

---

##### `memberRetryEnable`<sup>Required</sup> <a name="memberRetryEnable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberRetryEnable"></a>

```java
public IResolvable getMemberRetryEnable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `memoryRetryEnable`<sup>Required</sup> <a name="memoryRetryEnable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memoryRetryEnable"></a>

```java
public IResolvable getMemoryRetryEnable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `sniContainerRefs`<sup>Required</sup> <a name="sniContainerRefs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.sniContainerRefs"></a>

```java
public java.util.List<java.lang.String> getSniContainerRefs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `clientCaTlsContainerRefInput`<sup>Optional</sup> <a name="clientCaTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.clientCaTlsContainerRefInput"></a>

```java
public java.lang.String getClientCaTlsContainerRefInput();
```

- *Type:* java.lang.String

---

##### `clientTimeoutInput`<sup>Optional</sup> <a name="clientTimeoutInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.clientTimeoutInput"></a>

```java
public java.lang.Number getClientTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `defaultPoolIdInput`<sup>Optional</sup> <a name="defaultPoolIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.defaultPoolIdInput"></a>

```java
public java.lang.String getDefaultPoolIdInput();
```

- *Type:* java.lang.String

---

##### `defaultTlsContainerRefInput`<sup>Optional</sup> <a name="defaultTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.defaultTlsContainerRefInput"></a>

```java
public java.lang.String getDefaultTlsContainerRefInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keepAliveTimeoutInput`<sup>Optional</sup> <a name="keepAliveTimeoutInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.keepAliveTimeoutInput"></a>

```java
public java.lang.Number getKeepAliveTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `loadbalancerIdInput`<sup>Optional</sup> <a name="loadbalancerIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.loadbalancerIdInput"></a>

```java
public java.lang.String getLoadbalancerIdInput();
```

- *Type:* java.lang.String

---

##### `memberAddressInput`<sup>Optional</sup> <a name="memberAddressInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberAddressInput"></a>

```java
public java.lang.String getMemberAddressInput();
```

- *Type:* java.lang.String

---

##### `memberDeviceIdInput`<sup>Optional</sup> <a name="memberDeviceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberDeviceIdInput"></a>

```java
public java.lang.String getMemberDeviceIdInput();
```

- *Type:* java.lang.String

---

##### `memberTimeoutInput`<sup>Optional</sup> <a name="memberTimeoutInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberTimeoutInput"></a>

```java
public java.lang.Number getMemberTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `protocolPortInput`<sup>Optional</sup> <a name="protocolPortInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.protocolPortInput"></a>

```java
public java.lang.Number getProtocolPortInput();
```

- *Type:* java.lang.Number

---

##### `tlsCiphersPolicyInput`<sup>Optional</sup> <a name="tlsCiphersPolicyInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.tlsCiphersPolicyInput"></a>

```java
public java.lang.String getTlsCiphersPolicyInput();
```

- *Type:* java.lang.String

---

##### `clientCaTlsContainerRef`<sup>Required</sup> <a name="clientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.clientCaTlsContainerRef"></a>

```java
public java.lang.String getClientCaTlsContainerRef();
```

- *Type:* java.lang.String

---

##### `clientTimeout`<sup>Required</sup> <a name="clientTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.clientTimeout"></a>

```java
public java.lang.Number getClientTimeout();
```

- *Type:* java.lang.Number

---

##### `defaultPoolId`<sup>Required</sup> <a name="defaultPoolId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.defaultPoolId"></a>

```java
public java.lang.String getDefaultPoolId();
```

- *Type:* java.lang.String

---

##### `defaultTlsContainerRef`<sup>Required</sup> <a name="defaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.defaultTlsContainerRef"></a>

```java
public java.lang.String getDefaultTlsContainerRef();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keepAliveTimeout`<sup>Required</sup> <a name="keepAliveTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.keepAliveTimeout"></a>

```java
public java.lang.Number getKeepAliveTimeout();
```

- *Type:* java.lang.Number

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.loadbalancerId"></a>

```java
public java.lang.String getLoadbalancerId();
```

- *Type:* java.lang.String

---

##### `memberAddress`<sup>Required</sup> <a name="memberAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberAddress"></a>

```java
public java.lang.String getMemberAddress();
```

- *Type:* java.lang.String

---

##### `memberDeviceId`<sup>Required</sup> <a name="memberDeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberDeviceId"></a>

```java
public java.lang.String getMemberDeviceId();
```

- *Type:* java.lang.String

---

##### `memberTimeout`<sup>Required</sup> <a name="memberTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.memberTimeout"></a>

```java
public java.lang.Number getMemberTimeout();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.protocolPort"></a>

```java
public java.lang.Number getProtocolPort();
```

- *Type:* java.lang.Number

---

##### `tlsCiphersPolicy`<sup>Required</sup> <a name="tlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.tlsCiphersPolicy"></a>

```java
public java.lang.String getTlsCiphersPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudLbListenerV3Config <a name="DataOpentelekomcloudLbListenerV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_lb_listener_v3.DataOpentelekomcloudLbListenerV3Config;

DataOpentelekomcloudLbListenerV3Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .clientCaTlsContainerRef(java.lang.String)
//  .clientTimeout(java.lang.Number)
//  .defaultPoolId(java.lang.String)
//  .defaultTlsContainerRef(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .keepAliveTimeout(java.lang.Number)
//  .loadbalancerId(java.lang.String)
//  .memberAddress(java.lang.String)
//  .memberDeviceId(java.lang.String)
//  .memberTimeout(java.lang.Number)
//  .name(java.lang.String)
//  .protocol(java.lang.String)
//  .protocolPort(java.lang.Number)
//  .tlsCiphersPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.clientCaTlsContainerRef">clientCaTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#client_ca_tls_container_ref DataOpentelekomcloudLbListenerV3#client_ca_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.clientTimeout">clientTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#client_timeout DataOpentelekomcloudLbListenerV3#client_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.defaultPoolId">defaultPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#default_pool_id DataOpentelekomcloudLbListenerV3#default_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#default_tls_container_ref DataOpentelekomcloudLbListenerV3#default_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#description DataOpentelekomcloudLbListenerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#id DataOpentelekomcloudLbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.keepAliveTimeout">keepAliveTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#keep_alive_timeout DataOpentelekomcloudLbListenerV3#keep_alive_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#loadbalancer_id DataOpentelekomcloudLbListenerV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.memberAddress">memberAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_address DataOpentelekomcloudLbListenerV3#member_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.memberDeviceId">memberDeviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_device_id DataOpentelekomcloudLbListenerV3#member_device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.memberTimeout">memberTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_timeout DataOpentelekomcloudLbListenerV3#member_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#name DataOpentelekomcloudLbListenerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#protocol DataOpentelekomcloudLbListenerV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.protocolPort">protocolPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#protocol_port DataOpentelekomcloudLbListenerV3#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.tlsCiphersPolicy">tlsCiphersPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#tls_ciphers_policy DataOpentelekomcloudLbListenerV3#tls_ciphers_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientCaTlsContainerRef`<sup>Optional</sup> <a name="clientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.clientCaTlsContainerRef"></a>

```java
public java.lang.String getClientCaTlsContainerRef();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#client_ca_tls_container_ref DataOpentelekomcloudLbListenerV3#client_ca_tls_container_ref}.

---

##### `clientTimeout`<sup>Optional</sup> <a name="clientTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.clientTimeout"></a>

```java
public java.lang.Number getClientTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#client_timeout DataOpentelekomcloudLbListenerV3#client_timeout}.

---

##### `defaultPoolId`<sup>Optional</sup> <a name="defaultPoolId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.defaultPoolId"></a>

```java
public java.lang.String getDefaultPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#default_pool_id DataOpentelekomcloudLbListenerV3#default_pool_id}.

---

##### `defaultTlsContainerRef`<sup>Optional</sup> <a name="defaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.defaultTlsContainerRef"></a>

```java
public java.lang.String getDefaultTlsContainerRef();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#default_tls_container_ref DataOpentelekomcloudLbListenerV3#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#description DataOpentelekomcloudLbListenerV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#id DataOpentelekomcloudLbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepAliveTimeout`<sup>Optional</sup> <a name="keepAliveTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.keepAliveTimeout"></a>

```java
public java.lang.Number getKeepAliveTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#keep_alive_timeout DataOpentelekomcloudLbListenerV3#keep_alive_timeout}.

---

##### `loadbalancerId`<sup>Optional</sup> <a name="loadbalancerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.loadbalancerId"></a>

```java
public java.lang.String getLoadbalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#loadbalancer_id DataOpentelekomcloudLbListenerV3#loadbalancer_id}.

---

##### `memberAddress`<sup>Optional</sup> <a name="memberAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.memberAddress"></a>

```java
public java.lang.String getMemberAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_address DataOpentelekomcloudLbListenerV3#member_address}.

---

##### `memberDeviceId`<sup>Optional</sup> <a name="memberDeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.memberDeviceId"></a>

```java
public java.lang.String getMemberDeviceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_device_id DataOpentelekomcloudLbListenerV3#member_device_id}.

---

##### `memberTimeout`<sup>Optional</sup> <a name="memberTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.memberTimeout"></a>

```java
public java.lang.Number getMemberTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#member_timeout DataOpentelekomcloudLbListenerV3#member_timeout}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#name DataOpentelekomcloudLbListenerV3#name}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#protocol DataOpentelekomcloudLbListenerV3#protocol}.

---

##### `protocolPort`<sup>Optional</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.protocolPort"></a>

```java
public java.lang.Number getProtocolPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#protocol_port DataOpentelekomcloudLbListenerV3#protocol_port}.

---

##### `tlsCiphersPolicy`<sup>Optional</sup> <a name="tlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3Config.property.tlsCiphersPolicy"></a>

```java
public java.lang.String getTlsCiphersPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3#tls_ciphers_policy DataOpentelekomcloudLbListenerV3#tls_ciphers_policy}.

---

### DataOpentelekomcloudLbListenerV3InsertHeaders <a name="DataOpentelekomcloudLbListenerV3InsertHeaders" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_lb_listener_v3.DataOpentelekomcloudLbListenerV3InsertHeaders;

DataOpentelekomcloudLbListenerV3InsertHeaders.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudLbListenerV3InsertHeadersList <a name="DataOpentelekomcloudLbListenerV3InsertHeadersList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_lb_listener_v3.DataOpentelekomcloudLbListenerV3InsertHeadersList;

new DataOpentelekomcloudLbListenerV3InsertHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.get"></a>

```java
public DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference <a name="DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_lb_listener_v3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference;

new DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.forwardedForPort">forwardedForPort</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.forwardedHost">forwardedHost</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.forwardedPort">forwardedPort</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.forwardElbIp">forwardElbIp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeaders">DataOpentelekomcloudLbListenerV3InsertHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forwardedForPort`<sup>Required</sup> <a name="forwardedForPort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.forwardedForPort"></a>

```java
public IResolvable getForwardedForPort();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `forwardedHost`<sup>Required</sup> <a name="forwardedHost" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.forwardedHost"></a>

```java
public IResolvable getForwardedHost();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `forwardedPort`<sup>Required</sup> <a name="forwardedPort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.forwardedPort"></a>

```java
public IResolvable getForwardedPort();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `forwardElbIp`<sup>Required</sup> <a name="forwardElbIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.forwardElbIp"></a>

```java
public IResolvable getForwardElbIp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference.property.internalValue"></a>

```java
public DataOpentelekomcloudLbListenerV3InsertHeaders getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbListenerV3.DataOpentelekomcloudLbListenerV3InsertHeaders">DataOpentelekomcloudLbListenerV3InsertHeaders</a>

---



