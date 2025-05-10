# `wafPolicyV1` Submodule <a name="`wafPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafPolicyV1 <a name="WafPolicyV1" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1 opentelekomcloud_waf_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1(
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
  action: WafPolicyV1Action = None,
  full_detection: typing.Union[bool, IResolvable] = None,
  hosts: typing.List[str] = None,
  id: str = None,
  level: typing.Union[int, float] = None,
  options: WafPolicyV1Options = None,
  timeouts: WafPolicyV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#name WafPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.fullDetection">full_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#full_detection WafPolicyV1#full_detection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.hosts">hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#hosts WafPolicyV1#hosts}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#id WafPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.level">level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#level WafPolicyV1#level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | options block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#name WafPolicyV1#name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#action WafPolicyV1#action}

---

##### `full_detection`<sup>Optional</sup> <a name="full_detection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.fullDetection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#full_detection WafPolicyV1#full_detection}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.hosts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#hosts WafPolicyV1#hosts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#id WafPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.level"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#level WafPolicyV1#level}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#options WafPolicyV1#options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#timeouts WafPolicyV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetFullDetection">reset_full_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetLevel">reset_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction"></a>

```python
def put_action(
  category: str
) -> None
```

###### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction.parameter.category"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#category WafPolicyV1#category}.

---

##### `put_options` <a name="put_options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions"></a>

```python
def put_options(
  antitamper: typing.Union[bool, IResolvable] = None,
  cc: typing.Union[bool, IResolvable] = None,
  common: typing.Union[bool, IResolvable] = None,
  crawler: typing.Union[bool, IResolvable] = None,
  crawler_engine: typing.Union[bool, IResolvable] = None,
  crawler_other: typing.Union[bool, IResolvable] = None,
  crawler_scanner: typing.Union[bool, IResolvable] = None,
  crawler_script: typing.Union[bool, IResolvable] = None,
  custom: typing.Union[bool, IResolvable] = None,
  ignore: typing.Union[bool, IResolvable] = None,
  privacy: typing.Union[bool, IResolvable] = None,
  webattack: typing.Union[bool, IResolvable] = None,
  webshell: typing.Union[bool, IResolvable] = None,
  whiteblackip: typing.Union[bool, IResolvable] = None
) -> None
```

###### `antitamper`<sup>Optional</sup> <a name="antitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.antitamper"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#antitamper WafPolicyV1#antitamper}.

---

###### `cc`<sup>Optional</sup> <a name="cc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.cc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#cc WafPolicyV1#cc}.

---

###### `common`<sup>Optional</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.common"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#common WafPolicyV1#common}.

---

###### `crawler`<sup>Optional</sup> <a name="crawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.crawler"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler WafPolicyV1#crawler}.

---

###### `crawler_engine`<sup>Optional</sup> <a name="crawler_engine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.crawlerEngine"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_engine WafPolicyV1#crawler_engine}.

---

###### `crawler_other`<sup>Optional</sup> <a name="crawler_other" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.crawlerOther"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_other WafPolicyV1#crawler_other}.

---

###### `crawler_scanner`<sup>Optional</sup> <a name="crawler_scanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.crawlerScanner"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_scanner WafPolicyV1#crawler_scanner}.

---

###### `crawler_script`<sup>Optional</sup> <a name="crawler_script" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.crawlerScript"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_script WafPolicyV1#crawler_script}.

---

###### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.custom"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#custom WafPolicyV1#custom}.

---

###### `ignore`<sup>Optional</sup> <a name="ignore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.ignore"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#ignore WafPolicyV1#ignore}.

---

###### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.privacy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#privacy WafPolicyV1#privacy}.

---

###### `webattack`<sup>Optional</sup> <a name="webattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.webattack"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#webattack WafPolicyV1#webattack}.

---

###### `webshell`<sup>Optional</sup> <a name="webshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.webshell"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#webshell WafPolicyV1#webshell}.

---

###### `whiteblackip`<sup>Optional</sup> <a name="whiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.whiteblackip"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#whiteblackip WafPolicyV1#whiteblackip}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#create WafPolicyV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#delete WafPolicyV1#delete}.

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_full_detection` <a name="reset_full_detection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetFullDetection"></a>

```python
def reset_full_detection() -> None
```

##### `reset_hosts` <a name="reset_hosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_level` <a name="reset_level" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetLevel"></a>

