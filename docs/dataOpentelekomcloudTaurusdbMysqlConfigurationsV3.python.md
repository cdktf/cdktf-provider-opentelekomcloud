# `dataOpentelekomcloudTaurusdbMysqlConfigurationsV3` Submodule <a name="`dataOpentelekomcloudTaurusdbMysqlConfigurationsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudTaurusdbMysqlConfigurationsV3 <a name="DataOpentelekomcloudTaurusdbMysqlConfigurationsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_configurations_v3 opentelekomcloud_taurusdb_mysql_configurations_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_configurations_v3

dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_configurations_v3#id DataOpentelekomcloudTaurusdbMysqlConfigurationsV3#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_configurations_v3#id DataOpentelekomcloudTaurusdbMysqlConfigurationsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlConfigurationsV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_configurations_v3

dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_configurations_v3

dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_configurations_v3

dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_configurations_v3

dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlConfigurationsV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudTaurusdbMysqlConfigurationsV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudTaurusdbMysqlConfigurationsV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_configurations_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudTaurusdbMysqlConfigurationsV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList">DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.configurations"></a>

```python
configurations: DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList">DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config <a name="DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_configurations_v3

dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_configurations_v3#id DataOpentelekomcloudTaurusdbMysqlConfigurationsV3#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_configurations_v3#id DataOpentelekomcloudTaurusdbMysqlConfigurationsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Configurations <a name="DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Configurations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Configurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Configurations.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_configurations_v3

dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Configurations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList <a name="DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_configurations_v3

dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference <a name="DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_configurations_v3

dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.datastoreName">datastore_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.datastoreVersionName">datastore_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.userDefined">user_defined</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Configurations">DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Configurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `datastore_name`<sup>Required</sup> <a name="datastore_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.datastoreName"></a>

```python
datastore_name: str
```

- *Type:* str

---

##### `datastore_version_name`<sup>Required</sup> <a name="datastore_version_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.datastoreVersionName"></a>

```python
datastore_version_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `user_defined`<sup>Required</sup> <a name="user_defined" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.userDefined"></a>

```python
user_defined: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3ConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Configurations
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlConfigurationsV3.DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Configurations">DataOpentelekomcloudTaurusdbMysqlConfigurationsV3Configurations</a>

---



