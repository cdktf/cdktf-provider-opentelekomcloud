# `disStreamV2` Submodule <a name="`disStreamV2` Submodule" id="@cdktf/provider-opentelekomcloud.disStreamV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisStreamV2 <a name="DisStreamV2" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2 opentelekomcloud_dis_stream_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_stream_v2

disStreamV2.DisStreamV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  partition_count: typing.Union[int, float],
  auto_scale_max_partition_count: typing.Union[int, float] = None,
  auto_scale_min_partition_count: typing.Union[int, float] = None,
  compression_format: str = None,
  data_type: str = None,
  id: str = None,
  retention_period: typing.Union[int, float] = None,
  stream_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DisStreamV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#name DisStreamV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.partitionCount">partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#partition_count DisStreamV2#partition_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.autoScaleMaxPartitionCount">auto_scale_max_partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#auto_scale_max_partition_count DisStreamV2#auto_scale_max_partition_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.autoScaleMinPartitionCount">auto_scale_min_partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#auto_scale_min_partition_count DisStreamV2#auto_scale_min_partition_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.compressionFormat">compression_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#compression_format DisStreamV2#compression_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#data_type DisStreamV2#data_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#id DisStreamV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#retention_period DisStreamV2#retention_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.streamType">stream_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#stream_type DisStreamV2#stream_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#tags DisStreamV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts">DisStreamV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#name DisStreamV2#name}.

---

##### `partition_count`<sup>Required</sup> <a name="partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.partitionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#partition_count DisStreamV2#partition_count}.

---

##### `auto_scale_max_partition_count`<sup>Optional</sup> <a name="auto_scale_max_partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.autoScaleMaxPartitionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#auto_scale_max_partition_count DisStreamV2#auto_scale_max_partition_count}.

---

##### `auto_scale_min_partition_count`<sup>Optional</sup> <a name="auto_scale_min_partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.autoScaleMinPartitionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#auto_scale_min_partition_count DisStreamV2#auto_scale_min_partition_count}.

---

##### `compression_format`<sup>Optional</sup> <a name="compression_format" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.compressionFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#compression_format DisStreamV2#compression_format}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.dataType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#data_type DisStreamV2#data_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#id DisStreamV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.retentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#retention_period DisStreamV2#retention_period}.

---

##### `stream_type`<sup>Optional</sup> <a name="stream_type" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.streamType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#stream_type DisStreamV2#stream_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#tags DisStreamV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts">DisStreamV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#timeouts DisStreamV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetAutoScaleMaxPartitionCount">reset_auto_scale_max_partition_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetAutoScaleMinPartitionCount">reset_auto_scale_min_partition_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetCompressionFormat">reset_compression_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetRetentionPeriod">reset_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetStreamType">reset_stream_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.putTimeouts"></a>

```python
def put_timeouts(
  update: str = None
) -> None
```

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#update DisStreamV2#update}.

---

##### `reset_auto_scale_max_partition_count` <a name="reset_auto_scale_max_partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetAutoScaleMaxPartitionCount"></a>

```python
def reset_auto_scale_max_partition_count() -> None
```

##### `reset_auto_scale_min_partition_count` <a name="reset_auto_scale_min_partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetAutoScaleMinPartitionCount"></a>

```python
def reset_auto_scale_min_partition_count() -> None
```

##### `reset_compression_format` <a name="reset_compression_format" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetCompressionFormat"></a>

```python
def reset_compression_format() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_period` <a name="reset_retention_period" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetRetentionPeriod"></a>

```python
def reset_retention_period() -> None
```

##### `reset_stream_type` <a name="reset_stream_type" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetStreamType"></a>

```python
def reset_stream_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DisStreamV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_stream_v2

disStreamV2.DisStreamV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_stream_v2

disStreamV2.DisStreamV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_stream_v2

disStreamV2.DisStreamV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_stream_v2

disStreamV2.DisStreamV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DisStreamV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DisStreamV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DisStreamV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DisStreamV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.created">created</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.partitions">partitions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList">DisStreamV2PartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.readablePartitionCount">readable_partition_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference">DisStreamV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.writablePartitionCount">writable_partition_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.autoScaleMaxPartitionCountInput">auto_scale_max_partition_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.autoScaleMinPartitionCountInput">auto_scale_min_partition_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.compressionFormatInput">compression_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.partitionCountInput">partition_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.retentionPeriodInput">retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.streamTypeInput">stream_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts">DisStreamV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.autoScaleMaxPartitionCount">auto_scale_max_partition_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.autoScaleMinPartitionCount">auto_scale_min_partition_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.compressionFormat">compression_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.partitionCount">partition_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.streamType">stream_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.created"></a>

```python
created: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.partitions"></a>

```python
partitions: DisStreamV2PartitionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList">DisStreamV2PartitionsList</a>

---

##### `readable_partition_count`<sup>Required</sup> <a name="readable_partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.readablePartitionCount"></a>

```python
readable_partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.timeouts"></a>

```python
timeouts: DisStreamV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference">DisStreamV2TimeoutsOutputReference</a>

---

##### `writable_partition_count`<sup>Required</sup> <a name="writable_partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.writablePartitionCount"></a>

```python
writable_partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_scale_max_partition_count_input`<sup>Optional</sup> <a name="auto_scale_max_partition_count_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.autoScaleMaxPartitionCountInput"></a>

```python
auto_scale_max_partition_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_scale_min_partition_count_input`<sup>Optional</sup> <a name="auto_scale_min_partition_count_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.autoScaleMinPartitionCountInput"></a>

```python
auto_scale_min_partition_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compression_format_input`<sup>Optional</sup> <a name="compression_format_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.compressionFormatInput"></a>

```python
compression_format_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_count_input`<sup>Optional</sup> <a name="partition_count_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.partitionCountInput"></a>

```python
partition_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.retentionPeriodInput"></a>

