# `dataOpentelekomcloudDirectConnectV2` Submodule <a name="`dataOpentelekomcloudDirectConnectV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDirectConnectV2 <a name="DataOpentelekomcloudDirectConnectV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2 opentelekomcloud_direct_connect_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_direct_connect_v2

dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bandwidth: typing.Union[int, float] = None,
  description: str = None,
  device_id: str = None,
  id: str = None,
  location: str = None,
  name: str = None,
  port_type: str = None,
  region: str = None,
  vlan: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#bandwidth DataOpentelekomcloudDirectConnectV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#description DataOpentelekomcloudDirectConnectV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#device_id DataOpentelekomcloudDirectConnectV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#id DataOpentelekomcloudDirectConnectV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#location DataOpentelekomcloudDirectConnectV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#name DataOpentelekomcloudDirectConnectV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.portType">port_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#port_type DataOpentelekomcloudDirectConnectV2#port_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#region DataOpentelekomcloudDirectConnectV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#vlan DataOpentelekomcloudDirectConnectV2#vlan}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.bandwidth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#bandwidth DataOpentelekomcloudDirectConnectV2#bandwidth}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#description DataOpentelekomcloudDirectConnectV2#description}.

---

##### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.deviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#device_id DataOpentelekomcloudDirectConnectV2#device_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#id DataOpentelekomcloudDirectConnectV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#location DataOpentelekomcloudDirectConnectV2#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#name DataOpentelekomcloudDirectConnectV2#name}.

---

##### `port_type`<sup>Optional</sup> <a name="port_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.portType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#port_type DataOpentelekomcloudDirectConnectV2#port_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#region DataOpentelekomcloudDirectConnectV2#region}.

---

##### `vlan`<sup>Optional</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.vlan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#vlan DataOpentelekomcloudDirectConnectV2#vlan}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetBandwidth">reset_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDeviceId">reset_device_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetPortType">reset_port_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetVlan">reset_vlan</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_bandwidth` <a name="reset_bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetBandwidth"></a>

```python
def reset_bandwidth() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_device_id` <a name="reset_device_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDeviceId"></a>

```python
def reset_device_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port_type` <a name="reset_port_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetPortType"></a>

```python
def reset_port_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_vlan` <a name="reset_vlan" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetVlan"></a>

```python
def reset_vlan() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDirectConnectV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_direct_connect_v2

dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_direct_connect_v2

dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_direct_connect_v2

dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_direct_connect_v2

dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudDirectConnectV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudDirectConnectV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudDirectConnectV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDirectConnectV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.adminStateUp">admin_state_up</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applicant">applicant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applyTime">apply_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.buildingLineProductId">building_line_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cableLabel">cable_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.chargeMode">charge_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.hostingId">hosting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lagId">lag_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lastOnestopProductId">last_onestop_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.mobile">mobile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.onestopProductId">onestop_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.orderId">order_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerLocation">peer_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerPortType">peer_port_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerProvider">peer_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodNum">period_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodType">period_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerStatus">provider_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.redundantId">redundant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionId">region_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.specCode">spec_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vgwType">vgw_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidthInput">bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceIdInput">device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portTypeInput">port_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlanInput">vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portType">port_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.adminStateUp"></a>

```python
admin_state_up: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `applicant`<sup>Required</sup> <a name="applicant" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applicant"></a>

```python
applicant: str
```

- *Type:* str

---

##### `apply_time`<sup>Required</sup> <a name="apply_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applyTime"></a>

```python
apply_time: str
```

- *Type:* str

---

##### `building_line_product_id`<sup>Required</sup> <a name="building_line_product_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.buildingLineProductId"></a>

```python
building_line_product_id: str
```

- *Type:* str

---

##### `cable_label`<sup>Required</sup> <a name="cable_label" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cableLabel"></a>

```python
cable_label: str
```

- *Type:* str

---

##### `charge_mode`<sup>Required</sup> <a name="charge_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.chargeMode"></a>

```python
charge_mode: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `hosting_id`<sup>Required</sup> <a name="hosting_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.hostingId"></a>

```python
hosting_id: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `lag_id`<sup>Required</sup> <a name="lag_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lagId"></a>

