# `asPolicyV2` Submodule <a name="`asPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.asPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsPolicyV2 <a name="AsPolicyV2" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2 opentelekomcloud_as_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scaling_policy_name: str,
  scaling_policy_type: str,
  scaling_resource_id: str,
  scaling_resource_type: str,
  alarm_id: str = None,
  cool_down_time: typing.Union[int, float] = None,
  id: str = None,
  region: str = None,
  scaling_policy_action: typing.Union[IResolvable, typing.List[AsPolicyV2ScalingPolicyAction]] = None,
  scheduled_policy: typing.Union[IResolvable, typing.List[AsPolicyV2ScheduledPolicy]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyName">scaling_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_policy_name AsPolicyV2#scaling_policy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyType">scaling_policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_policy_type AsPolicyV2#scaling_policy_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingResourceId">scaling_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_resource_id AsPolicyV2#scaling_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingResourceType">scaling_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_resource_type AsPolicyV2#scaling_resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.alarmId">alarm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#alarm_id AsPolicyV2#alarm_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.coolDownTime">cool_down_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#cool_down_time AsPolicyV2#cool_down_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#id AsPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#region AsPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyAction">scaling_policy_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>]]</code> | scaling_policy_action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scheduledPolicy">scheduled_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>]]</code> | scheduled_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scaling_policy_name`<sup>Required</sup> <a name="scaling_policy_name" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_policy_name AsPolicyV2#scaling_policy_name}.

---

##### `scaling_policy_type`<sup>Required</sup> <a name="scaling_policy_type" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_policy_type AsPolicyV2#scaling_policy_type}.

---

##### `scaling_resource_id`<sup>Required</sup> <a name="scaling_resource_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_resource_id AsPolicyV2#scaling_resource_id}.

---

##### `scaling_resource_type`<sup>Required</sup> <a name="scaling_resource_type" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingResourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_resource_type AsPolicyV2#scaling_resource_type}.

---

##### `alarm_id`<sup>Optional</sup> <a name="alarm_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.alarmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#alarm_id AsPolicyV2#alarm_id}.

---

##### `cool_down_time`<sup>Optional</sup> <a name="cool_down_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.coolDownTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#cool_down_time AsPolicyV2#cool_down_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#id AsPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#region AsPolicyV2#region}.

---

##### `scaling_policy_action`<sup>Optional</sup> <a name="scaling_policy_action" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>]]

scaling_policy_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_policy_action AsPolicyV2#scaling_policy_action}

---

##### `scheduled_policy`<sup>Optional</sup> <a name="scheduled_policy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scheduledPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>]]

scheduled_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scheduled_policy AsPolicyV2#scheduled_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScalingPolicyAction">put_scaling_policy_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScheduledPolicy">put_scheduled_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetAlarmId">reset_alarm_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetCoolDownTime">reset_cool_down_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScalingPolicyAction">reset_scaling_policy_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScheduledPolicy">reset_scheduled_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scaling_policy_action` <a name="put_scaling_policy_action" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScalingPolicyAction"></a>

```python
def put_scaling_policy_action(
  value: typing.Union[IResolvable, typing.List[AsPolicyV2ScalingPolicyAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScalingPolicyAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>]]

---

##### `put_scheduled_policy` <a name="put_scheduled_policy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScheduledPolicy"></a>

```python
def put_scheduled_policy(
  value: typing.Union[IResolvable, typing.List[AsPolicyV2ScheduledPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScheduledPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>]]

---

##### `reset_alarm_id` <a name="reset_alarm_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetAlarmId"></a>

```python
def reset_alarm_id() -> None
```

##### `reset_cool_down_time` <a name="reset_cool_down_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetCoolDownTime"></a>

```python
def reset_cool_down_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scaling_policy_action` <a name="reset_scaling_policy_action" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScalingPolicyAction"></a>

```python
def reset_scaling_policy_action() -> None
```

##### `reset_scheduled_policy` <a name="reset_scheduled_policy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScheduledPolicy"></a>

```python
def reset_scheduled_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AsPolicyV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AsPolicyV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AsPolicyV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AsPolicyV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AsPolicyV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList">AsPolicyV2MetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyAction">scaling_policy_action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList">AsPolicyV2ScalingPolicyActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicy">scheduled_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList">AsPolicyV2ScheduledPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmIdInput">alarm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTimeInput">cool_down_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyActionInput">scaling_policy_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyNameInput">scaling_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyTypeInput">scaling_policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceIdInput">scaling_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceTypeInput">scaling_resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicyInput">scheduled_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmId">alarm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTime">cool_down_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyName">scaling_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyType">scaling_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceId">scaling_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceType">scaling_resource_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.metadata"></a>

```python
metadata: AsPolicyV2MetadataList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList">AsPolicyV2MetadataList</a>

---

##### `scaling_policy_action`<sup>Required</sup> <a name="scaling_policy_action" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyAction"></a>

```python
scaling_policy_action: AsPolicyV2ScalingPolicyActionList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList">AsPolicyV2ScalingPolicyActionList</a>

---

##### `scheduled_policy`<sup>Required</sup> <a name="scheduled_policy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicy"></a>

```python
scheduled_policy: AsPolicyV2ScheduledPolicyList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList">AsPolicyV2ScheduledPolicyList</a>

---

##### `alarm_id_input`<sup>Optional</sup> <a name="alarm_id_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmIdInput"></a>

```python
alarm_id_input: str
```

- *Type:* str

---

##### `cool_down_time_input`<sup>Optional</sup> <a name="cool_down_time_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTimeInput"></a>

```python
cool_down_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scaling_policy_action_input`<sup>Optional</sup> <a name="scaling_policy_action_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyActionInput"></a>

```python
scaling_policy_action_input: typing.Union[IResolvable, typing.List[AsPolicyV2ScalingPolicyAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>]]

---

##### `scaling_policy_name_input`<sup>Optional</sup> <a name="scaling_policy_name_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyNameInput"></a>

```python
scaling_policy_name_input: str
```

- *Type:* str

---

##### `scaling_policy_type_input`<sup>Optional</sup> <a name="scaling_policy_type_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyTypeInput"></a>

```python
scaling_policy_type_input: str
```

- *Type:* str

---

##### `scaling_resource_id_input`<sup>Optional</sup> <a name="scaling_resource_id_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceIdInput"></a>

```python
scaling_resource_id_input: str
```

- *Type:* str

---

##### `scaling_resource_type_input`<sup>Optional</sup> <a name="scaling_resource_type_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceTypeInput"></a>

```python
scaling_resource_type_input: str
```

- *Type:* str

---

##### `scheduled_policy_input`<sup>Optional</sup> <a name="scheduled_policy_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicyInput"></a>

```python
scheduled_policy_input: typing.Union[IResolvable, typing.List[AsPolicyV2ScheduledPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>]]

---

##### `alarm_id`<sup>Required</sup> <a name="alarm_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmId"></a>

```python
alarm_id: str
```

- *Type:* str

---

##### `cool_down_time`<sup>Required</sup> <a name="cool_down_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTime"></a>

```python
cool_down_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `scaling_policy_name`<sup>Required</sup> <a name="scaling_policy_name" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyName"></a>

```python
scaling_policy_name: str
```

- *Type:* str

---

##### `scaling_policy_type`<sup>Required</sup> <a name="scaling_policy_type" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyType"></a>

```python
scaling_policy_type: str
```

- *Type:* str

---

##### `scaling_resource_id`<sup>Required</sup> <a name="scaling_resource_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceId"></a>

```python
scaling_resource_id: str
```

- *Type:* str

---

##### `scaling_resource_type`<sup>Required</sup> <a name="scaling_resource_type" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceType"></a>

```python
scaling_resource_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AsPolicyV2Config <a name="AsPolicyV2Config" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scaling_policy_name: str,
  scaling_policy_type: str,
  scaling_resource_id: str,
  scaling_resource_type: str,
  alarm_id: str = None,
  cool_down_time: typing.Union[int, float] = None,
  id: str = None,
  region: str = None,
  scaling_policy_action: typing.Union[IResolvable, typing.List[AsPolicyV2ScalingPolicyAction]] = None,
  scheduled_policy: typing.Union[IResolvable, typing.List[AsPolicyV2ScheduledPolicy]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyName">scaling_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_policy_name AsPolicyV2#scaling_policy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyType">scaling_policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_policy_type AsPolicyV2#scaling_policy_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceId">scaling_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_resource_id AsPolicyV2#scaling_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceType">scaling_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_resource_type AsPolicyV2#scaling_resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.alarmId">alarm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#alarm_id AsPolicyV2#alarm_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.coolDownTime">cool_down_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#cool_down_time AsPolicyV2#cool_down_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#id AsPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#region AsPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyAction">scaling_policy_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>]]</code> | scaling_policy_action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scheduledPolicy">scheduled_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>]]</code> | scheduled_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scaling_policy_name`<sup>Required</sup> <a name="scaling_policy_name" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyName"></a>

```python
scaling_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_policy_name AsPolicyV2#scaling_policy_name}.

---

##### `scaling_policy_type`<sup>Required</sup> <a name="scaling_policy_type" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyType"></a>

```python
scaling_policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_policy_type AsPolicyV2#scaling_policy_type}.

---

##### `scaling_resource_id`<sup>Required</sup> <a name="scaling_resource_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceId"></a>

```python
scaling_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_resource_id AsPolicyV2#scaling_resource_id}.

---

##### `scaling_resource_type`<sup>Required</sup> <a name="scaling_resource_type" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceType"></a>

```python
scaling_resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_resource_type AsPolicyV2#scaling_resource_type}.

---

##### `alarm_id`<sup>Optional</sup> <a name="alarm_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.alarmId"></a>

```python
alarm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#alarm_id AsPolicyV2#alarm_id}.

---

##### `cool_down_time`<sup>Optional</sup> <a name="cool_down_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.coolDownTime"></a>

```python
cool_down_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#cool_down_time AsPolicyV2#cool_down_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#id AsPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#region AsPolicyV2#region}.

---

##### `scaling_policy_action`<sup>Optional</sup> <a name="scaling_policy_action" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyAction"></a>

```python
scaling_policy_action: typing.Union[IResolvable, typing.List[AsPolicyV2ScalingPolicyAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>]]

scaling_policy_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scaling_policy_action AsPolicyV2#scaling_policy_action}

---

##### `scheduled_policy`<sup>Optional</sup> <a name="scheduled_policy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scheduledPolicy"></a>

```python
scheduled_policy: typing.Union[IResolvable, typing.List[AsPolicyV2ScheduledPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>]]

scheduled_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#scheduled_policy AsPolicyV2#scheduled_policy}

---

### AsPolicyV2Metadata <a name="AsPolicyV2Metadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2Metadata()
```


### AsPolicyV2ScalingPolicyAction <a name="AsPolicyV2ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2ScalingPolicyAction(
  limits: typing.Union[int, float] = None,
  operation: str = None,
  percentage: typing.Union[int, float] = None,
  size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.limits">limits</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#limits AsPolicyV2#limits}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#operation AsPolicyV2#operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#percentage AsPolicyV2#percentage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#size AsPolicyV2#size}. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.limits"></a>

```python
limits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#limits AsPolicyV2#limits}.

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.operation"></a>

```python
operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#operation AsPolicyV2#operation}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#percentage AsPolicyV2#percentage}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#size AsPolicyV2#size}.

---

### AsPolicyV2ScheduledPolicy <a name="AsPolicyV2ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2ScheduledPolicy(
  launch_time: str,
  end_time: str = None,
  recurrence_type: str = None,
  recurrence_value: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.launchTime">launch_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#launch_time AsPolicyV2#launch_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#end_time AsPolicyV2#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#recurrence_type AsPolicyV2#recurrence_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceValue">recurrence_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#recurrence_value AsPolicyV2#recurrence_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#start_time AsPolicyV2#start_time}. |

---

##### `launch_time`<sup>Required</sup> <a name="launch_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.launchTime"></a>

```python
launch_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#launch_time AsPolicyV2#launch_time}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#end_time AsPolicyV2#end_time}.

---

##### `recurrence_type`<sup>Optional</sup> <a name="recurrence_type" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#recurrence_type AsPolicyV2#recurrence_type}.

---

##### `recurrence_value`<sup>Optional</sup> <a name="recurrence_value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceValue"></a>

```python
recurrence_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#recurrence_value AsPolicyV2#recurrence_value}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/as_policy_v2#start_time AsPolicyV2#start_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsPolicyV2MetadataList <a name="AsPolicyV2MetadataList" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2MetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AsPolicyV2MetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AsPolicyV2MetadataOutputReference <a name="AsPolicyV2MetadataOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.bandwidthShareType">bandwidth_share_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipAddress">eip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipId">eip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata">AsPolicyV2Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_share_type`<sup>Required</sup> <a name="bandwidth_share_type" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.bandwidthShareType"></a>

```python
bandwidth_share_type: str
```

- *Type:* str

---

##### `eip_address`<sup>Required</sup> <a name="eip_address" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipAddress"></a>

```python
eip_address: str
```

- *Type:* str

---

##### `eip_id`<sup>Required</sup> <a name="eip_id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipId"></a>

```python
eip_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.internalValue"></a>

```python
internal_value: AsPolicyV2Metadata
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata">AsPolicyV2Metadata</a>

---


### AsPolicyV2ScalingPolicyActionList <a name="AsPolicyV2ScalingPolicyActionList" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2ScalingPolicyActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AsPolicyV2ScalingPolicyActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AsPolicyV2ScalingPolicyAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>]]

---


### AsPolicyV2ScalingPolicyActionOutputReference <a name="AsPolicyV2ScalingPolicyActionOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetOperation">reset_operation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetPercentage">reset_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetSize">reset_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_operation` <a name="reset_operation" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetOperation"></a>

```python
def reset_operation() -> None
```

##### `reset_percentage` <a name="reset_percentage" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetPercentage"></a>

```python
def reset_percentage() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetSize"></a>

```python
def reset_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limitsInput">limits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limits">limits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limitsInput"></a>

```python
limits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limits"></a>

```python
limits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AsPolicyV2ScalingPolicyAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>]

---


### AsPolicyV2ScheduledPolicyList <a name="AsPolicyV2ScheduledPolicyList" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2ScheduledPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AsPolicyV2ScheduledPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AsPolicyV2ScheduledPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>]]

---


### AsPolicyV2ScheduledPolicyOutputReference <a name="AsPolicyV2ScheduledPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v2

asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceType">reset_recurrence_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceValue">reset_recurrence_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_recurrence_type` <a name="reset_recurrence_type" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceType"></a>

```python
def reset_recurrence_type() -> None
```

##### `reset_recurrence_value` <a name="reset_recurrence_value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceValue"></a>

```python
def reset_recurrence_value() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTimeInput">launch_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceTypeInput">recurrence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValueInput">recurrence_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTime">launch_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValue">recurrence_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `launch_time_input`<sup>Optional</sup> <a name="launch_time_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTimeInput"></a>

```python
launch_time_input: str
```

- *Type:* str

---

##### `recurrence_type_input`<sup>Optional</sup> <a name="recurrence_type_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceTypeInput"></a>

```python
recurrence_type_input: str
```

- *Type:* str

---

##### `recurrence_value_input`<sup>Optional</sup> <a name="recurrence_value_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValueInput"></a>

```python
recurrence_value_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `launch_time`<sup>Required</sup> <a name="launch_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTime"></a>

```python
launch_time: str
```

- *Type:* str

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

---

##### `recurrence_value`<sup>Required</sup> <a name="recurrence_value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValue"></a>

```python
recurrence_value: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AsPolicyV2ScheduledPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>]

---



