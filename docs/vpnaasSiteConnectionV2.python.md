# `opentelekomcloud_vpnaas_site_connection_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_vpnaas_site_connection_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2).

# `vpnaasSiteConnectionV2` Submodule <a name="`vpnaasSiteConnectionV2` Submodule" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnaasSiteConnectionV2 <a name="VpnaasSiteConnectionV2" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2 opentelekomcloud_vpnaas_site_connection_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_site_connection_v2

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ikepolicy_id: str,
  ipsecpolicy_id: str,
  peer_address: str,
  peer_id: str,
  psk: str,
  vpnservice_id: str,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  description: str = None,
  dpd: typing.Union[IResolvable, typing.List[VpnaasSiteConnectionV2Dpd]] = None,
  id: str = None,
  initiator: str = None,
  local_ep_group_id: str = None,
  local_id: str = None,
  mtu: typing.Union[int, float] = None,
  name: str = None,
  peer_cidrs: typing.List[str] = None,
  peer_ep_group_id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tenant_id: str = None,
  timeouts: VpnaasSiteConnectionV2Timeouts = None,
  value_specs: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.ikepolicyId">ikepolicy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.ipsecpolicyId">ipsecpolicy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerAddress">peer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerId">peer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.psk">psk</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.vpnserviceId">vpnservice_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.dpd">dpd</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>]]</code> | dpd block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.initiator">initiator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.localEpGroupId">local_ep_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.localId">local_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerCidrs">peer_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerEpGroupId">peer_ep_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ikepolicy_id`<sup>Required</sup> <a name="ikepolicy_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.ikepolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}.

---

##### `ipsecpolicy_id`<sup>Required</sup> <a name="ipsecpolicy_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.ipsecpolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}.

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}.

---

##### `peer_id`<sup>Required</sup> <a name="peer_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}.

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.psk"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}.

---

##### `vpnservice_id`<sup>Required</sup> <a name="vpnservice_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.vpnserviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.adminStateUp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}.

---

##### `dpd`<sup>Optional</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.dpd"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>]]

dpd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#dpd VpnaasSiteConnectionV2#dpd}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initiator`<sup>Optional</sup> <a name="initiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.initiator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}.

---

##### `local_ep_group_id`<sup>Optional</sup> <a name="local_ep_group_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.localEpGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}.

---

##### `local_id`<sup>Optional</sup> <a name="local_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.localId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.mtu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}.

---

##### `peer_cidrs`<sup>Optional</sup> <a name="peer_cidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerCidrs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}.

---

##### `peer_ep_group_id`<sup>Optional</sup> <a name="peer_ep_group_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.peerEpGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#timeouts VpnaasSiteConnectionV2#timeouts}

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.valueSpecs"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd">put_dpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetAdminStateUp">reset_admin_state_up</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDpd">reset_dpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetInitiator">reset_initiator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalEpGroupId">reset_local_ep_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalId">reset_local_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetMtu">reset_mtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerCidrs">reset_peer_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerEpGroupId">reset_peer_ep_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetValueSpecs">reset_value_specs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_dpd` <a name="put_dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd"></a>

```python
def put_dpd(
  value: typing.Union[IResolvable, typing.List[VpnaasSiteConnectionV2Dpd]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#create VpnaasSiteConnectionV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#delete VpnaasSiteConnectionV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#update VpnaasSiteConnectionV2#update}.

---

##### `reset_admin_state_up` <a name="reset_admin_state_up" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetAdminStateUp"></a>

```python
def reset_admin_state_up() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dpd` <a name="reset_dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDpd"></a>

```python
def reset_dpd() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initiator` <a name="reset_initiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetInitiator"></a>

```python
def reset_initiator() -> None
```

##### `reset_local_ep_group_id` <a name="reset_local_ep_group_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalEpGroupId"></a>

```python
def reset_local_ep_group_id() -> None
```

##### `reset_local_id` <a name="reset_local_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalId"></a>

```python
def reset_local_id() -> None
```

##### `reset_mtu` <a name="reset_mtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetMtu"></a>

```python
def reset_mtu() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_peer_cidrs` <a name="reset_peer_cidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerCidrs"></a>

```python
def reset_peer_cidrs() -> None
```

##### `reset_peer_ep_group_id` <a name="reset_peer_ep_group_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerEpGroupId"></a>

```python
def reset_peer_ep_group_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_value_specs` <a name="reset_value_specs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetValueSpecs"></a>

```python
def reset_value_specs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_site_connection_v2

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_site_connection_v2

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_site_connection_v2

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpd">dpd</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList">VpnaasSiteConnectionV2DpdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference">VpnaasSiteConnectionV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUpInput">admin_state_up_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpdInput">dpd_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyIdInput">ikepolicy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiatorInput">initiator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyIdInput">ipsecpolicy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupIdInput">local_ep_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localIdInput">local_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtuInput">mtu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddressInput">peer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrsInput">peer_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupIdInput">peer_ep_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerIdInput">peer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.pskInput">psk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecsInput">value_specs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceIdInput">vpnservice_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyId">ikepolicy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiator">initiator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyId">ipsecpolicy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupId">local_ep_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localId">local_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddress">peer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrs">peer_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupId">peer_ep_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerId">peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.psk">psk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceId">vpnservice_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dpd`<sup>Required</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpd"></a>

