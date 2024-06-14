# `directConnectV2` Submodule <a name="`directConnectV2` Submodule" id="@cdktf/provider-opentelekomcloud.directConnectV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectConnectV2 <a name="DirectConnectV2" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2 opentelekomcloud_direct_connect_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.direct_connect_v2.DirectConnectV2;

DirectConnectV2.Builder.create(Construct scope, java.lang.String id)
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
    .providerName(java.lang.String)
//  .adminStateUp(java.lang.Boolean)
//  .adminStateUp(IResolvable)
//  .bandwidth(java.lang.Number)
//  .chargeMode(java.lang.String)
//  .description(java.lang.String)
//  .deviceId(java.lang.String)
//  .hostingId(java.lang.String)
//  .interfaceName(java.lang.String)
//  .location(java.lang.String)
//  .name(java.lang.String)
//  .orderId(java.lang.String)
//  .peerLocation(java.lang.String)
//  .portType(java.lang.String)
//  .productId(java.lang.String)
//  .providerStatus(java.lang.String)
//  .redundantId(java.lang.String)
//  .status(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(DirectConnectV2Timeouts)
//  .type(java.lang.String)
//  .vlan(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.chargeMode">chargeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#description DirectConnectV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.deviceId">deviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.hostingId">hostingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#location DirectConnectV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#name DirectConnectV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.orderId">orderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.peerLocation">peerLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.portType">portType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.providerStatus">providerStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.redundantId">redundantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#status DirectConnectV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#type DirectConnectV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.adminStateUp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}.

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.bandwidth"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}.

---

##### `chargeMode`<sup>Optional</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.chargeMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#description DirectConnectV2#description}.

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.deviceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}.

---

##### `hostingId`<sup>Optional</sup> <a name="hostingId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.hostingId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}.

---

##### `interfaceName`<sup>Optional</sup> <a name="interfaceName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.interfaceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#location DirectConnectV2#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#name DirectConnectV2#name}.

---

##### `orderId`<sup>Optional</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.orderId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}.

---

##### `peerLocation`<sup>Optional</sup> <a name="peerLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.peerLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}.

---

##### `portType`<sup>Optional</sup> <a name="portType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.portType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.productId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}.

---

##### `providerStatus`<sup>Optional</sup> <a name="providerStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.providerStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}.

---

##### `redundantId`<sup>Optional</sup> <a name="redundantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.redundantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#status DirectConnectV2#status}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#timeouts DirectConnectV2#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#type DirectConnectV2#type}.

---

##### `vlan`<sup>Optional</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.vlan"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetChargeMode">resetChargeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDeviceId">resetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetHostingId">resetHostingId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetInterfaceName">resetInterfaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOrderId">resetOrderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPeerLocation">resetPeerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPortType">resetPortType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProductId">resetProductId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProviderStatus">resetProviderStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetRedundantId">resetRedundantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetVlan">resetVlan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts"></a>

```java
public void putTimeouts(DirectConnectV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetAdminStateUp"></a>

```java
public void resetAdminStateUp()
```

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetBandwidth"></a>

```java
public void resetBandwidth()
```

##### `resetChargeMode` <a name="resetChargeMode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetChargeMode"></a>

```java
public void resetChargeMode()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDeviceId` <a name="resetDeviceId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDeviceId"></a>

```java
public void resetDeviceId()
```

##### `resetHostingId` <a name="resetHostingId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetHostingId"></a>

```java
public void resetHostingId()
```

##### `resetInterfaceName` <a name="resetInterfaceName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetInterfaceName"></a>

```java
public void resetInterfaceName()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetName"></a>

```java
public void resetName()
```

##### `resetOrderId` <a name="resetOrderId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOrderId"></a>

```java
public void resetOrderId()
```

##### `resetPeerLocation` <a name="resetPeerLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPeerLocation"></a>

```java
public void resetPeerLocation()
```

##### `resetPortType` <a name="resetPortType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPortType"></a>

```java
public void resetPortType()
```

##### `resetProductId` <a name="resetProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProductId"></a>

```java
public void resetProductId()
```

##### `resetProviderStatus` <a name="resetProviderStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProviderStatus"></a>

```java
public void resetProviderStatus()
```

##### `resetRedundantId` <a name="resetRedundantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetRedundantId"></a>

```java
public void resetRedundantId()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetType"></a>

```java
public void resetType()
```

##### `resetVlan` <a name="resetVlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetVlan"></a>

```java
public void resetVlan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DirectConnectV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.direct_connect_v2.DirectConnectV2;

DirectConnectV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.direct_connect_v2.DirectConnectV2;

DirectConnectV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.direct_connect_v2.DirectConnectV2;

DirectConnectV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.direct_connect_v2.DirectConnectV2;

