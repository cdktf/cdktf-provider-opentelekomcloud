# `asLifecycleHookV1` Submodule <a name="`asLifecycleHookV1` Submodule" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsLifecycleHookV1 <a name="AsLifecycleHookV1" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1 opentelekomcloud_as_lifecycle_hook_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_lifecycle_hook_v1

asLifecycleHookV1.AsLifecycleHookV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  notification_topic_urn: str,
  scaling_group_id: str,
  scaling_lifecycle_hook_name: str,
  scaling_lifecycle_hook_type: str,
  default_result: str = None,
  default_timeout: typing.Union[int, float] = None,
  id: str = None,
  notification_metadata: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.notificationTopicUrn">notification_topic_urn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#notification_topic_urn AsLifecycleHookV1#notification_topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scalingGroupId">scaling_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_group_id AsLifecycleHookV1#scaling_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scalingLifecycleHookName">scaling_lifecycle_hook_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_name AsLifecycleHookV1#scaling_lifecycle_hook_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scalingLifecycleHookType">scaling_lifecycle_hook_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_type AsLifecycleHookV1#scaling_lifecycle_hook_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.defaultResult">default_result</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#default_result AsLifecycleHookV1#default_result}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.defaultTimeout">default_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#default_timeout AsLifecycleHookV1#default_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#id AsLifecycleHookV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.notificationMetadata">notification_metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#notification_metadata AsLifecycleHookV1#notification_metadata}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `notification_topic_urn`<sup>Required</sup> <a name="notification_topic_urn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.notificationTopicUrn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#notification_topic_urn AsLifecycleHookV1#notification_topic_urn}.

---

##### `scaling_group_id`<sup>Required</sup> <a name="scaling_group_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scalingGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_group_id AsLifecycleHookV1#scaling_group_id}.

---

##### `scaling_lifecycle_hook_name`<sup>Required</sup> <a name="scaling_lifecycle_hook_name" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scalingLifecycleHookName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_name AsLifecycleHookV1#scaling_lifecycle_hook_name}.

---

##### `scaling_lifecycle_hook_type`<sup>Required</sup> <a name="scaling_lifecycle_hook_type" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scalingLifecycleHookType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_type AsLifecycleHookV1#scaling_lifecycle_hook_type}.

---

##### `default_result`<sup>Optional</sup> <a name="default_result" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.defaultResult"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#default_result AsLifecycleHookV1#default_result}.

---

##### `default_timeout`<sup>Optional</sup> <a name="default_timeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.defaultTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#default_timeout AsLifecycleHookV1#default_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#id AsLifecycleHookV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_metadata`<sup>Optional</sup> <a name="notification_metadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.notificationMetadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#notification_metadata AsLifecycleHookV1#notification_metadata}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultResult">reset_default_result</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultTimeout">reset_default_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetNotificationMetadata">reset_notification_metadata</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_default_result` <a name="reset_default_result" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultResult"></a>

```python
def reset_default_result() -> None
```

##### `reset_default_timeout` <a name="reset_default_timeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultTimeout"></a>

```python
def reset_default_timeout() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_metadata` <a name="reset_notification_metadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetNotificationMetadata"></a>

```python
def reset_notification_metadata() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AsLifecycleHookV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_lifecycle_hook_v1

asLifecycleHookV1.AsLifecycleHookV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_lifecycle_hook_v1

asLifecycleHookV1.AsLifecycleHookV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_lifecycle_hook_v1

asLifecycleHookV1.AsLifecycleHookV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_lifecycle_hook_v1

asLifecycleHookV1.AsLifecycleHookV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AsLifecycleHookV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AsLifecycleHookV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AsLifecycleHookV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AsLifecycleHookV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicName">notification_topic_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResultInput">default_result_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeoutInput">default_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadataInput">notification_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrnInput">notification_topic_urn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupIdInput">scaling_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookNameInput">scaling_lifecycle_hook_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookTypeInput">scaling_lifecycle_hook_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResult">default_result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeout">default_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadata">notification_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrn">notification_topic_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupId">scaling_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookName">scaling_lifecycle_hook_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookType">scaling_lifecycle_hook_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `notification_topic_name`<sup>Required</sup> <a name="notification_topic_name" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicName"></a>

```python
notification_topic_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `default_result_input`<sup>Optional</sup> <a name="default_result_input" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResultInput"></a>

```python
default_result_input: str
```

- *Type:* str

---

##### `default_timeout_input`<sup>Optional</sup> <a name="default_timeout_input" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeoutInput"></a>

```python
default_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notification_metadata_input`<sup>Optional</sup> <a name="notification_metadata_input" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadataInput"></a>

```python
notification_metadata_input: str
```

- *Type:* str

