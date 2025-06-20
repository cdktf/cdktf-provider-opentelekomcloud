# `dmsReassignPartitionsV2` Submodule <a name="`dmsReassignPartitionsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReassignPartitionsV2 <a name="DmsReassignPartitionsV2" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2 opentelekomcloud_dms_reassign_partitions_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2(
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
  reassignments: typing.Union[IResolvable, typing.List[DmsReassignPartitionsV2Reassignments]],
  execute_at: typing.Union[int, float] = None,
  id: str = None,
  is_schedule: typing.Union[bool, IResolvable] = None,
  throttle: typing.Union[int, float] = None,
  time_estimate: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#instance_id DmsReassignPartitionsV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.reassignments">reassignments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>]]</code> | reassignments block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.executeAt">execute_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#execute_at DmsReassignPartitionsV2#execute_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#id DmsReassignPartitionsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.isSchedule">is_schedule</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#is_schedule DmsReassignPartitionsV2#is_schedule}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.throttle">throttle</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#throttle DmsReassignPartitionsV2#throttle}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.timeEstimate">time_estimate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#time_estimate DmsReassignPartitionsV2#time_estimate}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#instance_id DmsReassignPartitionsV2#instance_id}.

---

##### `reassignments`<sup>Required</sup> <a name="reassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.reassignments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>]]

reassignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#reassignments DmsReassignPartitionsV2#reassignments}

---

##### `execute_at`<sup>Optional</sup> <a name="execute_at" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.executeAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#execute_at DmsReassignPartitionsV2#execute_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#id DmsReassignPartitionsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_schedule`<sup>Optional</sup> <a name="is_schedule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.isSchedule"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#is_schedule DmsReassignPartitionsV2#is_schedule}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.throttle"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#throttle DmsReassignPartitionsV2#throttle}.

---

##### `time_estimate`<sup>Optional</sup> <a name="time_estimate" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.timeEstimate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#time_estimate DmsReassignPartitionsV2#time_estimate}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.putReassignments">put_reassignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetExecuteAt">reset_execute_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetIsSchedule">reset_is_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetThrottle">reset_throttle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetTimeEstimate">reset_time_estimate</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_reassignments` <a name="put_reassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.putReassignments"></a>

```python
def put_reassignments(
  value: typing.Union[IResolvable, typing.List[DmsReassignPartitionsV2Reassignments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.putReassignments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>]]

---

##### `reset_execute_at` <a name="reset_execute_at" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetExecuteAt"></a>

```python
def reset_execute_at() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_schedule` <a name="reset_is_schedule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetIsSchedule"></a>

```python
def reset_is_schedule() -> None
```

##### `reset_throttle` <a name="reset_throttle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetThrottle"></a>

```python
def reset_throttle() -> None
```

##### `reset_time_estimate` <a name="reset_time_estimate" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetTimeEstimate"></a>

```python
def reset_time_estimate() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DmsReassignPartitionsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DmsReassignPartitionsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsReassignPartitionsV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsReassignPartitionsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsReassignPartitionsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignments">reassignments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList">DmsReassignPartitionsV2ReassignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentTime">reassignment_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAtInput">execute_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isScheduleInput">is_schedule_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentsInput">reassignments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttleInput">throttle_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimateInput">time_estimate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAt">execute_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isSchedule">is_schedule</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttle">throttle</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimate">time_estimate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `reassignments`<sup>Required</sup> <a name="reassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignments"></a>

```python
reassignments: DmsReassignPartitionsV2ReassignmentsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList">DmsReassignPartitionsV2ReassignmentsList</a>

---

##### `reassignment_time`<sup>Required</sup> <a name="reassignment_time" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentTime"></a>

```python
reassignment_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `execute_at_input`<sup>Optional</sup> <a name="execute_at_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAtInput"></a>

```python
execute_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `is_schedule_input`<sup>Optional</sup> <a name="is_schedule_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isScheduleInput"></a>

```python
is_schedule_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reassignments_input`<sup>Optional</sup> <a name="reassignments_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentsInput"></a>

```python
reassignments_input: typing.Union[IResolvable, typing.List[DmsReassignPartitionsV2Reassignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>]]

