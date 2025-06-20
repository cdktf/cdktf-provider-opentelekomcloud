# `dcVirtualInterfacePeerV3` Submodule <a name="`dcVirtualInterfacePeerV3` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualInterfacePeerV3 <a name="DcVirtualInterfacePeerV3" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3 opentelekomcloud_dc_virtual_interface_peer_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_peer_v3

dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_family: str,
  local_gateway_ip: str,
  name: str,
  remote_ep_group: typing.List[str],
  remote_gateway_ip: str,
  vif_id: str,
  bgp_asn: typing.Union[int, float] = None,
  bgp_md5: str = None,
  description: str = None,
  id: str = None,
  route_mode: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#address_family DcVirtualInterfacePeerV3#address_family}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.localGatewayIp">local_gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#local_gateway_ip DcVirtualInterfacePeerV3#local_gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#name DcVirtualInterfacePeerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.remoteEpGroup">remote_ep_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#remote_ep_group DcVirtualInterfacePeerV3#remote_ep_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.remoteGatewayIp">remote_gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#remote_gateway_ip DcVirtualInterfacePeerV3#remote_gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.vifId">vif_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#vif_id DcVirtualInterfacePeerV3#vif_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#bgp_asn DcVirtualInterfacePeerV3#bgp_asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.bgpMd5">bgp_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#bgp_md5 DcVirtualInterfacePeerV3#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#description DcVirtualInterfacePeerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#id DcVirtualInterfacePeerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.routeMode">route_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#route_mode DcVirtualInterfacePeerV3#route_mode}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.addressFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#address_family DcVirtualInterfacePeerV3#address_family}.

---

##### `local_gateway_ip`<sup>Required</sup> <a name="local_gateway_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.localGatewayIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#local_gateway_ip DcVirtualInterfacePeerV3#local_gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#name DcVirtualInterfacePeerV3#name}.

---

##### `remote_ep_group`<sup>Required</sup> <a name="remote_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.remoteEpGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#remote_ep_group DcVirtualInterfacePeerV3#remote_ep_group}.

---

##### `remote_gateway_ip`<sup>Required</sup> <a name="remote_gateway_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.remoteGatewayIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#remote_gateway_ip DcVirtualInterfacePeerV3#remote_gateway_ip}.

---

##### `vif_id`<sup>Required</sup> <a name="vif_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.vifId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#vif_id DcVirtualInterfacePeerV3#vif_id}.

---

##### `bgp_asn`<sup>Optional</sup> <a name="bgp_asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.bgpAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#bgp_asn DcVirtualInterfacePeerV3#bgp_asn}.

---

##### `bgp_md5`<sup>Optional</sup> <a name="bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.bgpMd5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#bgp_md5 DcVirtualInterfacePeerV3#bgp_md5}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#description DcVirtualInterfacePeerV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#id DcVirtualInterfacePeerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `route_mode`<sup>Optional</sup> <a name="route_mode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.routeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#route_mode DcVirtualInterfacePeerV3#route_mode}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpAsn">reset_bgp_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpMd5">reset_bgp_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetRouteMode">reset_route_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_bgp_asn` <a name="reset_bgp_asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpAsn"></a>

```python
def reset_bgp_asn() -> None
```

##### `reset_bgp_md5` <a name="reset_bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpMd5"></a>

```python
def reset_bgp_md5() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_route_mode` <a name="reset_route_mode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetRouteMode"></a>

```python
def reset_route_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DcVirtualInterfacePeerV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_peer_v3

dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_peer_v3

dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_peer_v3

dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_peer_v3

dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DcVirtualInterfacePeerV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DcVirtualInterfacePeerV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DcVirtualInterfacePeerV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualInterfacePeerV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpRouteLimit">bgp_route_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpStatus">bgp_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableBfd">enable_bfd</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableNqa">enable_nqa</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.receiveRouteNum">receive_route_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.serviceEpGroup">service_ep_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamilyInput">address_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsnInput">bgp_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5Input">bgp_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIpInput">local_gateway_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroupInput">remote_ep_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIpInput">remote_gateway_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeModeInput">route_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifIdInput">vif_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5">bgp_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIp">local_gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroup">remote_ep_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIp">remote_gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeMode">route_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifId">vif_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bgp_route_limit`<sup>Required</sup> <a name="bgp_route_limit" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpRouteLimit"></a>

```python
bgp_route_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_status`<sup>Required</sup> <a name="bgp_status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpStatus"></a>

```python
bgp_status: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `enable_bfd`<sup>Required</sup> <a name="enable_bfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableBfd"></a>

```python
enable_bfd: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_nqa`<sup>Required</sup> <a name="enable_nqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableNqa"></a>

```python
enable_nqa: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `receive_route_num`<sup>Required</sup> <a name="receive_route_num" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.receiveRouteNum"></a>

```python
receive_route_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `service_ep_group`<sup>Required</sup> <a name="service_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.serviceEpGroup"></a>

```python
service_ep_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `address_family_input`<sup>Optional</sup> <a name="address_family_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamilyInput"></a>

