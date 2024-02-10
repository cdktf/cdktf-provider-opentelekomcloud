# `dataOpentelekomcloudComputeBmsServerV2` Submodule <a name="`dataOpentelekomcloudComputeBmsServerV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudComputeBmsServerV2 <a name="DataOpentelekomcloudComputeBmsServerV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2 opentelekomcloud_compute_bms_server_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  flavor_id: str = None,
  host_status: str = None,
  id: str = None,
  image_id: str = None,
  key_name: str = None,
  name: str = None,
  region: str = None,
  status: str = None,
  user_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#flavor_id DataOpentelekomcloudComputeBmsServerV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.hostStatus">host_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#host_status DataOpentelekomcloudComputeBmsServerV2#host_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#id DataOpentelekomcloudComputeBmsServerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#image_id DataOpentelekomcloudComputeBmsServerV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#key_name DataOpentelekomcloudComputeBmsServerV2#key_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#name DataOpentelekomcloudComputeBmsServerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#region DataOpentelekomcloudComputeBmsServerV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#status DataOpentelekomcloudComputeBmsServerV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#user_id DataOpentelekomcloudComputeBmsServerV2#user_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.flavorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#flavor_id DataOpentelekomcloudComputeBmsServerV2#flavor_id}.

---

##### `host_status`<sup>Optional</sup> <a name="host_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.hostStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#host_status DataOpentelekomcloudComputeBmsServerV2#host_status}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#id DataOpentelekomcloudComputeBmsServerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#image_id DataOpentelekomcloudComputeBmsServerV2#image_id}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.keyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#key_name DataOpentelekomcloudComputeBmsServerV2#key_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#name DataOpentelekomcloudComputeBmsServerV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#region DataOpentelekomcloudComputeBmsServerV2#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#status DataOpentelekomcloudComputeBmsServerV2#status}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#user_id DataOpentelekomcloudComputeBmsServerV2#user_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetFlavorId">reset_flavor_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetHostStatus">reset_host_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_flavor_id` <a name="reset_flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetFlavorId"></a>

```python
def reset_flavor_id() -> None
```

##### `reset_host_status` <a name="reset_host_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetHostStatus"></a>

```python
def reset_host_status() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetUserId"></a>

```python
def reset_user_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudComputeBmsServerV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudComputeBmsServerV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudComputeBmsServerV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudComputeBmsServerV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudComputeBmsServerV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV4">access_ip_v4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV6">access_ip_v6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.configDrive">config_drive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hypervisorHostname">hypervisor_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.kernelId">kernel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.locked">locked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.network">network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList">DataOpentelekomcloudComputeBmsServerV2NetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.progress">progress</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.securityGroups">security_groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList">DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorIdInput">flavor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatusInput">host_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatus">host_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_ip_v4`<sup>Required</sup> <a name="access_ip_v4" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV4"></a>

```python
access_ip_v4: str
```

- *Type:* str

---

##### `access_ip_v6`<sup>Required</sup> <a name="access_ip_v6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV6"></a>

```python
access_ip_v6: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `config_drive`<sup>Required</sup> <a name="config_drive" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.configDrive"></a>

```python
config_drive: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `hypervisor_hostname`<sup>Required</sup> <a name="hypervisor_hostname" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hypervisorHostname"></a>

```python
hypervisor_hostname: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `kernel_id`<sup>Required</sup> <a name="kernel_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.kernelId"></a>

```python
kernel_id: str
```

- *Type:* str

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.locked"></a>

```python
locked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.network"></a>

```python
network: DataOpentelekomcloudComputeBmsServerV2NetworkList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList">DataOpentelekomcloudComputeBmsServerV2NetworkList</a>

---

##### `progress`<sup>Required</sup> <a name="progress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.progress"></a>

```python
progress: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.securityGroups"></a>

```python
security_groups: DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList">DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `flavor_id_input`<sup>Optional</sup> <a name="flavor_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorIdInput"></a>

```python
flavor_id_input: str
```

- *Type:* str

---

##### `host_status_input`<sup>Optional</sup> <a name="host_status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatusInput"></a>

```python
host_status_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `host_status`<sup>Required</sup> <a name="host_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatus"></a>

```python
host_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudComputeBmsServerV2Config <a name="DataOpentelekomcloudComputeBmsServerV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  flavor_id: str = None,
  host_status: str = None,
  id: str = None,
  image_id: str = None,
  key_name: str = None,
  name: str = None,
  region: str = None,
  status: str = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#flavor_id DataOpentelekomcloudComputeBmsServerV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.hostStatus">host_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#host_status DataOpentelekomcloudComputeBmsServerV2#host_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#id DataOpentelekomcloudComputeBmsServerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#image_id DataOpentelekomcloudComputeBmsServerV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#key_name DataOpentelekomcloudComputeBmsServerV2#key_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#name DataOpentelekomcloudComputeBmsServerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#region DataOpentelekomcloudComputeBmsServerV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#status DataOpentelekomcloudComputeBmsServerV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#user_id DataOpentelekomcloudComputeBmsServerV2#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#flavor_id DataOpentelekomcloudComputeBmsServerV2#flavor_id}.

---

##### `host_status`<sup>Optional</sup> <a name="host_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.hostStatus"></a>

```python
host_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#host_status DataOpentelekomcloudComputeBmsServerV2#host_status}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#id DataOpentelekomcloudComputeBmsServerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#image_id DataOpentelekomcloudComputeBmsServerV2#image_id}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#key_name DataOpentelekomcloudComputeBmsServerV2#key_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#name DataOpentelekomcloudComputeBmsServerV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#region DataOpentelekomcloudComputeBmsServerV2#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#status DataOpentelekomcloudComputeBmsServerV2#status}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/data-sources/compute_bms_server_v2#user_id DataOpentelekomcloudComputeBmsServerV2#user_id}.

---

### DataOpentelekomcloudComputeBmsServerV2Network <a name="DataOpentelekomcloudComputeBmsServerV2Network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network()
```


### DataOpentelekomcloudComputeBmsServerV2SecurityGroups <a name="DataOpentelekomcloudComputeBmsServerV2SecurityGroups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudComputeBmsServerV2NetworkList <a name="DataOpentelekomcloudComputeBmsServerV2NetworkList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference <a name="DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.mac">mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network">DataOpentelekomcloudComputeBmsServerV2Network</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.mac"></a>

```python
mac: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudComputeBmsServerV2Network
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network">DataOpentelekomcloudComputeBmsServerV2Network</a>

---


### DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList <a name="DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference <a name="DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_bms_server_v2

dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups">DataOpentelekomcloudComputeBmsServerV2SecurityGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudComputeBmsServerV2SecurityGroups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups">DataOpentelekomcloudComputeBmsServerV2SecurityGroups</a>

---



