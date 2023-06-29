# `data_opentelekomcloud_rts_stack_resource_v1`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_rts_stack_resource_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1).

# `dataOpentelekomcloudRtsStackResourceV1` Submodule <a name="`dataOpentelekomcloudRtsStackResourceV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRtsStackResourceV1 <a name="DataOpentelekomcloudRtsStackResourceV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1 opentelekomcloud_rts_stack_resource_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rts_stack_resource_v1

dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stack_name: str,
  id: str = None,
  physical_resource_id: str = None,
  region: str = None,
  resource_name: str = None,
  resource_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.stackName">stack_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#stack_name DataOpentelekomcloudRtsStackResourceV1#stack_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#id DataOpentelekomcloudRtsStackResourceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.physicalResourceId">physical_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#physical_resource_id DataOpentelekomcloudRtsStackResourceV1#physical_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#region DataOpentelekomcloudRtsStackResourceV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#resource_name DataOpentelekomcloudRtsStackResourceV1#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#resource_type DataOpentelekomcloudRtsStackResourceV1#resource_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.stackName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#stack_name DataOpentelekomcloudRtsStackResourceV1#stack_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#id DataOpentelekomcloudRtsStackResourceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `physical_resource_id`<sup>Optional</sup> <a name="physical_resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.physicalResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#physical_resource_id DataOpentelekomcloudRtsStackResourceV1#physical_resource_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#region DataOpentelekomcloudRtsStackResourceV1#region}.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.resourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#resource_name DataOpentelekomcloudRtsStackResourceV1#resource_name}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#resource_type DataOpentelekomcloudRtsStackResourceV1#resource_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetPhysicalResourceId">reset_physical_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceName">reset_resource_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_physical_resource_id` <a name="reset_physical_resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetPhysicalResourceId"></a>

```python
def reset_physical_resource_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_name` <a name="reset_resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceName"></a>

```python
def reset_resource_name() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rts_stack_resource_v1

dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rts_stack_resource_v1

dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rts_stack_resource_v1

dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.logicalResourceId">logical_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.requiredBy">required_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatus">resource_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatusReason">resource_status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceIdInput">physical_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackNameInput">stack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceId">physical_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackName">stack_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `logical_resource_id`<sup>Required</sup> <a name="logical_resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.logicalResourceId"></a>

```python
logical_resource_id: str
```

- *Type:* str

---

##### `required_by`<sup>Required</sup> <a name="required_by" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.requiredBy"></a>

```python
required_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_status`<sup>Required</sup> <a name="resource_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatus"></a>

```python
resource_status: str
```

- *Type:* str

---

##### `resource_status_reason`<sup>Required</sup> <a name="resource_status_reason" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatusReason"></a>

```python
resource_status_reason: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `physical_resource_id_input`<sup>Optional</sup> <a name="physical_resource_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceIdInput"></a>

```python
physical_resource_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `stack_name_input`<sup>Optional</sup> <a name="stack_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackNameInput"></a>

```python
stack_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `physical_resource_id`<sup>Required</sup> <a name="physical_resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceId"></a>

```python
physical_resource_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackName"></a>

```python
stack_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRtsStackResourceV1Config <a name="DataOpentelekomcloudRtsStackResourceV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rts_stack_resource_v1

dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stack_name: str,
  id: str = None,
  physical_resource_id: str = None,
  region: str = None,
  resource_name: str = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.stackName">stack_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#stack_name DataOpentelekomcloudRtsStackResourceV1#stack_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#id DataOpentelekomcloudRtsStackResourceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.physicalResourceId">physical_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#physical_resource_id DataOpentelekomcloudRtsStackResourceV1#physical_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#region DataOpentelekomcloudRtsStackResourceV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#resource_name DataOpentelekomcloudRtsStackResourceV1#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#resource_type DataOpentelekomcloudRtsStackResourceV1#resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.stackName"></a>

```python
stack_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#stack_name DataOpentelekomcloudRtsStackResourceV1#stack_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#id DataOpentelekomcloudRtsStackResourceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `physical_resource_id`<sup>Optional</sup> <a name="physical_resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.physicalResourceId"></a>

```python
physical_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#physical_resource_id DataOpentelekomcloudRtsStackResourceV1#physical_resource_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#region DataOpentelekomcloudRtsStackResourceV1#region}.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#resource_name DataOpentelekomcloudRtsStackResourceV1#resource_name}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/data-sources/rts_stack_resource_v1#resource_type DataOpentelekomcloudRtsStackResourceV1#resource_type}.

---



