# `vpnaasSiteConnectionV2` Submodule <a name="`vpnaasSiteConnectionV2` Submodule" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnaasSiteConnectionV2 <a name="VpnaasSiteConnectionV2" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2 opentelekomcloud_vpnaas_site_connection_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpnaas_site_connection_v2.VpnaasSiteConnectionV2;

VpnaasSiteConnectionV2.Builder.create(Construct scope, java.lang.String id)
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
    .ikepolicyId(java.lang.String)
    .ipsecpolicyId(java.lang.String)
    .peerAddress(java.lang.String)
    .peerId(java.lang.String)
    .psk(java.lang.String)
    .vpnserviceId(java.lang.String)
//  .adminStateUp(java.lang.Boolean)
//  .adminStateUp(IResolvable)
//  .description(java.lang.String)
//  .dpd(IResolvable)
//  .dpd(java.util.List<VpnaasSiteConnectionV2Dpd>)
//  .id(java.lang.String)
//  .initiator(java.lang.String)
//  .localEpGroupId(java.lang.String)
//  .localId(java.lang.String)
//  .mtu(java.lang.Number)
//  .name(java.lang.String)
//  .peerCidrs(java.util.List<java.lang.String>)
//  .peerEpGroupId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tenantId(java.lang.String)
//  .timeouts(VpnaasSiteConnectionV2Timeouts)
//  .valueSpecs(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.ikepolicyId">ikepolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.ipsecpolicyId">ipsecpolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerId">peerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.psk">psk</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.vpnserviceId">vpnserviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.dpd">dpd</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>></code> | dpd block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.initiator">initiator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.localEpGroupId">localEpGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.localId">localId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerCidrs">peerCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerEpGroupId">peerEpGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.valueSpecs">valueSpecs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ikepolicyId`<sup>Required</sup> <a name="ikepolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.ikepolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}.

---

##### `ipsecpolicyId`<sup>Required</sup> <a name="ipsecpolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.ipsecpolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}.

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}.

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}.

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.psk"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}.

---

##### `vpnserviceId`<sup>Required</sup> <a name="vpnserviceId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.vpnserviceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.adminStateUp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}.

---

##### `dpd`<sup>Optional</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.dpd"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>>

dpd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#dpd VpnaasSiteConnectionV2#dpd}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initiator`<sup>Optional</sup> <a name="initiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.initiator"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}.

---

##### `localEpGroupId`<sup>Optional</sup> <a name="localEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.localEpGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}.

---

##### `localId`<sup>Optional</sup> <a name="localId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.localId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}.

---

##### `peerCidrs`<sup>Optional</sup> <a name="peerCidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}.

---

##### `peerEpGroupId`<sup>Optional</sup> <a name="peerEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerEpGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#timeouts VpnaasSiteConnectionV2#timeouts}

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.valueSpecs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd">putDpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDpd">resetDpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetInitiator">resetInitiator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalEpGroupId">resetLocalEpGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalId">resetLocalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerCidrs">resetPeerCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerEpGroupId">resetPeerEpGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDpd` <a name="putDpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd"></a>

