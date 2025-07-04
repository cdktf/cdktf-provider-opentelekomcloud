# `dataOpentelekomcloudVbsBackupPolicyV2` Submodule <a name="`dataOpentelekomcloudVbsBackupPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudVbsBackupPolicyV2 <a name="DataOpentelekomcloudVbsBackupPolicyV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2 opentelekomcloud_vbs_backup_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_tags: typing.Union[IResolvable, typing.List[DataOpentelekomcloudVbsBackupPolicyV2FilterTags]] = None,
  id: str = None,
  name: str = None,
  policy_resource_count: typing.Union[int, float] = None,
  region: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.filterTags">filter_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags">DataOpentelekomcloudVbsBackupPolicyV2FilterTags</a>]]</code> | filter_tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#id DataOpentelekomcloudVbsBackupPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#name DataOpentelekomcloudVbsBackupPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.policyResourceCount">policy_resource_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#policy_resource_count DataOpentelekomcloudVbsBackupPolicyV2#policy_resource_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#region DataOpentelekomcloudVbsBackupPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#status DataOpentelekomcloudVbsBackupPolicyV2#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_tags`<sup>Optional</sup> <a name="filter_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.filterTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags">DataOpentelekomcloudVbsBackupPolicyV2FilterTags</a>]]

filter_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#filter_tags DataOpentelekomcloudVbsBackupPolicyV2#filter_tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#id DataOpentelekomcloudVbsBackupPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#name DataOpentelekomcloudVbsBackupPolicyV2#name}.

---

##### `policy_resource_count`<sup>Optional</sup> <a name="policy_resource_count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.policyResourceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#policy_resource_count DataOpentelekomcloudVbsBackupPolicyV2#policy_resource_count}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#region DataOpentelekomcloudVbsBackupPolicyV2#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#status DataOpentelekomcloudVbsBackupPolicyV2#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.putFilterTags">put_filter_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetFilterTags">reset_filter_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetPolicyResourceCount">reset_policy_resource_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter_tags` <a name="put_filter_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.putFilterTags"></a>

```python
def put_filter_tags(
  value: typing.Union[IResolvable, typing.List[DataOpentelekomcloudVbsBackupPolicyV2FilterTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.putFilterTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags">DataOpentelekomcloudVbsBackupPolicyV2FilterTags</a>]]

---

##### `reset_filter_tags` <a name="reset_filter_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetFilterTags"></a>

```python
def reset_filter_tags() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_policy_resource_count` <a name="reset_policy_resource_count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetPolicyResourceCount"></a>

```python
def reset_policy_resource_count() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudVbsBackupPolicyV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudVbsBackupPolicyV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudVbsBackupPolicyV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudVbsBackupPolicyV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudVbsBackupPolicyV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.filterTags">filter_tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList">DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.frequency">frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.remainFirstBackup">remain_first_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.rententionNum">rentention_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList">DataOpentelekomcloudVbsBackupPolicyV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.filterTagsInput">filter_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags">DataOpentelekomcloudVbsBackupPolicyV2FilterTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.policyResourceCountInput">policy_resource_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.policyResourceCount">policy_resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter_tags`<sup>Required</sup> <a name="filter_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.filterTags"></a>

```python
filter_tags: DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList">DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList</a>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.frequency"></a>

```python
frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remain_first_backup`<sup>Required</sup> <a name="remain_first_backup" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.remainFirstBackup"></a>

```python
remain_first_backup: str
```

- *Type:* str

---

##### `rentention_num`<sup>Required</sup> <a name="rentention_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.rententionNum"></a>

```python
rentention_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.tags"></a>

```python
tags: DataOpentelekomcloudVbsBackupPolicyV2TagsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList">DataOpentelekomcloudVbsBackupPolicyV2TagsList</a>

---

##### `filter_tags_input`<sup>Optional</sup> <a name="filter_tags_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.filterTagsInput"></a>

