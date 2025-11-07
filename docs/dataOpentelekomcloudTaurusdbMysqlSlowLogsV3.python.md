# `dataOpentelekomcloudTaurusdbMysqlSlowLogsV3` Submodule <a name="`dataOpentelekomcloudTaurusdbMysqlSlowLogsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudTaurusdbMysqlSlowLogsV3 <a name="DataOpentelekomcloudTaurusdbMysqlSlowLogsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3 opentelekomcloud_taurusdb_mysql_slow_logs_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_slow_logs_v3

dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  end_date: str,
  instance_id: str,
  node_id: str,
  start_date: str,
  id: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#end_date DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#end_date}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#instance_id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.nodeId">node_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#node_id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#node_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#start_date DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#start_date}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#type DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.endDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#end_date DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#end_date}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#instance_id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#instance_id}.

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.nodeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#node_id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#node_id}.

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.startDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#start_date DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#start_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#type DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlSlowLogsV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_slow_logs_v3

dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_slow_logs_v3

dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_slow_logs_v3

dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_slow_logs_v3

dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlSlowLogsV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudTaurusdbMysqlSlowLogsV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudTaurusdbMysqlSlowLogsV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudTaurusdbMysqlSlowLogsV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.slowLogList">slow_log_list</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList">DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.nodeIdInput">node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `slow_log_list`<sup>Required</sup> <a name="slow_log_list" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.slowLogList"></a>

```python
slow_log_list: DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList">DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList</a>

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `node_id_input`<sup>Optional</sup> <a name="node_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.nodeIdInput"></a>

```python
node_id_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config <a name="DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_slow_logs_v3

dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  end_date: str,
  instance_id: str,
  node_id: str,
  start_date: str,
  id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#end_date DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#end_date}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#instance_id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.nodeId">node_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#node_id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#node_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#start_date DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#start_date}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#type DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#end_date DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#end_date}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#instance_id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#instance_id}.

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#node_id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#node_id}.

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#start_date DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#start_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#id DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/taurusdb_mysql_slow_logs_v3#type DataOpentelekomcloudTaurusdbMysqlSlowLogsV3#type}.

---

### DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStruct <a name="DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_slow_logs_v3

dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStruct()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList <a name="DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_slow_logs_v3

dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference <a name="DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_slow_logs_v3

dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.clientIp">client_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.count">count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.lockTime">lock_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.querySample">query_sample</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.rowsExamined">rows_examined</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.rowsSent">rows_sent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.users">users</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStruct">DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_ip`<sup>Required</sup> <a name="client_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.clientIp"></a>

```python
client_ip: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.count"></a>

```python
count: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `lock_time`<sup>Required</sup> <a name="lock_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.lockTime"></a>

```python
lock_time: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `query_sample`<sup>Required</sup> <a name="query_sample" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.querySample"></a>

```python
query_sample: str
```

- *Type:* str

---

##### `rows_examined`<sup>Required</sup> <a name="rows_examined" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.rowsExamined"></a>

```python
rows_examined: str
```

- *Type:* str

---

##### `rows_sent`<sup>Required</sup> <a name="rows_sent" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.rowsSent"></a>

```python
rows_sent: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.users"></a>

```python
users: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStruct
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlSlowLogsV3.DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStruct">DataOpentelekomcloudTaurusdbMysqlSlowLogsV3SlowLogListStruct</a>

---