```python
dpd: VpnaasSiteConnectionV2DpdList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList">VpnaasSiteConnectionV2DpdList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeouts"></a>

```python
timeouts: VpnaasSiteConnectionV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference">VpnaasSiteConnectionV2TimeoutsOutputReference</a>

---

##### `admin_state_up_input`<sup>Optional</sup> <a name="admin_state_up_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUpInput"></a>

```python
admin_state_up_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dpd_input`<sup>Optional</sup> <a name="dpd_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpdInput"></a>

```python
dpd_input: typing.Union[IResolvable, typing.List[VpnaasSiteConnectionV2Dpd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ikepolicy_id_input`<sup>Optional</sup> <a name="ikepolicy_id_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyIdInput"></a>

```python
ikepolicy_id_input: str
```

- *Type:* str

---

##### `initiator_input`<sup>Optional</sup> <a name="initiator_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiatorInput"></a>

```python
initiator_input: str
```

- *Type:* str

---

##### `ipsecpolicy_id_input`<sup>Optional</sup> <a name="ipsecpolicy_id_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyIdInput"></a>

```python
ipsecpolicy_id_input: str
```

- *Type:* str

---

##### `local_ep_group_id_input`<sup>Optional</sup> <a name="local_ep_group_id_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupIdInput"></a>

```python
local_ep_group_id_input: str
```

- *Type:* str

---

##### `local_id_input`<sup>Optional</sup> <a name="local_id_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localIdInput"></a>

```python
local_id_input: str
```

- *Type:* str

---

##### `mtu_input`<sup>Optional</sup> <a name="mtu_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtuInput"></a>

```python
mtu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peer_address_input`<sup>Optional</sup> <a name="peer_address_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddressInput"></a>

```python
peer_address_input: str
```

- *Type:* str

---

##### `peer_cidrs_input`<sup>Optional</sup> <a name="peer_cidrs_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrsInput"></a>

```python
peer_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peer_ep_group_id_input`<sup>Optional</sup> <a name="peer_ep_group_id_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupIdInput"></a>

```python
peer_ep_group_id_input: str
```

- *Type:* str

---

##### `peer_id_input`<sup>Optional</sup> <a name="peer_id_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerIdInput"></a>

```python
peer_id_input: str
```

- *Type:* str

---

##### `psk_input`<sup>Optional</sup> <a name="psk_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.pskInput"></a>

```python
psk_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpnaasSiteConnectionV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>]

---

##### `value_specs_input`<sup>Optional</sup> <a name="value_specs_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecsInput"></a>

```python
value_specs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpnservice_id_input`<sup>Optional</sup> <a name="vpnservice_id_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceIdInput"></a>

```python
vpnservice_id_input: str
```

- *Type:* str

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ikepolicy_id`<sup>Required</sup> <a name="ikepolicy_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyId"></a>

```python
ikepolicy_id: str
```

- *Type:* str

---

##### `initiator`<sup>Required</sup> <a name="initiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiator"></a>

```python
initiator: str
```

- *Type:* str

---

##### `ipsecpolicy_id`<sup>Required</sup> <a name="ipsecpolicy_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyId"></a>

```python
ipsecpolicy_id: str
```

- *Type:* str

---

##### `local_ep_group_id`<sup>Required</sup> <a name="local_ep_group_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupId"></a>

```python
local_ep_group_id: str
```

- *Type:* str

---

##### `local_id`<sup>Required</sup> <a name="local_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localId"></a>

```python
local_id: str
```

- *Type:* str

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddress"></a>

```python
peer_address: str
```

- *Type:* str

---

##### `peer_cidrs`<sup>Required</sup> <a name="peer_cidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrs"></a>

```python
peer_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peer_ep_group_id`<sup>Required</sup> <a name="peer_ep_group_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupId"></a>

```python
peer_ep_group_id: str
```

- *Type:* str

---

##### `peer_id`<sup>Required</sup> <a name="peer_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerId"></a>

```python
peer_id: str
```

