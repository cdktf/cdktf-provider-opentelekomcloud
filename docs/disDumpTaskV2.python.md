# `opentelekomcloud_dis_dump_task_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_dis_dump_task_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2).

# `disDumpTaskV2` Submodule <a name="`disDumpTaskV2` Submodule" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisDumpTaskV2 <a name="DisDumpTaskV2" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2 opentelekomcloud_dis_dump_task_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stream_name: str,
  action: str = None,
  destination: str = None,
  id: str = None,
  obs_destination_descriptor: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsDestinationDescriptor]] = None,
  obs_processing_schema: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsProcessingSchema]] = None,
  timeouts: DisDumpTaskV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#stream_name DisDumpTaskV2#stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#action DisDumpTaskV2#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#destination DisDumpTaskV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#id DisDumpTaskV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.obsDestinationDescriptor">obs_destination_descriptor</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor">DisDumpTaskV2ObsDestinationDescriptor</a>]]</code> | obs_destination_descriptor block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.obsProcessingSchema">obs_processing_schema</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema">DisDumpTaskV2ObsProcessingSchema</a>]]</code> | obs_processing_schema block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts">DisDumpTaskV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#stream_name DisDumpTaskV2#stream_name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#action DisDumpTaskV2#action}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#destination DisDumpTaskV2#destination}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#id DisDumpTaskV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `obs_destination_descriptor`<sup>Optional</sup> <a name="obs_destination_descriptor" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.obsDestinationDescriptor"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor">DisDumpTaskV2ObsDestinationDescriptor</a>]]

obs_destination_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#obs_destination_descriptor DisDumpTaskV2#obs_destination_descriptor}

---

##### `obs_processing_schema`<sup>Optional</sup> <a name="obs_processing_schema" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.obsProcessingSchema"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema">DisDumpTaskV2ObsProcessingSchema</a>]]

obs_processing_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#obs_processing_schema DisDumpTaskV2#obs_processing_schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts">DisDumpTaskV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#timeouts DisDumpTaskV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsDestinationDescriptor">put_obs_destination_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsProcessingSchema">put_obs_processing_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetObsDestinationDescriptor">reset_obs_destination_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetObsProcessingSchema">reset_obs_processing_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_obs_destination_descriptor` <a name="put_obs_destination_descriptor" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsDestinationDescriptor"></a>

```python
def put_obs_destination_descriptor(
  value: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsDestinationDescriptor]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsDestinationDescriptor.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor">DisDumpTaskV2ObsDestinationDescriptor</a>]]

---

##### `put_obs_processing_schema` <a name="put_obs_processing_schema" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsProcessingSchema"></a>

```python
def put_obs_processing_schema(
  value: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsProcessingSchema]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsProcessingSchema.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema">DisDumpTaskV2ObsProcessingSchema</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putTimeouts"></a>

```python
def put_timeouts(
  update: str = None
) -> None
```

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#update DisDumpTaskV2#update}.

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_obs_destination_descriptor` <a name="reset_obs_destination_descriptor" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetObsDestinationDescriptor"></a>

```python
def reset_obs_destination_descriptor() -> None
```

##### `reset_obs_processing_schema` <a name="reset_obs_processing_schema" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetObsProcessingSchema"></a>

```python
def reset_obs_processing_schema() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DisDumpTaskV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DisDumpTaskV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DisDumpTaskV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DisDumpTaskV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DisDumpTaskV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.lastTransferTimestamp">last_transfer_timestamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsDestinationDescriptor">obs_destination_descriptor</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList">DisDumpTaskV2ObsDestinationDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsProcessingSchema">obs_processing_schema</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList">DisDumpTaskV2ObsProcessingSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.partitions">partitions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList">DisDumpTaskV2PartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.taskId">task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference">DisDumpTaskV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsDestinationDescriptorInput">obs_destination_descriptor_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor">DisDumpTaskV2ObsDestinationDescriptor</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsProcessingSchemaInput">obs_processing_schema_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema">DisDumpTaskV2ObsProcessingSchema</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts">DisDumpTaskV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_transfer_timestamp`<sup>Required</sup> <a name="last_transfer_timestamp" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.lastTransferTimestamp"></a>

```python
last_transfer_timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `obs_destination_descriptor`<sup>Required</sup> <a name="obs_destination_descriptor" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsDestinationDescriptor"></a>

