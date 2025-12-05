# `dataOpentelekomcloudGeminiInstanceTemplateV3` Submodule <a name="`dataOpentelekomcloudGeminiInstanceTemplateV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudGeminiInstanceTemplateV3 <a name="DataOpentelekomcloudGeminiInstanceTemplateV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_instance_template_v3 opentelekomcloud_gemini_instance_template_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instance_template_v3

dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_instance_template_v3#instance_id DataOpentelekomcloudGeminiInstanceTemplateV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_instance_template_v3#id DataOpentelekomcloudGeminiInstanceTemplateV3#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_instance_template_v3#instance_id DataOpentelekomcloudGeminiInstanceTemplateV3#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_instance_template_v3#id DataOpentelekomcloudGeminiInstanceTemplateV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudGeminiInstanceTemplateV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instance_template_v3

dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instance_template_v3

dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instance_template_v3

dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instance_template_v3

dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudGeminiInstanceTemplateV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudGeminiInstanceTemplateV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudGeminiInstanceTemplateV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_instance_template_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudGeminiInstanceTemplateV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.configurationParameters">configuration_parameters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList">DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.datastoreName">datastore_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.datastoreVersionName">datastore_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `configuration_parameters`<sup>Required</sup> <a name="configuration_parameters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.configurationParameters"></a>

```python
configuration_parameters: DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList">DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `datastore_name`<sup>Required</sup> <a name="datastore_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.datastoreName"></a>

```python
datastore_name: str
```

- *Type:* str

---

##### `datastore_version_name`<sup>Required</sup> <a name="datastore_version_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.datastoreVersionName"></a>

```python
datastore_version_name: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudGeminiInstanceTemplateV3Config <a name="DataOpentelekomcloudGeminiInstanceTemplateV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instance_template_v3

dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_instance_template_v3#instance_id DataOpentelekomcloudGeminiInstanceTemplateV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_instance_template_v3#id DataOpentelekomcloudGeminiInstanceTemplateV3#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_instance_template_v3#instance_id DataOpentelekomcloudGeminiInstanceTemplateV3#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_instance_template_v3#id DataOpentelekomcloudGeminiInstanceTemplateV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParameters <a name="DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParameters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instance_template_v3

dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList <a name="DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instance_template_v3

dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference <a name="DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instance_template_v3

dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.readonly">readonly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.restartRequired">restart_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.valueRange">value_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParameters">DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.readonly"></a>

```python
readonly: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `restart_required`<sup>Required</sup> <a name="restart_required" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.restartRequired"></a>

```python
restart_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `value_range`<sup>Required</sup> <a name="value_range" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.valueRange"></a>

```python
value_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParameters
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstanceTemplateV3.DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParameters">DataOpentelekomcloudGeminiInstanceTemplateV3ConfigurationParameters</a>

---



