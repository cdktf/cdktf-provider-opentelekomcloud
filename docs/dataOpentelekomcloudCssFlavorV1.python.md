# `dataOpentelekomcloudCssFlavorV1` Submodule <a name="`dataOpentelekomcloudCssFlavorV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCssFlavorV1 <a name="DataOpentelekomcloudCssFlavorV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1 opentelekomcloud_css_flavor_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_css_flavor_v1

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk_range: DataOpentelekomcloudCssFlavorV1DiskRange = None,
  id: str = None,
  min_cpu: typing.Union[int, float] = None,
  min_ram: typing.Union[int, float] = None,
  name: str = None,
  type: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.diskRange">disk_range</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a></code> | disk_range block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#id DataOpentelekomcloudCssFlavorV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.minCpu">min_cpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_cpu DataOpentelekomcloudCssFlavorV1#min_cpu}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.minRam">min_ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_ram DataOpentelekomcloudCssFlavorV1#min_ram}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#name DataOpentelekomcloudCssFlavorV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#type DataOpentelekomcloudCssFlavorV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#version DataOpentelekomcloudCssFlavorV1#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk_range`<sup>Optional</sup> <a name="disk_range" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.diskRange"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

disk_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#disk_range DataOpentelekomcloudCssFlavorV1#disk_range}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#id DataOpentelekomcloudCssFlavorV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_cpu`<sup>Optional</sup> <a name="min_cpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.minCpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_cpu DataOpentelekomcloudCssFlavorV1#min_cpu}.

---

##### `min_ram`<sup>Optional</sup> <a name="min_ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.minRam"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_ram DataOpentelekomcloudCssFlavorV1#min_ram}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#name DataOpentelekomcloudCssFlavorV1#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#type DataOpentelekomcloudCssFlavorV1#type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#version DataOpentelekomcloudCssFlavorV1#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.putDiskRange">put_disk_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetDiskRange">reset_disk_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinCpu">reset_min_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinRam">reset_min_ram</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_disk_range` <a name="put_disk_range" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.putDiskRange"></a>

```python
def put_disk_range(
  min_from: typing.Union[int, float] = None,
  min_to: typing.Union[int, float] = None
) -> None
```

###### `min_from`<sup>Optional</sup> <a name="min_from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.putDiskRange.parameter.minFrom"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_from DataOpentelekomcloudCssFlavorV1#min_from}.

---

###### `min_to`<sup>Optional</sup> <a name="min_to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.putDiskRange.parameter.minTo"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_to DataOpentelekomcloudCssFlavorV1#min_to}.

---

##### `reset_disk_range` <a name="reset_disk_range" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetDiskRange"></a>

```python
def reset_disk_range() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_min_cpu` <a name="reset_min_cpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinCpu"></a>

```python
def reset_min_cpu() -> None
```

##### `reset_min_ram` <a name="reset_min_ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinRam"></a>

```python
def reset_min_ram() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCssFlavorV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_css_flavor_v1

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_css_flavor_v1

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_css_flavor_v1

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_css_flavor_v1

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudCssFlavorV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudCssFlavorV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudCssFlavorV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCssFlavorV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRange">disk_range</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference">DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRangeInput">disk_range_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpuInput">min_cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRamInput">min_ram_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpu">min_cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRam">min_ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_range`<sup>Required</sup> <a name="disk_range" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRange"></a>

```python
disk_range: DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference">DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference</a>

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `disk_range_input`<sup>Optional</sup> <a name="disk_range_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRangeInput"></a>

```python
disk_range_input: DataOpentelekomcloudCssFlavorV1DiskRange
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `min_cpu_input`<sup>Optional</sup> <a name="min_cpu_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpuInput"></a>

```python
min_cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ram_input`<sup>Optional</sup> <a name="min_ram_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRamInput"></a>

```python
min_ram_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `min_cpu`<sup>Required</sup> <a name="min_cpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpu"></a>

```python
min_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ram`<sup>Required</sup> <a name="min_ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRam"></a>

```python
min_ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCssFlavorV1Config <a name="DataOpentelekomcloudCssFlavorV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_css_flavor_v1

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk_range: DataOpentelekomcloudCssFlavorV1DiskRange = None,
  id: str = None,
  min_cpu: typing.Union[int, float] = None,
  min_ram: typing.Union[int, float] = None,
  name: str = None,
  type: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.diskRange">disk_range</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a></code> | disk_range block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#id DataOpentelekomcloudCssFlavorV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minCpu">min_cpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_cpu DataOpentelekomcloudCssFlavorV1#min_cpu}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minRam">min_ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_ram DataOpentelekomcloudCssFlavorV1#min_ram}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#name DataOpentelekomcloudCssFlavorV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#type DataOpentelekomcloudCssFlavorV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#version DataOpentelekomcloudCssFlavorV1#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk_range`<sup>Optional</sup> <a name="disk_range" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.diskRange"></a>

```python
disk_range: DataOpentelekomcloudCssFlavorV1DiskRange
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

disk_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#disk_range DataOpentelekomcloudCssFlavorV1#disk_range}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#id DataOpentelekomcloudCssFlavorV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_cpu`<sup>Optional</sup> <a name="min_cpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minCpu"></a>

```python
min_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_cpu DataOpentelekomcloudCssFlavorV1#min_cpu}.

---

##### `min_ram`<sup>Optional</sup> <a name="min_ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minRam"></a>

```python
min_ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_ram DataOpentelekomcloudCssFlavorV1#min_ram}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#name DataOpentelekomcloudCssFlavorV1#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#type DataOpentelekomcloudCssFlavorV1#type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#version DataOpentelekomcloudCssFlavorV1#version}.

---

### DataOpentelekomcloudCssFlavorV1DiskRange <a name="DataOpentelekomcloudCssFlavorV1DiskRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_css_flavor_v1

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange(
  min_from: typing.Union[int, float] = None,
  min_to: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minFrom">min_from</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_from DataOpentelekomcloudCssFlavorV1#min_from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minTo">min_to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_to DataOpentelekomcloudCssFlavorV1#min_to}. |

---

##### `min_from`<sup>Optional</sup> <a name="min_from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minFrom"></a>

```python
min_from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_from DataOpentelekomcloudCssFlavorV1#min_from}.

---

##### `min_to`<sup>Optional</sup> <a name="min_to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minTo"></a>

```python
min_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_to DataOpentelekomcloudCssFlavorV1#min_to}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference <a name="DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_css_flavor_v1

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinFrom">reset_min_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinTo">reset_min_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_min_from` <a name="reset_min_from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinFrom"></a>

```python
def reset_min_from() -> None
```

##### `reset_min_to` <a name="reset_min_to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinTo"></a>

```python
def reset_min_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.from">from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.to">to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFromInput">min_from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minToInput">min_to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFrom">min_from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minTo">min_to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_from_input`<sup>Optional</sup> <a name="min_from_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFromInput"></a>

```python
min_from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_to_input`<sup>Optional</sup> <a name="min_to_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minToInput"></a>

```python
min_to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_from`<sup>Required</sup> <a name="min_from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFrom"></a>

```python
min_from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_to`<sup>Required</sup> <a name="min_to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minTo"></a>

```python
min_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCssFlavorV1DiskRange
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

---



