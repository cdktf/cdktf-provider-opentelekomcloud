# `dataOpentelekomcloudKmsKeyMaterialParametersV1` Submodule <a name="`dataOpentelekomcloudKmsKeyMaterialParametersV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudKmsKeyMaterialParametersV1 <a name="DataOpentelekomcloudKmsKeyMaterialParametersV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1 opentelekomcloud_kms_key_material_parameters_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_kms_key_material_parameters_v1

dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_id: str,
  wrapping_algorithm: str,
  id: str = None,
  sequence: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#key_id DataOpentelekomcloudKmsKeyMaterialParametersV1#key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.wrappingAlgorithm">wrapping_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#wrapping_algorithm DataOpentelekomcloudKmsKeyMaterialParametersV1#wrapping_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#id DataOpentelekomcloudKmsKeyMaterialParametersV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.sequence">sequence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#sequence DataOpentelekomcloudKmsKeyMaterialParametersV1#sequence}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#key_id DataOpentelekomcloudKmsKeyMaterialParametersV1#key_id}.

---

##### `wrapping_algorithm`<sup>Required</sup> <a name="wrapping_algorithm" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.wrappingAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#wrapping_algorithm DataOpentelekomcloudKmsKeyMaterialParametersV1#wrapping_algorithm}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#id DataOpentelekomcloudKmsKeyMaterialParametersV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sequence`<sup>Optional</sup> <a name="sequence" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.Initializer.parameter.sequence"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#sequence DataOpentelekomcloudKmsKeyMaterialParametersV1#sequence}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.resetSequence">reset_sequence</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sequence` <a name="reset_sequence" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.resetSequence"></a>

```python
def reset_sequence() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudKmsKeyMaterialParametersV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_kms_key_material_parameters_v1

dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_kms_key_material_parameters_v1

dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_kms_key_material_parameters_v1

dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_kms_key_material_parameters_v1

dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudKmsKeyMaterialParametersV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudKmsKeyMaterialParametersV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudKmsKeyMaterialParametersV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudKmsKeyMaterialParametersV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.expirationTime">expiration_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.importToken">import_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.sequenceInput">sequence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.wrappingAlgorithmInput">wrapping_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.sequence">sequence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.wrappingAlgorithm">wrapping_algorithm</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.expirationTime"></a>

```python
expiration_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `import_token`<sup>Required</sup> <a name="import_token" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.importToken"></a>

```python
import_token: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `sequence_input`<sup>Optional</sup> <a name="sequence_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.sequenceInput"></a>

```python
sequence_input: str
```

- *Type:* str

---

##### `wrapping_algorithm_input`<sup>Optional</sup> <a name="wrapping_algorithm_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.wrappingAlgorithmInput"></a>

```python
wrapping_algorithm_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.sequence"></a>

```python
sequence: str
```

- *Type:* str

---

##### `wrapping_algorithm`<sup>Required</sup> <a name="wrapping_algorithm" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.wrappingAlgorithm"></a>

```python
wrapping_algorithm: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudKmsKeyMaterialParametersV1Config <a name="DataOpentelekomcloudKmsKeyMaterialParametersV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_kms_key_material_parameters_v1

dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_id: str,
  wrapping_algorithm: str,
  id: str = None,
  sequence: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#key_id DataOpentelekomcloudKmsKeyMaterialParametersV1#key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.wrappingAlgorithm">wrapping_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#wrapping_algorithm DataOpentelekomcloudKmsKeyMaterialParametersV1#wrapping_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#id DataOpentelekomcloudKmsKeyMaterialParametersV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.sequence">sequence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#sequence DataOpentelekomcloudKmsKeyMaterialParametersV1#sequence}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#key_id DataOpentelekomcloudKmsKeyMaterialParametersV1#key_id}.

---

##### `wrapping_algorithm`<sup>Required</sup> <a name="wrapping_algorithm" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.wrappingAlgorithm"></a>

```python
wrapping_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#wrapping_algorithm DataOpentelekomcloudKmsKeyMaterialParametersV1#wrapping_algorithm}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#id DataOpentelekomcloudKmsKeyMaterialParametersV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sequence`<sup>Optional</sup> <a name="sequence" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyMaterialParametersV1.DataOpentelekomcloudKmsKeyMaterialParametersV1Config.property.sequence"></a>

```python
sequence: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/kms_key_material_parameters_v1#sequence DataOpentelekomcloudKmsKeyMaterialParametersV1#sequence}.

---



