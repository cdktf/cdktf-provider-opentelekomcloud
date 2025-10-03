# `cesEventReportV1` Submodule <a name="`cesEventReportV1` Submodule" id="@cdktf/provider-opentelekomcloud.cesEventReportV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesEventReportV1 <a name="CesEventReportV1" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1 opentelekomcloud_ces_event_report_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_event_report_v1

cesEventReportV1.CesEventReportV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  detail: CesEventReportV1Detail,
  event_name: str,
  event_source: str,
  time: typing.Union[int, float],
  id: str = None,
  timeouts: CesEventReportV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.detail">detail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a></code> | detail block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.eventName">event_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_name CesEventReportV1#event_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.eventSource">event_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_source CesEventReportV1#event_source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.time">time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#time CesEventReportV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#id CesEventReportV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.detail"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a>

detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#detail CesEventReportV1#detail}

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.eventName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_name CesEventReportV1#event_name}.

---

##### `event_source`<sup>Required</sup> <a name="event_source" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.eventSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_source CesEventReportV1#event_source}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.time"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#time CesEventReportV1#time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#id CesEventReportV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#timeouts CesEventReportV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail">put_detail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_detail` <a name="put_detail" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail"></a>

```python
def put_detail(
  content: str = None,
  event_level: str = None,
  event_state: str = None,
  event_type: str = None,
  event_user: str = None,
  group_id: str = None,
  resource_id: str = None,
  resource_name: str = None
) -> None
```

###### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#content CesEventReportV1#content}.

---

###### `event_level`<sup>Optional</sup> <a name="event_level" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail.parameter.eventLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_level CesEventReportV1#event_level}.

---

###### `event_state`<sup>Optional</sup> <a name="event_state" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail.parameter.eventState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_state CesEventReportV1#event_state}.

---

###### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail.parameter.eventType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_type CesEventReportV1#event_type}.

---

###### `event_user`<sup>Optional</sup> <a name="event_user" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail.parameter.eventUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_user CesEventReportV1#event_user}.

---

###### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#group_id CesEventReportV1#group_id}.

---

###### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#resource_id CesEventReportV1#resource_id}.

---

###### `resource_name`<sup>Optional</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail.parameter.resourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#resource_name CesEventReportV1#resource_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#create CesEventReportV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#delete CesEventReportV1#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CesEventReportV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_event_report_v1

cesEventReportV1.CesEventReportV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_event_report_v1

cesEventReportV1.CesEventReportV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_event_report_v1

cesEventReportV1.CesEventReportV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_event_report_v1

cesEventReportV1.CesEventReportV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CesEventReportV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CesEventReportV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CesEventReportV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CesEventReportV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.detail">detail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference">CesEventReportV1DetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventId">event_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference">CesEventReportV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.detailInput">detail_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventNameInput">event_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventSourceInput">event_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeInput">time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventName">event_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventSource">event_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.time">time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.detail"></a>

```python
detail: CesEventReportV1DetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference">CesEventReportV1DetailOutputReference</a>

---

##### `event_id`<sup>Required</sup> <a name="event_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventId"></a>

```python
event_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeouts"></a>

```python
timeouts: CesEventReportV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference">CesEventReportV1TimeoutsOutputReference</a>

---

##### `detail_input`<sup>Optional</sup> <a name="detail_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.detailInput"></a>

```python
detail_input: CesEventReportV1Detail
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a>

---

##### `event_name_input`<sup>Optional</sup> <a name="event_name_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventNameInput"></a>

```python
event_name_input: str
```

- *Type:* str

---

##### `event_source_input`<sup>Optional</sup> <a name="event_source_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventSourceInput"></a>

```python
event_source_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeInput"></a>

```python
time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CesEventReportV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a>]

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

---

##### `event_source`<sup>Required</sup> <a name="event_source" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventSource"></a>

```python
event_source: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.time"></a>

```python
time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CesEventReportV1Config <a name="CesEventReportV1Config" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_event_report_v1

cesEventReportV1.CesEventReportV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  detail: CesEventReportV1Detail,
  event_name: str,
  event_source: str,
  time: typing.Union[int, float],
  id: str = None,
  timeouts: CesEventReportV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.detail">detail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a></code> | detail block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.eventName">event_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_name CesEventReportV1#event_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.eventSource">event_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_source CesEventReportV1#event_source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.time">time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#time CesEventReportV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#id CesEventReportV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.detail"></a>

