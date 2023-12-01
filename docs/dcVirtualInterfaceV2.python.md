# `dcVirtualInterfaceV2` Submodule <a name="`dcVirtualInterfaceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualInterfaceV2 <a name="DcVirtualInterfaceV2" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2 opentelekomcloud_dc_virtual_interface_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v2

dcVirtualInterfaceV2.DcVirtualInterfaceV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bandwidth: typing.Union[int, float],
  direct_connect_id: str,
  name: str,
  remote_ep_group_id: str,
  route_mode: str,
  type: str,
  virtual_gateway_id: str,
  vlan: typing.Union[int, float],
  asn: typing.Union[int, float] = None,
  bgp_md5: str = None,
  description: str = None,
  enable_bfd: typing.Union[bool, IResolvable] = None,
  enable_nqa: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lag_id: str = None,
  local_gateway_v4_ip: str = None,
  project_id: str = None,
  remote_gateway_v4_ip: str = None,
  service_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.directConnectId">direct_connect_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.remoteEpGroupId">remote_ep_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_ep_group_id DcVirtualInterfaceV2#remote_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.routeMode">route_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.virtualGatewayId">virtual_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.bgpMd5">bgp_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.enableBfd">enable_bfd</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.enableNqa">enable_nqa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.lagId">lag_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.localGatewayV4Ip">local_gateway_v4_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.remoteGatewayV4Ip">remote_gateway_v4_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.bandwidth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}.

---

##### `direct_connect_id`<sup>Required</sup> <a name="direct_connect_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.directConnectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}.

---

##### `remote_ep_group_id`<sup>Required</sup> <a name="remote_ep_group_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.remoteEpGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_ep_group_id DcVirtualInterfaceV2#remote_ep_group_id}.

---

##### `route_mode`<sup>Required</sup> <a name="route_mode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.routeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}.

---

##### `virtual_gateway_id`<sup>Required</sup> <a name="virtual_gateway_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.virtualGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.vlan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.asn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}.

---

##### `bgp_md5`<sup>Optional</sup> <a name="bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.bgpMd5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}.

---

##### `enable_bfd`<sup>Optional</sup> <a name="enable_bfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.enableBfd"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}.

---

##### `enable_nqa`<sup>Optional</sup> <a name="enable_nqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.enableNqa"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lag_id`<sup>Optional</sup> <a name="lag_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.lagId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}.

---

##### `local_gateway_v4_ip`<sup>Optional</sup> <a name="local_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.localGatewayV4Ip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}.

---

##### `remote_gateway_v4_ip`<sup>Optional</sup> <a name="remote_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.remoteGatewayV4Ip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}.

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.serviceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetAsn">reset_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetBgpMd5">reset_bgp_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableBfd">reset_enable_bfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableNqa">reset_enable_nqa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLagId">reset_lag_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLocalGatewayV4Ip">reset_local_gateway_v4_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetRemoteGatewayV4Ip">reset_remote_gateway_v4_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetServiceType">reset_service_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_asn` <a name="reset_asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetAsn"></a>

```python
def reset_asn() -> None
```

##### `reset_bgp_md5` <a name="reset_bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetBgpMd5"></a>

```python
def reset_bgp_md5() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_bfd` <a name="reset_enable_bfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableBfd"></a>

```python
def reset_enable_bfd() -> None
```

##### `reset_enable_nqa` <a name="reset_enable_nqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableNqa"></a>

```python
def reset_enable_nqa() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lag_id` <a name="reset_lag_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLagId"></a>

```python
def reset_lag_id() -> None
```

##### `reset_local_gateway_v4_ip` <a name="reset_local_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLocalGatewayV4Ip"></a>

```python
def reset_local_gateway_v4_ip() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_remote_gateway_v4_ip` <a name="reset_remote_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetRemoteGatewayV4Ip"></a>

```python
def reset_remote_gateway_v4_ip() -> None
```

##### `reset_service_type` <a name="reset_service_type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetServiceType"></a>

```python
def reset_service_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DcVirtualInterfaceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v2

dcVirtualInterfaceV2.DcVirtualInterfaceV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v2

dcVirtualInterfaceV2.DcVirtualInterfaceV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v2

dcVirtualInterfaceV2.DcVirtualInterfaceV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v2

dcVirtualInterfaceV2.DcVirtualInterfaceV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DcVirtualInterfaceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DcVirtualInterfaceV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DcVirtualInterfaceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualInterfaceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asnInput">asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidthInput">bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5Input">bgp_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectIdInput">direct_connect_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfdInput">enable_bfd_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqaInput">enable_nqa_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagIdInput">lag_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4IpInput">local_gateway_v4_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupIdInput">remote_ep_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4IpInput">remote_gateway_v4_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeModeInput">route_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayIdInput">virtual_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlanInput">vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5">bgp_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectId">direct_connect_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfd">enable_bfd</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqa">enable_nqa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagId">lag_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4Ip">local_gateway_v4_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupId">remote_ep_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4Ip">remote_gateway_v4_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeMode">route_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayId">virtual_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `asn_input`<sup>Optional</sup> <a name="asn_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asnInput"></a>

```python
asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_input`<sup>Optional</sup> <a name="bandwidth_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidthInput"></a>

```python
bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_md5_input`<sup>Optional</sup> <a name="bgp_md5_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5Input"></a>

