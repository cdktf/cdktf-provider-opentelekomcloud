# `directConnectV2` Submodule <a name="`directConnectV2` Submodule" id="@cdktf/provider-opentelekomcloud.directConnectV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectConnectV2 <a name="DirectConnectV2" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2 opentelekomcloud_direct_connect_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import direct_connect_v2

directConnectV2.DirectConnectV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  provider_name: str,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  bandwidth: typing.Union[int, float] = None,
  charge_mode: str = None,
  description: str = None,
  device_id: str = None,
  hosting_id: str = None,
  interface_name: str = None,
  location: str = None,
  name: str = None,
  order_id: str = None,
  peer_location: str = None,
  port_type: str = None,
  product_id: str = None,
  provider_status: str = None,
  redundant_id: str = None,
  status: str = None,
  tenant_id: str = None,
  timeouts: DirectConnectV2Timeouts = None,
  type: str = None,
  vlan: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.chargeMode">charge_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#description DirectConnectV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.hostingId">hosting_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.interfaceName">interface_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#location DirectConnectV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#name DirectConnectV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.orderId">order_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.peerLocation">peer_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.portType">port_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.providerStatus">provider_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.redundantId">redundant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#status DirectConnectV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#type DirectConnectV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.providerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.adminStateUp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}.

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.bandwidth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}.

---

##### `charge_mode`<sup>Optional</sup> <a name="charge_mode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.chargeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#description DirectConnectV2#description}.

---

##### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.deviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}.

---

##### `hosting_id`<sup>Optional</sup> <a name="hosting_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.hostingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}.

---

##### `interface_name`<sup>Optional</sup> <a name="interface_name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.interfaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#location DirectConnectV2#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#name DirectConnectV2#name}.

---

##### `order_id`<sup>Optional</sup> <a name="order_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.orderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}.

---

##### `peer_location`<sup>Optional</sup> <a name="peer_location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.peerLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}.

---

##### `port_type`<sup>Optional</sup> <a name="port_type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.portType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}.

---

##### `provider_status`<sup>Optional</sup> <a name="provider_status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.providerStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}.

---

##### `redundant_id`<sup>Optional</sup> <a name="redundant_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.redundantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#status DirectConnectV2#status}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#timeouts DirectConnectV2#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#type DirectConnectV2#type}.

---

##### `vlan`<sup>Optional</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.vlan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetAdminStateUp">reset_admin_state_up</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetBandwidth">reset_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetChargeMode">reset_charge_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDeviceId">reset_device_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetHostingId">reset_hosting_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetInterfaceName">reset_interface_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOrderId">reset_order_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPeerLocation">reset_peer_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPortType">reset_port_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProductId">reset_product_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProviderStatus">reset_provider_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetRedundantId">reset_redundant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetVlan">reset_vlan</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#create DirectConnectV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#delete DirectConnectV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#update DirectConnectV2#update}.

---

##### `reset_admin_state_up` <a name="reset_admin_state_up" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetAdminStateUp"></a>

```python
def reset_admin_state_up() -> None
```

##### `reset_bandwidth` <a name="reset_bandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetBandwidth"></a>

```python
def reset_bandwidth() -> None
```

##### `reset_charge_mode` <a name="reset_charge_mode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetChargeMode"></a>

```python
def reset_charge_mode() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_device_id` <a name="reset_device_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDeviceId"></a>

```python
def reset_device_id() -> None
```

##### `reset_hosting_id` <a name="reset_hosting_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetHostingId"></a>

```python
def reset_hosting_id() -> None
```

##### `reset_interface_name` <a name="reset_interface_name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetInterfaceName"></a>

```python
def reset_interface_name() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_order_id` <a name="reset_order_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOrderId"></a>

```python
def reset_order_id() -> None
```

##### `reset_peer_location` <a name="reset_peer_location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPeerLocation"></a>

```python
def reset_peer_location() -> None
```

##### `reset_port_type` <a name="reset_port_type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPortType"></a>

```python
def reset_port_type() -> None
```

##### `reset_product_id` <a name="reset_product_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProductId"></a>

```python
def reset_product_id() -> None
```

##### `reset_provider_status` <a name="reset_provider_status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProviderStatus"></a>

```python
def reset_provider_status() -> None
```

##### `reset_redundant_id` <a name="reset_redundant_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetRedundantId"></a>