```java
public void putDpd(IResolvable OR java.util.List<VpnaasSiteConnectionV2Dpd> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts"></a>

```java
public void putTimeouts(VpnaasSiteConnectionV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetAdminStateUp"></a>

```java
public void resetAdminStateUp()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDpd` <a name="resetDpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDpd"></a>

```java
public void resetDpd()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetId"></a>

```java
public void resetId()
```

##### `resetInitiator` <a name="resetInitiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetInitiator"></a>

```java
public void resetInitiator()
```

##### `resetLocalEpGroupId` <a name="resetLocalEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalEpGroupId"></a>

```java
public void resetLocalEpGroupId()
```

##### `resetLocalId` <a name="resetLocalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalId"></a>

```java
public void resetLocalId()
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetName"></a>

```java
public void resetName()
```

##### `resetPeerCidrs` <a name="resetPeerCidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerCidrs"></a>

```java
public void resetPeerCidrs()
```

##### `resetPeerEpGroupId` <a name="resetPeerEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerEpGroupId"></a>

```java
public void resetPeerEpGroupId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTags"></a>

```java
public void resetTags()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetValueSpecs"></a>

```java
public void resetValueSpecs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpnaasSiteConnectionV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpnaas_site_connection_v2.VpnaasSiteConnectionV2;

VpnaasSiteConnectionV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpnaas_site_connection_v2.VpnaasSiteConnectionV2;

VpnaasSiteConnectionV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpnaas_site_connection_v2.VpnaasSiteConnectionV2;

VpnaasSiteConnectionV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpnaas_site_connection_v2.VpnaasSiteConnectionV2;

VpnaasSiteConnectionV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpnaasSiteConnectionV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VpnaasSiteConnectionV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpnaasSiteConnectionV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpnaasSiteConnectionV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VpnaasSiteConnectionV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpd">dpd</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList">VpnaasSiteConnectionV2DpdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference">VpnaasSiteConnectionV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpdInput">dpdInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyIdInput">ikepolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiatorInput">initiatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyIdInput">ipsecpolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupIdInput">localEpGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localIdInput">localIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddressInput">peerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrsInput">peerCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupIdInput">peerEpGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerIdInput">peerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.pskInput">pskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecsInput">valueSpecsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceIdInput">vpnserviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyId">ikepolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiator">initiator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyId">ipsecpolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupId">localEpGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localId">localId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrs">peerCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupId">peerEpGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerId">peerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.psk">psk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecs">valueSpecs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceId">vpnserviceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dpd`<sup>Required</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpd"></a>

```java
public VpnaasSiteConnectionV2DpdList getDpd();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList">VpnaasSiteConnectionV2DpdList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeouts"></a>

```java
public VpnaasSiteConnectionV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference">VpnaasSiteConnectionV2TimeoutsOutputReference</a>

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUpInput"></a>

```java
public java.lang.Object getAdminStateUpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dpdInput`<sup>Optional</sup> <a name="dpdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpdInput"></a>

```java
public java.lang.Object getDpdInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ikepolicyIdInput`<sup>Optional</sup> <a name="ikepolicyIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyIdInput"></a>

```java
public java.lang.String getIkepolicyIdInput();
```

- *Type:* java.lang.String

---

##### `initiatorInput`<sup>Optional</sup> <a name="initiatorInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiatorInput"></a>

```java
public java.lang.String getInitiatorInput();
```

- *Type:* java.lang.String

---

##### `ipsecpolicyIdInput`<sup>Optional</sup> <a name="ipsecpolicyIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyIdInput"></a>

```java
public java.lang.String getIpsecpolicyIdInput();
```

- *Type:* java.lang.String

---

##### `localEpGroupIdInput`<sup>Optional</sup> <a name="localEpGroupIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupIdInput"></a>

```java
public java.lang.String getLocalEpGroupIdInput();
```

- *Type:* java.lang.String

---

##### `localIdInput`<sup>Optional</sup> <a name="localIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localIdInput"></a>

```java
public java.lang.String getLocalIdInput();
```

- *Type:* java.lang.String

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peerAddressInput`<sup>Optional</sup> <a name="peerAddressInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddressInput"></a>

```java
public java.lang.String getPeerAddressInput();
```

- *Type:* java.lang.String

---

##### `peerCidrsInput`<sup>Optional</sup> <a name="peerCidrsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrsInput"></a>

```java
public java.util.List<java.lang.String> getPeerCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerEpGroupIdInput`<sup>Optional</sup> <a name="peerEpGroupIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupIdInput"></a>

```java
public java.lang.String getPeerEpGroupIdInput();
```

- *Type:* java.lang.String

---

##### `peerIdInput`<sup>Optional</sup> <a name="peerIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerIdInput"></a>

```java
public java.lang.String getPeerIdInput();
```

- *Type:* java.lang.String

---

##### `pskInput`<sup>Optional</sup> <a name="pskInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.pskInput"></a>

```java
public java.lang.String getPskInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueSpecsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpnserviceIdInput`<sup>Optional</sup> <a name="vpnserviceIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceIdInput"></a>

```java
public java.lang.String getVpnserviceIdInput();
```

- *Type:* java.lang.String

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUp"></a>

```java
public java.lang.Object getAdminStateUp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ikepolicyId`<sup>Required</sup> <a name="ikepolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyId"></a>

```java
public java.lang.String getIkepolicyId();
```

- *Type:* java.lang.String

---

##### `initiator`<sup>Required</sup> <a name="initiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiator"></a>

```java
public java.lang.String getInitiator();
```

- *Type:* java.lang.String

---

##### `ipsecpolicyId`<sup>Required</sup> <a name="ipsecpolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyId"></a>

```java
public java.lang.String getIpsecpolicyId();
```

- *Type:* java.lang.String

---

##### `localEpGroupId`<sup>Required</sup> <a name="localEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupId"></a>

```java
public java.lang.String getLocalEpGroupId();
```

- *Type:* java.lang.String

---

##### `localId`<sup>Required</sup> <a name="localId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localId"></a>

```java
public java.lang.String getLocalId();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

---

##### `peerCidrs`<sup>Required</sup> <a name="peerCidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrs"></a>

```java
public java.util.List<java.lang.String> getPeerCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerEpGroupId`<sup>Required</sup> <a name="peerEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupId"></a>

```java
public java.lang.String getPeerEpGroupId();
```

- *Type:* java.lang.String

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerId"></a>

```java
public java.lang.String getPeerId();
```

- *Type:* java.lang.String

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.psk"></a>

```java
public java.lang.String getPsk();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueSpecs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpnserviceId`<sup>Required</sup> <a name="vpnserviceId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceId"></a>

```java
public java.lang.String getVpnserviceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpnaasSiteConnectionV2Config <a name="VpnaasSiteConnectionV2Config" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpnaas_site_connection_v2.VpnaasSiteConnectionV2Config;

VpnaasSiteConnectionV2Config.builder()
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
    .ikepolicyId(java.lang.String)
    .ipsecpolicyId(java.lang.String)
    .peerAddress(java.lang.String)
    .peerId(java.lang.String)
    .psk(java.lang.String)
    .vpnserviceId(java.lang.String)
//  .adminStateUp(java.lang.Boolean)
//  .adminStateUp(IResolvable)
//  .description(java.lang.String)
//  .dpd(IResolvable)
//  .dpd(java.util.List<VpnaasSiteConnectionV2Dpd>)
//  .id(java.lang.String)
//  .initiator(java.lang.String)
//  .localEpGroupId(java.lang.String)
//  .localId(java.lang.String)
//  .mtu(java.lang.Number)
//  .name(java.lang.String)
//  .peerCidrs(java.util.List<java.lang.String>)
//  .peerEpGroupId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tenantId(java.lang.String)
//  .timeouts(VpnaasSiteConnectionV2Timeouts)
//  .valueSpecs(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ikepolicyId">ikepolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ipsecpolicyId">ipsecpolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerId">peerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.psk">psk</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.vpnserviceId">vpnserviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dpd">dpd</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>></code> | dpd block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.initiator">initiator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localEpGroupId">localEpGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localId">localId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerCidrs">peerCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerEpGroupId">peerEpGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.valueSpecs">valueSpecs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ikepolicyId`<sup>Required</sup> <a name="ikepolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ikepolicyId"></a>

```java
public java.lang.String getIkepolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}.

---

##### `ipsecpolicyId`<sup>Required</sup> <a name="ipsecpolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ipsecpolicyId"></a>

```java
public java.lang.String getIpsecpolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}.

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}.

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerId"></a>