---

##### `throttle_input`<sup>Optional</sup> <a name="throttle_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttleInput"></a>

```python
throttle_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_estimate_input`<sup>Optional</sup> <a name="time_estimate_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimateInput"></a>

```python
time_estimate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execute_at`<sup>Required</sup> <a name="execute_at" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAt"></a>

```python
execute_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `is_schedule`<sup>Required</sup> <a name="is_schedule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isSchedule"></a>

```python
is_schedule: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttle"></a>

```python
throttle: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_estimate`<sup>Required</sup> <a name="time_estimate" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimate"></a>

```python
time_estimate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReassignPartitionsV2Config <a name="DmsReassignPartitionsV2Config" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  reassignments: typing.Union[IResolvable, typing.List[DmsReassignPartitionsV2Reassignments]],
  execute_at: typing.Union[int, float] = None,
  id: str = None,
  is_schedule: typing.Union[bool, IResolvable] = None,
  throttle: typing.Union[int, float] = None,
  time_estimate: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#instance_id DmsReassignPartitionsV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.reassignments">reassignments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>]]</code> | reassignments block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.executeAt">execute_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#execute_at DmsReassignPartitionsV2#execute_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#id DmsReassignPartitionsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.isSchedule">is_schedule</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#is_schedule DmsReassignPartitionsV2#is_schedule}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.throttle">throttle</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#throttle DmsReassignPartitionsV2#throttle}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.timeEstimate">time_estimate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#time_estimate DmsReassignPartitionsV2#time_estimate}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#instance_id DmsReassignPartitionsV2#instance_id}.

---

##### `reassignments`<sup>Required</sup> <a name="reassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.reassignments"></a>

```python
reassignments: typing.Union[IResolvable, typing.List[DmsReassignPartitionsV2Reassignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>]]

reassignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#reassignments DmsReassignPartitionsV2#reassignments}

---

##### `execute_at`<sup>Optional</sup> <a name="execute_at" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.executeAt"></a>

```python
execute_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#execute_at DmsReassignPartitionsV2#execute_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#id DmsReassignPartitionsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_schedule`<sup>Optional</sup> <a name="is_schedule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.isSchedule"></a>

```python
is_schedule: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#is_schedule DmsReassignPartitionsV2#is_schedule}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.throttle"></a>

```python
throttle: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#throttle DmsReassignPartitionsV2#throttle}.

---

##### `time_estimate`<sup>Optional</sup> <a name="time_estimate" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.timeEstimate"></a>

```python
time_estimate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#time_estimate DmsReassignPartitionsV2#time_estimate}.

---

### DmsReassignPartitionsV2Reassignments <a name="DmsReassignPartitionsV2Reassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments(
  topic: str,
  assignments: typing.Union[IResolvable, typing.List[DmsReassignPartitionsV2ReassignmentsAssignments]] = None,
  brokers: typing.List[typing.Union[int, float]] = None,
  replication_factor: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.topic">topic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#topic DmsReassignPartitionsV2#topic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.assignments">assignments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>]]</code> | assignments block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.brokers">brokers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#brokers DmsReassignPartitionsV2#brokers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#replication_factor DmsReassignPartitionsV2#replication_factor}. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.topic"></a>

```python
topic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#topic DmsReassignPartitionsV2#topic}.

---

##### `assignments`<sup>Optional</sup> <a name="assignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.assignments"></a>

```python
assignments: typing.Union[IResolvable, typing.List[DmsReassignPartitionsV2ReassignmentsAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>]]

assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#assignments DmsReassignPartitionsV2#assignments}

---

##### `brokers`<sup>Optional</sup> <a name="brokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.brokers"></a>

```python
brokers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#brokers DmsReassignPartitionsV2#brokers}.

---

