# `dataOpentelekomcloudDdmEnginesV1` Submodule <a name="`dataOpentelekomcloudDdmEnginesV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDdmEnginesV1 <a name="DataOpentelekomcloudDdmEnginesV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/ddm_engines_v1 opentelekomcloud_ddm_engines_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/ddm_engines_v1#id DataOpentelekomcloudDdmEnginesV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/ddm_engines_v1#id DataOpentelekomcloudDdmEnginesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDdmEnginesV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudDdmEnginesV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudDdmEnginesV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudDdmEnginesV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/ddm_engines_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDdmEnginesV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.engines">engines</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList">DataOpentelekomcloudDdmEnginesV1EnginesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `engines`<sup>Required</sup> <a name="engines" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.engines"></a>

```python
engines: DataOpentelekomcloudDdmEnginesV1EnginesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList">DataOpentelekomcloudDdmEnginesV1EnginesList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDdmEnginesV1Config <a name="DataOpentelekomcloudDdmEnginesV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/ddm_engines_v1#id DataOpentelekomcloudDdmEnginesV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/ddm_engines_v1#id DataOpentelekomcloudDdmEnginesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudDdmEnginesV1Engines <a name="DataOpentelekomcloudDdmEnginesV1Engines" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Engines"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Engines.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Engines()
```


### DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZones <a name="DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZones.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZones()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList <a name="DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference <a name="DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.favored">favored</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZones">DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZones</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `favored`<sup>Required</sup> <a name="favored" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.favored"></a>

```python
favored: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZones
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZones">DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZones</a>

---


### DataOpentelekomcloudDdmEnginesV1EnginesList <a name="DataOpentelekomcloudDdmEnginesV1EnginesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudDdmEnginesV1EnginesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudDdmEnginesV1EnginesOutputReference <a name="DataOpentelekomcloudDdmEnginesV1EnginesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ddm_engines_v1

dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.availabilityZones">availability_zones</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList">DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Engines">DataOpentelekomcloudDdmEnginesV1Engines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.availabilityZones"></a>

```python
availability_zones: DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList">DataOpentelekomcloudDdmEnginesV1EnginesAvailabilityZonesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1EnginesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudDdmEnginesV1Engines
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdmEnginesV1.DataOpentelekomcloudDdmEnginesV1Engines">DataOpentelekomcloudDdmEnginesV1Engines</a>

---