DirectConnectV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectConnectV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DirectConnectV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectConnectV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectConnectV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DirectConnectV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applicant">applicant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applyTime">applyTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.buildingLineProductId">buildingLineProductId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cableLabel">cableLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lagId">lagId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lastOnestopProductId">lastOnestopProductId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.mobile">mobile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.onestopProductId">onestopProductId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerPortType">peerPortType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerProvider">peerProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodNum">periodNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodType">periodType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.regionId">regionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.specCode">specCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference">DirectConnectV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vgwType">vgwType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidthInput">bandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeModeInput">chargeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceIdInput">deviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingIdInput">hostingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceNameInput">interfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderIdInput">orderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocationInput">peerLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portTypeInput">portTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productIdInput">productIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatusInput">providerStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantIdInput">redundantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlanInput">vlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidth">bandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeMode">chargeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceId">deviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingId">hostingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderId">orderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocation">peerLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portType">portType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatus">providerStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantId">redundantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicant`<sup>Required</sup> <a name="applicant" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applicant"></a>

```java
public java.lang.String getApplicant();
```

- *Type:* java.lang.String

---

##### `applyTime`<sup>Required</sup> <a name="applyTime" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applyTime"></a>

```java
public java.lang.String getApplyTime();
```

- *Type:* java.lang.String

---

##### `buildingLineProductId`<sup>Required</sup> <a name="buildingLineProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.buildingLineProductId"></a>

```java
public java.lang.String getBuildingLineProductId();
```

- *Type:* java.lang.String

---

##### `cableLabel`<sup>Required</sup> <a name="cableLabel" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cableLabel"></a>

```java
public java.lang.String getCableLabel();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lagId`<sup>Required</sup> <a name="lagId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lagId"></a>

```java
public java.lang.String getLagId();
```

- *Type:* java.lang.String

---

##### `lastOnestopProductId`<sup>Required</sup> <a name="lastOnestopProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lastOnestopProductId"></a>

```java
public java.lang.String getLastOnestopProductId();
```

- *Type:* java.lang.String

---

##### `mobile`<sup>Required</sup> <a name="mobile" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.mobile"></a>

```java
public java.lang.String getMobile();
```

- *Type:* java.lang.String

---

##### `onestopProductId`<sup>Required</sup> <a name="onestopProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.onestopProductId"></a>

```java
public java.lang.String getOnestopProductId();
```

- *Type:* java.lang.String

---

##### `peerPortType`<sup>Required</sup> <a name="peerPortType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerPortType"></a>

```java
public java.lang.String getPeerPortType();
```

- *Type:* java.lang.String

---

##### `peerProvider`<sup>Required</sup> <a name="peerProvider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerProvider"></a>

```java
public java.lang.String getPeerProvider();
```

- *Type:* java.lang.String

---

##### `periodNum`<sup>Required</sup> <a name="periodNum" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodNum"></a>

```java
public java.lang.Number getPeriodNum();
```

- *Type:* java.lang.Number

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodType"></a>

```java
public java.lang.Number getPeriodType();
```

- *Type:* java.lang.Number

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `regionId`<sup>Required</sup> <a name="regionId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.regionId"></a>

```java
public java.lang.String getRegionId();
```

- *Type:* java.lang.String

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.serviceKey"></a>

```java
public java.lang.String getServiceKey();
```

- *Type:* java.lang.String

---

##### `specCode`<sup>Required</sup> <a name="specCode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.specCode"></a>

```java
public java.lang.String getSpecCode();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeouts"></a>

```java
public DirectConnectV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference">DirectConnectV2TimeoutsOutputReference</a>

---

##### `vgwType`<sup>Required</sup> <a name="vgwType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vgwType"></a>

```java
public java.lang.String getVgwType();
```

- *Type:* java.lang.String

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUpInput"></a>

```java
public java.lang.Object getAdminStateUpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidthInput"></a>

```java
public java.lang.Number getBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `chargeModeInput`<sup>Optional</sup> <a name="chargeModeInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeModeInput"></a>

```java
public java.lang.String getChargeModeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceIdInput"></a>

```java
public java.lang.String getDeviceIdInput();
```

- *Type:* java.lang.String

---

##### `hostingIdInput`<sup>Optional</sup> <a name="hostingIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingIdInput"></a>

```java
public java.lang.String getHostingIdInput();
```

- *Type:* java.lang.String

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceNameInput"></a>

```java
public java.lang.String getInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderIdInput`<sup>Optional</sup> <a name="orderIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderIdInput"></a>

```java
public java.lang.String getOrderIdInput();
```

- *Type:* java.lang.String

---

##### `peerLocationInput`<sup>Optional</sup> <a name="peerLocationInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocationInput"></a>

```java
public java.lang.String getPeerLocationInput();
```

- *Type:* java.lang.String

---

##### `portTypeInput`<sup>Optional</sup> <a name="portTypeInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portTypeInput"></a>

```java
public java.lang.String getPortTypeInput();
```

- *Type:* java.lang.String

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productIdInput"></a>

```java
public java.lang.String getProductIdInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `providerStatusInput`<sup>Optional</sup> <a name="providerStatusInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatusInput"></a>

```java
public java.lang.String getProviderStatusInput();
```

