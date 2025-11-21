# `dataOpentelekomcloudGeminiInstancesV3` Submodule <a name="`dataOpentelekomcloudGeminiInstancesV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudGeminiInstancesV3 <a name="DataOpentelekomcloudGeminiInstancesV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3 opentelekomcloud_gemini_instances_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  name: str = None,
  subnet_id: str = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#id DataOpentelekomcloudGeminiInstancesV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#name DataOpentelekomcloudGeminiInstancesV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#subnet_id DataOpentelekomcloudGeminiInstancesV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#vpc_id DataOpentelekomcloudGeminiInstancesV3#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#id DataOpentelekomcloudGeminiInstancesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#name DataOpentelekomcloudGeminiInstancesV3#name}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#subnet_id DataOpentelekomcloudGeminiInstancesV3#subnet_id}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#vpc_id DataOpentelekomcloudGeminiInstancesV3#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudGeminiInstancesV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudGeminiInstancesV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudGeminiInstancesV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudGeminiInstancesV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudGeminiInstancesV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList">DataOpentelekomcloudGeminiInstancesV3InstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.instances"></a>

```python
instances: DataOpentelekomcloudGeminiInstancesV3InstancesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList">DataOpentelekomcloudGeminiInstancesV3InstancesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudGeminiInstancesV3Config <a name="DataOpentelekomcloudGeminiInstancesV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  name: str = None,
  subnet_id: str = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#id DataOpentelekomcloudGeminiInstancesV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#name DataOpentelekomcloudGeminiInstancesV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#subnet_id DataOpentelekomcloudGeminiInstancesV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#vpc_id DataOpentelekomcloudGeminiInstancesV3#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#id DataOpentelekomcloudGeminiInstancesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#name DataOpentelekomcloudGeminiInstancesV3#name}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#subnet_id DataOpentelekomcloudGeminiInstancesV3#subnet_id}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#vpc_id DataOpentelekomcloudGeminiInstancesV3#vpc_id}.

---

### DataOpentelekomcloudGeminiInstancesV3Instances <a name="DataOpentelekomcloudGeminiInstancesV3Instances" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Instances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Instances.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Instances()
```


### DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy <a name="DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy()
```


### DataOpentelekomcloudGeminiInstancesV3InstancesDatastore <a name="DataOpentelekomcloudGeminiInstancesV3InstancesDatastore" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastore.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastore()
```


### DataOpentelekomcloudGeminiInstancesV3InstancesNodes <a name="DataOpentelekomcloudGeminiInstancesV3InstancesNodes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList <a name="DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference <a name="DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.keepDays">keep_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy">DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keep_days`<sup>Required</sup> <a name="keep_days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.keepDays"></a>

```python
keep_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy">DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy</a>

---


### DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList <a name="DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference <a name="DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.storageEngine">storage_engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastore">DataOpentelekomcloudGeminiInstancesV3InstancesDatastore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `storage_engine`<sup>Required</sup> <a name="storage_engine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.storageEngine"></a>

```python
storage_engine: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudGeminiInstancesV3InstancesDatastore
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastore">DataOpentelekomcloudGeminiInstancesV3InstancesDatastore</a>

---


### DataOpentelekomcloudGeminiInstancesV3InstancesList <a name="DataOpentelekomcloudGeminiInstancesV3InstancesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudGeminiInstancesV3InstancesNodesList <a name="DataOpentelekomcloudGeminiInstancesV3InstancesNodesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference <a name="DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.supportReduce">support_reduce</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodes">DataOpentelekomcloudGeminiInstancesV3InstancesNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `support_reduce`<sup>Required</sup> <a name="support_reduce" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.supportReduce"></a>

```python
support_reduce: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudGeminiInstancesV3InstancesNodes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodes">DataOpentelekomcloudGeminiInstancesV3InstancesNodes</a>

---


### DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference <a name="DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_gemini_instances_v3

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.backupStrategy">backup_strategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList">DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList">DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.dbUserName">db_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.nodeNum">node_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList">DataOpentelekomcloudGeminiInstancesV3InstancesNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.privateIps">private_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Instances">DataOpentelekomcloudGeminiInstancesV3Instances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `backup_strategy`<sup>Required</sup> <a name="backup_strategy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.backupStrategy"></a>

```python
backup_strategy: DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList">DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList</a>

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.datastore"></a>

```python
datastore: DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList">DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList</a>

---

##### `db_user_name`<sup>Required</sup> <a name="db_user_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.dbUserName"></a>

```python
db_user_name: str
```

- *Type:* str

---

##### `enterprise_project_id`<sup>Required</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_num`<sup>Required</sup> <a name="node_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.nodeNum"></a>

```python
node_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.nodes"></a>

```python
nodes: DataOpentelekomcloudGeminiInstancesV3InstancesNodesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList">DataOpentelekomcloudGeminiInstancesV3InstancesNodesList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ips`<sup>Required</sup> <a name="private_ips" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.privateIps"></a>

```python
private_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudGeminiInstancesV3Instances
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Instances">DataOpentelekomcloudGeminiInstancesV3Instances</a>

---



