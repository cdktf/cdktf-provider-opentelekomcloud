# `cesAlarmrule` Submodule <a name="`cesAlarmrule` Submodule" id="@cdktf/provider-opentelekomcloud.cesAlarmrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesAlarmrule <a name="CesAlarmrule" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule opentelekomcloud_ces_alarmrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmrule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alarm_name: str,
  condition: CesAlarmruleCondition,
  metric: CesAlarmruleMetric,
  alarm_action_enabled: bool | IResolvable = None,
  alarm_actions: IResolvable | typing.List[CesAlarmruleAlarmActions] = None,
  alarm_description: str = None,
  alarm_enabled: bool | IResolvable = None,
  alarm_level: typing.Union[int, float] = None,
  alarm_type: str = None,
  id: str = None,
  ok_actions: IResolvable | typing.List[CesAlarmruleOkActions] = None,
  timeouts: CesAlarmruleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmName">alarm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_name CesAlarmrule#alarm_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.metric">metric</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmActionEnabled">alarm_action_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_action_enabled CesAlarmrule#alarm_action_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmActions">alarm_actions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>]</code> | alarm_actions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmDescription">alarm_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_description CesAlarmrule#alarm_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmEnabled">alarm_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_enabled CesAlarmrule#alarm_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmLevel">alarm_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_level CesAlarmrule#alarm_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmType">alarm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_type CesAlarmrule#alarm_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#id CesAlarmrule#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.okActions">ok_actions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>]</code> | ok_actions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_name CesAlarmrule#alarm_name}.

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#condition CesAlarmrule#condition}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.metric"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#metric CesAlarmrule#metric}

---

##### `alarm_action_enabled`<sup>Optional</sup> <a name="alarm_action_enabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmActionEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_action_enabled CesAlarmrule#alarm_action_enabled}.

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmActions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>]

alarm_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_actions CesAlarmrule#alarm_actions}

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_description CesAlarmrule#alarm_description}.

---

##### `alarm_enabled`<sup>Optional</sup> <a name="alarm_enabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_enabled CesAlarmrule#alarm_enabled}.

---

##### `alarm_level`<sup>Optional</sup> <a name="alarm_level" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_level CesAlarmrule#alarm_level}.

---

##### `alarm_type`<sup>Optional</sup> <a name="alarm_type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_type CesAlarmrule#alarm_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#id CesAlarmrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.okActions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>]

ok_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#ok_actions CesAlarmrule#ok_actions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#timeouts CesAlarmrule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putAlarmActions">put_alarm_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putOkActions">put_ok_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmActionEnabled">reset_alarm_action_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmActions">reset_alarm_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmDescription">reset_alarm_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmEnabled">reset_alarm_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmLevel">reset_alarm_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmType">reset_alarm_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetOkActions">reset_ok_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alarm_actions` <a name="put_alarm_actions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putAlarmActions"></a>