---

##### `notification_topic_urn_input`<sup>Optional</sup> <a name="notification_topic_urn_input" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrnInput"></a>

```python
notification_topic_urn_input: str
```

- *Type:* str

---

##### `scaling_group_id_input`<sup>Optional</sup> <a name="scaling_group_id_input" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupIdInput"></a>

```python
scaling_group_id_input: str
```

- *Type:* str

---

##### `scaling_lifecycle_hook_name_input`<sup>Optional</sup> <a name="scaling_lifecycle_hook_name_input" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookNameInput"></a>

```python
scaling_lifecycle_hook_name_input: str
```

- *Type:* str

---

##### `scaling_lifecycle_hook_type_input`<sup>Optional</sup> <a name="scaling_lifecycle_hook_type_input" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookTypeInput"></a>

```python
scaling_lifecycle_hook_type_input: str
```

- *Type:* str

---

##### `default_result`<sup>Required</sup> <a name="default_result" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResult"></a>

```python
default_result: str
```

- *Type:* str

---

##### `default_timeout`<sup>Required</sup> <a name="default_timeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeout"></a>

```python
default_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_metadata`<sup>Required</sup> <a name="notification_metadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadata"></a>

```python
notification_metadata: str
```

- *Type:* str

---

##### `notification_topic_urn`<sup>Required</sup> <a name="notification_topic_urn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrn"></a>

```python
notification_topic_urn: str
```

- *Type:* str

---

##### `scaling_group_id`<sup>Required</sup> <a name="scaling_group_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupId"></a>

```python
scaling_group_id: str
```

- *Type:* str

---

##### `scaling_lifecycle_hook_name`<sup>Required</sup> <a name="scaling_lifecycle_hook_name" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookName"></a>

```python
scaling_lifecycle_hook_name: str
```

- *Type:* str

---

##### `scaling_lifecycle_hook_type`<sup>Required</sup> <a name="scaling_lifecycle_hook_type" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookType"></a>

```python
scaling_lifecycle_hook_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AsLifecycleHookV1Config <a name="AsLifecycleHookV1Config" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_lifecycle_hook_v1

asLifecycleHookV1.AsLifecycleHookV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  notification_topic_urn: str,
  scaling_group_id: str,
  scaling_lifecycle_hook_name: str,
  scaling_lifecycle_hook_type: str,
  default_result: str = None,
  default_timeout: typing.Union[int, float] = None,
  id: str = None,
  notification_metadata: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationTopicUrn">notification_topic_urn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#notification_topic_urn AsLifecycleHookV1#notification_topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingGroupId">scaling_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_group_id AsLifecycleHookV1#scaling_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookName">scaling_lifecycle_hook_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_name AsLifecycleHookV1#scaling_lifecycle_hook_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookType">scaling_lifecycle_hook_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_type AsLifecycleHookV1#scaling_lifecycle_hook_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultResult">default_result</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#default_result AsLifecycleHookV1#default_result}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultTimeout">default_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#default_timeout AsLifecycleHookV1#default_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#id AsLifecycleHookV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationMetadata">notification_metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#notification_metadata AsLifecycleHookV1#notification_metadata}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `notification_topic_urn`<sup>Required</sup> <a name="notification_topic_urn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationTopicUrn"></a>

```python
notification_topic_urn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#notification_topic_urn AsLifecycleHookV1#notification_topic_urn}.

---

##### `scaling_group_id`<sup>Required</sup> <a name="scaling_group_id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingGroupId"></a>

```python
scaling_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_group_id AsLifecycleHookV1#scaling_group_id}.

---

##### `scaling_lifecycle_hook_name`<sup>Required</sup> <a name="scaling_lifecycle_hook_name" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookName"></a>

```python
scaling_lifecycle_hook_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_name AsLifecycleHookV1#scaling_lifecycle_hook_name}.

---

##### `scaling_lifecycle_hook_type`<sup>Required</sup> <a name="scaling_lifecycle_hook_type" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookType"></a>

```python
scaling_lifecycle_hook_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_type AsLifecycleHookV1#scaling_lifecycle_hook_type}.

---

##### `default_result`<sup>Optional</sup> <a name="default_result" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultResult"></a>

```python
default_result: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#default_result AsLifecycleHookV1#default_result}.

---

##### `default_timeout`<sup>Optional</sup> <a name="default_timeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultTimeout"></a>

```python
default_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#default_timeout AsLifecycleHookV1#default_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#id AsLifecycleHookV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_metadata`<sup>Optional</sup> <a name="notification_metadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationMetadata"></a>

```python
notification_metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/as_lifecycle_hook_v1#notification_metadata AsLifecycleHookV1#notification_metadata}.

---



