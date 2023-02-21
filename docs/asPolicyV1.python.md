# `asPolicyV1` Submodule <a name="`asPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.asPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsPolicyV1 <a name="AsPolicyV1" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1 opentelekomcloud_as_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v1

asPolicyV1.AsPolicyV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scaling_group_id: str,
  scaling_policy_name: str,
  scaling_policy_type: str,
  alarm_id: str = None,
  cool_down_time: typing.Union[int, float] = None,
  id: str = None,
  region: str = None,
  scaling_policy_action: AsPolicyV1ScalingPolicyAction = None,
  scheduled_policy: AsPolicyV1ScheduledPolicy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scalingGroupId">scaling_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_group_id AsPolicyV1#scaling_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scalingPolicyName">scaling_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_name AsPolicyV1#scaling_policy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scalingPolicyType">scaling_policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_type AsPolicyV1#scaling_policy_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.alarmId">alarm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#alarm_id AsPolicyV1#alarm_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.coolDownTime">cool_down_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#cool_down_time AsPolicyV1#cool_down_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#id AsPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#region AsPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scalingPolicyAction">scaling_policy_action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a></code> | scaling_policy_action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scheduledPolicy">scheduled_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a></code> | scheduled_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scaling_group_id`<sup>Required</sup> <a name="scaling_group_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scalingGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_group_id AsPolicyV1#scaling_group_id}.

---

##### `scaling_policy_name`<sup>Required</sup> <a name="scaling_policy_name" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scalingPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_name AsPolicyV1#scaling_policy_name}.

---

##### `scaling_policy_type`<sup>Required</sup> <a name="scaling_policy_type" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scalingPolicyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_type AsPolicyV1#scaling_policy_type}.

---

##### `alarm_id`<sup>Optional</sup> <a name="alarm_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.alarmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#alarm_id AsPolicyV1#alarm_id}.

---

##### `cool_down_time`<sup>Optional</sup> <a name="cool_down_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.coolDownTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#cool_down_time AsPolicyV1#cool_down_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#id AsPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#region AsPolicyV1#region}.

---

##### `scaling_policy_action`<sup>Optional</sup> <a name="scaling_policy_action" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scalingPolicyAction"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

scaling_policy_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_action AsPolicyV1#scaling_policy_action}

---

##### `scheduled_policy`<sup>Optional</sup> <a name="scheduled_policy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scheduledPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

scheduled_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scheduled_policy AsPolicyV1#scheduled_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScalingPolicyAction">put_scaling_policy_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy">put_scheduled_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetAlarmId">reset_alarm_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetCoolDownTime">reset_cool_down_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScalingPolicyAction">reset_scaling_policy_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScheduledPolicy">reset_scheduled_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_scaling_policy_action` <a name="put_scaling_policy_action" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScalingPolicyAction"></a>

```python
def put_scaling_policy_action(
  instance_number: typing.Union[int, float] = None,
  operation: str = None
) -> None
```

###### `instance_number`<sup>Optional</sup> <a name="instance_number" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScalingPolicyAction.parameter.instanceNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#instance_number AsPolicyV1#instance_number}.

---

###### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScalingPolicyAction.parameter.operation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#operation AsPolicyV1#operation}.

---

##### `put_scheduled_policy` <a name="put_scheduled_policy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy"></a>

```python
def put_scheduled_policy(
  launch_time: str,
  end_time: str = None,
  recurrence_type: str = None,
  recurrence_value: str = None,
  start_time: str = None
) -> None
```

###### `launch_time`<sup>Required</sup> <a name="launch_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy.parameter.launchTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#launch_time AsPolicyV1#launch_time}.

---

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#end_time AsPolicyV1#end_time}.

---

###### `recurrence_type`<sup>Optional</sup> <a name="recurrence_type" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy.parameter.recurrenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#recurrence_type AsPolicyV1#recurrence_type}.

---

###### `recurrence_value`<sup>Optional</sup> <a name="recurrence_value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy.parameter.recurrenceValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#recurrence_value AsPolicyV1#recurrence_value}.

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#start_time AsPolicyV1#start_time}.

---

##### `reset_alarm_id` <a name="reset_alarm_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetAlarmId"></a>

```python
def reset_alarm_id() -> None
```

##### `reset_cool_down_time` <a name="reset_cool_down_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetCoolDownTime"></a>

```python
def reset_cool_down_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scaling_policy_action` <a name="reset_scaling_policy_action" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScalingPolicyAction"></a>

```python
def reset_scaling_policy_action() -> None
```

##### `reset_scheduled_policy` <a name="reset_scheduled_policy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScheduledPolicy"></a>