```python
def reset_redundant_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vlan` <a name="reset_vlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetVlan"></a>

```python
def reset_vlan() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DirectConnectV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import direct_connect_v2

directConnectV2.DirectConnectV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import direct_connect_v2

directConnectV2.DirectConnectV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import direct_connect_v2

directConnectV2.DirectConnectV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import direct_connect_v2

directConnectV2.DirectConnectV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DirectConnectV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DirectConnectV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DirectConnectV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DirectConnectV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applicant">applicant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applyTime">apply_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.buildingLineProductId">building_line_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cableLabel">cable_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lagId">lag_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lastOnestopProductId">last_onestop_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.mobile">mobile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.onestopProductId">onestop_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerPortType">peer_port_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerProvider">peer_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodNum">period_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodType">period_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.regionId">region_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.specCode">spec_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference">DirectConnectV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vgwType">vgw_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUpInput">admin_state_up_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidthInput">bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeModeInput">charge_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceIdInput">device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingIdInput">hosting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceNameInput">interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderIdInput">order_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocationInput">peer_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portTypeInput">port_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatusInput">provider_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantIdInput">redundant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlanInput">vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeMode">charge_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingId">hosting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderId">order_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocation">peer_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portType">port_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatus">provider_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantId">redundant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `applicant`<sup>Required</sup> <a name="applicant" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applicant"></a>

```python
applicant: str
```

- *Type:* str

---

##### `apply_time`<sup>Required</sup> <a name="apply_time" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applyTime"></a>

```python
apply_time: str
```

- *Type:* str

---

##### `building_line_product_id`<sup>Required</sup> <a name="building_line_product_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.buildingLineProductId"></a>

```python
building_line_product_id: str
```

- *Type:* str

---

##### `cable_label`<sup>Required</sup> <a name="cable_label" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cableLabel"></a>

```python
cable_label: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lag_id`<sup>Required</sup> <a name="lag_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lagId"></a>

```python
lag_id: str
```

- *Type:* str

---

##### `last_onestop_product_id`<sup>Required</sup> <a name="last_onestop_product_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lastOnestopProductId"></a>

```python
last_onestop_product_id: str
```

- *Type:* str

---

##### `mobile`<sup>Required</sup> <a name="mobile" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.mobile"></a>

```python
mobile: str
```

- *Type:* str

---

##### `onestop_product_id`<sup>Required</sup> <a name="onestop_product_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.onestopProductId"></a>

```python
onestop_product_id: str
```

- *Type:* str

---

##### `peer_port_type`<sup>Required</sup> <a name="peer_port_type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerPortType"></a>

```python
peer_port_type: str
```

- *Type:* str

---

##### `peer_provider`<sup>Required</sup> <a name="peer_provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerProvider"></a>

```python
peer_provider: str
```

- *Type:* str

---

##### `period_num`<sup>Required</sup> <a name="period_num" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodNum"></a>

```python
period_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodType"></a>

```python
period_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `region_id`<sup>Required</sup> <a name="region_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.regionId"></a>

```python
region_id: str
```

- *Type:* str

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `spec_code`<sup>Required</sup> <a name="spec_code" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.specCode"></a>

```python
spec_code: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeouts"></a>

```python
timeouts: DirectConnectV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference">DirectConnectV2TimeoutsOutputReference</a>

---

##### `vgw_type`<sup>Required</sup> <a name="vgw_type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vgwType"></a>

```python
vgw_type: str
```

- *Type:* str

---

##### `admin_state_up_input`<sup>Optional</sup> <a name="admin_state_up_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUpInput"></a>

```python
admin_state_up_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bandwidth_input`<sup>Optional</sup> <a name="bandwidth_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidthInput"></a>

```python
bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `charge_mode_input`<sup>Optional</sup> <a name="charge_mode_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeModeInput"></a>

```python
charge_mode_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_id_input`<sup>Optional</sup> <a name="device_id_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceIdInput"></a>

```python
device_id_input: str
```

- *Type:* str

---

##### `hosting_id_input`<sup>Optional</sup> <a name="hosting_id_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingIdInput"></a>

```python
hosting_id_input: str
```

- *Type:* str

---

##### `interface_name_input`<sup>Optional</sup> <a name="interface_name_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceNameInput"></a>