- *Type:* java.lang.String

---

##### `redundantIdInput`<sup>Optional</sup> <a name="redundantIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantIdInput"></a>

```java
public java.lang.String getRedundantIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlanInput"></a>

```java
public java.lang.Number getVlanInput();
```

- *Type:* java.lang.Number

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUp"></a>

```java
public java.lang.Object getAdminStateUp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidth"></a>

```java
public java.lang.Number getBandwidth();
```

- *Type:* java.lang.Number

---

##### `chargeMode`<sup>Required</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeMode"></a>

```java
public java.lang.String getChargeMode();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceId"></a>

```java
public java.lang.String getDeviceId();
```

- *Type:* java.lang.String

---

##### `hostingId`<sup>Required</sup> <a name="hostingId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingId"></a>

```java
public java.lang.String getHostingId();
```

- *Type:* java.lang.String

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderId"></a>

```java
public java.lang.String getOrderId();
```

- *Type:* java.lang.String

---

##### `peerLocation`<sup>Required</sup> <a name="peerLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocation"></a>

```java
public java.lang.String getPeerLocation();
```

- *Type:* java.lang.String

---

##### `portType`<sup>Required</sup> <a name="portType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portType"></a>

```java
public java.lang.String getPortType();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `providerStatus`<sup>Required</sup> <a name="providerStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatus"></a>

```java
public java.lang.String getProviderStatus();
```

- *Type:* java.lang.String

---

##### `redundantId`<sup>Required</sup> <a name="redundantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantId"></a>

```java
public java.lang.String getRedundantId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectConnectV2Config <a name="DirectConnectV2Config" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.direct_connect_v2.DirectConnectV2Config;

DirectConnectV2Config.builder()
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
    .providerName(java.lang.String)
//  .adminStateUp(java.lang.Boolean)
//  .adminStateUp(IResolvable)
//  .bandwidth(java.lang.Number)
//  .chargeMode(java.lang.String)
//  .description(java.lang.String)
//  .deviceId(java.lang.String)
//  .hostingId(java.lang.String)
//  .interfaceName(java.lang.String)
//  .location(java.lang.String)
//  .name(java.lang.String)
//  .orderId(java.lang.String)
//  .peerLocation(java.lang.String)
//  .portType(java.lang.String)
//  .productId(java.lang.String)
//  .providerStatus(java.lang.String)
//  .redundantId(java.lang.String)
//  .status(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(DirectConnectV2Timeouts)
//  .type(java.lang.String)
//  .vlan(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.bandwidth">bandwidth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.chargeMode">chargeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#description DirectConnectV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.deviceId">deviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.hostingId">hostingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#location DirectConnectV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#name DirectConnectV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.orderId">orderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.peerLocation">peerLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.portType">portType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerStatus">providerStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.redundantId">redundantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#status DirectConnectV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#type DirectConnectV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.adminStateUp"></a>

```java
public java.lang.Object getAdminStateUp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}.

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.bandwidth"></a>

```java
public java.lang.Number getBandwidth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}.

---

##### `chargeMode`<sup>Optional</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.chargeMode"></a>

```java
public java.lang.String getChargeMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#description DirectConnectV2#description}.

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.deviceId"></a>

```java
public java.lang.String getDeviceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}.

---

##### `hostingId`<sup>Optional</sup> <a name="hostingId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.hostingId"></a>

```java
public java.lang.String getHostingId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}.

---

##### `interfaceName`<sup>Optional</sup> <a name="interfaceName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#location DirectConnectV2#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#name DirectConnectV2#name}.

---

##### `orderId`<sup>Optional</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.orderId"></a>

```java
public java.lang.String getOrderId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}.

---

##### `peerLocation`<sup>Optional</sup> <a name="peerLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.peerLocation"></a>

```java
public java.lang.String getPeerLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}.

---

##### `portType`<sup>Optional</sup> <a name="portType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.portType"></a>

```java
public java.lang.String getPortType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}.

---

##### `providerStatus`<sup>Optional</sup> <a name="providerStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerStatus"></a>

```java
public java.lang.String getProviderStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}.

---

##### `redundantId`<sup>Optional</sup> <a name="redundantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.redundantId"></a>

```java
public java.lang.String getRedundantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#status DirectConnectV2#status}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.timeouts"></a>

```java
public DirectConnectV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#timeouts DirectConnectV2#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#type DirectConnectV2#type}.

---

##### `vlan`<sup>Optional</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}.

---

### DirectConnectV2Timeouts <a name="DirectConnectV2Timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.direct_connect_v2.DirectConnectV2Timeouts;

DirectConnectV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#create DirectConnectV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#delete DirectConnectV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#update DirectConnectV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#create DirectConnectV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#delete DirectConnectV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/direct_connect_v2#update DirectConnectV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectConnectV2TimeoutsOutputReference <a name="DirectConnectV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.direct_connect_v2.DirectConnectV2TimeoutsOutputReference;

new DirectConnectV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

---



