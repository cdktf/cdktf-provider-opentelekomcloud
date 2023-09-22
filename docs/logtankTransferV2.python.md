# `opentelekomcloud_logtank_transfer_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_logtank_transfer_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2).

# `logtankTransferV2` Submodule <a name="`logtankTransferV2` Submodule" id="@cdktf/provider-opentelekomcloud.logtankTransferV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogtankTransferV2 <a name="LogtankTransferV2" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2 opentelekomcloud_logtank_transfer_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import logtank_transfer_v2

logtankTransferV2.LogtankTransferV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_group_id: str,
  log_stream_ids: typing.List[str],
  obs_bucket_name: str,
  period: typing.Union[int, float],
  period_unit: str,
  storage_format: str,
  dir_prefix_name: str = None,
  id: str = None,
  prefix_name: str = None,
  switch_on: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.logStreamIds">log_stream_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.obsBucketName">obs_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.periodUnit">period_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.storageFormat">storage_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.dirPrefixName">dir_prefix_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.prefixName">prefix_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.switchOn">switch_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.logGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}.

---

##### `log_stream_ids`<sup>Required</sup> <a name="log_stream_ids" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.logStreamIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}.

---

##### `obs_bucket_name`<sup>Required</sup> <a name="obs_bucket_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.obsBucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.period"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}.

---

##### `period_unit`<sup>Required</sup> <a name="period_unit" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.periodUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}.

---

##### `storage_format`<sup>Required</sup> <a name="storage_format" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.storageFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}.

---

##### `dir_prefix_name`<sup>Optional</sup> <a name="dir_prefix_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.dirPrefixName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix_name`<sup>Optional</sup> <a name="prefix_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.prefixName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}.

---

##### `switch_on`<sup>Optional</sup> <a name="switch_on" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.switchOn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetDirPrefixName">reset_dir_prefix_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetPrefixName">reset_prefix_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetSwitchOn">reset_switch_on</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_dir_prefix_name` <a name="reset_dir_prefix_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetDirPrefixName"></a>

```python
def reset_dir_prefix_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_prefix_name` <a name="reset_prefix_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetPrefixName"></a>

```python
def reset_prefix_name() -> None
```

##### `reset_switch_on` <a name="reset_switch_on" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetSwitchOn"></a>

```python
def reset_switch_on() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import logtank_transfer_v2

logtankTransferV2.LogtankTransferV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import logtank_transfer_v2

logtankTransferV2.LogtankTransferV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import logtank_transfer_v2

logtankTransferV2.LogtankTransferV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.createTime">create_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferMode">log_transfer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferType">log_transfer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionEnable">obs_encryption_enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionId">obs_encryption_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixNameInput">dir_prefix_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupIdInput">log_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIdsInput">log_stream_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketNameInput">obs_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnitInput">period_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixNameInput">prefix_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormatInput">storage_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOnInput">switch_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixName">dir_prefix_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIds">log_stream_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketName">obs_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnit">period_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixName">prefix_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormat">storage_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOn">switch_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.createTime"></a>

```python
create_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `log_transfer_mode`<sup>Required</sup> <a name="log_transfer_mode" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferMode"></a>

```python
log_transfer_mode: str
```

- *Type:* str

---

##### `log_transfer_type`<sup>Required</sup> <a name="log_transfer_type" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferType"></a>

```python
log_transfer_type: str
```

- *Type:* str

---

##### `obs_encryption_enable`<sup>Required</sup> <a name="obs_encryption_enable" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionEnable"></a>

```python
obs_encryption_enable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `obs_encryption_id`<sup>Required</sup> <a name="obs_encryption_id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionId"></a>

```python
obs_encryption_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `dir_prefix_name_input`<sup>Optional</sup> <a name="dir_prefix_name_input" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixNameInput"></a>

```python
dir_prefix_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_group_id_input`<sup>Optional</sup> <a name="log_group_id_input" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupIdInput"></a>

```python
log_group_id_input: str
```

- *Type:* str

---

##### `log_stream_ids_input`<sup>Optional</sup> <a name="log_stream_ids_input" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIdsInput"></a>

```python
log_stream_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `obs_bucket_name_input`<sup>Optional</sup> <a name="obs_bucket_name_input" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketNameInput"></a>

```python
obs_bucket_name_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_unit_input`<sup>Optional</sup> <a name="period_unit_input" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnitInput"></a>

```python
period_unit_input: str
```

- *Type:* str

---

##### `prefix_name_input`<sup>Optional</sup> <a name="prefix_name_input" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixNameInput"></a>

```python
prefix_name_input: str
```

- *Type:* str

---

##### `storage_format_input`<sup>Optional</sup> <a name="storage_format_input" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormatInput"></a>

```python
storage_format_input: str
```

- *Type:* str

---

##### `switch_on_input`<sup>Optional</sup> <a name="switch_on_input" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOnInput"></a>

```python
switch_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dir_prefix_name`<sup>Required</sup> <a name="dir_prefix_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixName"></a>

```python
dir_prefix_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_stream_ids`<sup>Required</sup> <a name="log_stream_ids" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIds"></a>

```python
log_stream_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `obs_bucket_name`<sup>Required</sup> <a name="obs_bucket_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketName"></a>

```python
obs_bucket_name: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_unit`<sup>Required</sup> <a name="period_unit" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnit"></a>

```python
period_unit: str
```

- *Type:* str

---

##### `prefix_name`<sup>Required</sup> <a name="prefix_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixName"></a>

```python
prefix_name: str
```

- *Type:* str

---

##### `storage_format`<sup>Required</sup> <a name="storage_format" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormat"></a>

```python
storage_format: str
```

- *Type:* str

---

##### `switch_on`<sup>Required</sup> <a name="switch_on" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOn"></a>

```python
switch_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogtankTransferV2Config <a name="LogtankTransferV2Config" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import logtank_transfer_v2

logtankTransferV2.LogtankTransferV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_group_id: str,
  log_stream_ids: typing.List[str],
  obs_bucket_name: str,
  period: typing.Union[int, float],
  period_unit: str,
  storage_format: str,
  dir_prefix_name: str = None,
  id: str = None,
  prefix_name: str = None,
  switch_on: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logStreamIds">log_stream_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.obsBucketName">obs_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.periodUnit">period_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.storageFormat">storage_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dirPrefixName">dir_prefix_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.prefixName">prefix_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.switchOn">switch_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}.

---

##### `log_stream_ids`<sup>Required</sup> <a name="log_stream_ids" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logStreamIds"></a>

```python
log_stream_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}.

---

##### `obs_bucket_name`<sup>Required</sup> <a name="obs_bucket_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.obsBucketName"></a>

```python
obs_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}.

---

##### `period_unit`<sup>Required</sup> <a name="period_unit" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.periodUnit"></a>

```python
period_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}.

---

##### `storage_format`<sup>Required</sup> <a name="storage_format" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.storageFormat"></a>

```python
storage_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}.

---

##### `dir_prefix_name`<sup>Optional</sup> <a name="dir_prefix_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dirPrefixName"></a>

```python
dir_prefix_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix_name`<sup>Optional</sup> <a name="prefix_name" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.prefixName"></a>

```python
prefix_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}.

---

##### `switch_on`<sup>Optional</sup> <a name="switch_on" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.switchOn"></a>

```python
switch_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}.

---



