# `dataOpentelekomcloudObsBucket` Submodule <a name="`dataOpentelekomcloudObsBucket` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudObsBucket <a name="DataOpentelekomcloudObsBucket" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/obs_bucket opentelekomcloud_obs_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/obs_bucket#bucket DataOpentelekomcloudObsBucket#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/obs_bucket#id DataOpentelekomcloudObsBucket#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/obs_bucket#bucket DataOpentelekomcloudObsBucket#bucket}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/obs_bucket#id DataOpentelekomcloudObsBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudObsBucket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudObsBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudObsBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudObsBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/obs_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudObsBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.bucketDomainName">bucket_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList">DataOpentelekomcloudObsBucketCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.eventNotifications">event_notifications</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList">DataOpentelekomcloudObsBucketEventNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.lifecycleRule">lifecycle_rule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList">DataOpentelekomcloudObsBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList">DataOpentelekomcloudObsBucketLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.serverSideEncryption">server_side_encryption</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList">DataOpentelekomcloudObsBucketServerSideEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.versioning">versioning</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList">DataOpentelekomcloudObsBucketWebsiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `bucket_domain_name`<sup>Required</sup> <a name="bucket_domain_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.bucketDomainName"></a>

```python
bucket_domain_name: str
```

- *Type:* str

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.corsRule"></a>

```python
cors_rule: DataOpentelekomcloudObsBucketCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList">DataOpentelekomcloudObsBucketCorsRuleList</a>

---

##### `event_notifications`<sup>Required</sup> <a name="event_notifications" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.eventNotifications"></a>

```python
event_notifications: DataOpentelekomcloudObsBucketEventNotificationsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList">DataOpentelekomcloudObsBucketEventNotificationsList</a>

---

##### `lifecycle_rule`<sup>Required</sup> <a name="lifecycle_rule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.lifecycleRule"></a>

```python
lifecycle_rule: DataOpentelekomcloudObsBucketLifecycleRuleList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList">DataOpentelekomcloudObsBucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.logging"></a>

```python
logging: DataOpentelekomcloudObsBucketLoggingList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList">DataOpentelekomcloudObsBucketLoggingList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `server_side_encryption`<sup>Required</sup> <a name="server_side_encryption" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.serverSideEncryption"></a>

```python
server_side_encryption: DataOpentelekomcloudObsBucketServerSideEncryptionList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList">DataOpentelekomcloudObsBucketServerSideEncryptionList</a>

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.versioning"></a>

```python
versioning: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.website"></a>

```python
website: DataOpentelekomcloudObsBucketWebsiteList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList">DataOpentelekomcloudObsBucketWebsiteList</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudObsBucketConfig <a name="DataOpentelekomcloudObsBucketConfig" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/obs_bucket#bucket DataOpentelekomcloudObsBucket#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/obs_bucket#id DataOpentelekomcloudObsBucket#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/obs_bucket#bucket DataOpentelekomcloudObsBucket#bucket}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/obs_bucket#id DataOpentelekomcloudObsBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudObsBucketCorsRule <a name="DataOpentelekomcloudObsBucketCorsRule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRule()
```


### DataOpentelekomcloudObsBucketEventNotifications <a name="DataOpentelekomcloudObsBucketEventNotifications" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotifications()
```


### DataOpentelekomcloudObsBucketEventNotificationsFilterRule <a name="DataOpentelekomcloudObsBucketEventNotificationsFilterRule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRule.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRule()
```


### DataOpentelekomcloudObsBucketLifecycleRule <a name="DataOpentelekomcloudObsBucketLifecycleRule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRule()
```


### DataOpentelekomcloudObsBucketLifecycleRuleExpiration <a name="DataOpentelekomcloudObsBucketLifecycleRuleExpiration" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpiration()
```


### DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpiration <a name="DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpiration()
```


### DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransition <a name="DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransition.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransition()
```


### DataOpentelekomcloudObsBucketLifecycleRuleTransition <a name="DataOpentelekomcloudObsBucketLifecycleRuleTransition" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransition.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransition()
```


### DataOpentelekomcloudObsBucketLogging <a name="DataOpentelekomcloudObsBucketLogging" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLogging()
```


### DataOpentelekomcloudObsBucketServerSideEncryption <a name="DataOpentelekomcloudObsBucketServerSideEncryption" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryption()
```


### DataOpentelekomcloudObsBucketWebsite <a name="DataOpentelekomcloudObsBucketWebsite" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsite.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsite()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudObsBucketCorsRuleList <a name="DataOpentelekomcloudObsBucketCorsRuleList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudObsBucketCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudObsBucketCorsRuleOutputReference <a name="DataOpentelekomcloudObsBucketCorsRuleOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRule">DataOpentelekomcloudObsBucketCorsRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers`<sup>Required</sup> <a name="expose_headers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds`<sup>Required</sup> <a name="max_age_seconds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudObsBucketCorsRule
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketCorsRule">DataOpentelekomcloudObsBucketCorsRule</a>

---


### DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList <a name="DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference <a name="DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRule">DataOpentelekomcloudObsBucketEventNotificationsFilterRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudObsBucketEventNotificationsFilterRule
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRule">DataOpentelekomcloudObsBucketEventNotificationsFilterRule</a>

---