```java
public java.lang.String getPeerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}.

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.psk"></a>

```java
public java.lang.String getPsk();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}.

---

##### `vpnserviceId`<sup>Required</sup> <a name="vpnserviceId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.vpnserviceId"></a>

```java
public java.lang.String getVpnserviceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.adminStateUp"></a>

```java
public java.lang.Object getAdminStateUp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}.

---

##### `dpd`<sup>Optional</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dpd"></a>

```java
public java.lang.Object getDpd();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>>

dpd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#dpd VpnaasSiteConnectionV2#dpd}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initiator`<sup>Optional</sup> <a name="initiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.initiator"></a>

```java
public java.lang.String getInitiator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}.

---

##### `localEpGroupId`<sup>Optional</sup> <a name="localEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localEpGroupId"></a>

```java
public java.lang.String getLocalEpGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}.

---

##### `localId`<sup>Optional</sup> <a name="localId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localId"></a>

```java
public java.lang.String getLocalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}.

---

##### `peerCidrs`<sup>Optional</sup> <a name="peerCidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerCidrs"></a>

```java
public java.util.List<java.lang.String> getPeerCidrs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}.

---

##### `peerEpGroupId`<sup>Optional</sup> <a name="peerEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerEpGroupId"></a>

```java
public java.lang.String getPeerEpGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.timeouts"></a>

```java
public VpnaasSiteConnectionV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#timeouts VpnaasSiteConnectionV2#timeouts}

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.valueSpecs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueSpecs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}.

---

### VpnaasSiteConnectionV2Dpd <a name="VpnaasSiteConnectionV2Dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpnaas_site_connection_v2.VpnaasSiteConnectionV2Dpd;

VpnaasSiteConnectionV2Dpd.builder()
//  .action(java.lang.String)
//  .interval(java.lang.Number)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#action VpnaasSiteConnectionV2#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#interval VpnaasSiteConnectionV2#interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#timeout VpnaasSiteConnectionV2#timeout}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#action VpnaasSiteConnectionV2#action}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#interval VpnaasSiteConnectionV2#interval}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#timeout VpnaasSiteConnectionV2#timeout}.

---

### VpnaasSiteConnectionV2Timeouts <a name="VpnaasSiteConnectionV2Timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpnaas_site_connection_v2.VpnaasSiteConnectionV2Timeouts;

VpnaasSiteConnectionV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#create VpnaasSiteConnectionV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#delete VpnaasSiteConnectionV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#update VpnaasSiteConnectionV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#create VpnaasSiteConnectionV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#delete VpnaasSiteConnectionV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/vpnaas_site_connection_v2#update VpnaasSiteConnectionV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnaasSiteConnectionV2DpdList <a name="VpnaasSiteConnectionV2DpdList" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpnaas_site_connection_v2.VpnaasSiteConnectionV2DpdList;

new VpnaasSiteConnectionV2DpdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get"></a>

```java
public VpnaasSiteConnectionV2DpdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>>

---


### VpnaasSiteConnectionV2DpdOutputReference <a name="VpnaasSiteConnectionV2DpdOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpnaas_site_connection_v2.VpnaasSiteConnectionV2DpdOutputReference;

new VpnaasSiteConnectionV2DpdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>

---


### VpnaasSiteConnectionV2TimeoutsOutputReference <a name="VpnaasSiteConnectionV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpnaas_site_connection_v2.VpnaasSiteConnectionV2TimeoutsOutputReference;

new VpnaasSiteConnectionV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

---



