# `dataOpentelekomcloudTmsResourceInstancesV1` Submodule <a name="`dataOpentelekomcloudTmsResourceInstancesV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudTmsResourceInstancesV1 <a name="DataOpentelekomcloudTmsResourceInstancesV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1 opentelekomcloud_tms_resource_instances_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_types: typing.List[str],
  tags: IResolvable | typing.List[DataOpentelekomcloudTmsResourceInstancesV1Tags],
  id: str = None,
  project_id: str = None,
  without_any_tag: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#resource_types DataOpentelekomcloudTmsResourceInstancesV1#resource_types}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.tags">tags</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags">DataOpentelekomcloudTmsResourceInstancesV1Tags</a>]</code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#id DataOpentelekomcloudTmsResourceInstancesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#project_id DataOpentelekomcloudTmsResourceInstancesV1#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.withoutAnyTag">without_any_tag</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#without_any_tag DataOpentelekomcloudTmsResourceInstancesV1#without_any_tag}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#resource_types DataOpentelekomcloudTmsResourceInstancesV1#resource_types}.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.tags"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags">DataOpentelekomcloudTmsResourceInstancesV1Tags</a>]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#tags DataOpentelekomcloudTmsResourceInstancesV1#tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#id DataOpentelekomcloudTmsResourceInstancesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#project_id DataOpentelekomcloudTmsResourceInstancesV1#project_id}.

---

##### `without_any_tag`<sup>Optional</sup> <a name="without_any_tag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.Initializer.parameter.withoutAnyTag"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#without_any_tag DataOpentelekomcloudTmsResourceInstancesV1#without_any_tag}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.resetWithoutAnyTag">reset_without_any_tag</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DataOpentelekomcloudTmsResourceInstancesV1Tags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags">DataOpentelekomcloudTmsResourceInstancesV1Tags</a>]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_without_any_tag` <a name="reset_without_any_tag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.resetWithoutAnyTag"></a>

```python
def reset_without_any_tag() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudTmsResourceInstancesV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudTmsResourceInstancesV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudTmsResourceInstancesV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudTmsResourceInstancesV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudTmsResourceInstancesV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList">DataOpentelekomcloudTmsResourceInstancesV1ResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList">DataOpentelekomcloudTmsResourceInstancesV1TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.tagsInput">tags_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags">DataOpentelekomcloudTmsResourceInstancesV1Tags</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.withoutAnyTagInput">without_any_tag_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.withoutAnyTag">without_any_tag</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.resources"></a>

```python
resources: DataOpentelekomcloudTmsResourceInstancesV1ResourcesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList">DataOpentelekomcloudTmsResourceInstancesV1ResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.tags"></a>

```python
tags: DataOpentelekomcloudTmsResourceInstancesV1TagsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList">DataOpentelekomcloudTmsResourceInstancesV1TagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DataOpentelekomcloudTmsResourceInstancesV1Tags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags">DataOpentelekomcloudTmsResourceInstancesV1Tags</a>]

---

##### `without_any_tag_input`<sup>Optional</sup> <a name="without_any_tag_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.withoutAnyTagInput"></a>

```python
without_any_tag_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `without_any_tag`<sup>Required</sup> <a name="without_any_tag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.withoutAnyTag"></a>

```python
without_any_tag: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudTmsResourceInstancesV1Config <a name="DataOpentelekomcloudTmsResourceInstancesV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_types: typing.List[str],
  tags: IResolvable | typing.List[DataOpentelekomcloudTmsResourceInstancesV1Tags],
  id: str = None,
  project_id: str = None,
  without_any_tag: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#resource_types DataOpentelekomcloudTmsResourceInstancesV1#resource_types}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.tags">tags</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags">DataOpentelekomcloudTmsResourceInstancesV1Tags</a>]</code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#id DataOpentelekomcloudTmsResourceInstancesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#project_id DataOpentelekomcloudTmsResourceInstancesV1#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.withoutAnyTag">without_any_tag</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#without_any_tag DataOpentelekomcloudTmsResourceInstancesV1#without_any_tag}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#resource_types DataOpentelekomcloudTmsResourceInstancesV1#resource_types}.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.tags"></a>

```python
tags: IResolvable | typing.List[DataOpentelekomcloudTmsResourceInstancesV1Tags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags">DataOpentelekomcloudTmsResourceInstancesV1Tags</a>]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#tags DataOpentelekomcloudTmsResourceInstancesV1#tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#id DataOpentelekomcloudTmsResourceInstancesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#project_id DataOpentelekomcloudTmsResourceInstancesV1#project_id}.

---

##### `without_any_tag`<sup>Optional</sup> <a name="without_any_tag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Config.property.withoutAnyTag"></a>

```python
without_any_tag: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#without_any_tag DataOpentelekomcloudTmsResourceInstancesV1#without_any_tag}.

---

### DataOpentelekomcloudTmsResourceInstancesV1Resources <a name="DataOpentelekomcloudTmsResourceInstancesV1Resources" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Resources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Resources.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Resources()
```


### DataOpentelekomcloudTmsResourceInstancesV1Tags <a name="DataOpentelekomcloudTmsResourceInstancesV1Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#key DataOpentelekomcloudTmsResourceInstancesV1#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#values DataOpentelekomcloudTmsResourceInstancesV1#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#key DataOpentelekomcloudTmsResourceInstancesV1#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/tms_resource_instances_v1#values DataOpentelekomcloudTmsResourceInstancesV1#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudTmsResourceInstancesV1ResourcesList <a name="DataOpentelekomcloudTmsResourceInstancesV1ResourcesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference <a name="DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Resources">DataOpentelekomcloudTmsResourceInstancesV1Resources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1ResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudTmsResourceInstancesV1Resources
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Resources">DataOpentelekomcloudTmsResourceInstancesV1Resources</a>

---


### DataOpentelekomcloudTmsResourceInstancesV1TagsList <a name="DataOpentelekomcloudTmsResourceInstancesV1TagsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags">DataOpentelekomcloudTmsResourceInstancesV1Tags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataOpentelekomcloudTmsResourceInstancesV1Tags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags">DataOpentelekomcloudTmsResourceInstancesV1Tags</a>]

---


### DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference <a name="DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_tms_resource_instances_v1

dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags">DataOpentelekomcloudTmsResourceInstancesV1Tags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1TagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataOpentelekomcloudTmsResourceInstancesV1Tags
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceInstancesV1.DataOpentelekomcloudTmsResourceInstancesV1Tags">DataOpentelekomcloudTmsResourceInstancesV1Tags</a>

---



