# `dataOpentelekomcloudTaurusdbMysqlFlavorsV3` Submodule <a name="`dataOpentelekomcloudTaurusdbMysqlFlavorsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudTaurusdbMysqlFlavorsV3 <a name="DataOpentelekomcloudTaurusdbMysqlFlavorsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3 opentelekomcloud_taurusdb_mysql_flavors_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_flavors_v3

dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone_mode: str = None,
  engine: str = None,
  id: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.availabilityZoneMode">availability_zone_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#availability_zone_mode DataOpentelekomcloudTaurusdbMysqlFlavorsV3#availability_zone_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#engine DataOpentelekomcloudTaurusdbMysqlFlavorsV3#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#id DataOpentelekomcloudTaurusdbMysqlFlavorsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#version DataOpentelekomcloudTaurusdbMysqlFlavorsV3#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `availability_zone_mode`<sup>Optional</sup> <a name="availability_zone_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.availabilityZoneMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#availability_zone_mode DataOpentelekomcloudTaurusdbMysqlFlavorsV3#availability_zone_mode}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#engine DataOpentelekomcloudTaurusdbMysqlFlavorsV3#engine}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#id DataOpentelekomcloudTaurusdbMysqlFlavorsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#version DataOpentelekomcloudTaurusdbMysqlFlavorsV3#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.resetAvailabilityZoneMode">reset_availability_zone_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_zone_mode` <a name="reset_availability_zone_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.resetAvailabilityZoneMode"></a>

```python
def reset_availability_zone_mode() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlFlavorsV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_flavors_v3

dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_flavors_v3

dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_flavors_v3

dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_flavors_v3

dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlFlavorsV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudTaurusdbMysqlFlavorsV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudTaurusdbMysqlFlavorsV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudTaurusdbMysqlFlavorsV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.flavors">flavors</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList">DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.availabilityZoneModeInput">availability_zone_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.availabilityZoneMode">availability_zone_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `flavors`<sup>Required</sup> <a name="flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.flavors"></a>

```python
flavors: DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList">DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `availability_zone_mode_input`<sup>Optional</sup> <a name="availability_zone_mode_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.availabilityZoneModeInput"></a>

```python
availability_zone_mode_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `availability_zone_mode`<sup>Required</sup> <a name="availability_zone_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.availabilityZoneMode"></a>

```python
availability_zone_mode: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config <a name="DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_flavors_v3

dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone_mode: str = None,
  engine: str = None,
  id: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.availabilityZoneMode">availability_zone_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#availability_zone_mode DataOpentelekomcloudTaurusdbMysqlFlavorsV3#availability_zone_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#engine DataOpentelekomcloudTaurusdbMysqlFlavorsV3#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#id DataOpentelekomcloudTaurusdbMysqlFlavorsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#version DataOpentelekomcloudTaurusdbMysqlFlavorsV3#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `availability_zone_mode`<sup>Optional</sup> <a name="availability_zone_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.availabilityZoneMode"></a>

```python
availability_zone_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#availability_zone_mode DataOpentelekomcloudTaurusdbMysqlFlavorsV3#availability_zone_mode}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#engine DataOpentelekomcloudTaurusdbMysqlFlavorsV3#engine}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#id DataOpentelekomcloudTaurusdbMysqlFlavorsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Config.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_flavors_v3#version DataOpentelekomcloudTaurusdbMysqlFlavorsV3#version}.

---

### DataOpentelekomcloudTaurusdbMysqlFlavorsV3Flavors <a name="DataOpentelekomcloudTaurusdbMysqlFlavorsV3Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Flavors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Flavors.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_flavors_v3

dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Flavors()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList <a name="DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_flavors_v3

dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference <a name="DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_flavors_v3

dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.azStatus">az_status</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.vcpus">vcpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Flavors">DataOpentelekomcloudTaurusdbMysqlFlavorsV3Flavors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `az_status`<sup>Required</sup> <a name="az_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.azStatus"></a>

```python
az_status: StringMap
```

- *Type:* cdktf.StringMap

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.vcpus"></a>

```python
vcpus: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3FlavorsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudTaurusdbMysqlFlavorsV3Flavors
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlFlavorsV3.DataOpentelekomcloudTaurusdbMysqlFlavorsV3Flavors">DataOpentelekomcloudTaurusdbMysqlFlavorsV3Flavors</a>

---