```python
def reset_scheduled_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v1

asPolicyV1.AsPolicyV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v1

asPolicyV1.AsPolicyV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v1

asPolicyV1.AsPolicyV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyAction">scaling_policy_action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference">AsPolicyV1ScalingPolicyActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicy">scheduled_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference">AsPolicyV1ScheduledPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmIdInput">alarm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTimeInput">cool_down_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupIdInput">scaling_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyActionInput">scaling_policy_action_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyNameInput">scaling_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyTypeInput">scaling_policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicyInput">scheduled_policy_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmId">alarm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTime">cool_down_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupId">scaling_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyName">scaling_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyType">scaling_policy_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scaling_policy_action`<sup>Required</sup> <a name="scaling_policy_action" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyAction"></a>

```python
scaling_policy_action: AsPolicyV1ScalingPolicyActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference">AsPolicyV1ScalingPolicyActionOutputReference</a>

---

##### `scheduled_policy`<sup>Required</sup> <a name="scheduled_policy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicy"></a>

```python
scheduled_policy: AsPolicyV1ScheduledPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference">AsPolicyV1ScheduledPolicyOutputReference</a>

---

##### `alarm_id_input`<sup>Optional</sup> <a name="alarm_id_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmIdInput"></a>

```python
alarm_id_input: str
```

- *Type:* str

---

##### `cool_down_time_input`<sup>Optional</sup> <a name="cool_down_time_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTimeInput"></a>

```python
cool_down_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scaling_group_id_input`<sup>Optional</sup> <a name="scaling_group_id_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupIdInput"></a>

```python
scaling_group_id_input: str
```

- *Type:* str

---

##### `scaling_policy_action_input`<sup>Optional</sup> <a name="scaling_policy_action_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyActionInput"></a>

```python
scaling_policy_action_input: AsPolicyV1ScalingPolicyAction
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

---

##### `scaling_policy_name_input`<sup>Optional</sup> <a name="scaling_policy_name_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyNameInput"></a>

```python
scaling_policy_name_input: str
```

- *Type:* str

---

##### `scaling_policy_type_input`<sup>Optional</sup> <a name="scaling_policy_type_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyTypeInput"></a>

```python
scaling_policy_type_input: str
```

- *Type:* str

---

##### `scheduled_policy_input`<sup>Optional</sup> <a name="scheduled_policy_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicyInput"></a>

```python
scheduled_policy_input: AsPolicyV1ScheduledPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

---

##### `alarm_id`<sup>Required</sup> <a name="alarm_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmId"></a>

```python
alarm_id: str
```

- *Type:* str

---

##### `cool_down_time`<sup>Required</sup> <a name="cool_down_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTime"></a>

```python
cool_down_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `scaling_group_id`<sup>Required</sup> <a name="scaling_group_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupId"></a>

```python
scaling_group_id: str
```

- *Type:* str

---

##### `scaling_policy_name`<sup>Required</sup> <a name="scaling_policy_name" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyName"></a>

```python
scaling_policy_name: str
```

- *Type:* str

---

##### `scaling_policy_type`<sup>Required</sup> <a name="scaling_policy_type" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyType"></a>

```python
scaling_policy_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AsPolicyV1Config <a name="AsPolicyV1Config" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v1

asPolicyV1.AsPolicyV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scaling_group_id: str,
  scaling_policy_name: str,
  scaling_policy_type: str,
  alarm_id: str = None,
  cool_down_time: typing.Union[int, float] = None,
  id: str = None,
  region: str = None,
  scaling_policy_action: AsPolicyV1ScalingPolicyAction = None,
  scheduled_policy: AsPolicyV1ScheduledPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingGroupId">scaling_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_group_id AsPolicyV1#scaling_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyName">scaling_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_name AsPolicyV1#scaling_policy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyType">scaling_policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_type AsPolicyV1#scaling_policy_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.alarmId">alarm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#alarm_id AsPolicyV1#alarm_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.coolDownTime">cool_down_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#cool_down_time AsPolicyV1#cool_down_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#id AsPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#region AsPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyAction">scaling_policy_action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a></code> | scaling_policy_action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scheduledPolicy">scheduled_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a></code> | scheduled_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scaling_group_id`<sup>Required</sup> <a name="scaling_group_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingGroupId"></a>

```python
scaling_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_group_id AsPolicyV1#scaling_group_id}.

---

##### `scaling_policy_name`<sup>Required</sup> <a name="scaling_policy_name" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyName"></a>

```python
scaling_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_name AsPolicyV1#scaling_policy_name}.

---

##### `scaling_policy_type`<sup>Required</sup> <a name="scaling_policy_type" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyType"></a>

```python
scaling_policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_type AsPolicyV1#scaling_policy_type}.

---

##### `alarm_id`<sup>Optional</sup> <a name="alarm_id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.alarmId"></a>

```python
alarm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#alarm_id AsPolicyV1#alarm_id}.