```python
def reset_level() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WafPolicyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WafPolicyV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WafPolicyV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WafPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.action">action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference">WafPolicyV1ActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.options">options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference">WafPolicyV1OptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference">WafPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetectionInput">full_detection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.levelInput">level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.optionsInput">options_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetection">full_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.level">level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.action"></a>

```python
action: WafPolicyV1ActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference">WafPolicyV1ActionOutputReference</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.options"></a>

```python
options: WafPolicyV1OptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference">WafPolicyV1OptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeouts"></a>

```python
timeouts: WafPolicyV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference">WafPolicyV1TimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.actionInput"></a>

```python
action_input: WafPolicyV1Action
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

---

##### `full_detection_input`<sup>Optional</sup> <a name="full_detection_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetectionInput"></a>

```python
full_detection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.levelInput"></a>

```python
level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.optionsInput"></a>

```python
options_input: WafPolicyV1Options
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WafPolicyV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>]

---

##### `full_detection`<sup>Required</sup> <a name="full_detection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetection"></a>

```python
full_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.level"></a>

```python
level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafPolicyV1Action <a name="WafPolicyV1Action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1Action(
  category: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#category WafPolicyV1#category}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#category WafPolicyV1#category}.

---

### WafPolicyV1Config <a name="WafPolicyV1Config" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  action: WafPolicyV1Action = None,
  full_detection: typing.Union[bool, IResolvable] = None,
  hosts: typing.List[str] = None,
  id: str = None,
  level: typing.Union[int, float] = None,
  options: WafPolicyV1Options = None,
  timeouts: WafPolicyV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#name WafPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.action">action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.fullDetection">full_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#full_detection WafPolicyV1#full_detection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#hosts WafPolicyV1#hosts}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#id WafPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.level">level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#level WafPolicyV1#level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.options">options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | options block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#name WafPolicyV1#name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.action"></a>

```python
action: WafPolicyV1Action
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#action WafPolicyV1#action}

---

##### `full_detection`<sup>Optional</sup> <a name="full_detection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.fullDetection"></a>

```python
full_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#full_detection WafPolicyV1#full_detection}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#hosts WafPolicyV1#hosts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#id WafPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.level"></a>

```python
level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#level WafPolicyV1#level}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.options"></a>

```python
options: WafPolicyV1Options
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#options WafPolicyV1#options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.timeouts"></a>

```python
timeouts: WafPolicyV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#timeouts WafPolicyV1#timeouts}

---

### WafPolicyV1Options <a name="WafPolicyV1Options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1Options(
  antitamper: typing.Union[bool, IResolvable] = None,
  cc: typing.Union[bool, IResolvable] = None,
  common: typing.Union[bool, IResolvable] = None,
  crawler: typing.Union[bool, IResolvable] = None,
  crawler_engine: typing.Union[bool, IResolvable] = None,
  crawler_other: typing.Union[bool, IResolvable] = None,
  crawler_scanner: typing.Union[bool, IResolvable] = None,
  crawler_script: typing.Union[bool, IResolvable] = None,
  custom: typing.Union[bool, IResolvable] = None,
  ignore: typing.Union[bool, IResolvable] = None,
  privacy: typing.Union[bool, IResolvable] = None,
  webattack: typing.Union[bool, IResolvable] = None,
  webshell: typing.Union[bool, IResolvable] = None,
  whiteblackip: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.antitamper">antitamper</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#antitamper WafPolicyV1#antitamper}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.cc">cc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#cc WafPolicyV1#cc}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.common">common</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#common WafPolicyV1#common}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawler">crawler</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler WafPolicyV1#crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerEngine">crawler_engine</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_engine WafPolicyV1#crawler_engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerOther">crawler_other</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_other WafPolicyV1#crawler_other}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScanner">crawler_scanner</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_scanner WafPolicyV1#crawler_scanner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScript">crawler_script</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_script WafPolicyV1#crawler_script}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.custom">custom</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#custom WafPolicyV1#custom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.ignore">ignore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#ignore WafPolicyV1#ignore}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.privacy">privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#privacy WafPolicyV1#privacy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webattack">webattack</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#webattack WafPolicyV1#webattack}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webshell">webshell</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#webshell WafPolicyV1#webshell}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.whiteblackip">whiteblackip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#whiteblackip WafPolicyV1#whiteblackip}. |

---

##### `antitamper`<sup>Optional</sup> <a name="antitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.antitamper"></a>

```python
antitamper: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#antitamper WafPolicyV1#antitamper}.