### DataOpentelekomcloudObsBucketEventNotificationsList <a name="DataOpentelekomcloudObsBucketEventNotificationsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudObsBucketEventNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudObsBucketEventNotificationsOutputReference <a name="DataOpentelekomcloudObsBucketEventNotificationsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.filterRule">filter_rule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList">DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotifications">DataOpentelekomcloudObsBucketEventNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_rule`<sup>Required</sup> <a name="filter_rule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.filterRule"></a>

```python
filter_rule: DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList">DataOpentelekomcloudObsBucketEventNotificationsFilterRuleList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudObsBucketEventNotifications
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketEventNotifications">DataOpentelekomcloudObsBucketEventNotifications</a>

---


### DataOpentelekomcloudObsBucketLifecycleRuleExpirationList <a name="DataOpentelekomcloudObsBucketLifecycleRuleExpirationList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference <a name="DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpiration">DataOpentelekomcloudObsBucketLifecycleRuleExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudObsBucketLifecycleRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpiration">DataOpentelekomcloudObsBucketLifecycleRuleExpiration</a>

---


### DataOpentelekomcloudObsBucketLifecycleRuleList <a name="DataOpentelekomcloudObsBucketLifecycleRuleList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudObsBucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList <a name="DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference <a name="DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpiration">DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpiration
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpiration">DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpiration</a>

---


### DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList <a name="DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference <a name="DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransition">DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransition
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransition">DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransition</a>

---


### DataOpentelekomcloudObsBucketLifecycleRuleOutputReference <a name="DataOpentelekomcloudObsBucketLifecycleRuleOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList">DataOpentelekomcloudObsBucketLifecycleRuleExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration">noncurrent_version_expiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList">DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransition">noncurrent_version_transition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList">DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList">DataOpentelekomcloudObsBucketLifecycleRuleTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRule">DataOpentelekomcloudObsBucketLifecycleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.expiration"></a>

```python
expiration: DataOpentelekomcloudObsBucketLifecycleRuleExpirationList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleExpirationList">DataOpentelekomcloudObsBucketLifecycleRuleExpirationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `noncurrent_version_expiration`<sup>Required</sup> <a name="noncurrent_version_expiration" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration"></a>

```python
noncurrent_version_expiration: DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList">DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpirationList</a>

---

##### `noncurrent_version_transition`<sup>Required</sup> <a name="noncurrent_version_transition" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransition"></a>

```python
noncurrent_version_transition: DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList">DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransitionList</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.transition"></a>

```python
transition: DataOpentelekomcloudObsBucketLifecycleRuleTransitionList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList">DataOpentelekomcloudObsBucketLifecycleRuleTransitionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudObsBucketLifecycleRule
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRule">DataOpentelekomcloudObsBucketLifecycleRule</a>

---


### DataOpentelekomcloudObsBucketLifecycleRuleTransitionList <a name="DataOpentelekomcloudObsBucketLifecycleRuleTransitionList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference <a name="DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransition">DataOpentelekomcloudObsBucketLifecycleRuleTransition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransitionOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudObsBucketLifecycleRuleTransition
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLifecycleRuleTransition">DataOpentelekomcloudObsBucketLifecycleRuleTransition</a>

---


### DataOpentelekomcloudObsBucketLoggingList <a name="DataOpentelekomcloudObsBucketLoggingList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudObsBucketLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudObsBucketLoggingOutputReference <a name="DataOpentelekomcloudObsBucketLoggingOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.property.targetBucket">target_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.property.targetPrefix">target_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLogging">DataOpentelekomcloudObsBucketLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_bucket`<sup>Required</sup> <a name="target_bucket" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.property.targetBucket"></a>

```python
target_bucket: str
```

- *Type:* str

---

##### `target_prefix`<sup>Required</sup> <a name="target_prefix" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.property.targetPrefix"></a>

```python
target_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLoggingOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudObsBucketLogging
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketLogging">DataOpentelekomcloudObsBucketLogging</a>

---


### DataOpentelekomcloudObsBucketServerSideEncryptionList <a name="DataOpentelekomcloudObsBucketServerSideEncryptionList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference <a name="DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryption">DataOpentelekomcloudObsBucketServerSideEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudObsBucketServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketServerSideEncryption">DataOpentelekomcloudObsBucketServerSideEncryption</a>

---


### DataOpentelekomcloudObsBucketWebsiteList <a name="DataOpentelekomcloudObsBucketWebsiteList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudObsBucketWebsiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudObsBucketWebsiteOutputReference <a name="DataOpentelekomcloudObsBucketWebsiteOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_obs_bucket

dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.errorDocument">error_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.indexDocument">index_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.redirectAllRequestsTo">redirect_all_requests_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.routingRules">routing_rules</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsite">DataOpentelekomcloudObsBucketWebsite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_document`<sup>Required</sup> <a name="error_document" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.errorDocument"></a>

```python
error_document: str
```

- *Type:* str

---

##### `index_document`<sup>Required</sup> <a name="index_document" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

---

##### `redirect_all_requests_to`<sup>Required</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.redirectAllRequestsTo"></a>

```python
redirect_all_requests_to: str
```

- *Type:* str

---

##### `routing_rules`<sup>Required</sup> <a name="routing_rules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.routingRules"></a>

```python
routing_rules: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsiteOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudObsBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucket.DataOpentelekomcloudObsBucketWebsite">DataOpentelekomcloudObsBucketWebsite</a>

---