```python
def put_alarm_actions(
  value: IResolvable | typing.List[CesAlarmruleAlarmActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putAlarmActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>]

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition"></a>

```python
def put_condition(
  comparison_operator: str,
  count: typing.Union[int, float],
  filter: str,
  period: typing.Union[int, float],
  value: typing.Union[int, float],
  alarm_frequency: typing.Union[int, float] = None,
  unit: str = None
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition.parameter.comparisonOperator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#comparison_operator CesAlarmrule#comparison_operator}.

---

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#count CesAlarmrule#count}.

---

###### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#filter CesAlarmrule#filter}.

---

###### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition.parameter.period"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#period CesAlarmrule#period}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#value CesAlarmrule#value}.

---

###### `alarm_frequency`<sup>Optional</sup> <a name="alarm_frequency" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition.parameter.alarmFrequency"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_frequency CesAlarmrule#alarm_frequency}.

---

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#unit CesAlarmrule#unit}.

---

##### `put_metric` <a name="put_metric" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putMetric"></a>

```python
def put_metric(
  metric_name: str,
  namespace: str,
  dimensions: IResolvable | typing.List[CesAlarmruleMetricDimensions] = None
) -> None
```

###### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putMetric.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#metric_name CesAlarmrule#metric_name}.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putMetric.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#namespace CesAlarmrule#namespace}.

---

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putMetric.parameter.dimensions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#dimensions CesAlarmrule#dimensions}

---

##### `put_ok_actions` <a name="put_ok_actions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putOkActions"></a>

```python
def put_ok_actions(
  value: IResolvable | typing.List[CesAlarmruleOkActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putOkActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#create CesAlarmrule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#delete CesAlarmrule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#update CesAlarmrule#update}.

---

##### `reset_alarm_action_enabled` <a name="reset_alarm_action_enabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmActionEnabled"></a>

```python
def reset_alarm_action_enabled() -> None
```

##### `reset_alarm_actions` <a name="reset_alarm_actions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmActions"></a>

```python
def reset_alarm_actions() -> None
```

##### `reset_alarm_description` <a name="reset_alarm_description" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmDescription"></a>

```python
def reset_alarm_description() -> None
```

##### `reset_alarm_enabled` <a name="reset_alarm_enabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmEnabled"></a>

```python
def reset_alarm_enabled() -> None
```

##### `reset_alarm_level` <a name="reset_alarm_level" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmLevel"></a>

```python
def reset_alarm_level() -> None
```

##### `reset_alarm_type` <a name="reset_alarm_type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmType"></a>

```python
def reset_alarm_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ok_actions` <a name="reset_ok_actions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetOkActions"></a>

```python
def reset_ok_actions() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CesAlarmrule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmrule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmrule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmrule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmrule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CesAlarmrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CesAlarmrule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CesAlarmrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CesAlarmrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActions">alarm_actions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList">CesAlarmruleAlarmActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmState">alarm_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference">CesAlarmruleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference">CesAlarmruleMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.okActions">ok_actions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList">CesAlarmruleOkActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference">CesAlarmruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.updateTime">update_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionEnabledInput">alarm_action_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionsInput">alarm_actions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmDescriptionInput">alarm_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmEnabledInput">alarm_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmLevelInput">alarm_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmNameInput">alarm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmTypeInput">alarm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.metricInput">metric_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.okActionsInput">ok_actions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionEnabled">alarm_action_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmDescription">alarm_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmEnabled">alarm_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmLevel">alarm_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmName">alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmType">alarm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `alarm_actions`<sup>Required</sup> <a name="alarm_actions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActions"></a>

```python
alarm_actions: CesAlarmruleAlarmActionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList">CesAlarmruleAlarmActionsList</a>

---

##### `alarm_state`<sup>Required</sup> <a name="alarm_state" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmState"></a>

```python
alarm_state: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.condition"></a>

```python
condition: CesAlarmruleConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference">CesAlarmruleConditionOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.metric"></a>

```python
metric: CesAlarmruleMetricOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference">CesAlarmruleMetricOutputReference</a>

---

##### `ok_actions`<sup>Required</sup> <a name="ok_actions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.okActions"></a>

```python
ok_actions: CesAlarmruleOkActionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList">CesAlarmruleOkActionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.timeouts"></a>

```python
timeouts: CesAlarmruleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference">CesAlarmruleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.updateTime"></a>

```python
update_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarm_action_enabled_input`<sup>Optional</sup> <a name="alarm_action_enabled_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionEnabledInput"></a>

```python
alarm_action_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `alarm_actions_input`<sup>Optional</sup> <a name="alarm_actions_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionsInput"></a>

```python
alarm_actions_input: IResolvable | typing.List[CesAlarmruleAlarmActions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>]

---

##### `alarm_description_input`<sup>Optional</sup> <a name="alarm_description_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmDescriptionInput"></a>

```python
alarm_description_input: str
```

- *Type:* str

---

##### `alarm_enabled_input`<sup>Optional</sup> <a name="alarm_enabled_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmEnabledInput"></a>

```python
alarm_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `alarm_level_input`<sup>Optional</sup> <a name="alarm_level_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmLevelInput"></a>

```python
alarm_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarm_name_input`<sup>Optional</sup> <a name="alarm_name_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmNameInput"></a>

```python
alarm_name_input: str
```

- *Type:* str

---

##### `alarm_type_input`<sup>Optional</sup> <a name="alarm_type_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmTypeInput"></a>

```python
alarm_type_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.conditionInput"></a>

```python
condition_input: CesAlarmruleCondition
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.metricInput"></a>

```python
metric_input: CesAlarmruleMetric
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a>

---

##### `ok_actions_input`<sup>Optional</sup> <a name="ok_actions_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.okActionsInput"></a>

```python
ok_actions_input: IResolvable | typing.List[CesAlarmruleOkActions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CesAlarmruleTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a>

---

##### `alarm_action_enabled`<sup>Required</sup> <a name="alarm_action_enabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionEnabled"></a>

```python
alarm_action_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `alarm_description`<sup>Required</sup> <a name="alarm_description" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

---

##### `alarm_enabled`<sup>Required</sup> <a name="alarm_enabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmEnabled"></a>

```python
alarm_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `alarm_level`<sup>Required</sup> <a name="alarm_level" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmLevel"></a>

```python
alarm_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

---

##### `alarm_type`<sup>Required</sup> <a name="alarm_type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmType"></a>

```python
alarm_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CesAlarmruleAlarmActions <a name="CesAlarmruleAlarmActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleAlarmActions(
  notification_list: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions.property.notificationList">notification_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#notification_list CesAlarmrule#notification_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#type CesAlarmrule#type}. |

---

##### `notification_list`<sup>Required</sup> <a name="notification_list" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions.property.notificationList"></a>

```python
notification_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#notification_list CesAlarmrule#notification_list}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#type CesAlarmrule#type}.

---

### CesAlarmruleCondition <a name="CesAlarmruleCondition" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleCondition(
  comparison_operator: str,
  count: typing.Union[int, float],
  filter: str,
  period: typing.Union[int, float],
  value: typing.Union[int, float],
  alarm_frequency: typing.Union[int, float] = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#comparison_operator CesAlarmrule#comparison_operator}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#count CesAlarmrule#count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#filter CesAlarmrule#filter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#period CesAlarmrule#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#value CesAlarmrule#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.alarmFrequency">alarm_frequency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_frequency CesAlarmrule#alarm_frequency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#unit CesAlarmrule#unit}. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#comparison_operator CesAlarmrule#comparison_operator}.

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#count CesAlarmrule#count}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#filter CesAlarmrule#filter}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#period CesAlarmrule#period}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#value CesAlarmrule#value}.

---

##### `alarm_frequency`<sup>Optional</sup> <a name="alarm_frequency" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.alarmFrequency"></a>

```python
alarm_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_frequency CesAlarmrule#alarm_frequency}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#unit CesAlarmrule#unit}.

---

### CesAlarmruleConfig <a name="CesAlarmruleConfig" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alarm_name: str,
  condition: CesAlarmruleCondition,
  metric: CesAlarmruleMetric,
  alarm_action_enabled: bool | IResolvable = None,
  alarm_actions: IResolvable | typing.List[CesAlarmruleAlarmActions] = None,
  alarm_description: str = None,
  alarm_enabled: bool | IResolvable = None,
  alarm_level: typing.Union[int, float] = None,
  alarm_type: str = None,
  id: str = None,
  ok_actions: IResolvable | typing.List[CesAlarmruleOkActions] = None,
  timeouts: CesAlarmruleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmName">alarm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_name CesAlarmrule#alarm_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmActionEnabled">alarm_action_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_action_enabled CesAlarmrule#alarm_action_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmActions">alarm_actions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>]</code> | alarm_actions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmDescription">alarm_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_description CesAlarmrule#alarm_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmEnabled">alarm_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_enabled CesAlarmrule#alarm_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmLevel">alarm_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_level CesAlarmrule#alarm_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmType">alarm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_type CesAlarmrule#alarm_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#id CesAlarmrule#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.okActions">ok_actions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>]</code> | ok_actions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_name CesAlarmrule#alarm_name}.

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.condition"></a>

```python
condition: CesAlarmruleCondition
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#condition CesAlarmrule#condition}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.metric"></a>

```python
metric: CesAlarmruleMetric
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#metric CesAlarmrule#metric}

---

##### `alarm_action_enabled`<sup>Optional</sup> <a name="alarm_action_enabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmActionEnabled"></a>

```python
alarm_action_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_action_enabled CesAlarmrule#alarm_action_enabled}.

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmActions"></a>

```python
alarm_actions: IResolvable | typing.List[CesAlarmruleAlarmActions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>]

alarm_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_actions CesAlarmrule#alarm_actions}

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_description CesAlarmrule#alarm_description}.

---

##### `alarm_enabled`<sup>Optional</sup> <a name="alarm_enabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmEnabled"></a>

```python
alarm_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_enabled CesAlarmrule#alarm_enabled}.

---

##### `alarm_level`<sup>Optional</sup> <a name="alarm_level" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmLevel"></a>

```python
alarm_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_level CesAlarmrule#alarm_level}.

---

##### `alarm_type`<sup>Optional</sup> <a name="alarm_type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmType"></a>

```python
alarm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#alarm_type CesAlarmrule#alarm_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#id CesAlarmrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.okActions"></a>

```python
ok_actions: IResolvable | typing.List[CesAlarmruleOkActions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>]

ok_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#ok_actions CesAlarmrule#ok_actions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.timeouts"></a>

```python
timeouts: CesAlarmruleTimeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#timeouts CesAlarmrule#timeouts}

---

### CesAlarmruleMetric <a name="CesAlarmruleMetric" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleMetric(
  metric_name: str,
  namespace: str,
  dimensions: IResolvable | typing.List[CesAlarmruleMetricDimensions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#metric_name CesAlarmrule#metric_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#namespace CesAlarmrule#namespace}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>]</code> | dimensions block. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#metric_name CesAlarmrule#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#namespace CesAlarmrule#namespace}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.dimensions"></a>

```python
dimensions: IResolvable | typing.List[CesAlarmruleMetricDimensions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#dimensions CesAlarmrule#dimensions}

---

### CesAlarmruleMetricDimensions <a name="CesAlarmruleMetricDimensions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleMetricDimensions(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#name CesAlarmrule#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#value CesAlarmrule#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#name CesAlarmrule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#value CesAlarmrule#value}.

---

### CesAlarmruleOkActions <a name="CesAlarmruleOkActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleOkActions(
  notification_list: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions.property.notificationList">notification_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#notification_list CesAlarmrule#notification_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#type CesAlarmrule#type}. |

---

##### `notification_list`<sup>Required</sup> <a name="notification_list" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions.property.notificationList"></a>

```python
notification_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#notification_list CesAlarmrule#notification_list}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#type CesAlarmrule#type}.

---

### CesAlarmruleTimeouts <a name="CesAlarmruleTimeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#create CesAlarmrule#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#delete CesAlarmrule#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#update CesAlarmrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#create CesAlarmrule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#delete CesAlarmrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/ces_alarmrule#update CesAlarmrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesAlarmruleAlarmActionsList <a name="CesAlarmruleAlarmActionsList" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleAlarmActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAlarmruleAlarmActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAlarmruleAlarmActions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>]

---


### CesAlarmruleAlarmActionsOutputReference <a name="CesAlarmruleAlarmActionsOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleAlarmActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.notificationListInput">notification_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.notificationList">notification_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_list_input`<sup>Optional</sup> <a name="notification_list_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.notificationListInput"></a>

```python
notification_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `notification_list`<sup>Required</sup> <a name="notification_list" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.notificationList"></a>

```python
notification_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAlarmruleAlarmActions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>

---


### CesAlarmruleConditionOutputReference <a name="CesAlarmruleConditionOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resetAlarmFrequency">reset_alarm_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarm_frequency` <a name="reset_alarm_frequency" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resetAlarmFrequency"></a>

```python
def reset_alarm_frequency() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.alarmFrequencyInput">alarm_frequency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.alarmFrequency">alarm_frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_frequency_input`<sup>Optional</sup> <a name="alarm_frequency_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.alarmFrequencyInput"></a>

```python
alarm_frequency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarm_frequency`<sup>Required</sup> <a name="alarm_frequency" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.alarmFrequency"></a>

```python
alarm_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.internalValue"></a>

```python
internal_value: CesAlarmruleCondition
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a>

---


### CesAlarmruleMetricDimensionsList <a name="CesAlarmruleMetricDimensionsList" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAlarmruleMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAlarmruleMetricDimensions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>]

---


### CesAlarmruleMetricDimensionsOutputReference <a name="CesAlarmruleMetricDimensionsOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAlarmruleMetricDimensions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>

---


### CesAlarmruleMetricOutputReference <a name="CesAlarmruleMetricOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: IResolvable | typing.List[CesAlarmruleMetricDimensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>]

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList">CesAlarmruleMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.dimensions"></a>

```python
dimensions: CesAlarmruleMetricDimensionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList">CesAlarmruleMetricDimensionsList</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: IResolvable | typing.List[CesAlarmruleMetricDimensions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.internalValue"></a>

```python
internal_value: CesAlarmruleMetric
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a>

---


### CesAlarmruleOkActionsList <a name="CesAlarmruleOkActionsList" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleOkActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAlarmruleOkActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAlarmruleOkActions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>]

---


### CesAlarmruleOkActionsOutputReference <a name="CesAlarmruleOkActionsOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleOkActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.notificationListInput">notification_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.notificationList">notification_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_list_input`<sup>Optional</sup> <a name="notification_list_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.notificationListInput"></a>

```python
notification_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `notification_list`<sup>Required</sup> <a name="notification_list" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.notificationList"></a>

```python
notification_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAlarmruleOkActions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>

---


### CesAlarmruleTimeoutsOutputReference <a name="CesAlarmruleTimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_alarmrule

cesAlarmrule.CesAlarmruleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAlarmruleTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a>

---



