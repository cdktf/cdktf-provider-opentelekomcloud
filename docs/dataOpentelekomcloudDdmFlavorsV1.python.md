# `dataOpentelekomcloudDdmFlavorsV1` Submodule <a name="`dataOpentelekomcloudDdmFlavorsV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDdmFlavorsV1 <a name="DataOpentelekomcloudDdmFlavorsV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/ddm_flavors_v1 opentelekomcloud_ddm_flavors_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/ddm_flavors_v1#engine_id DataOpentelekomcloudDdmFlavorsV1#engine_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/ddm_flavors_v1#id DataOpentelekomcloudDdmFlavorsV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.engineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/ddm_flavors_v1#engine_id DataOpentelekomcloudDdmFlavorsV1#engine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/ddm_flavors_v1#id DataOpentelekomcloudDdmFlavorsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDdmFlavorsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudDdmFlavorsV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudDdmFlavorsV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudDdmFlavorsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/ddm_flavors_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDdmFlavorsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.flavorGroups">flavor_groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList">DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `flavor_groups`<sup>Required</sup> <a name="flavor_groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.flavorGroups"></a>

```python
flavor_groups: DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList">DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDdmFlavorsV1Config <a name="DataOpentelekomcloudDdmFlavorsV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.engineId">engine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/ddm_flavors_v1#engine_id DataOpentelekomcloudDdmFlavorsV1#engine_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/ddm_flavors_v1#id DataOpentelekomcloudDdmFlavorsV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/ddm_flavors_v1#engine_id DataOpentelekomcloudDdmFlavorsV1#engine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/ddm_flavors_v1#id DataOpentelekomcloudDdmFlavorsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudDdmFlavorsV1FlavorGroups <a name="DataOpentelekomcloudDdmFlavorsV1FlavorGroups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroups()
```


### DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavors <a name="DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavors.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavors()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList <a name="DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference <a name="DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.azStatus">az_status</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.iaasCode">iaas_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.maxConnections">max_connections</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.serverType">server_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.typeCode">type_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavors">DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `az_status`<sup>Required</sup> <a name="az_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.azStatus"></a>

```python
az_status: StringMap
```

- *Type:* cdktf.StringMap

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `iaas_code`<sup>Required</sup> <a name="iaas_code" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.iaasCode"></a>

```python
iaas_code: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.maxConnections"></a>

```python
max_connections: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `server_type`<sup>Required</sup> <a name="server_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.serverType"></a>

```python
server_type: str
```

- *Type:* str

---

##### `type_code`<sup>Required</sup> <a name="type_code" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.typeCode"></a>

```python
type_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavors
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavors">DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavors</a>

---


### DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList <a name="DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference <a name="DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_flavors_v1

dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.property.flavors">flavors</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList">DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroups">DataOpentelekomcloudDdmFlavorsV1FlavorGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flavors`<sup>Required</sup> <a name="flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.property.flavors"></a>

```python
flavors: DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList">DataOpentelekomcloudDdmFlavorsV1FlavorGroupsFlavorsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudDdmFlavorsV1FlavorGroups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmFlavorsV1.DataOpentelekomcloudDdmFlavorsV1FlavorGroups">DataOpentelekomcloudDdmFlavorsV1FlavorGroups</a>

---



