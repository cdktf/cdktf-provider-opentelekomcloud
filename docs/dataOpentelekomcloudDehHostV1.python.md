# `dataOpentelekomcloudDehHostV1` Submodule <a name="`dataOpentelekomcloudDehHostV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDehHostV1 <a name="DataOpentelekomcloudDehHostV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1 opentelekomcloud_deh_host_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_deh_host_v1

dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str = None,
  id: str = None,
  name: str = None,
  region: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#availability_zone DataOpentelekomcloudDehHostV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#id DataOpentelekomcloudDehHostV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#name DataOpentelekomcloudDehHostV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#region DataOpentelekomcloudDehHostV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#status DataOpentelekomcloudDehHostV1#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#availability_zone DataOpentelekomcloudDehHostV1#availability_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#id DataOpentelekomcloudDehHostV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#name DataOpentelekomcloudDehHostV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#region DataOpentelekomcloudDehHostV1#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#status DataOpentelekomcloudDehHostV1#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_deh_host_v1

dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_deh_host_v1

dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_deh_host_v1

dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.autoPlacement">auto_placement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.availableInstanceCapacities">available_instance_capacities</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList">DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.availableMemory">available_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.availableVcpus">available_vcpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.hostType">host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.hostTypeName">host_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.instanceTotal">instance_total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.instanceUuids">instance_uuids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.sockets">sockets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `auto_placement`<sup>Required</sup> <a name="auto_placement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.autoPlacement"></a>

```python
auto_placement: str
```

- *Type:* str

---

##### `available_instance_capacities`<sup>Required</sup> <a name="available_instance_capacities" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.availableInstanceCapacities"></a>

```python
available_instance_capacities: DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList">DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList</a>

---

##### `available_memory`<sup>Required</sup> <a name="available_memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.availableMemory"></a>

```python
available_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_vcpus`<sup>Required</sup> <a name="available_vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.availableVcpus"></a>

```python
available_vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_type`<sup>Required</sup> <a name="host_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

---

##### `host_type_name`<sup>Required</sup> <a name="host_type_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.hostTypeName"></a>

```python
host_type_name: str
```

- *Type:* str

---

##### `instance_total`<sup>Required</sup> <a name="instance_total" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.instanceTotal"></a>

```python
instance_total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_uuids`<sup>Required</sup> <a name="instance_uuids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.instanceUuids"></a>

```python
instance_uuids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sockets`<sup>Required</sup> <a name="sockets" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.sockets"></a>

```python
sockets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.vcpus"></a>

```python
vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDehHostV1AvailableInstanceCapacities <a name="DataOpentelekomcloudDehHostV1AvailableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacities.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_deh_host_v1

dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacities()
```


### DataOpentelekomcloudDehHostV1Config <a name="DataOpentelekomcloudDehHostV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_deh_host_v1

dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str = None,
  id: str = None,
  name: str = None,
  region: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#availability_zone DataOpentelekomcloudDehHostV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#id DataOpentelekomcloudDehHostV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#name DataOpentelekomcloudDehHostV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#region DataOpentelekomcloudDehHostV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#status DataOpentelekomcloudDehHostV1#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#availability_zone DataOpentelekomcloudDehHostV1#availability_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#id DataOpentelekomcloudDehHostV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#name DataOpentelekomcloudDehHostV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#region DataOpentelekomcloudDehHostV1#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/deh_host_v1#status DataOpentelekomcloudDehHostV1#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList <a name="DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_deh_host_v1

dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference <a name="DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_deh_host_v1

dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacities">DataOpentelekomcloudDehHostV1AvailableInstanceCapacities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudDehHostV1AvailableInstanceCapacities
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDehHostV1.DataOpentelekomcloudDehHostV1AvailableInstanceCapacities">DataOpentelekomcloudDehHostV1AvailableInstanceCapacities</a>

---