---

##### `cc`<sup>Optional</sup> <a name="cc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.cc"></a>

```python
cc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#cc WafPolicyV1#cc}.

---

##### `common`<sup>Optional</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.common"></a>

```python
common: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#common WafPolicyV1#common}.

---

##### `crawler`<sup>Optional</sup> <a name="crawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawler"></a>

```python
crawler: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler WafPolicyV1#crawler}.

---

##### `crawler_engine`<sup>Optional</sup> <a name="crawler_engine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerEngine"></a>

```python
crawler_engine: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_engine WafPolicyV1#crawler_engine}.

---

##### `crawler_other`<sup>Optional</sup> <a name="crawler_other" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerOther"></a>

```python
crawler_other: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_other WafPolicyV1#crawler_other}.

---

##### `crawler_scanner`<sup>Optional</sup> <a name="crawler_scanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScanner"></a>

```python
crawler_scanner: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_scanner WafPolicyV1#crawler_scanner}.

---

##### `crawler_script`<sup>Optional</sup> <a name="crawler_script" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScript"></a>

```python
crawler_script: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#crawler_script WafPolicyV1#crawler_script}.

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.custom"></a>

```python
custom: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#custom WafPolicyV1#custom}.

---

##### `ignore`<sup>Optional</sup> <a name="ignore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.ignore"></a>

```python
ignore: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#ignore WafPolicyV1#ignore}.

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.privacy"></a>

```python
privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#privacy WafPolicyV1#privacy}.

---

##### `webattack`<sup>Optional</sup> <a name="webattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webattack"></a>

```python
webattack: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#webattack WafPolicyV1#webattack}.

---

##### `webshell`<sup>Optional</sup> <a name="webshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webshell"></a>

```python
webshell: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#webshell WafPolicyV1#webshell}.

---

##### `whiteblackip`<sup>Optional</sup> <a name="whiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.whiteblackip"></a>

```python
whiteblackip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#whiteblackip WafPolicyV1#whiteblackip}.

---

### WafPolicyV1Timeouts <a name="WafPolicyV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#create WafPolicyV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#delete WafPolicyV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#create WafPolicyV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.38/docs/resources/waf_policy_v1#delete WafPolicyV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafPolicyV1ActionOutputReference <a name="WafPolicyV1ActionOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1ActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.internalValue"></a>

```python
internal_value: WafPolicyV1Action
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

---


### WafPolicyV1OptionsOutputReference <a name="WafPolicyV1OptionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1OptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetAntitamper">reset_antitamper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCc">reset_cc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCommon">reset_common</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawler">reset_crawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerEngine">reset_crawler_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerOther">reset_crawler_other</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScanner">reset_crawler_scanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScript">reset_crawler_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetIgnore">reset_ignore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetPrivacy">reset_privacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebattack">reset_webattack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebshell">reset_webshell</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWhiteblackip">reset_whiteblackip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_antitamper` <a name="reset_antitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetAntitamper"></a>

```python
def reset_antitamper() -> None
```

##### `reset_cc` <a name="reset_cc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCc"></a>

```python
def reset_cc() -> None
```

##### `reset_common` <a name="reset_common" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCommon"></a>

```python
def reset_common() -> None
```

##### `reset_crawler` <a name="reset_crawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawler"></a>

```python
def reset_crawler() -> None
```

##### `reset_crawler_engine` <a name="reset_crawler_engine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerEngine"></a>

```python
def reset_crawler_engine() -> None
```

##### `reset_crawler_other` <a name="reset_crawler_other" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerOther"></a>

```python
def reset_crawler_other() -> None
```

##### `reset_crawler_scanner` <a name="reset_crawler_scanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScanner"></a>

```python
def reset_crawler_scanner() -> None
```

##### `reset_crawler_script` <a name="reset_crawler_script" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScript"></a>

```python
def reset_crawler_script() -> None
```

##### `reset_custom` <a name="reset_custom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_ignore` <a name="reset_ignore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetIgnore"></a>

