# `dataOpentelekomcloudErRouteTablesV3` Submodule <a name="`dataOpentelekomcloudErRouteTablesV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudErRouteTablesV3 <a name="DataOpentelekomcloudErRouteTablesV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3 opentelekomcloud_er_route_tables_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_id: str,
  id: str = None,
  name: str = None,
  route_table_id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#instance_id DataOpentelekomcloudErRouteTablesV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#id DataOpentelekomcloudErRouteTablesV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#name DataOpentelekomcloudErRouteTablesV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#route_table_id DataOpentelekomcloudErRouteTablesV3#route_table_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#tags DataOpentelekomcloudErRouteTablesV3#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#instance_id DataOpentelekomcloudErRouteTablesV3#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#id DataOpentelekomcloudErRouteTablesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#name DataOpentelekomcloudErRouteTablesV3#name}.

---

##### `route_table_id`<sup>Optional</sup> <a name="route_table_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.routeTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#route_table_id DataOpentelekomcloudErRouteTablesV3#route_table_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#tags DataOpentelekomcloudErRouteTablesV3#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetRouteTableId">reset_route_table_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_route_table_id` <a name="reset_route_table_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetRouteTableId"></a>

```python
def reset_route_table_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudErRouteTablesV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudErRouteTablesV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudErRouteTablesV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudErRouteTablesV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudErRouteTablesV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTables">route_tables</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList">DataOpentelekomcloudErRouteTablesV3RouteTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableIdInput">route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableId">route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `route_tables`<sup>Required</sup> <a name="route_tables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTables"></a>

```python
route_tables: DataOpentelekomcloudErRouteTablesV3RouteTablesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList">DataOpentelekomcloudErRouteTablesV3RouteTablesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `route_table_id_input`<sup>Optional</sup> <a name="route_table_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableIdInput"></a>

```python
route_table_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudErRouteTablesV3Config <a name="DataOpentelekomcloudErRouteTablesV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_id: str,
  id: str = None,
  name: str = None,
  route_table_id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#instance_id DataOpentelekomcloudErRouteTablesV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#id DataOpentelekomcloudErRouteTablesV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#name DataOpentelekomcloudErRouteTablesV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#route_table_id DataOpentelekomcloudErRouteTablesV3#route_table_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#tags DataOpentelekomcloudErRouteTablesV3#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#instance_id DataOpentelekomcloudErRouteTablesV3#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#id DataOpentelekomcloudErRouteTablesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#name DataOpentelekomcloudErRouteTablesV3#name}.

---

##### `route_table_id`<sup>Optional</sup> <a name="route_table_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#route_table_id DataOpentelekomcloudErRouteTablesV3#route_table_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#tags DataOpentelekomcloudErRouteTablesV3#tags}.

---

### DataOpentelekomcloudErRouteTablesV3RouteTables <a name="DataOpentelekomcloudErRouteTablesV3RouteTables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables()
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations()
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations()
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes()
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.associations">associations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.propagations">propagations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables">DataOpentelekomcloudErRouteTablesV3RouteTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.associations"></a>

```python
associations: DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `propagations`<sup>Required</sup> <a name="propagations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.propagations"></a>

```python
propagations: DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList</a>

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.routes"></a>

```python
routes: DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudErRouteTablesV3RouteTables
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables">DataOpentelekomcloudErRouteTablesV3RouteTables</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_er_route_tables_v3

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.attachments">attachments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.isBlackhole">is_blackhole</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.attachments"></a>

```python
attachments: DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_blackhole`<sup>Required</sup> <a name="is_blackhole" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.isBlackhole"></a>

```python
is_blackhole: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes</a>

---



