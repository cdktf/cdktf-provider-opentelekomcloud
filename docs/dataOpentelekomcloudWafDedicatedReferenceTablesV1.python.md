# `dataOpentelekomcloudWafDedicatedReferenceTablesV1` Submodule <a name="`dataOpentelekomcloudWafDedicatedReferenceTablesV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudWafDedicatedReferenceTablesV1 <a name="DataOpentelekomcloudWafDedicatedReferenceTablesV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1 opentelekomcloud_waf_dedicated_reference_tables_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_waf_dedicated_reference_tables_v1

dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#id DataOpentelekomcloudWafDedicatedReferenceTablesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#name DataOpentelekomcloudWafDedicatedReferenceTablesV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#region DataOpentelekomcloudWafDedicatedReferenceTablesV1#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#id DataOpentelekomcloudWafDedicatedReferenceTablesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#name DataOpentelekomcloudWafDedicatedReferenceTablesV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#region DataOpentelekomcloudWafDedicatedReferenceTablesV1#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudWafDedicatedReferenceTablesV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_waf_dedicated_reference_tables_v1

dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_waf_dedicated_reference_tables_v1

dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_waf_dedicated_reference_tables_v1

dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_waf_dedicated_reference_tables_v1

dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudWafDedicatedReferenceTablesV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudWafDedicatedReferenceTablesV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudWafDedicatedReferenceTablesV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudWafDedicatedReferenceTablesV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.tables">tables</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList">DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.tables"></a>

```python
tables: DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList">DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudWafDedicatedReferenceTablesV1Config <a name="DataOpentelekomcloudWafDedicatedReferenceTablesV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_waf_dedicated_reference_tables_v1

dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#id DataOpentelekomcloudWafDedicatedReferenceTablesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#name DataOpentelekomcloudWafDedicatedReferenceTablesV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#region DataOpentelekomcloudWafDedicatedReferenceTablesV1#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#id DataOpentelekomcloudWafDedicatedReferenceTablesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#name DataOpentelekomcloudWafDedicatedReferenceTablesV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/waf_dedicated_reference_tables_v1#region DataOpentelekomcloudWafDedicatedReferenceTablesV1#region}.

---

### DataOpentelekomcloudWafDedicatedReferenceTablesV1Tables <a name="DataOpentelekomcloudWafDedicatedReferenceTablesV1Tables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Tables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Tables.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_waf_dedicated_reference_tables_v1

dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Tables()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList <a name="DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_waf_dedicated_reference_tables_v1

dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference <a name="DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_waf_dedicated_reference_tables_v1

dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.conditions">conditions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Tables">DataOpentelekomcloudWafDedicatedReferenceTablesV1Tables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.conditions"></a>

```python
conditions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1TablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudWafDedicatedReferenceTablesV1Tables
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudWafDedicatedReferenceTablesV1.DataOpentelekomcloudWafDedicatedReferenceTablesV1Tables">DataOpentelekomcloudWafDedicatedReferenceTablesV1Tables</a>

---