```python
address_family_input: str
```

- *Type:* str

---

##### `bgp_asn_input`<sup>Optional</sup> <a name="bgp_asn_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsnInput"></a>

```python
bgp_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_md5_input`<sup>Optional</sup> <a name="bgp_md5_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5Input"></a>

```python
bgp_md5_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_gateway_ip_input`<sup>Optional</sup> <a name="local_gateway_ip_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIpInput"></a>

```python
local_gateway_ip_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remote_ep_group_input`<sup>Optional</sup> <a name="remote_ep_group_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroupInput"></a>

```python
remote_ep_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_gateway_ip_input`<sup>Optional</sup> <a name="remote_gateway_ip_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIpInput"></a>

```python
remote_gateway_ip_input: str
```

- *Type:* str

---

##### `route_mode_input`<sup>Optional</sup> <a name="route_mode_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeModeInput"></a>

```python
route_mode_input: str
```

- *Type:* str

---

##### `vif_id_input`<sup>Optional</sup> <a name="vif_id_input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifIdInput"></a>

```python
vif_id_input: str
```

- *Type:* str

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsn"></a>

```python
bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_md5`<sup>Required</sup> <a name="bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5"></a>

```python
bgp_md5: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_gateway_ip`<sup>Required</sup> <a name="local_gateway_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIp"></a>

```python
local_gateway_ip: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_ep_group`<sup>Required</sup> <a name="remote_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroup"></a>

```python
remote_ep_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_gateway_ip`<sup>Required</sup> <a name="remote_gateway_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIp"></a>

```python
remote_gateway_ip: str
```

- *Type:* str

---

##### `route_mode`<sup>Required</sup> <a name="route_mode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeMode"></a>

```python
route_mode: str
```

- *Type:* str

---

##### `vif_id`<sup>Required</sup> <a name="vif_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifId"></a>

```python
vif_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualInterfacePeerV3Config <a name="DcVirtualInterfacePeerV3Config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dc_virtual_interface_peer_v3

dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_family: str,
  local_gateway_ip: str,
  name: str,
  remote_ep_group: typing.List[str],
  remote_gateway_ip: str,
  vif_id: str,
  bgp_asn: typing.Union[int, float] = None,
  bgp_md5: str = None,
  description: str = None,
  id: str = None,
  route_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#address_family DcVirtualInterfacePeerV3#address_family}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.localGatewayIp">local_gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#local_gateway_ip DcVirtualInterfacePeerV3#local_gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#name DcVirtualInterfacePeerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteEpGroup">remote_ep_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#remote_ep_group DcVirtualInterfacePeerV3#remote_ep_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteGatewayIp">remote_gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#remote_gateway_ip DcVirtualInterfacePeerV3#remote_gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.vifId">vif_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#vif_id DcVirtualInterfacePeerV3#vif_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#bgp_asn DcVirtualInterfacePeerV3#bgp_asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpMd5">bgp_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#bgp_md5 DcVirtualInterfacePeerV3#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#description DcVirtualInterfacePeerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#id DcVirtualInterfacePeerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.routeMode">route_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#route_mode DcVirtualInterfacePeerV3#route_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#address_family DcVirtualInterfacePeerV3#address_family}.

---

##### `local_gateway_ip`<sup>Required</sup> <a name="local_gateway_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.localGatewayIp"></a>

```python
local_gateway_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#local_gateway_ip DcVirtualInterfacePeerV3#local_gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#name DcVirtualInterfacePeerV3#name}.

---

##### `remote_ep_group`<sup>Required</sup> <a name="remote_ep_group" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteEpGroup"></a>

```python
remote_ep_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#remote_ep_group DcVirtualInterfacePeerV3#remote_ep_group}.

---

##### `remote_gateway_ip`<sup>Required</sup> <a name="remote_gateway_ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteGatewayIp"></a>

```python
remote_gateway_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#remote_gateway_ip DcVirtualInterfacePeerV3#remote_gateway_ip}.

---

##### `vif_id`<sup>Required</sup> <a name="vif_id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.vifId"></a>

```python
vif_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#vif_id DcVirtualInterfacePeerV3#vif_id}.

---

##### `bgp_asn`<sup>Optional</sup> <a name="bgp_asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpAsn"></a>

```python
bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#bgp_asn DcVirtualInterfacePeerV3#bgp_asn}.

---

##### `bgp_md5`<sup>Optional</sup> <a name="bgp_md5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpMd5"></a>

```python
bgp_md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#bgp_md5 DcVirtualInterfacePeerV3#bgp_md5}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#description DcVirtualInterfacePeerV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#id DcVirtualInterfacePeerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `route_mode`<sup>Optional</sup> <a name="route_mode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.routeMode"></a>

```python
route_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dc_virtual_interface_peer_v3#route_mode DcVirtualInterfacePeerV3#route_mode}.

---



