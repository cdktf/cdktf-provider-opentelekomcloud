# `rtsSoftwareConfigV1` Submodule <a name="`rtsSoftwareConfigV1` Submodule" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtsSoftwareConfigV1 <a name="RtsSoftwareConfigV1" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1 opentelekomcloud_rts_software_config_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rts_software_config_v1

rtsSoftwareConfigV1.RtsSoftwareConfigV1(
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
  config: str = None,
  group: str = None,
  id: str = None,
  input_values: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  options: typing.Mapping[str] = None,
  output_values: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  region: str = None,
  timeouts: RtsSoftwareConfigV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#name RtsSoftwareConfigV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.config">config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#config RtsSoftwareConfigV1#config}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#group RtsSoftwareConfigV1#group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#id RtsSoftwareConfigV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.inputValues">input_values</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#input_values RtsSoftwareConfigV1#input_values}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#options RtsSoftwareConfigV1#options}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.outputValues">output_values</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#output_values RtsSoftwareConfigV1#output_values}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#region RtsSoftwareConfigV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#name RtsSoftwareConfigV1#name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.config"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#config RtsSoftwareConfigV1#config}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.group"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#group RtsSoftwareConfigV1#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#id RtsSoftwareConfigV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_values`<sup>Optional</sup> <a name="input_values" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.inputValues"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#input_values RtsSoftwareConfigV1#input_values}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#options RtsSoftwareConfigV1#options}.

---

##### `output_values`<sup>Optional</sup> <a name="output_values" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.outputValues"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#output_values RtsSoftwareConfigV1#output_values}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#region RtsSoftwareConfigV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#timeouts RtsSoftwareConfigV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetInputValues">reset_input_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOutputValues">reset_output_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#create RtsSoftwareConfigV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#delete RtsSoftwareConfigV1#delete}.

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_values` <a name="reset_input_values" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetInputValues"></a>

```python
def reset_input_values() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_output_values` <a name="reset_output_values" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetOutputValues"></a>

```python
def reset_output_values() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RtsSoftwareConfigV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rts_software_config_v1

rtsSoftwareConfigV1.RtsSoftwareConfigV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rts_software_config_v1

rtsSoftwareConfigV1.RtsSoftwareConfigV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rts_software_config_v1

rtsSoftwareConfigV1.RtsSoftwareConfigV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rts_software_config_v1

rtsSoftwareConfigV1.RtsSoftwareConfigV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RtsSoftwareConfigV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RtsSoftwareConfigV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RtsSoftwareConfigV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RtsSoftwareConfigV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference">RtsSoftwareConfigV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.configInput">config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.inputValuesInput">input_values_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.outputValuesInput">output_values_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.config">config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.inputValues">input_values</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.outputValues">output_values</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.timeouts"></a>

```python
timeouts: RtsSoftwareConfigV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference">RtsSoftwareConfigV1TimeoutsOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.configInput"></a>

```python
config_input: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_values_input`<sup>Optional</sup> <a name="input_values_input" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.inputValuesInput"></a>

```python
input_values_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `output_values_input`<sup>Optional</sup> <a name="output_values_input" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.outputValuesInput"></a>

```python
output_values_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RtsSoftwareConfigV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a>]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.config"></a>

```python
config: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_values`<sup>Required</sup> <a name="input_values" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.inputValues"></a>

```python
input_values: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `output_values`<sup>Required</sup> <a name="output_values" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.outputValues"></a>

```python
output_values: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RtsSoftwareConfigV1Config <a name="RtsSoftwareConfigV1Config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rts_software_config_v1

rtsSoftwareConfigV1.RtsSoftwareConfigV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  config: str = None,
  group: str = None,
  id: str = None,
  input_values: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  options: typing.Mapping[str] = None,
  output_values: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  region: str = None,
  timeouts: RtsSoftwareConfigV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#name RtsSoftwareConfigV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.config">config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#config RtsSoftwareConfigV1#config}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#group RtsSoftwareConfigV1#group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#id RtsSoftwareConfigV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.inputValues">input_values</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#input_values RtsSoftwareConfigV1#input_values}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#options RtsSoftwareConfigV1#options}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.outputValues">output_values</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#output_values RtsSoftwareConfigV1#output_values}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#region RtsSoftwareConfigV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#name RtsSoftwareConfigV1#name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.config"></a>

```python
config: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#config RtsSoftwareConfigV1#config}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.group"></a>

```python
group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#group RtsSoftwareConfigV1#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#id RtsSoftwareConfigV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_values`<sup>Optional</sup> <a name="input_values" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.inputValues"></a>

```python
input_values: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#input_values RtsSoftwareConfigV1#input_values}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#options RtsSoftwareConfigV1#options}.

---

##### `output_values`<sup>Optional</sup> <a name="output_values" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.outputValues"></a>

```python
output_values: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#output_values RtsSoftwareConfigV1#output_values}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#region RtsSoftwareConfigV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Config.property.timeouts"></a>

```python
timeouts: RtsSoftwareConfigV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#timeouts RtsSoftwareConfigV1#timeouts}

---

### RtsSoftwareConfigV1Timeouts <a name="RtsSoftwareConfigV1Timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rts_software_config_v1

rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#create RtsSoftwareConfigV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#delete RtsSoftwareConfigV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#create RtsSoftwareConfigV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/rts_software_config_v1#delete RtsSoftwareConfigV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### RtsSoftwareConfigV1TimeoutsOutputReference <a name="RtsSoftwareConfigV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rts_software_config_v1

rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RtsSoftwareConfigV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareConfigV1.RtsSoftwareConfigV1Timeouts">RtsSoftwareConfigV1Timeouts</a>]

---