##### `replication_factor`<sup>Optional</sup> <a name="replication_factor" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.replicationFactor"></a>

```python
replication_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#replication_factor DmsReassignPartitionsV2#replication_factor}.

---

### DmsReassignPartitionsV2ReassignmentsAssignments <a name="DmsReassignPartitionsV2ReassignmentsAssignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments(
  partition: typing.Union[int, float] = None,
  partition_brokers: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#partition DmsReassignPartitionsV2#partition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partitionBrokers">partition_brokers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#partition_brokers DmsReassignPartitionsV2#partition_brokers}. |

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#partition DmsReassignPartitionsV2#partition}.

---

##### `partition_brokers`<sup>Optional</sup> <a name="partition_brokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partitionBrokers"></a>

```python
partition_brokers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/dms_reassign_partitions_v2#partition_brokers DmsReassignPartitionsV2#partition_brokers}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReassignPartitionsV2ReassignmentsAssignmentsList <a name="DmsReassignPartitionsV2ReassignmentsAssignmentsList" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DmsReassignPartitionsV2ReassignmentsAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>]]

---


### DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference <a name="DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartitionBrokers">reset_partition_brokers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_partition_brokers` <a name="reset_partition_brokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartitionBrokers"></a>

```python
def reset_partition_brokers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokersInput">partition_brokers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionInput">partition_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partition">partition</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokers">partition_brokers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_brokers_input`<sup>Optional</sup> <a name="partition_brokers_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokersInput"></a>

```python
partition_brokers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionInput"></a>

```python
partition_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partition"></a>

```python
partition: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `partition_brokers`<sup>Required</sup> <a name="partition_brokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokers"></a>

```python
partition_brokers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DmsReassignPartitionsV2ReassignmentsAssignments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>]

---


### DmsReassignPartitionsV2ReassignmentsList <a name="DmsReassignPartitionsV2ReassignmentsList" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsReassignPartitionsV2ReassignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DmsReassignPartitionsV2Reassignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>]]

---


### DmsReassignPartitionsV2ReassignmentsOutputReference <a name="DmsReassignPartitionsV2ReassignmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_reassign_partitions_v2

dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.putAssignments">put_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetAssignments">reset_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetBrokers">reset_brokers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetReplicationFactor">reset_replication_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_assignments` <a name="put_assignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.putAssignments"></a>

```python
def put_assignments(
  value: typing.Union[IResolvable, typing.List[DmsReassignPartitionsV2ReassignmentsAssignments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.putAssignments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>]]

---

##### `reset_assignments` <a name="reset_assignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetAssignments"></a>

```python
def reset_assignments() -> None
```

##### `reset_brokers` <a name="reset_brokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetBrokers"></a>

```python
def reset_brokers() -> None
```

##### `reset_replication_factor` <a name="reset_replication_factor" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetReplicationFactor"></a>

```python
def reset_replication_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignments">assignments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList">DmsReassignPartitionsV2ReassignmentsAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignmentsInput">assignments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokersInput">brokers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactorInput">replication_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokers">brokers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assignments`<sup>Required</sup> <a name="assignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignments"></a>

```python
assignments: DmsReassignPartitionsV2ReassignmentsAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList">DmsReassignPartitionsV2ReassignmentsAssignmentsList</a>

---

##### `assignments_input`<sup>Optional</sup> <a name="assignments_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignmentsInput"></a>

```python
assignments_input: typing.Union[IResolvable, typing.List[DmsReassignPartitionsV2ReassignmentsAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>]]

---

##### `brokers_input`<sup>Optional</sup> <a name="brokers_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokersInput"></a>

```python
brokers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `replication_factor_input`<sup>Optional</sup> <a name="replication_factor_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactorInput"></a>

```python
replication_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `brokers`<sup>Required</sup> <a name="brokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokers"></a>

```python
brokers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `replication_factor`<sup>Required</sup> <a name="replication_factor" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactor"></a>

```python
replication_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DmsReassignPartitionsV2Reassignments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>]

---