- *Type:* str

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.psk"></a>

```python
psk: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `value_specs`<sup>Required</sup> <a name="value_specs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpnservice_id`<sup>Required</sup> <a name="vpnservice_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceId"></a>

```python
vpnservice_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpnaasSiteConnectionV2Config <a name="VpnaasSiteConnectionV2Config" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_site_connection_v2

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ikepolicy_id: str,
  ipsecpolicy_id: str,
  peer_address: str,
  peer_id: str,
  psk: str,
  vpnservice_id: str,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  description: str = None,
  dpd: typing.Union[IResolvable, typing.List[VpnaasSiteConnectionV2Dpd]] = None,
  id: str = None,
  initiator: str = None,
  local_ep_group_id: str = None,
  local_id: str = None,
  mtu: typing.Union[int, float] = None,
  name: str = None,
  peer_cidrs: typing.List[str] = None,
  peer_ep_group_id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tenant_id: str = None,
  timeouts: VpnaasSiteConnectionV2Timeouts = None,
  value_specs: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ikepolicyId">ikepolicy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ipsecpolicyId">ipsecpolicy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerAddress">peer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerId">peer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.psk">psk</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.vpnserviceId">vpnservice_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dpd">dpd</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>]]</code> | dpd block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.initiator">initiator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localEpGroupId">local_ep_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localId">local_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerCidrs">peer_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerEpGroupId">peer_ep_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ikepolicy_id`<sup>Required</sup> <a name="ikepolicy_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ikepolicyId"></a>

```python
ikepolicy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}.

---

##### `ipsecpolicy_id`<sup>Required</sup> <a name="ipsecpolicy_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ipsecpolicyId"></a>

```python
ipsecpolicy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}.

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerAddress"></a>

```python
peer_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}.

---

##### `peer_id`<sup>Required</sup> <a name="peer_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerId"></a>

```python
peer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}.

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.psk"></a>

```python
psk: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}.

---

##### `vpnservice_id`<sup>Required</sup> <a name="vpnservice_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.vpnserviceId"></a>

```python
vpnservice_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}.

---

##### `dpd`<sup>Optional</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dpd"></a>

```python
dpd: typing.Union[IResolvable, typing.List[VpnaasSiteConnectionV2Dpd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>]]

dpd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#dpd VpnaasSiteConnectionV2#dpd}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initiator`<sup>Optional</sup> <a name="initiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.initiator"></a>

```python
initiator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}.

---

##### `local_ep_group_id`<sup>Optional</sup> <a name="local_ep_group_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localEpGroupId"></a>

```python
local_ep_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}.

---

##### `local_id`<sup>Optional</sup> <a name="local_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localId"></a>

```python
local_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}.

---

##### `peer_cidrs`<sup>Optional</sup> <a name="peer_cidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerCidrs"></a>

```python
peer_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}.

---

##### `peer_ep_group_id`<sup>Optional</sup> <a name="peer_ep_group_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerEpGroupId"></a>

```python
peer_ep_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.timeouts"></a>

```python
timeouts: VpnaasSiteConnectionV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#timeouts VpnaasSiteConnectionV2#timeouts}

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}.

---

### VpnaasSiteConnectionV2Dpd <a name="VpnaasSiteConnectionV2Dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_site_connection_v2

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd(
  action: str = None,
  interval: typing.Union[int, float] = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#action VpnaasSiteConnectionV2#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#interval VpnaasSiteConnectionV2#interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#timeout VpnaasSiteConnectionV2#timeout}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#action VpnaasSiteConnectionV2#action}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#interval VpnaasSiteConnectionV2#interval}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#timeout VpnaasSiteConnectionV2#timeout}.

---

### VpnaasSiteConnectionV2Timeouts <a name="VpnaasSiteConnectionV2Timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_site_connection_v2

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#create VpnaasSiteConnectionV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#delete VpnaasSiteConnectionV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#update VpnaasSiteConnectionV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#create VpnaasSiteConnectionV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#delete VpnaasSiteConnectionV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/vpnaas_site_connection_v2#update VpnaasSiteConnectionV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnaasSiteConnectionV2DpdList <a name="VpnaasSiteConnectionV2DpdList" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_site_connection_v2

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnaasSiteConnectionV2DpdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnaasSiteConnectionV2Dpd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>]]

---


### VpnaasSiteConnectionV2DpdOutputReference <a name="VpnaasSiteConnectionV2DpdOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_site_connection_v2

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnaasSiteConnectionV2Dpd]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>]

---


### VpnaasSiteConnectionV2TimeoutsOutputReference <a name="VpnaasSiteConnectionV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vpnaas_site_connection_v2

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnaasSiteConnectionV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>]

---



