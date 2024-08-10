# `dataOpentelekomcloudCsbsBackupPolicyV1` Submodule <a name="`dataOpentelekomcloudCsbsBackupPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCsbsBackupPolicyV1 <a name="DataOpentelekomcloudCsbsBackupPolicyV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1 opentelekomcloud_csbs_backup_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1(
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
  status: str = None,
  tags: typing.Union[IResolvable, typing.List[DataOpentelekomcloudCsbsBackupPolicyV1Tags]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#id DataOpentelekomcloudCsbsBackupPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#name DataOpentelekomcloudCsbsBackupPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#region DataOpentelekomcloudCsbsBackupPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#status DataOpentelekomcloudCsbsBackupPolicyV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags">DataOpentelekomcloudCsbsBackupPolicyV1Tags</a>]]</code> | tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#id DataOpentelekomcloudCsbsBackupPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#name DataOpentelekomcloudCsbsBackupPolicyV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#region DataOpentelekomcloudCsbsBackupPolicyV1#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#status DataOpentelekomcloudCsbsBackupPolicyV1#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags">DataOpentelekomcloudCsbsBackupPolicyV1Tags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#tags DataOpentelekomcloudCsbsBackupPolicyV1#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[DataOpentelekomcloudCsbsBackupPolicyV1Tags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags">DataOpentelekomcloudCsbsBackupPolicyV1Tags</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCsbsBackupPolicyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudCsbsBackupPolicyV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudCsbsBackupPolicyV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudCsbsBackupPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCsbsBackupPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.common">common</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.providerId">provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList">DataOpentelekomcloudCsbsBackupPolicyV1ResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.scheduledOperation">scheduled_operation</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList">DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList">DataOpentelekomcloudCsbsBackupPolicyV1TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags">DataOpentelekomcloudCsbsBackupPolicyV1Tags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `common`<sup>Required</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.common"></a>

```python
common: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.resource"></a>

```python
resource: DataOpentelekomcloudCsbsBackupPolicyV1ResourceList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList">DataOpentelekomcloudCsbsBackupPolicyV1ResourceList</a>

---

##### `scheduled_operation`<sup>Required</sup> <a name="scheduled_operation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.scheduledOperation"></a>

```python
scheduled_operation: DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList">DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.tags"></a>

```python
tags: DataOpentelekomcloudCsbsBackupPolicyV1TagsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList">DataOpentelekomcloudCsbsBackupPolicyV1TagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[DataOpentelekomcloudCsbsBackupPolicyV1Tags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags">DataOpentelekomcloudCsbsBackupPolicyV1Tags</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCsbsBackupPolicyV1Config <a name="DataOpentelekomcloudCsbsBackupPolicyV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config(
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
  status: str = None,
  tags: typing.Union[IResolvable, typing.List[DataOpentelekomcloudCsbsBackupPolicyV1Tags]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#id DataOpentelekomcloudCsbsBackupPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#name DataOpentelekomcloudCsbsBackupPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#region DataOpentelekomcloudCsbsBackupPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#status DataOpentelekomcloudCsbsBackupPolicyV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags">DataOpentelekomcloudCsbsBackupPolicyV1Tags</a>]]</code> | tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#id DataOpentelekomcloudCsbsBackupPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#name DataOpentelekomcloudCsbsBackupPolicyV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#region DataOpentelekomcloudCsbsBackupPolicyV1#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#status DataOpentelekomcloudCsbsBackupPolicyV1#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[DataOpentelekomcloudCsbsBackupPolicyV1Tags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags">DataOpentelekomcloudCsbsBackupPolicyV1Tags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#tags DataOpentelekomcloudCsbsBackupPolicyV1#tags}

---

### DataOpentelekomcloudCsbsBackupPolicyV1Resource <a name="DataOpentelekomcloudCsbsBackupPolicyV1Resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Resource.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Resource()
```


### DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation <a name="DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation()
```


### DataOpentelekomcloudCsbsBackupPolicyV1Tags <a name="DataOpentelekomcloudCsbsBackupPolicyV1Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#key DataOpentelekomcloudCsbsBackupPolicyV1#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#value DataOpentelekomcloudCsbsBackupPolicyV1#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#key DataOpentelekomcloudCsbsBackupPolicyV1#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/csbs_backup_policy_v1#value DataOpentelekomcloudCsbsBackupPolicyV1#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCsbsBackupPolicyV1ResourceList <a name="DataOpentelekomcloudCsbsBackupPolicyV1ResourceList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference <a name="DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Resource">DataOpentelekomcloudCsbsBackupPolicyV1Resource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCsbsBackupPolicyV1Resource
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Resource">DataOpentelekomcloudCsbsBackupPolicyV1Resource</a>

---


### DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList <a name="DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference <a name="DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackups">max_backups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationType">operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanent">permanent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDays">retention_duration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerId">trigger_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerName">trigger_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPattern">trigger_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerType">trigger_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation">DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_backups`<sup>Required</sup> <a name="max_backups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackups"></a>

```python
max_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operation_type`<sup>Required</sup> <a name="operation_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationType"></a>

```python
operation_type: str
```

- *Type:* str

---

##### `permanent`<sup>Required</sup> <a name="permanent" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanent"></a>

```python
permanent: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `retention_duration_days`<sup>Required</sup> <a name="retention_duration_days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDays"></a>

```python
retention_duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerId"></a>

```python
trigger_id: str
```

- *Type:* str

---

##### `trigger_name`<sup>Required</sup> <a name="trigger_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerName"></a>

```python
trigger_name: str
```

- *Type:* str

---

##### `trigger_pattern`<sup>Required</sup> <a name="trigger_pattern" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPattern"></a>

```python
trigger_pattern: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation">DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation</a>

---


### DataOpentelekomcloudCsbsBackupPolicyV1TagsList <a name="DataOpentelekomcloudCsbsBackupPolicyV1TagsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags">DataOpentelekomcloudCsbsBackupPolicyV1Tags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOpentelekomcloudCsbsBackupPolicyV1Tags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags">DataOpentelekomcloudCsbsBackupPolicyV1Tags</a>]]

---


### DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference <a name="DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_csbs_backup_policy_v1

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags">DataOpentelekomcloudCsbsBackupPolicyV1Tags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1TagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOpentelekomcloudCsbsBackupPolicyV1Tags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Tags">DataOpentelekomcloudCsbsBackupPolicyV1Tags</a>]

---