```python
detail: CesEventReportV1Detail
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a>

detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#detail CesEventReportV1#detail}

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_name CesEventReportV1#event_name}.

---

##### `event_source`<sup>Required</sup> <a name="event_source" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.eventSource"></a>

```python
event_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_source CesEventReportV1#event_source}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.time"></a>

```python
time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#time CesEventReportV1#time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#id CesEventReportV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.timeouts"></a>

```python
timeouts: CesEventReportV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#timeouts CesEventReportV1#timeouts}

---

### CesEventReportV1Detail <a name="CesEventReportV1Detail" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_event_report_v1

cesEventReportV1.CesEventReportV1Detail(
  content: str = None,
  event_level: str = None,
  event_state: str = None,
  event_type: str = None,
  event_user: str = None,
  group_id: str = None,
  resource_id: str = None,
  resource_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#content CesEventReportV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventLevel">event_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_level CesEventReportV1#event_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventState">event_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_state CesEventReportV1#event_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_type CesEventReportV1#event_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventUser">event_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_user CesEventReportV1#event_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#group_id CesEventReportV1#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#resource_id CesEventReportV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#resource_name CesEventReportV1#resource_name}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#content CesEventReportV1#content}.

---

##### `event_level`<sup>Optional</sup> <a name="event_level" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventLevel"></a>

```python
event_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_level CesEventReportV1#event_level}.

---

##### `event_state`<sup>Optional</sup> <a name="event_state" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventState"></a>

```python
event_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_state CesEventReportV1#event_state}.

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_type CesEventReportV1#event_type}.

---

##### `event_user`<sup>Optional</sup> <a name="event_user" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventUser"></a>

```python
event_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#event_user CesEventReportV1#event_user}.

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#group_id CesEventReportV1#group_id}.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#resource_id CesEventReportV1#resource_id}.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#resource_name CesEventReportV1#resource_name}.

---

### CesEventReportV1Timeouts <a name="CesEventReportV1Timeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_event_report_v1

cesEventReportV1.CesEventReportV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#create CesEventReportV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#delete CesEventReportV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#create CesEventReportV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/ces_event_report_v1#delete CesEventReportV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesEventReportV1DetailOutputReference <a name="CesEventReportV1DetailOutputReference" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_event_report_v1

cesEventReportV1.CesEventReportV1DetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventLevel">reset_event_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventState">reset_event_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventType">reset_event_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventUser">reset_event_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetResourceName">reset_resource_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_event_level` <a name="reset_event_level" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventLevel"></a>

```python
def reset_event_level() -> None
```

##### `reset_event_state` <a name="reset_event_state" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventState"></a>

```python
def reset_event_state() -> None
```

##### `reset_event_type` <a name="reset_event_type" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventType"></a>

```python
def reset_event_type() -> None
```

##### `reset_event_user` <a name="reset_event_user" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventUser"></a>

```python
def reset_event_user() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_resource_name` <a name="reset_resource_name" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetResourceName"></a>

```python
def reset_resource_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventLevelInput">event_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventStateInput">event_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventUserInput">event_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventLevel">event_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventState">event_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventUser">event_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `event_level_input`<sup>Optional</sup> <a name="event_level_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventLevelInput"></a>

```python
event_level_input: str
```

- *Type:* str

---

##### `event_state_input`<sup>Optional</sup> <a name="event_state_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventStateInput"></a>

```python
event_state_input: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `event_user_input`<sup>Optional</sup> <a name="event_user_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventUserInput"></a>

```python
event_user_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `event_level`<sup>Required</sup> <a name="event_level" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventLevel"></a>

```python
event_level: str
```

- *Type:* str

---

##### `event_state`<sup>Required</sup> <a name="event_state" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventState"></a>

```python
event_state: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `event_user`<sup>Required</sup> <a name="event_user" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventUser"></a>

```python
event_user: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.internalValue"></a>

```python
internal_value: CesEventReportV1Detail
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a>

---


### CesEventReportV1TimeoutsOutputReference <a name="CesEventReportV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import ces_event_report_v1

cesEventReportV1.CesEventReportV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CesEventReportV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a>]

---