---

##### `cool_down_time`<sup>Optional</sup> <a name="cool_down_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.coolDownTime"></a>

```python
cool_down_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#cool_down_time AsPolicyV1#cool_down_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#id AsPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#region AsPolicyV1#region}.

---

##### `scaling_policy_action`<sup>Optional</sup> <a name="scaling_policy_action" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyAction"></a>

```python
scaling_policy_action: AsPolicyV1ScalingPolicyAction
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

scaling_policy_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_action AsPolicyV1#scaling_policy_action}

---

##### `scheduled_policy`<sup>Optional</sup> <a name="scheduled_policy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scheduledPolicy"></a>

```python
scheduled_policy: AsPolicyV1ScheduledPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

scheduled_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scheduled_policy AsPolicyV1#scheduled_policy}

---

### AsPolicyV1ScalingPolicyAction <a name="AsPolicyV1ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v1

asPolicyV1.AsPolicyV1ScalingPolicyAction(
  instance_number: typing.Union[int, float] = None,
  operation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.instanceNumber">instance_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#instance_number AsPolicyV1#instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#operation AsPolicyV1#operation}. |

---

##### `instance_number`<sup>Optional</sup> <a name="instance_number" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.instanceNumber"></a>

```python
instance_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#instance_number AsPolicyV1#instance_number}.

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.operation"></a>

```python
operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#operation AsPolicyV1#operation}.

---

### AsPolicyV1ScheduledPolicy <a name="AsPolicyV1ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v1

asPolicyV1.AsPolicyV1ScheduledPolicy(
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
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.launchTime">launch_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#launch_time AsPolicyV1#launch_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#end_time AsPolicyV1#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#recurrence_type AsPolicyV1#recurrence_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceValue">recurrence_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#recurrence_value AsPolicyV1#recurrence_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#start_time AsPolicyV1#start_time}. |

---

##### `launch_time`<sup>Required</sup> <a name="launch_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.launchTime"></a>

```python
launch_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#launch_time AsPolicyV1#launch_time}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#end_time AsPolicyV1#end_time}.

---

##### `recurrence_type`<sup>Optional</sup> <a name="recurrence_type" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#recurrence_type AsPolicyV1#recurrence_type}.

---

##### `recurrence_value`<sup>Optional</sup> <a name="recurrence_value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceValue"></a>

```python
recurrence_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#recurrence_value AsPolicyV1#recurrence_value}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#start_time AsPolicyV1#start_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsPolicyV1ScalingPolicyActionOutputReference <a name="AsPolicyV1ScalingPolicyActionOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v1

asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetInstanceNumber">reset_instance_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetOperation">reset_operation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_number` <a name="reset_instance_number" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetInstanceNumber"></a>

```python
def reset_instance_number() -> None
```

##### `reset_operation` <a name="reset_operation" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetOperation"></a>

```python
def reset_operation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumberInput">instance_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumber">instance_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_number_input`<sup>Optional</sup> <a name="instance_number_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumberInput"></a>

```python
instance_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `instance_number`<sup>Required</sup> <a name="instance_number" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumber"></a>

```python
instance_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.internalValue"></a>

```python
internal_value: AsPolicyV1ScalingPolicyAction
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

---


### AsPolicyV1ScheduledPolicyOutputReference <a name="AsPolicyV1ScheduledPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_policy_v1

asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceType">reset_recurrence_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceValue">reset_recurrence_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_recurrence_type` <a name="reset_recurrence_type" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceType"></a>

```python
def reset_recurrence_type() -> None
```

##### `reset_recurrence_value` <a name="reset_recurrence_value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceValue"></a>

```python
def reset_recurrence_value() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTimeInput">launch_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceTypeInput">recurrence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValueInput">recurrence_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTime">launch_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValue">recurrence_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `launch_time_input`<sup>Optional</sup> <a name="launch_time_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTimeInput"></a>

```python
launch_time_input: str
```

- *Type:* str

---

##### `recurrence_type_input`<sup>Optional</sup> <a name="recurrence_type_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceTypeInput"></a>

```python
recurrence_type_input: str
```

- *Type:* str

---

##### `recurrence_value_input`<sup>Optional</sup> <a name="recurrence_value_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValueInput"></a>

```python
recurrence_value_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `launch_time`<sup>Required</sup> <a name="launch_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTime"></a>

```python
launch_time: str
```

- *Type:* str

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

---

##### `recurrence_value`<sup>Required</sup> <a name="recurrence_value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValue"></a>

```python
recurrence_value: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.internalValue"></a>

```python
internal_value: AsPolicyV1ScheduledPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

---