```python
def reset_ignore() -> None
```

##### `reset_privacy` <a name="reset_privacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetPrivacy"></a>

```python
def reset_privacy() -> None
```

##### `reset_webattack` <a name="reset_webattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebattack"></a>

```python
def reset_webattack() -> None
```

##### `reset_webshell` <a name="reset_webshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebshell"></a>

```python
def reset_webshell() -> None
```

##### `reset_whiteblackip` <a name="reset_whiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWhiteblackip"></a>

```python
def reset_whiteblackip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamperInput">antitamper_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ccInput">cc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.commonInput">common_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngineInput">crawler_engine_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerInput">crawler_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOtherInput">crawler_other_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScannerInput">crawler_scanner_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScriptInput">crawler_script_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.customInput">custom_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignoreInput">ignore_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacyInput">privacy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattackInput">webattack_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshellInput">webshell_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackipInput">whiteblackip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamper">antitamper</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.cc">cc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.common">common</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawler">crawler</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngine">crawler_engine</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOther">crawler_other</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScanner">crawler_scanner</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScript">crawler_script</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.custom">custom</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignore">ignore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacy">privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattack">webattack</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshell">webshell</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackip">whiteblackip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `antitamper_input`<sup>Optional</sup> <a name="antitamper_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamperInput"></a>

```python
antitamper_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cc_input`<sup>Optional</sup> <a name="cc_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ccInput"></a>

```python
cc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_input`<sup>Optional</sup> <a name="common_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.commonInput"></a>

```python
common_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_engine_input`<sup>Optional</sup> <a name="crawler_engine_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngineInput"></a>

```python
crawler_engine_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_input`<sup>Optional</sup> <a name="crawler_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerInput"></a>

```python
crawler_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_other_input`<sup>Optional</sup> <a name="crawler_other_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOtherInput"></a>

```python
crawler_other_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_scanner_input`<sup>Optional</sup> <a name="crawler_scanner_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScannerInput"></a>

```python
crawler_scanner_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_script_input`<sup>Optional</sup> <a name="crawler_script_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScriptInput"></a>

```python
crawler_script_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.customInput"></a>

```python
custom_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_input`<sup>Optional</sup> <a name="ignore_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignoreInput"></a>

```python
ignore_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privacy_input`<sup>Optional</sup> <a name="privacy_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacyInput"></a>

```python
privacy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `webattack_input`<sup>Optional</sup> <a name="webattack_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattackInput"></a>

```python
webattack_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `webshell_input`<sup>Optional</sup> <a name="webshell_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshellInput"></a>

```python
webshell_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `whiteblackip_input`<sup>Optional</sup> <a name="whiteblackip_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackipInput"></a>

```python
whiteblackip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `antitamper`<sup>Required</sup> <a name="antitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamper"></a>

```python
antitamper: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cc`<sup>Required</sup> <a name="cc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.cc"></a>

```python
cc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common`<sup>Required</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.common"></a>

```python
common: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler`<sup>Required</sup> <a name="crawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawler"></a>

```python
crawler: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_engine`<sup>Required</sup> <a name="crawler_engine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngine"></a>

```python
crawler_engine: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_other`<sup>Required</sup> <a name="crawler_other" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOther"></a>

```python
crawler_other: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_scanner`<sup>Required</sup> <a name="crawler_scanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScanner"></a>

```python
crawler_scanner: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_script`<sup>Required</sup> <a name="crawler_script" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScript"></a>

```python
crawler_script: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.custom"></a>

```python
custom: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore`<sup>Required</sup> <a name="ignore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignore"></a>

```python
ignore: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacy"></a>

```python
privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `webattack`<sup>Required</sup> <a name="webattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattack"></a>

```python
webattack: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `webshell`<sup>Required</sup> <a name="webshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshell"></a>

```python
webshell: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `whiteblackip`<sup>Required</sup> <a name="whiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackip"></a>

```python
whiteblackip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.internalValue"></a>

```python
internal_value: WafPolicyV1Options
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

---


### WafPolicyV1TimeoutsOutputReference <a name="WafPolicyV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_policy_v1

wafPolicyV1.WafPolicyV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafPolicyV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>]

---



