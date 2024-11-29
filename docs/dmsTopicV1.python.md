# `dmsTopicV1` Submodule <a name="`dmsTopicV1` Submodule" id="@cdktf/provider-opentelekomcloud.dmsTopicV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsTopicV1 <a name="DmsTopicV1" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1 opentelekomcloud_dms_topic_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_topic_v1

dmsTopicV1.DmsTopicV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  name: str,
  id: str = None,
  max_partitions: typing.Union[int, float] = None,
  partition: typing.Union[int, float] = None,
  remain_partitions: typing.Union[int, float] = None,
  replication: typing.Union[int, float] = None,
  retention_time: typing.Union[int, float] = None,
  size: typing.Union[int, float] = None,
  sync_message_flush: typing.Union[bool, IResolvable] = None,
  sync_replication: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#instance_id DmsTopicV1#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#name DmsTopicV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#id DmsTopicV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.maxPartitions">max_partitions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#max_partitions DmsTopicV1#max_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.partition">partition</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#partition DmsTopicV1#partition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.remainPartitions">remain_partitions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#remain_partitions DmsTopicV1#remain_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.replication">replication</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#replication DmsTopicV1#replication}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.retentionTime">retention_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#retention_time DmsTopicV1#retention_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#size DmsTopicV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.syncMessageFlush">sync_message_flush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#sync_message_flush DmsTopicV1#sync_message_flush}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.syncReplication">sync_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#sync_replication DmsTopicV1#sync_replication}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#instance_id DmsTopicV1#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#name DmsTopicV1#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#id DmsTopicV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_partitions`<sup>Optional</sup> <a name="max_partitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.maxPartitions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#max_partitions DmsTopicV1#max_partitions}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.partition"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#partition DmsTopicV1#partition}.

---

##### `remain_partitions`<sup>Optional</sup> <a name="remain_partitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.remainPartitions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#remain_partitions DmsTopicV1#remain_partitions}.

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.replication"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#replication DmsTopicV1#replication}.

---

##### `retention_time`<sup>Optional</sup> <a name="retention_time" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.retentionTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#retention_time DmsTopicV1#retention_time}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#size DmsTopicV1#size}.

---

##### `sync_message_flush`<sup>Optional</sup> <a name="sync_message_flush" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.syncMessageFlush"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#sync_message_flush DmsTopicV1#sync_message_flush}.

---

##### `sync_replication`<sup>Optional</sup> <a name="sync_replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.syncReplication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#sync_replication DmsTopicV1#sync_replication}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetMaxPartitions">reset_max_partitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetRemainPartitions">reset_remain_partitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetReplication">reset_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetRetentionTime">reset_retention_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSyncMessageFlush">reset_sync_message_flush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSyncReplication">reset_sync_replication</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_partitions` <a name="reset_max_partitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetMaxPartitions"></a>

```python
def reset_max_partitions() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_remain_partitions` <a name="reset_remain_partitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetRemainPartitions"></a>

```python
def reset_remain_partitions() -> None
```

##### `reset_replication` <a name="reset_replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetReplication"></a>

```python
def reset_replication() -> None
```

##### `reset_retention_time` <a name="reset_retention_time" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetRetentionTime"></a>

```python
def reset_retention_time() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_sync_message_flush` <a name="reset_sync_message_flush" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSyncMessageFlush"></a>

```python
def reset_sync_message_flush() -> None
```

##### `reset_sync_replication` <a name="reset_sync_replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSyncReplication"></a>

```python
def reset_sync_replication() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DmsTopicV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_topic_v1

dmsTopicV1.DmsTopicV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_topic_v1

dmsTopicV1.DmsTopicV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_topic_v1

dmsTopicV1.DmsTopicV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_topic_v1

dmsTopicV1.DmsTopicV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DmsTopicV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsTopicV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsTopicV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsTopicV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.maxPartitionsInput">max_partitions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.partitionInput">partition_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.remainPartitionsInput">remain_partitions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.replicationInput">replication_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.retentionTimeInput">retention_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncMessageFlushInput">sync_message_flush_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncReplicationInput">sync_replication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.maxPartitions">max_partitions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.remainPartitions">remain_partitions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.replication">replication</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.retentionTime">retention_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncMessageFlush">sync_message_flush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncReplication">sync_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `max_partitions_input`<sup>Optional</sup> <a name="max_partitions_input" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.maxPartitionsInput"></a>

```python
max_partitions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.partitionInput"></a>

