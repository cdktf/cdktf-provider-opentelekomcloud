# `dataOpentelekomcloudSfsFileSystemV2` Submodule <a name="`dataOpentelekomcloudSfsFileSystemV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudSfsFileSystemV2 <a name="DataOpentelekomcloudSfsFileSystemV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2 opentelekomcloud_sfs_file_system_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_sfs_file_system_v2

dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  region: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#id DataOpentelekomcloudSfsFileSystemV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#name DataOpentelekomcloudSfsFileSystemV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#region DataOpentelekomcloudSfsFileSystemV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#status DataOpentelekomcloudSfsFileSystemV2#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#id DataOpentelekomcloudSfsFileSystemV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#name DataOpentelekomcloudSfsFileSystemV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#region DataOpentelekomcloudSfsFileSystemV2#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#status DataOpentelekomcloudSfsFileSystemV2#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudSfsFileSystemV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_sfs_file_system_v2

dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_sfs_file_system_v2

dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_sfs_file_system_v2

dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_sfs_file_system_v2

dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudSfsFileSystemV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudSfsFileSystemV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudSfsFileSystemV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudSfsFileSystemV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessTo">access_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.exportLocation">export_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.exportLocations">export_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.isPublic">is_public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.preferred">preferred</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareAccessId">share_access_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareInstanceId">share_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareProto">share_proto</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareType">share_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `access_to`<sup>Required</sup> <a name="access_to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessTo"></a>

```python
access_to: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `export_location`<sup>Required</sup> <a name="export_location" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.exportLocation"></a>

```python
export_location: str
```

- *Type:* str

---

##### `export_locations`<sup>Required</sup> <a name="export_locations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.exportLocations"></a>

```python
export_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.isPublic"></a>

```python
is_public: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `preferred`<sup>Required</sup> <a name="preferred" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.preferred"></a>

```python
preferred: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `share_access_id`<sup>Required</sup> <a name="share_access_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareAccessId"></a>

```python
share_access_id: str
```

- *Type:* str

---

##### `share_instance_id`<sup>Required</sup> <a name="share_instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareInstanceId"></a>

```python
share_instance_id: str
```

- *Type:* str

---

##### `share_proto`<sup>Required</sup> <a name="share_proto" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareProto"></a>

```python
share_proto: str
```

- *Type:* str

---

##### `share_type`<sup>Required</sup> <a name="share_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareType"></a>

```python
share_type: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudSfsFileSystemV2Config <a name="DataOpentelekomcloudSfsFileSystemV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_sfs_file_system_v2

dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  region: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#id DataOpentelekomcloudSfsFileSystemV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#name DataOpentelekomcloudSfsFileSystemV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#region DataOpentelekomcloudSfsFileSystemV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#status DataOpentelekomcloudSfsFileSystemV2#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#id DataOpentelekomcloudSfsFileSystemV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#name DataOpentelekomcloudSfsFileSystemV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#region DataOpentelekomcloudSfsFileSystemV2#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/sfs_file_system_v2#status DataOpentelekomcloudSfsFileSystemV2#status}.

---