```python
obs_destination_descriptor: DisDumpTaskV2ObsDestinationDescriptorList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList">DisDumpTaskV2ObsDestinationDescriptorList</a>

---

##### `obs_processing_schema`<sup>Required</sup> <a name="obs_processing_schema" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsProcessingSchema"></a>

```python
obs_processing_schema: DisDumpTaskV2ObsProcessingSchemaList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList">DisDumpTaskV2ObsProcessingSchemaList</a>

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.partitions"></a>

```python
partitions: DisDumpTaskV2PartitionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList">DisDumpTaskV2PartitionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `task_id`<sup>Required</sup> <a name="task_id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.taskId"></a>

```python
task_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.timeouts"></a>

```python
timeouts: DisDumpTaskV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference">DisDumpTaskV2TimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `obs_destination_descriptor_input`<sup>Optional</sup> <a name="obs_destination_descriptor_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsDestinationDescriptorInput"></a>

```python
obs_destination_descriptor_input: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsDestinationDescriptor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor">DisDumpTaskV2ObsDestinationDescriptor</a>]]

---

##### `obs_processing_schema_input`<sup>Optional</sup> <a name="obs_processing_schema_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsProcessingSchemaInput"></a>

```python
obs_processing_schema_input: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsProcessingSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema">DisDumpTaskV2ObsProcessingSchema</a>]]

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DisDumpTaskV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts">DisDumpTaskV2Timeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DisDumpTaskV2Config <a name="DisDumpTaskV2Config" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stream_name: str,
  action: str = None,
  destination: str = None,
  id: str = None,
  obs_destination_descriptor: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsDestinationDescriptor]] = None,
  obs_processing_schema: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsProcessingSchema]] = None,
  timeouts: DisDumpTaskV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#stream_name DisDumpTaskV2#stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#action DisDumpTaskV2#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#destination DisDumpTaskV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#id DisDumpTaskV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.obsDestinationDescriptor">obs_destination_descriptor</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor">DisDumpTaskV2ObsDestinationDescriptor</a>]]</code> | obs_destination_descriptor block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.obsProcessingSchema">obs_processing_schema</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema">DisDumpTaskV2ObsProcessingSchema</a>]]</code> | obs_processing_schema block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts">DisDumpTaskV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#stream_name DisDumpTaskV2#stream_name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#action DisDumpTaskV2#action}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#destination DisDumpTaskV2#destination}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#id DisDumpTaskV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `obs_destination_descriptor`<sup>Optional</sup> <a name="obs_destination_descriptor" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.obsDestinationDescriptor"></a>

```python
obs_destination_descriptor: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsDestinationDescriptor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor">DisDumpTaskV2ObsDestinationDescriptor</a>]]

obs_destination_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#obs_destination_descriptor DisDumpTaskV2#obs_destination_descriptor}

---

##### `obs_processing_schema`<sup>Optional</sup> <a name="obs_processing_schema" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.obsProcessingSchema"></a>

```python
obs_processing_schema: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsProcessingSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema">DisDumpTaskV2ObsProcessingSchema</a>]]

obs_processing_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#obs_processing_schema DisDumpTaskV2#obs_processing_schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.timeouts"></a>

```python
timeouts: DisDumpTaskV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts">DisDumpTaskV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#timeouts DisDumpTaskV2#timeouts}

---