```python
lag_id: str
```

- *Type:* str

---

##### `last_onestop_product_id`<sup>Required</sup> <a name="last_onestop_product_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lastOnestopProductId"></a>

```python
last_onestop_product_id: str
```

- *Type:* str

---

##### `mobile`<sup>Required</sup> <a name="mobile" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.mobile"></a>

```python
mobile: str
```

- *Type:* str

---

##### `onestop_product_id`<sup>Required</sup> <a name="onestop_product_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.onestopProductId"></a>

```python
onestop_product_id: str
```

- *Type:* str

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

---

##### `peer_location`<sup>Required</sup> <a name="peer_location" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerLocation"></a>

```python
peer_location: str
```

- *Type:* str

---

##### `peer_port_type`<sup>Required</sup> <a name="peer_port_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerPortType"></a>

```python
peer_port_type: str
```

- *Type:* str

---

##### `peer_provider`<sup>Required</sup> <a name="peer_provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerProvider"></a>

```python
peer_provider: str
```

- *Type:* str

---

##### `period_num`<sup>Required</sup> <a name="period_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodNum"></a>

```python
period_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodType"></a>

```python
period_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `provider_status`<sup>Required</sup> <a name="provider_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerStatus"></a>

```python
provider_status: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `redundant_id`<sup>Required</sup> <a name="redundant_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.redundantId"></a>

```python
redundant_id: str
```

- *Type:* str

---

##### `region_id`<sup>Required</sup> <a name="region_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionId"></a>

```python
region_id: str
```

- *Type:* str

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `spec_code`<sup>Required</sup> <a name="spec_code" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.specCode"></a>

```python
spec_code: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vgw_type`<sup>Required</sup> <a name="vgw_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vgwType"></a>

```python
vgw_type: str
```

- *Type:* str

---

##### `bandwidth_input`<sup>Optional</sup> <a name="bandwidth_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidthInput"></a>

```python
bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_id_input`<sup>Optional</sup> <a name="device_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceIdInput"></a>

```python
device_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_type_input`<sup>Optional</sup> <a name="port_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portTypeInput"></a>

```python
port_type_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `vlan_input`<sup>Optional</sup> <a name="vlan_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlanInput"></a>

```python
vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidth"></a>

```python
bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port_type`<sup>Required</sup> <a name="port_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portType"></a>

```python
port_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDirectConnectV2Config <a name="DataOpentelekomcloudDirectConnectV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_direct_connect_v2

dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bandwidth: typing.Union[int, float] = None,
  description: str = None,
  device_id: str = None,
  id: str = None,
  location: str = None,
  name: str = None,
  port_type: str = None,
  region: str = None,
  vlan: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#bandwidth DataOpentelekomcloudDirectConnectV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#description DataOpentelekomcloudDirectConnectV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#device_id DataOpentelekomcloudDirectConnectV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#id DataOpentelekomcloudDirectConnectV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#location DataOpentelekomcloudDirectConnectV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#name DataOpentelekomcloudDirectConnectV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.portType">port_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#port_type DataOpentelekomcloudDirectConnectV2#port_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#region DataOpentelekomcloudDirectConnectV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#vlan DataOpentelekomcloudDirectConnectV2#vlan}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.bandwidth"></a>

```python
bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#bandwidth DataOpentelekomcloudDirectConnectV2#bandwidth}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#description DataOpentelekomcloudDirectConnectV2#description}.

---

##### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#device_id DataOpentelekomcloudDirectConnectV2#device_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#id DataOpentelekomcloudDirectConnectV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#location DataOpentelekomcloudDirectConnectV2#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#name DataOpentelekomcloudDirectConnectV2#name}.

---

##### `port_type`<sup>Optional</sup> <a name="port_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.portType"></a>

```python
port_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#port_type DataOpentelekomcloudDirectConnectV2#port_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#region DataOpentelekomcloudDirectConnectV2#region}.

---

##### `vlan`<sup>Optional</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/direct_connect_v2#vlan DataOpentelekomcloudDirectConnectV2#vlan}.

---



