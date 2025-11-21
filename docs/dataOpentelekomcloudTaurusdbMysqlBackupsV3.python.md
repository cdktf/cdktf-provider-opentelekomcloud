# `dataOpentelekomcloudTaurusdbMysqlBackupsV3` Submodule <a name="`dataOpentelekomcloudTaurusdbMysqlBackupsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudTaurusdbMysqlBackupsV3 <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3 opentelekomcloud_taurusdb_mysql_backups_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_id: str = None,
  backup_type: str = None,
  begin_time: str = None,
  end_time: str = None,
  id: str = None,
  instance_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#backup_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.backupType">backup_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#backup_type DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.beginTime">begin_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#begin_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#begin_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#end_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#id DataOpentelekomcloudTaurusdbMysqlBackupsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#instance_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#instance_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.backupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#backup_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_id}.

---

##### `backup_type`<sup>Optional</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.backupType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#backup_type DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_type}.

---

##### `begin_time`<sup>Optional</sup> <a name="begin_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.beginTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#begin_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#begin_time}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#end_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#id DataOpentelekomcloudTaurusdbMysqlBackupsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#instance_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#instance_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBackupId">reset_backup_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBackupType">reset_backup_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBeginTime">reset_begin_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetInstanceId">reset_instance_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_backup_id` <a name="reset_backup_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBackupId"></a>

```python
def reset_backup_id() -> None
```

##### `reset_backup_type` <a name="reset_backup_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBackupType"></a>

```python
def reset_backup_type() -> None
```

##### `reset_begin_time` <a name="reset_begin_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBeginTime"></a>

```python
def reset_begin_time() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlBackupsV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlBackupsV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudTaurusdbMysqlBackupsV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudTaurusdbMysqlBackupsV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudTaurusdbMysqlBackupsV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backups">backups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupTypeInput">backup_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.beginTimeInput">begin_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupType">backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.beginTime">begin_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `backups`<sup>Required</sup> <a name="backups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backups"></a>

```python
backups: DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList</a>

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `backup_type_input`<sup>Optional</sup> <a name="backup_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupTypeInput"></a>

```python
backup_type_input: str
```

- *Type:* str

---

##### `begin_time_input`<sup>Optional</sup> <a name="begin_time_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.beginTimeInput"></a>

```python
begin_time_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `backup_type`<sup>Required</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

---

##### `begin_time`<sup>Required</sup> <a name="begin_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.beginTime"></a>

```python
begin_time: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups()
```


### DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore()
```


### DataOpentelekomcloudTaurusdbMysqlBackupsV3Config <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_id: str = None,
  backup_type: str = None,
  begin_time: str = None,
  end_time: str = None,
  id: str = None,
  instance_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#backup_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.backupType">backup_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#backup_type DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.beginTime">begin_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#begin_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#begin_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#end_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#id DataOpentelekomcloudTaurusdbMysqlBackupsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#instance_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#backup_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_id}.

---

##### `backup_type`<sup>Optional</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#backup_type DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_type}.

---

##### `begin_time`<sup>Optional</sup> <a name="begin_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.beginTime"></a>

```python
begin_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#begin_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#begin_time}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#end_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#id DataOpentelekomcloudTaurusdbMysqlBackupsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/taurusdb_mysql_backups_v3#instance_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#instance_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore</a>

---


### DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_taurusdb_mysql_backups_v3

dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.beginTime">begin_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.takeUpTime">take_up_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups">DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `begin_time`<sup>Required</sup> <a name="begin_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.beginTime"></a>

```python
begin_time: str
```

- *Type:* str

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.datastore"></a>

```python
datastore: DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `take_up_time`<sup>Required</sup> <a name="take_up_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.takeUpTime"></a>

```python
take_up_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups">DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups</a>

---