### DisDumpTaskV2ObsDestinationDescriptor <a name="DisDumpTaskV2ObsDestinationDescriptor" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor(
  agency_name: str,
  deliver_time_interval: typing.Union[int, float],
  obs_bucket_path: str,
  task_name: str,
  consumer_strategy: str = None,
  destination_file_type: str = None,
  file_prefix: str = None,
  partition_format: str = None,
  record_delimiter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.agencyName">agency_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#agency_name DisDumpTaskV2#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.deliverTimeInterval">deliver_time_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#deliver_time_interval DisDumpTaskV2#deliver_time_interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.obsBucketPath">obs_bucket_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#obs_bucket_path DisDumpTaskV2#obs_bucket_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.taskName">task_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#task_name DisDumpTaskV2#task_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.consumerStrategy">consumer_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#consumer_strategy DisDumpTaskV2#consumer_strategy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.destinationFileType">destination_file_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#destination_file_type DisDumpTaskV2#destination_file_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.filePrefix">file_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#file_prefix DisDumpTaskV2#file_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.partitionFormat">partition_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#partition_format DisDumpTaskV2#partition_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#record_delimiter DisDumpTaskV2#record_delimiter}. |

---

##### `agency_name`<sup>Required</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#agency_name DisDumpTaskV2#agency_name}.

---

##### `deliver_time_interval`<sup>Required</sup> <a name="deliver_time_interval" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.deliverTimeInterval"></a>

```python
deliver_time_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#deliver_time_interval DisDumpTaskV2#deliver_time_interval}.

---

##### `obs_bucket_path`<sup>Required</sup> <a name="obs_bucket_path" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.obsBucketPath"></a>

```python
obs_bucket_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#obs_bucket_path DisDumpTaskV2#obs_bucket_path}.

---

##### `task_name`<sup>Required</sup> <a name="task_name" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.taskName"></a>

```python
task_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#task_name DisDumpTaskV2#task_name}.

---

##### `consumer_strategy`<sup>Optional</sup> <a name="consumer_strategy" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.consumerStrategy"></a>

```python
consumer_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#consumer_strategy DisDumpTaskV2#consumer_strategy}.

---

##### `destination_file_type`<sup>Optional</sup> <a name="destination_file_type" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.destinationFileType"></a>

```python
destination_file_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#destination_file_type DisDumpTaskV2#destination_file_type}.

---

##### `file_prefix`<sup>Optional</sup> <a name="file_prefix" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.filePrefix"></a>

```python
file_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#file_prefix DisDumpTaskV2#file_prefix}.

---

##### `partition_format`<sup>Optional</sup> <a name="partition_format" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.partitionFormat"></a>

```python
partition_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#partition_format DisDumpTaskV2#partition_format}.

---

##### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#record_delimiter DisDumpTaskV2#record_delimiter}.

---

### DisDumpTaskV2ObsProcessingSchema <a name="DisDumpTaskV2ObsProcessingSchema" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema(
  timestamp_name: str,
  timestamp_type: str,
  timestamp_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampName">timestamp_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#timestamp_name DisDumpTaskV2#timestamp_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampType">timestamp_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#timestamp_type DisDumpTaskV2#timestamp_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#timestamp_format DisDumpTaskV2#timestamp_format}. |

---

##### `timestamp_name`<sup>Required</sup> <a name="timestamp_name" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampName"></a>

```python
timestamp_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#timestamp_name DisDumpTaskV2#timestamp_name}.

---

##### `timestamp_type`<sup>Required</sup> <a name="timestamp_type" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampType"></a>

```python
timestamp_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#timestamp_type DisDumpTaskV2#timestamp_type}.

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#timestamp_format DisDumpTaskV2#timestamp_format}.

---

### DisDumpTaskV2Partitions <a name="DisDumpTaskV2Partitions" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Partitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Partitions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2Partitions()
```


