# `opentelekomcloud_waf_preciseprotection_rule_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_waf_preciseprotection_rule_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1).

# `wafPreciseprotectionRuleV1` Submodule <a name="`wafPreciseprotectionRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafPreciseprotectionRuleV1 <a name="WafPreciseprotectionRuleV1" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1 opentelekomcloud_waf_preciseprotection_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_preciseprotection_rule_v1

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_category: str,
  conditions: typing.Union[IResolvable, typing.List[WafPreciseprotectionRuleV1Conditions]],
  name: str,
  policy_id: str,
  end: str = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  start: str = None,
  time: typing.Union[bool, IResolvable] = None,
  timeouts: WafPreciseprotectionRuleV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.actionCategory">action_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.time">time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_category`<sup>Required</sup> <a name="action_category" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.actionCategory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}.

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.conditions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#conditions WafPreciseprotectionRuleV1#conditions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}.

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}.

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.end"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}.

---

##### `time`<sup>Optional</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.time"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#timeouts WafPreciseprotectionRuleV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetEnd">reset_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetStart">reset_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTime">reset_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions"></a>

```python
def put_conditions(
  value: typing.Union[IResolvable, typing.List[WafPreciseprotectionRuleV1Conditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#create WafPreciseprotectionRuleV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#delete WafPreciseprotectionRuleV1#delete}.

---

##### `reset_end` <a name="reset_end" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetEnd"></a>

```python
def reset_end() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetStart"></a>

```python
def reset_start() -> None
```

##### `reset_time` <a name="reset_time" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTime"></a>

```python
def reset_time() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_preciseprotection_rule_v1

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_preciseprotection_rule_v1

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_preciseprotection_rule_v1

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList">WafPreciseprotectionRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference">WafPreciseprotectionRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategoryInput">action_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditionsInput">conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeInput">time_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategory">action_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.time">time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditions"></a>

```python
conditions: WafPreciseprotectionRuleV1ConditionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList">WafPreciseprotectionRuleV1ConditionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeouts"></a>

```python
timeouts: WafPreciseprotectionRuleV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference">WafPreciseprotectionRuleV1TimeoutsOutputReference</a>

---

##### `action_category_input`<sup>Optional</sup> <a name="action_category_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategoryInput"></a>

```python
action_category_input: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditionsInput"></a>

```python
conditions_input: typing.Union[IResolvable, typing.List[WafPreciseprotectionRuleV1Conditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>]]

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeInput"></a>

```python
time_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[WafPreciseprotectionRuleV1Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>, cdktf.IResolvable]

---

##### `action_category`<sup>Required</sup> <a name="action_category" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategory"></a>

```python
action_category: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.time"></a>

```python
time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafPreciseprotectionRuleV1Conditions <a name="WafPreciseprotectionRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_preciseprotection_rule_v1

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions(
  category: str,
  contents: typing.List[str],
  logic: str,
  index: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#category WafPreciseprotectionRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.contents">contents</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#contents WafPreciseprotectionRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.logic">logic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#logic WafPreciseprotectionRuleV1#logic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.index">index</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#index WafPreciseprotectionRuleV1#index}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#category WafPreciseprotectionRuleV1#category}.

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.contents"></a>

```python
contents: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#contents WafPreciseprotectionRuleV1#contents}.

---

##### `logic`<sup>Required</sup> <a name="logic" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.logic"></a>

```python
logic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#logic WafPreciseprotectionRuleV1#logic}.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.index"></a>

```python
index: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#index WafPreciseprotectionRuleV1#index}.

---

### WafPreciseprotectionRuleV1Config <a name="WafPreciseprotectionRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_preciseprotection_rule_v1

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_category: str,
  conditions: typing.Union[IResolvable, typing.List[WafPreciseprotectionRuleV1Conditions]],
  name: str,
  policy_id: str,
  end: str = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  start: str = None,
  time: typing.Union[bool, IResolvable] = None,
  timeouts: WafPreciseprotectionRuleV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.actionCategory">action_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.time">time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_category`<sup>Required</sup> <a name="action_category" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.actionCategory"></a>

```python
action_category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}.

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.conditions"></a>

```python
conditions: typing.Union[IResolvable, typing.List[WafPreciseprotectionRuleV1Conditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#conditions WafPreciseprotectionRuleV1#conditions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}.

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}.

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.end"></a>

```python
end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}.

---

##### `time`<sup>Optional</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.time"></a>

```python
time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.timeouts"></a>

```python
timeouts: WafPreciseprotectionRuleV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#timeouts WafPreciseprotectionRuleV1#timeouts}

---

### WafPreciseprotectionRuleV1Timeouts <a name="WafPreciseprotectionRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_preciseprotection_rule_v1

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#create WafPreciseprotectionRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#delete WafPreciseprotectionRuleV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#create WafPreciseprotectionRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/waf_preciseprotection_rule_v1#delete WafPreciseprotectionRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafPreciseprotectionRuleV1ConditionsList <a name="WafPreciseprotectionRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_preciseprotection_rule_v1

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafPreciseprotectionRuleV1ConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafPreciseprotectionRuleV1Conditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>]]

---


### WafPreciseprotectionRuleV1ConditionsOutputReference <a name="WafPreciseprotectionRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_preciseprotection_rule_v1

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resetIndex">reset_index</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_index` <a name="reset_index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resetIndex"></a>

```python
def reset_index() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contentsInput">contents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.indexInput">index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logicInput">logic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contents">contents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.index">index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logic">logic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `contents_input`<sup>Optional</sup> <a name="contents_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contentsInput"></a>

```python
contents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.indexInput"></a>

```python
index_input: str
```

- *Type:* str

---

##### `logic_input`<sup>Optional</sup> <a name="logic_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logicInput"></a>

```python
logic_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contents"></a>

```python
contents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.index"></a>

```python
index: str
```

- *Type:* str

---

##### `logic`<sup>Required</sup> <a name="logic" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logic"></a>

```python
logic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafPreciseprotectionRuleV1Conditions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>, cdktf.IResolvable]

---


### WafPreciseprotectionRuleV1TimeoutsOutputReference <a name="WafPreciseprotectionRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_preciseprotection_rule_v1

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafPreciseprotectionRuleV1Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>, cdktf.IResolvable]

---



