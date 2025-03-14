# `dcVirtualInterfaceV3` Submodule <a name="`dcVirtualInterfaceV3` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualInterfaceV3 <a name="DcVirtualInterfaceV3" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3 opentelekomcloud_dc_virtual_interface_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v3

dcVirtualInterfaceV3.DcVirtualInterfaceV3(
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
  remote_ep_group: typing.List[str],
  route_mode: str,
  type: str,
  vgw_id: str,
  vlan: typing.Union[int, float],
  address_family: str = None,
  asn: typing.Union[int, float] = None,
  bgp_md5: str = None,
  description: str = None,
  enable_bfd: typing.Union[bool, IResolvable] = None,
  enable_nqa: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lag_id: str = None,
  local_gateway_v4_ip: str = None,
  local_gateway_v6_ip: str = None,
  remote_gateway_v4_ip: str = None,
  remote_gateway_v6_ip: str = None,
  resource_tenant_id: str = None,
  service_ep_group: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bandwidth DcVirtualInterfaceV3#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.directConnectId">direct_connect_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#direct_connect_id DcVirtualInterfaceV3#direct_connect_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#name DcVirtualInterfaceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.remoteEpGroup">remote_ep_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_ep_group DcVirtualInterfaceV3#remote_ep_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.routeMode">route_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#route_mode DcVirtualInterfaceV3#route_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#type DcVirtualInterfaceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.vgwId">vgw_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vgw_id DcVirtualInterfaceV3#vgw_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vlan DcVirtualInterfaceV3#vlan}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#address_family DcVirtualInterfaceV3#address_family}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#asn DcVirtualInterfaceV3#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.bgpMd5">bgp_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bgp_md5 DcVirtualInterfaceV3#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#description DcVirtualInterfaceV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.enableBfd">enable_bfd</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_bfd DcVirtualInterfaceV3#enable_bfd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.enableNqa">enable_nqa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_nqa DcVirtualInterfaceV3#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#id DcVirtualInterfaceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.lagId">lag_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#lag_id DcVirtualInterfaceV3#lag_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.localGatewayV4Ip">local_gateway_v4_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v4_ip DcVirtualInterfaceV3#local_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.localGatewayV6Ip">local_gateway_v6_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v6_ip DcVirtualInterfaceV3#local_gateway_v6_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.remoteGatewayV4Ip">remote_gateway_v4_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v4_ip DcVirtualInterfaceV3#remote_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.remoteGatewayV6Ip">remote_gateway_v6_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v6_ip DcVirtualInterfaceV3#remote_gateway_v6_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.resourceTenantId">resource_tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#resource_tenant_id DcVirtualInterfaceV3#resource_tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.serviceEpGroup">service_ep_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#service_ep_group DcVirtualInterfaceV3#service_ep_group}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.bandwidth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bandwidth DcVirtualInterfaceV3#bandwidth}.

---

##### `direct_connect_id`<sup>Required</sup> <a name="direct_connect_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.directConnectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#direct_connect_id DcVirtualInterfaceV3#direct_connect_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#name DcVirtualInterfaceV3#name}.

---

##### `remote_ep_group`<sup>Required</sup> <a name="remote_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.remoteEpGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_ep_group DcVirtualInterfaceV3#remote_ep_group}.

---

##### `route_mode`<sup>Required</sup> <a name="route_mode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.routeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#route_mode DcVirtualInterfaceV3#route_mode}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#type DcVirtualInterfaceV3#type}.

---

##### `vgw_id`<sup>Required</sup> <a name="vgw_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.vgwId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vgw_id DcVirtualInterfaceV3#vgw_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.vlan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vlan DcVirtualInterfaceV3#vlan}.

---

##### `address_family`<sup>Optional</sup> <a name="address_family" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.addressFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#address_family DcVirtualInterfaceV3#address_family}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.asn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#asn DcVirtualInterfaceV3#asn}.

---

##### `bgp_md5`<sup>Optional</sup> <a name="bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.bgpMd5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bgp_md5 DcVirtualInterfaceV3#bgp_md5}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#description DcVirtualInterfaceV3#description}.

---

##### `enable_bfd`<sup>Optional</sup> <a name="enable_bfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.enableBfd"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_bfd DcVirtualInterfaceV3#enable_bfd}.

---

##### `enable_nqa`<sup>Optional</sup> <a name="enable_nqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.enableNqa"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_nqa DcVirtualInterfaceV3#enable_nqa}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#id DcVirtualInterfaceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lag_id`<sup>Optional</sup> <a name="lag_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.lagId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#lag_id DcVirtualInterfaceV3#lag_id}.

---

##### `local_gateway_v4_ip`<sup>Optional</sup> <a name="local_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.localGatewayV4Ip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v4_ip DcVirtualInterfaceV3#local_gateway_v4_ip}.

---

##### `local_gateway_v6_ip`<sup>Optional</sup> <a name="local_gateway_v6_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.localGatewayV6Ip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v6_ip DcVirtualInterfaceV3#local_gateway_v6_ip}.

---

##### `remote_gateway_v4_ip`<sup>Optional</sup> <a name="remote_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.remoteGatewayV4Ip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v4_ip DcVirtualInterfaceV3#remote_gateway_v4_ip}.

---

##### `remote_gateway_v6_ip`<sup>Optional</sup> <a name="remote_gateway_v6_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.remoteGatewayV6Ip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v6_ip DcVirtualInterfaceV3#remote_gateway_v6_ip}.

---

##### `resource_tenant_id`<sup>Optional</sup> <a name="resource_tenant_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.resourceTenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#resource_tenant_id DcVirtualInterfaceV3#resource_tenant_id}.

---

##### `service_ep_group`<sup>Optional</sup> <a name="service_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.serviceEpGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#service_ep_group DcVirtualInterfaceV3#service_ep_group}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetAddressFamily">reset_address_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetAsn">reset_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetBgpMd5">reset_bgp_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetEnableBfd">reset_enable_bfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetEnableNqa">reset_enable_nqa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLagId">reset_lag_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLocalGatewayV4Ip">reset_local_gateway_v4_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLocalGatewayV6Ip">reset_local_gateway_v6_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetRemoteGatewayV4Ip">reset_remote_gateway_v4_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetRemoteGatewayV6Ip">reset_remote_gateway_v6_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetResourceTenantId">reset_resource_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetServiceEpGroup">reset_service_ep_group</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_address_family` <a name="reset_address_family" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetAddressFamily"></a>

```python
def reset_address_family() -> None
```

##### `reset_asn` <a name="reset_asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetAsn"></a>

```python
def reset_asn() -> None
```

##### `reset_bgp_md5` <a name="reset_bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetBgpMd5"></a>

```python
def reset_bgp_md5() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_bfd` <a name="reset_enable_bfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetEnableBfd"></a>

```python
def reset_enable_bfd() -> None
```

##### `reset_enable_nqa` <a name="reset_enable_nqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetEnableNqa"></a>

```python
def reset_enable_nqa() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lag_id` <a name="reset_lag_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLagId"></a>

```python
def reset_lag_id() -> None
```

##### `reset_local_gateway_v4_ip` <a name="reset_local_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLocalGatewayV4Ip"></a>

```python
def reset_local_gateway_v4_ip() -> None
```

##### `reset_local_gateway_v6_ip` <a name="reset_local_gateway_v6_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLocalGatewayV6Ip"></a>

```python
def reset_local_gateway_v6_ip() -> None
```

##### `reset_remote_gateway_v4_ip` <a name="reset_remote_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetRemoteGatewayV4Ip"></a>

```python
def reset_remote_gateway_v4_ip() -> None
```

##### `reset_remote_gateway_v6_ip` <a name="reset_remote_gateway_v6_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetRemoteGatewayV6Ip"></a>

```python
def reset_remote_gateway_v6_ip() -> None
```

##### `reset_resource_tenant_id` <a name="reset_resource_tenant_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetResourceTenantId"></a>

```python
def reset_resource_tenant_id() -> None
```

##### `reset_service_ep_group` <a name="reset_service_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetServiceEpGroup"></a>

```python
def reset_service_ep_group() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DcVirtualInterfaceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v3

dcVirtualInterfaceV3.DcVirtualInterfaceV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v3

dcVirtualInterfaceV3.DcVirtualInterfaceV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v3

dcVirtualInterfaceV3.DcVirtualInterfaceV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v3

dcVirtualInterfaceV3.DcVirtualInterfaceV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DcVirtualInterfaceV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DcVirtualInterfaceV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DcVirtualInterfaceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualInterfaceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vifPeers">vif_peers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList">DcVirtualInterfaceV3VifPeersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.addressFamilyInput">address_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.asnInput">asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bandwidthInput">bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bgpMd5Input">bgp_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.directConnectIdInput">direct_connect_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableBfdInput">enable_bfd_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableNqaInput">enable_nqa_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lagIdInput">lag_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV4IpInput">local_gateway_v4_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV6IpInput">local_gateway_v6_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteEpGroupInput">remote_ep_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV4IpInput">remote_gateway_v4_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV6IpInput">remote_gateway_v6_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.resourceTenantIdInput">resource_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.routeModeInput">route_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.serviceEpGroupInput">service_ep_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vgwIdInput">vgw_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vlanInput">vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bgpMd5">bgp_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.directConnectId">direct_connect_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableBfd">enable_bfd</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableNqa">enable_nqa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lagId">lag_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV4Ip">local_gateway_v4_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV6Ip">local_gateway_v6_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteEpGroup">remote_ep_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV4Ip">remote_gateway_v4_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV6Ip">remote_gateway_v6_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.resourceTenantId">resource_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.routeMode">route_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.serviceEpGroup">service_ep_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vgwId">vgw_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vif_peers`<sup>Required</sup> <a name="vif_peers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vifPeers"></a>

```python
vif_peers: DcVirtualInterfaceV3VifPeersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList">DcVirtualInterfaceV3VifPeersList</a>

---

##### `address_family_input`<sup>Optional</sup> <a name="address_family_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.addressFamilyInput"></a>

```python
address_family_input: str
```

- *Type:* str

---

##### `asn_input`<sup>Optional</sup> <a name="asn_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.asnInput"></a>

```python
asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_input`<sup>Optional</sup> <a name="bandwidth_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bandwidthInput"></a>

```python
bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_md5_input`<sup>Optional</sup> <a name="bgp_md5_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bgpMd5Input"></a>

```python
bgp_md5_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `direct_connect_id_input`<sup>Optional</sup> <a name="direct_connect_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.directConnectIdInput"></a>

```python
direct_connect_id_input: str
```

- *Type:* str

---

##### `enable_bfd_input`<sup>Optional</sup> <a name="enable_bfd_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableBfdInput"></a>

```python
enable_bfd_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_nqa_input`<sup>Optional</sup> <a name="enable_nqa_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableNqaInput"></a>

```python
enable_nqa_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lag_id_input`<sup>Optional</sup> <a name="lag_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lagIdInput"></a>

```python
lag_id_input: str
```

- *Type:* str

---

##### `local_gateway_v4_ip_input`<sup>Optional</sup> <a name="local_gateway_v4_ip_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV4IpInput"></a>

```python
local_gateway_v4_ip_input: str
```

- *Type:* str

---

##### `local_gateway_v6_ip_input`<sup>Optional</sup> <a name="local_gateway_v6_ip_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV6IpInput"></a>

```python
local_gateway_v6_ip_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remote_ep_group_input`<sup>Optional</sup> <a name="remote_ep_group_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteEpGroupInput"></a>

```python
remote_ep_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_gateway_v4_ip_input`<sup>Optional</sup> <a name="remote_gateway_v4_ip_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV4IpInput"></a>

```python
remote_gateway_v4_ip_input: str
```

- *Type:* str

---

##### `remote_gateway_v6_ip_input`<sup>Optional</sup> <a name="remote_gateway_v6_ip_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV6IpInput"></a>

```python
remote_gateway_v6_ip_input: str
```

- *Type:* str

---

##### `resource_tenant_id_input`<sup>Optional</sup> <a name="resource_tenant_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.resourceTenantIdInput"></a>

```python
resource_tenant_id_input: str
```

- *Type:* str

---

##### `route_mode_input`<sup>Optional</sup> <a name="route_mode_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.routeModeInput"></a>

```python
route_mode_input: str
```

- *Type:* str

---

##### `service_ep_group_input`<sup>Optional</sup> <a name="service_ep_group_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.serviceEpGroupInput"></a>

```python
service_ep_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vgw_id_input`<sup>Optional</sup> <a name="vgw_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vgwIdInput"></a>

```python
vgw_id_input: str
```

- *Type:* str

---

##### `vlan_input`<sup>Optional</sup> <a name="vlan_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vlanInput"></a>

```python
vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bandwidth"></a>

```python
bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_md5`<sup>Required</sup> <a name="bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bgpMd5"></a>

```python
bgp_md5: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `direct_connect_id`<sup>Required</sup> <a name="direct_connect_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.directConnectId"></a>

```python
direct_connect_id: str
```

- *Type:* str

---

##### `enable_bfd`<sup>Required</sup> <a name="enable_bfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableBfd"></a>

```python
enable_bfd: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_nqa`<sup>Required</sup> <a name="enable_nqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableNqa"></a>

```python
enable_nqa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lag_id`<sup>Required</sup> <a name="lag_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lagId"></a>

```python
lag_id: str
```

- *Type:* str

---

##### `local_gateway_v4_ip`<sup>Required</sup> <a name="local_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV4Ip"></a>

```python
local_gateway_v4_ip: str
```

- *Type:* str

---

##### `local_gateway_v6_ip`<sup>Required</sup> <a name="local_gateway_v6_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV6Ip"></a>

```python
local_gateway_v6_ip: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_ep_group`<sup>Required</sup> <a name="remote_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteEpGroup"></a>

```python
remote_ep_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_gateway_v4_ip`<sup>Required</sup> <a name="remote_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV4Ip"></a>

```python
remote_gateway_v4_ip: str
```

- *Type:* str

---

##### `remote_gateway_v6_ip`<sup>Required</sup> <a name="remote_gateway_v6_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV6Ip"></a>

```python
remote_gateway_v6_ip: str
```

- *Type:* str

---

##### `resource_tenant_id`<sup>Required</sup> <a name="resource_tenant_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.resourceTenantId"></a>

```python
resource_tenant_id: str
```

- *Type:* str

---

##### `route_mode`<sup>Required</sup> <a name="route_mode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.routeMode"></a>

```python
route_mode: str
```

- *Type:* str

---

##### `service_ep_group`<sup>Required</sup> <a name="service_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.serviceEpGroup"></a>

```python
service_ep_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vgw_id`<sup>Required</sup> <a name="vgw_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vgwId"></a>

```python
vgw_id: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualInterfaceV3Config <a name="DcVirtualInterfaceV3Config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v3

dcVirtualInterfaceV3.DcVirtualInterfaceV3Config(
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
  remote_ep_group: typing.List[str],
  route_mode: str,
  type: str,
  vgw_id: str,
  vlan: typing.Union[int, float],
  address_family: str = None,
  asn: typing.Union[int, float] = None,
  bgp_md5: str = None,
  description: str = None,
  enable_bfd: typing.Union[bool, IResolvable] = None,
  enable_nqa: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lag_id: str = None,
  local_gateway_v4_ip: str = None,
  local_gateway_v6_ip: str = None,
  remote_gateway_v4_ip: str = None,
  remote_gateway_v6_ip: str = None,
  resource_tenant_id: str = None,
  service_ep_group: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bandwidth DcVirtualInterfaceV3#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.directConnectId">direct_connect_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#direct_connect_id DcVirtualInterfaceV3#direct_connect_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#name DcVirtualInterfaceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteEpGroup">remote_ep_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_ep_group DcVirtualInterfaceV3#remote_ep_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.routeMode">route_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#route_mode DcVirtualInterfaceV3#route_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#type DcVirtualInterfaceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.vgwId">vgw_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vgw_id DcVirtualInterfaceV3#vgw_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vlan DcVirtualInterfaceV3#vlan}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#address_family DcVirtualInterfaceV3#address_family}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#asn DcVirtualInterfaceV3#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.bgpMd5">bgp_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bgp_md5 DcVirtualInterfaceV3#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#description DcVirtualInterfaceV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.enableBfd">enable_bfd</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_bfd DcVirtualInterfaceV3#enable_bfd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.enableNqa">enable_nqa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_nqa DcVirtualInterfaceV3#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#id DcVirtualInterfaceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.lagId">lag_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#lag_id DcVirtualInterfaceV3#lag_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.localGatewayV4Ip">local_gateway_v4_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v4_ip DcVirtualInterfaceV3#local_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.localGatewayV6Ip">local_gateway_v6_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v6_ip DcVirtualInterfaceV3#local_gateway_v6_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteGatewayV4Ip">remote_gateway_v4_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v4_ip DcVirtualInterfaceV3#remote_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteGatewayV6Ip">remote_gateway_v6_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v6_ip DcVirtualInterfaceV3#remote_gateway_v6_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.resourceTenantId">resource_tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#resource_tenant_id DcVirtualInterfaceV3#resource_tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.serviceEpGroup">service_ep_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#service_ep_group DcVirtualInterfaceV3#service_ep_group}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.bandwidth"></a>

```python
bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bandwidth DcVirtualInterfaceV3#bandwidth}.

---

##### `direct_connect_id`<sup>Required</sup> <a name="direct_connect_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.directConnectId"></a>

```python
direct_connect_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#direct_connect_id DcVirtualInterfaceV3#direct_connect_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#name DcVirtualInterfaceV3#name}.

---

##### `remote_ep_group`<sup>Required</sup> <a name="remote_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteEpGroup"></a>

```python
remote_ep_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_ep_group DcVirtualInterfaceV3#remote_ep_group}.

---

##### `route_mode`<sup>Required</sup> <a name="route_mode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.routeMode"></a>

```python
route_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#route_mode DcVirtualInterfaceV3#route_mode}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#type DcVirtualInterfaceV3#type}.

---

##### `vgw_id`<sup>Required</sup> <a name="vgw_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.vgwId"></a>

```python
vgw_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vgw_id DcVirtualInterfaceV3#vgw_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vlan DcVirtualInterfaceV3#vlan}.

---

##### `address_family`<sup>Optional</sup> <a name="address_family" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#address_family DcVirtualInterfaceV3#address_family}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#asn DcVirtualInterfaceV3#asn}.

---

##### `bgp_md5`<sup>Optional</sup> <a name="bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.bgpMd5"></a>

```python
bgp_md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bgp_md5 DcVirtualInterfaceV3#bgp_md5}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#description DcVirtualInterfaceV3#description}.

---

##### `enable_bfd`<sup>Optional</sup> <a name="enable_bfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.enableBfd"></a>

```python
enable_bfd: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_bfd DcVirtualInterfaceV3#enable_bfd}.

---

##### `enable_nqa`<sup>Optional</sup> <a name="enable_nqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.enableNqa"></a>

```python
enable_nqa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_nqa DcVirtualInterfaceV3#enable_nqa}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#id DcVirtualInterfaceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lag_id`<sup>Optional</sup> <a name="lag_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.lagId"></a>

```python
lag_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#lag_id DcVirtualInterfaceV3#lag_id}.

---

##### `local_gateway_v4_ip`<sup>Optional</sup> <a name="local_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.localGatewayV4Ip"></a>

```python
local_gateway_v4_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v4_ip DcVirtualInterfaceV3#local_gateway_v4_ip}.

---

##### `local_gateway_v6_ip`<sup>Optional</sup> <a name="local_gateway_v6_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.localGatewayV6Ip"></a>

```python
local_gateway_v6_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v6_ip DcVirtualInterfaceV3#local_gateway_v6_ip}.

---

##### `remote_gateway_v4_ip`<sup>Optional</sup> <a name="remote_gateway_v4_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteGatewayV4Ip"></a>

```python
remote_gateway_v4_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v4_ip DcVirtualInterfaceV3#remote_gateway_v4_ip}.

---

##### `remote_gateway_v6_ip`<sup>Optional</sup> <a name="remote_gateway_v6_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteGatewayV6Ip"></a>

```python
remote_gateway_v6_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v6_ip DcVirtualInterfaceV3#remote_gateway_v6_ip}.

---

##### `resource_tenant_id`<sup>Optional</sup> <a name="resource_tenant_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.resourceTenantId"></a>

```python
resource_tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#resource_tenant_id DcVirtualInterfaceV3#resource_tenant_id}.

---

##### `service_ep_group`<sup>Optional</sup> <a name="service_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.serviceEpGroup"></a>

```python
service_ep_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#service_ep_group DcVirtualInterfaceV3#service_ep_group}.

---

### DcVirtualInterfaceV3VifPeers <a name="DcVirtualInterfaceV3VifPeers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeers.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v3

dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeers()
```


## Classes <a name="Classes" id="Classes"></a>

### DcVirtualInterfaceV3VifPeersList <a name="DcVirtualInterfaceV3VifPeersList" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v3

dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DcVirtualInterfaceV3VifPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DcVirtualInterfaceV3VifPeersOutputReference <a name="DcVirtualInterfaceV3VifPeersOutputReference" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_v3

dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpMd5">bgp_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpRouteLimit">bgp_route_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpStatus">bgp_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.enableBfd">enable_bfd</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.enableNqa">enable_nqa</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.localGatewayIp">local_gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.receiveRouteNum">receive_route_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.remoteEpGroup">remote_ep_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.remoteGatewayIp">remote_gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.routeMode">route_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.serviceEpGroup">service_ep_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.vifId">vif_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeers">DcVirtualInterfaceV3VifPeers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpAsn"></a>

```python
bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_md5`<sup>Required</sup> <a name="bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpMd5"></a>

```python
bgp_md5: str
```

- *Type:* str

---

##### `bgp_route_limit`<sup>Required</sup> <a name="bgp_route_limit" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpRouteLimit"></a>

```python
bgp_route_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_status`<sup>Required</sup> <a name="bgp_status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpStatus"></a>

```python
bgp_status: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `enable_bfd`<sup>Required</sup> <a name="enable_bfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.enableBfd"></a>

```python
enable_bfd: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_nqa`<sup>Required</sup> <a name="enable_nqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.enableNqa"></a>

```python
enable_nqa: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_gateway_ip`<sup>Required</sup> <a name="local_gateway_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.localGatewayIp"></a>

```python
local_gateway_ip: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `receive_route_num`<sup>Required</sup> <a name="receive_route_num" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.receiveRouteNum"></a>

```python
receive_route_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remote_ep_group`<sup>Required</sup> <a name="remote_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.remoteEpGroup"></a>

```python
remote_ep_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_gateway_ip`<sup>Required</sup> <a name="remote_gateway_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.remoteGatewayIp"></a>

```python
remote_gateway_ip: str
```

- *Type:* str

---

##### `route_mode`<sup>Required</sup> <a name="route_mode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.routeMode"></a>

```python
route_mode: str
```

- *Type:* str

---

##### `service_ep_group`<sup>Required</sup> <a name="service_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.serviceEpGroup"></a>

```python
service_ep_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `vif_id`<sup>Required</sup> <a name="vif_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.vifId"></a>

```python
vif_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.internalValue"></a>

```python
internal_value: DcVirtualInterfaceV3VifPeers
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeers">DcVirtualInterfaceV3VifPeers</a>

---