### DisDumpTaskV2Timeouts <a name="DisDumpTaskV2Timeouts" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2Timeouts(
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#update DisDumpTaskV2#update}. |

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dis_dump_task_v2#update DisDumpTaskV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisDumpTaskV2ObsDestinationDescriptorList <a name="DisDumpTaskV2ObsDestinationDescriptorList" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DisDumpTaskV2ObsDestinationDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor">DisDumpTaskV2ObsDestinationDescriptor</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsDestinationDescriptor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor">DisDumpTaskV2ObsDestinationDescriptor</a>]]

---


### DisDumpTaskV2ObsDestinationDescriptorOutputReference <a name="DisDumpTaskV2ObsDestinationDescriptorOutputReference" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetConsumerStrategy">reset_consumer_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetDestinationFileType">reset_destination_file_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetFilePrefix">reset_file_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetPartitionFormat">reset_partition_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetRecordDelimiter">reset_record_delimiter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_consumer_strategy` <a name="reset_consumer_strategy" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetConsumerStrategy"></a>

```python
def reset_consumer_strategy() -> None
```

##### `reset_destination_file_type` <a name="reset_destination_file_type" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetDestinationFileType"></a>

```python
def reset_destination_file_type() -> None
```

##### `reset_file_prefix` <a name="reset_file_prefix" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetFilePrefix"></a>

```python
def reset_file_prefix() -> None
```

##### `reset_partition_format` <a name="reset_partition_format" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetPartitionFormat"></a>

```python
def reset_partition_format() -> None
```

##### `reset_record_delimiter` <a name="reset_record_delimiter" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetRecordDelimiter"></a>

```python
def reset_record_delimiter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.agencyNameInput">agency_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.consumerStrategyInput">consumer_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.deliverTimeIntervalInput">deliver_time_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.destinationFileTypeInput">destination_file_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.filePrefixInput">file_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.obsBucketPathInput">obs_bucket_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.partitionFormatInput">partition_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.recordDelimiterInput">record_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.taskNameInput">task_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.agencyName">agency_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.consumerStrategy">consumer_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.deliverTimeInterval">deliver_time_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.destinationFileType">destination_file_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.filePrefix">file_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.obsBucketPath">obs_bucket_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.partitionFormat">partition_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.taskName">task_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor">DisDumpTaskV2ObsDestinationDescriptor</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agency_name_input`<sup>Optional</sup> <a name="agency_name_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.agencyNameInput"></a>

```python
agency_name_input: str
```

- *Type:* str

---

##### `consumer_strategy_input`<sup>Optional</sup> <a name="consumer_strategy_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.consumerStrategyInput"></a>

```python
consumer_strategy_input: str
```

- *Type:* str

---

##### `deliver_time_interval_input`<sup>Optional</sup> <a name="deliver_time_interval_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.deliverTimeIntervalInput"></a>

```python
deliver_time_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destination_file_type_input`<sup>Optional</sup> <a name="destination_file_type_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.destinationFileTypeInput"></a>

```python
destination_file_type_input: str
```

- *Type:* str

---

##### `file_prefix_input`<sup>Optional</sup> <a name="file_prefix_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.filePrefixInput"></a>

```python
file_prefix_input: str
```

- *Type:* str

---

##### `obs_bucket_path_input`<sup>Optional</sup> <a name="obs_bucket_path_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.obsBucketPathInput"></a>

```python
obs_bucket_path_input: str
```

- *Type:* str

---

##### `partition_format_input`<sup>Optional</sup> <a name="partition_format_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.partitionFormatInput"></a>

```python
partition_format_input: str
```

- *Type:* str

---

##### `record_delimiter_input`<sup>Optional</sup> <a name="record_delimiter_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.recordDelimiterInput"></a>

```python
record_delimiter_input: str
```

- *Type:* str

---

##### `task_name_input`<sup>Optional</sup> <a name="task_name_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.taskNameInput"></a>

```python
task_name_input: str
```

- *Type:* str

---

##### `agency_name`<sup>Required</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

---

