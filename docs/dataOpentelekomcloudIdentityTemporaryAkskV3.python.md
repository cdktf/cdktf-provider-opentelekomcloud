# `dataOpentelekomcloudIdentityTemporaryAkskV3` Submodule <a name="`dataOpentelekomcloudIdentityTemporaryAkskV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudIdentityTemporaryAkskV3 <a name="DataOpentelekomcloudIdentityTemporaryAkskV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3 opentelekomcloud_identity_temporary_aksk_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_identity_temporary_aksk_v3

dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agency_name: str = None,
  duration_seconds: typing.Union[int, float] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.agencyName">agency_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#agency_name DataOpentelekomcloudIdentityTemporaryAkskV3#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#duration_seconds DataOpentelekomcloudIdentityTemporaryAkskV3#duration_seconds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#id DataOpentelekomcloudIdentityTemporaryAkskV3#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `agency_name`<sup>Optional</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.agencyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#agency_name DataOpentelekomcloudIdentityTemporaryAkskV3#agency_name}.

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.durationSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#duration_seconds DataOpentelekomcloudIdentityTemporaryAkskV3#duration_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#id DataOpentelekomcloudIdentityTemporaryAkskV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.resetAgencyName">reset_agency_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.resetDurationSeconds">reset_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_agency_name` <a name="reset_agency_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.resetAgencyName"></a>

```python
def reset_agency_name() -> None
```

##### `reset_duration_seconds` <a name="reset_duration_seconds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.resetDurationSeconds"></a>

```python
def reset_duration_seconds() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudIdentityTemporaryAkskV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_identity_temporary_aksk_v3

dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_identity_temporary_aksk_v3

dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_identity_temporary_aksk_v3

dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_identity_temporary_aksk_v3

dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudIdentityTemporaryAkskV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudIdentityTemporaryAkskV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudIdentityTemporaryAkskV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudIdentityTemporaryAkskV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.securityToken">security_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.agencyNameInput">agency_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.durationSecondsInput">duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.agencyName">agency_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `security_token`<sup>Required</sup> <a name="security_token" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.securityToken"></a>

```python
security_token: str
```

- *Type:* str

---

##### `agency_name_input`<sup>Optional</sup> <a name="agency_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.agencyNameInput"></a>

```python
agency_name_input: str
```

- *Type:* str

---

##### `duration_seconds_input`<sup>Optional</sup> <a name="duration_seconds_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.durationSecondsInput"></a>

```python
duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `agency_name`<sup>Required</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudIdentityTemporaryAkskV3Config <a name="DataOpentelekomcloudIdentityTemporaryAkskV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_identity_temporary_aksk_v3

dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agency_name: str = None,
  duration_seconds: typing.Union[int, float] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.agencyName">agency_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#agency_name DataOpentelekomcloudIdentityTemporaryAkskV3#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#duration_seconds DataOpentelekomcloudIdentityTemporaryAkskV3#duration_seconds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#id DataOpentelekomcloudIdentityTemporaryAkskV3#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `agency_name`<sup>Optional</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#agency_name DataOpentelekomcloudIdentityTemporaryAkskV3#agency_name}.

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#duration_seconds DataOpentelekomcloudIdentityTemporaryAkskV3#duration_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityTemporaryAkskV3.DataOpentelekomcloudIdentityTemporaryAkskV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/identity_temporary_aksk_v3#id DataOpentelekomcloudIdentityTemporaryAkskV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