```python
partition_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remain_partitions_input`<sup>Optional</sup> <a name="remain_partitions_input" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.remainPartitionsInput"></a>

```python
remain_partitions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_input`<sup>Optional</sup> <a name="replication_input" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.replicationInput"></a>

```python
replication_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_time_input`<sup>Optional</sup> <a name="retention_time_input" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.retentionTimeInput"></a>

```python
retention_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_message_flush_input`<sup>Optional</sup> <a name="sync_message_flush_input" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncMessageFlushInput"></a>

```python
sync_message_flush_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sync_replication_input`<sup>Optional</sup> <a name="sync_replication_input" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncReplicationInput"></a>

```python
sync_replication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `max_partitions`<sup>Required</sup> <a name="max_partitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.maxPartitions"></a>

```python
max_partitions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remain_partitions`<sup>Required</sup> <a name="remain_partitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.remainPartitions"></a>

```python
remain_partitions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.replication"></a>

```python
replication: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_time`<sup>Required</sup> <a name="retention_time" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.retentionTime"></a>

```python
retention_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_message_flush`<sup>Required</sup> <a name="sync_message_flush" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncMessageFlush"></a>

```python
sync_message_flush: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sync_replication`<sup>Required</sup> <a name="sync_replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncReplication"></a>

```python
sync_replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsTopicV1Config <a name="DmsTopicV1Config" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_topic_v1

dmsTopicV1.DmsTopicV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  name: str,
  id: str = None,
  max_partitions: typing.Union[int, float] = None,
  partition: typing.Union[int, float] = None,
  remain_partitions: typing.Union[int, float] = None,
  replication: typing.Union[int, float] = None,
  retention_time: typing.Union[int, float] = None,
  size: typing.Union[int, float] = None,
  sync_message_flush: typing.Union[bool, IResolvable] = None,
  sync_replication: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#instance_id DmsTopicV1#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#name DmsTopicV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#id DmsTopicV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.maxPartitions">max_partitions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#max_partitions DmsTopicV1#max_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#partition DmsTopicV1#partition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.remainPartitions">remain_partitions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#remain_partitions DmsTopicV1#remain_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.replication">replication</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#replication DmsTopicV1#replication}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.retentionTime">retention_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#retention_time DmsTopicV1#retention_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#size DmsTopicV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.syncMessageFlush">sync_message_flush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#sync_message_flush DmsTopicV1#sync_message_flush}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.syncReplication">sync_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#sync_replication DmsTopicV1#sync_replication}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#instance_id DmsTopicV1#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#name DmsTopicV1#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#id DmsTopicV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_partitions`<sup>Optional</sup> <a name="max_partitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.maxPartitions"></a>

```python
max_partitions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#max_partitions DmsTopicV1#max_partitions}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#partition DmsTopicV1#partition}.

---

##### `remain_partitions`<sup>Optional</sup> <a name="remain_partitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.remainPartitions"></a>

```python
remain_partitions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#remain_partitions DmsTopicV1#remain_partitions}.

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.replication"></a>

```python
replication: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#replication DmsTopicV1#replication}.

---

##### `retention_time`<sup>Optional</sup> <a name="retention_time" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.retentionTime"></a>

```python
retention_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#retention_time DmsTopicV1#retention_time}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#size DmsTopicV1#size}.

---

##### `sync_message_flush`<sup>Optional</sup> <a name="sync_message_flush" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.syncMessageFlush"></a>

```python
sync_message_flush: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#sync_message_flush DmsTopicV1#sync_message_flush}.

---

##### `sync_replication`<sup>Optional</sup> <a name="sync_replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.syncReplication"></a>

```python
sync_replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_topic_v1#sync_replication DmsTopicV1#sync_replication}.

---