##### `consumer_strategy`<sup>Required</sup> <a name="consumer_strategy" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.consumerStrategy"></a>

```python
consumer_strategy: str
```

- *Type:* str

---

##### `deliver_time_interval`<sup>Required</sup> <a name="deliver_time_interval" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.deliverTimeInterval"></a>

```python
deliver_time_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destination_file_type`<sup>Required</sup> <a name="destination_file_type" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.destinationFileType"></a>

```python
destination_file_type: str
```

- *Type:* str

---

##### `file_prefix`<sup>Required</sup> <a name="file_prefix" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.filePrefix"></a>

```python
file_prefix: str
```

- *Type:* str

---

##### `obs_bucket_path`<sup>Required</sup> <a name="obs_bucket_path" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.obsBucketPath"></a>

```python
obs_bucket_path: str
```

- *Type:* str

---

##### `partition_format`<sup>Required</sup> <a name="partition_format" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.partitionFormat"></a>

```python
partition_format: str
```

- *Type:* str

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `task_name`<sup>Required</sup> <a name="task_name" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.taskName"></a>

```python
task_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DisDumpTaskV2ObsDestinationDescriptor]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor">DisDumpTaskV2ObsDestinationDescriptor</a>]

---


### DisDumpTaskV2ObsProcessingSchemaList <a name="DisDumpTaskV2ObsProcessingSchemaList" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DisDumpTaskV2ObsProcessingSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema">DisDumpTaskV2ObsProcessingSchema</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DisDumpTaskV2ObsProcessingSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema">DisDumpTaskV2ObsProcessingSchema</a>]]

---


### DisDumpTaskV2ObsProcessingSchemaOutputReference <a name="DisDumpTaskV2ObsProcessingSchemaOutputReference" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampNameInput">timestamp_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampTypeInput">timestamp_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampName">timestamp_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampType">timestamp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema">DisDumpTaskV2ObsProcessingSchema</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `timestamp_name_input`<sup>Optional</sup> <a name="timestamp_name_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampNameInput"></a>

```python
timestamp_name_input: str
```

- *Type:* str

---

##### `timestamp_type_input`<sup>Optional</sup> <a name="timestamp_type_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampTypeInput"></a>

```python
timestamp_type_input: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `timestamp_name`<sup>Required</sup> <a name="timestamp_name" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampName"></a>

```python
timestamp_name: str
```

- *Type:* str

---

##### `timestamp_type`<sup>Required</sup> <a name="timestamp_type" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampType"></a>

```python
timestamp_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DisDumpTaskV2ObsProcessingSchema]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema">DisDumpTaskV2ObsProcessingSchema</a>]

---


### DisDumpTaskV2PartitionsList <a name="DisDumpTaskV2PartitionsList" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2PartitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DisDumpTaskV2PartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DisDumpTaskV2PartitionsOutputReference <a name="DisDumpTaskV2PartitionsOutputReference" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.hashRange">hash_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.parentPartitions">parent_partitions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.sequenceNumberRange">sequence_number_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Partitions">DisDumpTaskV2Partitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hash_range`<sup>Required</sup> <a name="hash_range" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.hashRange"></a>

```python
hash_range: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_partitions`<sup>Required</sup> <a name="parent_partitions" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.parentPartitions"></a>

```python
parent_partitions: str
```

- *Type:* str

---

##### `sequence_number_range`<sup>Required</sup> <a name="sequence_number_range" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.sequenceNumberRange"></a>

```python
sequence_number_range: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.internalValue"></a>

```python
internal_value: DisDumpTaskV2Partitions
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Partitions">DisDumpTaskV2Partitions</a>

---


### DisDumpTaskV2TimeoutsOutputReference <a name="DisDumpTaskV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dis_dump_task_v2

disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts">DisDumpTaskV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DisDumpTaskV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts">DisDumpTaskV2Timeouts</a>]

---



