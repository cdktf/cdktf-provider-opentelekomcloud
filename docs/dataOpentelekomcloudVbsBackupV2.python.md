# `dataOpentelekomcloudVbsBackupV2` Submodule <a name="`dataOpentelekomcloudVbsBackupV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudVbsBackupV2 <a name="DataOpentelekomcloudVbsBackupV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2 opentelekomcloud_vbs_backup_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_v2

dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2(
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
  snapshot_id: str = None,
  status: str = None,
  volume_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#id DataOpentelekomcloudVbsBackupV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#name DataOpentelekomcloudVbsBackupV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#region DataOpentelekomcloudVbsBackupV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#snapshot_id DataOpentelekomcloudVbsBackupV2#snapshot_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#status DataOpentelekomcloudVbsBackupV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#volume_id DataOpentelekomcloudVbsBackupV2#volume_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#id DataOpentelekomcloudVbsBackupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#name DataOpentelekomcloudVbsBackupV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#region DataOpentelekomcloudVbsBackupV2#region}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#snapshot_id DataOpentelekomcloudVbsBackupV2#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#status DataOpentelekomcloudVbsBackupV2#status}.

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.Initializer.parameter.volumeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#volume_id DataOpentelekomcloudVbsBackupV2#volume_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetVolumeId">reset_volume_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_volume_id` <a name="reset_volume_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.resetVolumeId"></a>

```python
def reset_volume_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudVbsBackupV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_v2

dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_v2

dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_v2

dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_v2

dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudVbsBackupV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudVbsBackupV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudVbsBackupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudVbsBackupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.serviceMetadata">service_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.shareIds">share_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.toProjectIds">to_project_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `service_metadata`<sup>Required</sup> <a name="service_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.serviceMetadata"></a>

```python
service_metadata: str
```

- *Type:* str

---

##### `share_ids`<sup>Required</sup> <a name="share_ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.shareIds"></a>

```python
share_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_project_ids`<sup>Required</sup> <a name="to_project_ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.toProjectIds"></a>

```python
to_project_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudVbsBackupV2Config <a name="DataOpentelekomcloudVbsBackupV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_v2

dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config(
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
  snapshot_id: str = None,
  status: str = None,
  volume_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#id DataOpentelekomcloudVbsBackupV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#name DataOpentelekomcloudVbsBackupV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#region DataOpentelekomcloudVbsBackupV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#snapshot_id DataOpentelekomcloudVbsBackupV2#snapshot_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#status DataOpentelekomcloudVbsBackupV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#volume_id DataOpentelekomcloudVbsBackupV2#volume_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#id DataOpentelekomcloudVbsBackupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#name DataOpentelekomcloudVbsBackupV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#region DataOpentelekomcloudVbsBackupV2#region}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#snapshot_id DataOpentelekomcloudVbsBackupV2#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#status DataOpentelekomcloudVbsBackupV2#status}.

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupV2.DataOpentelekomcloudVbsBackupV2Config.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/vbs_backup_v2#volume_id DataOpentelekomcloudVbsBackupV2#volume_id}.

---