```python
bgp_md5_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `direct_connect_id_input`<sup>Optional</sup> <a name="direct_connect_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectIdInput"></a>

```python
direct_connect_id_input: str
```

- *Type:* str

---

##### `enable_bfd_input`<sup>Optional</sup> <a name="enable_bfd_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfdInput"></a>

```python
enable_bfd_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_nqa_input`<sup>Optional</sup> <a name="enable_nqa_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqaInput"></a>

```python
enable_nqa_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lag_id_input`<sup>Optional</sup> <a name="lag_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagIdInput"></a>

```python
lag_id_input: str
```

- *Type:* str

---

##### `local_gateway_v4_ip_input`<sup>Optional</sup> <a name="local_gateway_v4_ip_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4IpInput"></a>

```python
local_gateway_v4_ip_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `remote_ep_group_id_input`<sup>Optional</sup> <a name="remote_ep_group_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupIdInput"></a>

```python
remote_ep_group_id_input: str
```

- *Type:* str

---

##### `remote_gateway_v4_ip_input`<sup>Optional</sup> <a name="remote_gateway_v4_ip_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4IpInput"></a>

```python
remote_gateway_v4_ip_input: str
```

- *Type:* str

---

##### `route_mode_input`<sup>Optional</sup> <a name="route_mode_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeModeInput"></a>

```python
route_mode_input: str
```

- *Type:* str

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `virtual_gateway_id_input`<sup>Optional</sup> <a name="virtual_gateway_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayIdInput"></a>

```python
virtual_gateway_id_input: str
```

- *Type:* str

---

##### `vlan_input`<sup>Optional</sup> <a name="vlan_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlanInput"></a>

```python
vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidth"></a>

```python
bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_md5`<sup>Required</sup> <a name="bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5"></a>

```python
bgp_md5: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `direct_connect_id`<sup>Required</sup> <a name="direct_connect_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectId"></a>

```python
direct_connect_id: str
```

- *Type:* str

---

##### `enable_bfd`<sup>Required</sup> <a name="enable_bfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfd"></a>

```python
enable_bfd: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_nqa`<sup>Required</sup> <a name="enable_nqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqa"></a>

```python
enable_nqa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lag_id`<sup>Required</sup> <a name="lag_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagId"></a>

```python
lag_id: str
```

- *Type:* str

---

##### `local_gateway_v4_ip`<sup>Required</sup> <a name="local_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4Ip"></a>

```python
local_gateway_v4_ip: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `remote_ep_group_id`<sup>Required</sup> <a name="remote_ep_group_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupId"></a>

```python
remote_ep_group_id: str
```

- *Type:* str

---

##### `remote_gateway_v4_ip`<sup>Required</sup> <a name="remote_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4Ip"></a>

```python
remote_gateway_v4_ip: str
```

- *Type:* str

---

##### `route_mode`<sup>Required</sup> <a name="route_mode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeMode"></a>

```python
route_mode: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `virtual_gateway_id`<sup>Required</sup> <a name="virtual_gateway_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayId"></a>

```python
virtual_gateway_id: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualInterfaceV2Config <a name="DcVirtualInterfaceV2Config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v2

dcVirtualInterfaceV2.DcVirtualInterfaceV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bandwidth: typing.Union[int, float],
  direct_connect_id: str,
  name: str,
  remote_ep_group_id: str,
  route_mode: str,
  type: str,
  virtual_gateway_id: str,
  vlan: typing.Union[int, float],
  asn: typing.Union[int, float] = None,
  bgp_md5: str = None,
  description: str = None,
  enable_bfd: typing.Union[bool, IResolvable] = None,
  enable_nqa: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lag_id: str = None,
  local_gateway_v4_ip: str = None,
  project_id: str = None,
  remote_gateway_v4_ip: str = None,
  service_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.directConnectId">direct_connect_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteEpGroupId">remote_ep_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_ep_group_id DcVirtualInterfaceV2#remote_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.routeMode">route_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.virtualGatewayId">virtual_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bgpMd5">bgp_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableBfd">enable_bfd</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableNqa">enable_nqa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lagId">lag_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.localGatewayV4Ip">local_gateway_v4_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteGatewayV4Ip">remote_gateway_v4_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bandwidth"></a>

```python
bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}.

---

##### `direct_connect_id`<sup>Required</sup> <a name="direct_connect_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.directConnectId"></a>

```python
direct_connect_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}.

---

##### `remote_ep_group_id`<sup>Required</sup> <a name="remote_ep_group_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteEpGroupId"></a>

```python
remote_ep_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_ep_group_id DcVirtualInterfaceV2#remote_ep_group_id}.

---

##### `route_mode`<sup>Required</sup> <a name="route_mode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.routeMode"></a>

```python
route_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}.

---

##### `virtual_gateway_id`<sup>Required</sup> <a name="virtual_gateway_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.virtualGatewayId"></a>

```python
virtual_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}.

---

##### `bgp_md5`<sup>Optional</sup> <a name="bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bgpMd5"></a>

```python
bgp_md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}.

---

##### `enable_bfd`<sup>Optional</sup> <a name="enable_bfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableBfd"></a>

```python
enable_bfd: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}.

---

##### `enable_nqa`<sup>Optional</sup> <a name="enable_nqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableNqa"></a>

```python
enable_nqa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lag_id`<sup>Optional</sup> <a name="lag_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lagId"></a>

```python
lag_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}.

---

##### `local_gateway_v4_ip`<sup>Optional</sup> <a name="local_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.localGatewayV4Ip"></a>

```python
local_gateway_v4_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}.

---

##### `remote_gateway_v4_ip`<sup>Optional</sup> <a name="remote_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteGatewayV4Ip"></a>

```python
remote_gateway_v4_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}.

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}.

---