```python
filter_tags_input: typing.Union[IResolvable, typing.List[DataOpentelekomcloudVbsBackupPolicyV2FilterTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags">DataOpentelekomcloudVbsBackupPolicyV2FilterTags</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_resource_count_input`<sup>Optional</sup> <a name="policy_resource_count_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.policyResourceCountInput"></a>

```python
policy_resource_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_resource_count`<sup>Required</sup> <a name="policy_resource_count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.policyResourceCount"></a>

```python
policy_resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudVbsBackupPolicyV2Config <a name="DataOpentelekomcloudVbsBackupPolicyV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_tags: typing.Union[IResolvable, typing.List[DataOpentelekomcloudVbsBackupPolicyV2FilterTags]] = None,
  id: str = None,
  name: str = None,
  policy_resource_count: typing.Union[int, float] = None,
  region: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.filterTags">filter_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags">DataOpentelekomcloudVbsBackupPolicyV2FilterTags</a>]]</code> | filter_tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#id DataOpentelekomcloudVbsBackupPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#name DataOpentelekomcloudVbsBackupPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.policyResourceCount">policy_resource_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#policy_resource_count DataOpentelekomcloudVbsBackupPolicyV2#policy_resource_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#region DataOpentelekomcloudVbsBackupPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#status DataOpentelekomcloudVbsBackupPolicyV2#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_tags`<sup>Optional</sup> <a name="filter_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.filterTags"></a>

```python
filter_tags: typing.Union[IResolvable, typing.List[DataOpentelekomcloudVbsBackupPolicyV2FilterTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags">DataOpentelekomcloudVbsBackupPolicyV2FilterTags</a>]]

filter_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#filter_tags DataOpentelekomcloudVbsBackupPolicyV2#filter_tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#id DataOpentelekomcloudVbsBackupPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#name DataOpentelekomcloudVbsBackupPolicyV2#name}.

---

##### `policy_resource_count`<sup>Optional</sup> <a name="policy_resource_count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.policyResourceCount"></a>

```python
policy_resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#policy_resource_count DataOpentelekomcloudVbsBackupPolicyV2#policy_resource_count}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#region DataOpentelekomcloudVbsBackupPolicyV2#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#status DataOpentelekomcloudVbsBackupPolicyV2#status}.

---

### DataOpentelekomcloudVbsBackupPolicyV2FilterTags <a name="DataOpentelekomcloudVbsBackupPolicyV2FilterTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#key DataOpentelekomcloudVbsBackupPolicyV2#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#values DataOpentelekomcloudVbsBackupPolicyV2#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#key DataOpentelekomcloudVbsBackupPolicyV2#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vbs_backup_policy_v2#values DataOpentelekomcloudVbsBackupPolicyV2#values}.

---

### DataOpentelekomcloudVbsBackupPolicyV2Tags <a name="DataOpentelekomcloudVbsBackupPolicyV2Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Tags.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Tags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList <a name="DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags">DataOpentelekomcloudVbsBackupPolicyV2FilterTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOpentelekomcloudVbsBackupPolicyV2FilterTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags">DataOpentelekomcloudVbsBackupPolicyV2FilterTags</a>]]

---


### DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference <a name="DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags">DataOpentelekomcloudVbsBackupPolicyV2FilterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOpentelekomcloudVbsBackupPolicyV2FilterTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2FilterTags">DataOpentelekomcloudVbsBackupPolicyV2FilterTags</a>]

---


### DataOpentelekomcloudVbsBackupPolicyV2TagsList <a name="DataOpentelekomcloudVbsBackupPolicyV2TagsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference <a name="DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vbs_backup_policy_v2

dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Tags">DataOpentelekomcloudVbsBackupPolicyV2Tags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2TagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudVbsBackupPolicyV2Tags
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVbsBackupPolicyV2.DataOpentelekomcloudVbsBackupPolicyV2Tags">DataOpentelekomcloudVbsBackupPolicyV2Tags</a>

---



