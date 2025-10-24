# `dataOpentelekomcloudTaurusdbMysqlProxiesV3` Submodule <a name="`dataOpentelekomcloudTaurusdbMysqlProxiesV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudTaurusdbMysqlProxiesV3 <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/taurusdb_mysql_proxies_v3 opentelekomcloud_taurusdb_mysql_proxies_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/taurusdb_mysql_proxies_v3#instance_id DataOpentelekomcloudTaurusdbMysqlProxiesV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/taurusdb_mysql_proxies_v3#id DataOpentelekomcloudTaurusdbMysqlProxiesV3#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/taurusdb_mysql_proxies_v3#instance_id DataOpentelekomcloudTaurusdbMysqlProxiesV3#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/taurusdb_mysql_proxies_v3#id DataOpentelekomcloudTaurusdbMysqlProxiesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlProxiesV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlProxiesV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudTaurusdbMysqlProxiesV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudTaurusdbMysqlProxiesV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/taurusdb_mysql_proxies_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudTaurusdbMysqlProxiesV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.proxyList">proxy_list</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `proxy_list`<sup>Required</sup> <a name="proxy_list" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.proxyList"></a>

```python
proxy_list: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudTaurusdbMysqlProxiesV3Config <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/taurusdb_mysql_proxies_v3#instance_id DataOpentelekomcloudTaurusdbMysqlProxiesV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/taurusdb_mysql_proxies_v3#id DataOpentelekomcloudTaurusdbMysqlProxiesV3#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/taurusdb_mysql_proxies_v3#instance_id DataOpentelekomcloudTaurusdbMysqlProxiesV3#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/taurusdb_mysql_proxies_v3#id DataOpentelekomcloudTaurusdbMysqlProxiesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight()
```


### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes()
```


### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight()
```


### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight</a>

---


### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.azCode">az_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.frozenFlag">frozen_flag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `az_code`<sup>Required</sup> <a name="az_code" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.azCode"></a>

```python
az_code: str
```

- *Type:* str

---

##### `frozen_flag`<sup>Required</sup> <a name="frozen_flag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.frozenFlag"></a>

```python
frozen_flag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes</a>

---


### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight</a>

---


### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference <a name="DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_proxies_v3

dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.delayThresholdInSeconds">delay_threshold_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.elbVip">elb_vip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.masterNodeWeight">master_node_weight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.nodeNum">node_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.ram">ram</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.readonlyNodesWeight">readonly_nodes_weight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.transactionSplit">transaction_split</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.vcpus">vcpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `delay_threshold_in_seconds`<sup>Required</sup> <a name="delay_threshold_in_seconds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.delayThresholdInSeconds"></a>

```python
delay_threshold_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `elb_vip`<sup>Required</sup> <a name="elb_vip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.elbVip"></a>

```python
elb_vip: str
```

- *Type:* str

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `master_node_weight`<sup>Required</sup> <a name="master_node_weight" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.masterNodeWeight"></a>

```python
master_node_weight: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_num`<sup>Required</sup> <a name="node_num" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.nodeNum"></a>

```python
node_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.nodes"></a>

```python
nodes: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.ram"></a>

```python
ram: str
```

- *Type:* str

---

##### `readonly_nodes_weight`<sup>Required</sup> <a name="readonly_nodes_weight" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.readonlyNodesWeight"></a>

```python
readonly_nodes_weight: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `transaction_split`<sup>Required</sup> <a name="transaction_split" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.transactionSplit"></a>

```python
transaction_split: str
```

- *Type:* str

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.vcpus"></a>

```python
vcpus: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlProxiesV3.DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct">DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct</a>

---