```python
retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_type_input`<sup>Optional</sup> <a name="stream_type_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.streamTypeInput"></a>

```python
stream_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DisStreamV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts">DisStreamV2Timeouts</a>]

---

##### `auto_scale_max_partition_count`<sup>Required</sup> <a name="auto_scale_max_partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.autoScaleMaxPartitionCount"></a>

```python
auto_scale_max_partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_scale_min_partition_count`<sup>Required</sup> <a name="auto_scale_min_partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.autoScaleMinPartitionCount"></a>

```python
auto_scale_min_partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compression_format`<sup>Required</sup> <a name="compression_format" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.compressionFormat"></a>

```python
compression_format: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partition_count`<sup>Required</sup> <a name="partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.partitionCount"></a>

```python
partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_type`<sup>Required</sup> <a name="stream_type" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.streamType"></a>

```python
stream_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DisStreamV2Config <a name="DisStreamV2Config" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_stream_v2

disStreamV2.DisStreamV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  partition_count: typing.Union[int, float],
  auto_scale_max_partition_count: typing.Union[int, float] = None,
  auto_scale_min_partition_count: typing.Union[int, float] = None,
  compression_format: str = None,
  data_type: str = None,
  id: str = None,
  retention_period: typing.Union[int, float] = None,
  stream_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DisStreamV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#name DisStreamV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.partitionCount">partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#partition_count DisStreamV2#partition_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.autoScaleMaxPartitionCount">auto_scale_max_partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#auto_scale_max_partition_count DisStreamV2#auto_scale_max_partition_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.autoScaleMinPartitionCount">auto_scale_min_partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#auto_scale_min_partition_count DisStreamV2#auto_scale_min_partition_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.compressionFormat">compression_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#compression_format DisStreamV2#compression_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#data_type DisStreamV2#data_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#id DisStreamV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#retention_period DisStreamV2#retention_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.streamType">stream_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#stream_type DisStreamV2#stream_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#tags DisStreamV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts">DisStreamV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#name DisStreamV2#name}.

---

##### `partition_count`<sup>Required</sup> <a name="partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.partitionCount"></a>

```python
partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#partition_count DisStreamV2#partition_count}.

---

##### `auto_scale_max_partition_count`<sup>Optional</sup> <a name="auto_scale_max_partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.autoScaleMaxPartitionCount"></a>

```python
auto_scale_max_partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#auto_scale_max_partition_count DisStreamV2#auto_scale_max_partition_count}.

---

##### `auto_scale_min_partition_count`<sup>Optional</sup> <a name="auto_scale_min_partition_count" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.autoScaleMinPartitionCount"></a>

```python
auto_scale_min_partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#auto_scale_min_partition_count DisStreamV2#auto_scale_min_partition_count}.

---

##### `compression_format`<sup>Optional</sup> <a name="compression_format" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.compressionFormat"></a>

```python
compression_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#compression_format DisStreamV2#compression_format}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#data_type DisStreamV2#data_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#id DisStreamV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#retention_period DisStreamV2#retention_period}.

---

##### `stream_type`<sup>Optional</sup> <a name="stream_type" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.streamType"></a>

```python
stream_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#stream_type DisStreamV2#stream_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#tags DisStreamV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Config.property.timeouts"></a>

```python
timeouts: DisStreamV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts">DisStreamV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#timeouts DisStreamV2#timeouts}

---

### DisStreamV2Partitions <a name="DisStreamV2Partitions" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Partitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Partitions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_stream_v2

disStreamV2.DisStreamV2Partitions()
```


### DisStreamV2Timeouts <a name="DisStreamV2Timeouts" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_stream_v2

disStreamV2.DisStreamV2Timeouts(
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#update DisStreamV2#update}. |

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/dis_stream_v2#update DisStreamV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisStreamV2PartitionsList <a name="DisStreamV2PartitionsList" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_stream_v2

disStreamV2.DisStreamV2PartitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DisStreamV2PartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DisStreamV2PartitionsOutputReference <a name="DisStreamV2PartitionsOutputReference" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_stream_v2

disStreamV2.DisStreamV2PartitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.hashRange">hash_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.parentPartitions">parent_partitions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.sequenceNumberRange">sequence_number_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Partitions">DisStreamV2Partitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hash_range`<sup>Required</sup> <a name="hash_range" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.hashRange"></a>

```python
hash_range: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_partitions`<sup>Required</sup> <a name="parent_partitions" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.parentPartitions"></a>

```python
parent_partitions: str
```

- *Type:* str

---

##### `sequence_number_range`<sup>Required</sup> <a name="sequence_number_range" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.sequenceNumberRange"></a>

```python
sequence_number_range: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2PartitionsOutputReference.property.internalValue"></a>

```python
internal_value: DisStreamV2Partitions
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Partitions">DisStreamV2Partitions</a>

---


### DisStreamV2TimeoutsOutputReference <a name="DisStreamV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_stream_v2

disStreamV2.DisStreamV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts">DisStreamV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DisStreamV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disStreamV2.DisStreamV2Timeouts">DisStreamV2Timeouts</a>]

---