```python
interface_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `order_id_input`<sup>Optional</sup> <a name="order_id_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderIdInput"></a>

```python
order_id_input: str
```

- *Type:* str

---

##### `peer_location_input`<sup>Optional</sup> <a name="peer_location_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocationInput"></a>

```python
peer_location_input: str
```

- *Type:* str

---

##### `port_type_input`<sup>Optional</sup> <a name="port_type_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portTypeInput"></a>

```python
port_type_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `provider_status_input`<sup>Optional</sup> <a name="provider_status_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatusInput"></a>

```python
provider_status_input: str
```

- *Type:* str

---

##### `redundant_id_input`<sup>Optional</sup> <a name="redundant_id_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantIdInput"></a>

```python
redundant_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DirectConnectV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vlan_input`<sup>Optional</sup> <a name="vlan_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlanInput"></a>

```python
vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidth"></a>

```python
bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `charge_mode`<sup>Required</sup> <a name="charge_mode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeMode"></a>

```python
charge_mode: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `hosting_id`<sup>Required</sup> <a name="hosting_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingId"></a>

```python
hosting_id: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

---

##### `peer_location`<sup>Required</sup> <a name="peer_location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocation"></a>

```python
peer_location: str
```

- *Type:* str

---

##### `port_type`<sup>Required</sup> <a name="port_type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portType"></a>

```python
port_type: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `provider_status`<sup>Required</sup> <a name="provider_status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatus"></a>

```python
provider_status: str
```

- *Type:* str

---

##### `redundant_id`<sup>Required</sup> <a name="redundant_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantId"></a>

```python
redundant_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectConnectV2Config <a name="DirectConnectV2Config" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import direct_connect_v2

directConnectV2.DirectConnectV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  provider_name: str,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  bandwidth: typing.Union[int, float] = None,
  charge_mode: str = None,
  description: str = None,
  device_id: str = None,
  hosting_id: str = None,
  interface_name: str = None,
  location: str = None,
  name: str = None,
  order_id: str = None,
  peer_location: str = None,
  port_type: str = None,
  product_id: str = None,
  provider_status: str = None,
  redundant_id: str = None,
  status: str = None,
  tenant_id: str = None,
  timeouts: DirectConnectV2Timeouts = None,
  type: str = None,
  vlan: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.chargeMode">charge_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#description DirectConnectV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.hostingId">hosting_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.interfaceName">interface_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#location DirectConnectV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#name DirectConnectV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.orderId">order_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.peerLocation">peer_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.portType">port_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerStatus">provider_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.redundantId">redundant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#status DirectConnectV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#type DirectConnectV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}.

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.bandwidth"></a>

```python
bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}.

---

##### `charge_mode`<sup>Optional</sup> <a name="charge_mode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.chargeMode"></a>

```python
charge_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#description DirectConnectV2#description}.

---

##### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}.

---

##### `hosting_id`<sup>Optional</sup> <a name="hosting_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.hostingId"></a>

```python
hosting_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}.

---

##### `interface_name`<sup>Optional</sup> <a name="interface_name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#location DirectConnectV2#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#name DirectConnectV2#name}.

---

##### `order_id`<sup>Optional</sup> <a name="order_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}.

---

##### `peer_location`<sup>Optional</sup> <a name="peer_location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.peerLocation"></a>

```python
peer_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}.

---

##### `port_type`<sup>Optional</sup> <a name="port_type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.portType"></a>

```python
port_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}.

---

##### `provider_status`<sup>Optional</sup> <a name="provider_status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerStatus"></a>

```python
provider_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}.

---

##### `redundant_id`<sup>Optional</sup> <a name="redundant_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.redundantId"></a>

```python
redundant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#status DirectConnectV2#status}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.timeouts"></a>

```python
timeouts: DirectConnectV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#timeouts DirectConnectV2#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#type DirectConnectV2#type}.

---

##### `vlan`<sup>Optional</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}.

---

### DirectConnectV2Timeouts <a name="DirectConnectV2Timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import direct_connect_v2

directConnectV2.DirectConnectV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#create DirectConnectV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#delete DirectConnectV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#update DirectConnectV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#create DirectConnectV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#delete DirectConnectV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.14/docs/resources/direct_connect_v2#update DirectConnectV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectConnectV2TimeoutsOutputReference <a name="DirectConnectV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import direct_connect_v2

directConnectV2.DirectConnectV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DirectConnectV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>]

---



