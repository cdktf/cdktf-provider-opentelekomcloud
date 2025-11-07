# `dataOpentelekomcloudCesEventDetailsV1` Submodule <a name="`dataOpentelekomcloudCesEventDetailsV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCesEventDetailsV1 <a name="DataOpentelekomcloudCesEventDetailsV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1 opentelekomcloud_ces_event_details_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_name: str,
  event_type: str,
  event_level: str = None,
  event_source: str = None,
  event_state: str = None,
  event_user: str = None,
  from: typing.Union[int, float] = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  to: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventName">event_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_name DataOpentelekomcloudCesEventDetailsV1#event_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_type DataOpentelekomcloudCesEventDetailsV1#event_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventLevel">event_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_level DataOpentelekomcloudCesEventDetailsV1#event_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventSource">event_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_source DataOpentelekomcloudCesEventDetailsV1#event_source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventState">event_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_state DataOpentelekomcloudCesEventDetailsV1#event_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventUser">event_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_user DataOpentelekomcloudCesEventDetailsV1#event_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.from">from</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#from DataOpentelekomcloudCesEventDetailsV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#id DataOpentelekomcloudCesEventDetailsV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#limit DataOpentelekomcloudCesEventDetailsV1#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.to">to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#to DataOpentelekomcloudCesEventDetailsV1#to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_name DataOpentelekomcloudCesEventDetailsV1#event_name}.

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_type DataOpentelekomcloudCesEventDetailsV1#event_type}.

---

##### `event_level`<sup>Optional</sup> <a name="event_level" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_level DataOpentelekomcloudCesEventDetailsV1#event_level}.

---

##### `event_source`<sup>Optional</sup> <a name="event_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_source DataOpentelekomcloudCesEventDetailsV1#event_source}.

---

##### `event_state`<sup>Optional</sup> <a name="event_state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_state DataOpentelekomcloudCesEventDetailsV1#event_state}.

---

##### `event_user`<sup>Optional</sup> <a name="event_user" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.eventUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_user DataOpentelekomcloudCesEventDetailsV1#event_user}.

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.from"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#from DataOpentelekomcloudCesEventDetailsV1#from}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#id DataOpentelekomcloudCesEventDetailsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#limit DataOpentelekomcloudCesEventDetailsV1#limit}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.to"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#to DataOpentelekomcloudCesEventDetailsV1#to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventLevel">reset_event_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventSource">reset_event_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventState">reset_event_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventUser">reset_event_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetTo">reset_to</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_event_level` <a name="reset_event_level" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventLevel"></a>

```python
def reset_event_level() -> None
```

##### `reset_event_source` <a name="reset_event_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventSource"></a>

```python
def reset_event_source() -> None
```

##### `reset_event_state` <a name="reset_event_state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventState"></a>

```python
def reset_event_state() -> None
```

##### `reset_event_user` <a name="reset_event_user" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventUser"></a>

```python
def reset_event_user() -> None
```

##### `reset_from` <a name="reset_from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetTo"></a>

```python
def reset_to() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCesEventDetailsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudCesEventDetailsV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudCesEventDetailsV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudCesEventDetailsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCesEventDetailsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventInfo">event_info</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList">DataOpentelekomcloudCesEventDetailsV1EventInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSources">event_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUsers">event_users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.metaData">meta_data</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList">DataOpentelekomcloudCesEventDetailsV1MetaDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventLevelInput">event_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventNameInput">event_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSourceInput">event_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventStateInput">event_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUserInput">event_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.fromInput">from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.toInput">to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventLevel">event_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventName">event_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSource">event_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventState">event_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUser">event_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.from">from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.to">to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `event_info`<sup>Required</sup> <a name="event_info" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventInfo"></a>

```python
event_info: DataOpentelekomcloudCesEventDetailsV1EventInfoList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList">DataOpentelekomcloudCesEventDetailsV1EventInfoList</a>

---

##### `event_sources`<sup>Required</sup> <a name="event_sources" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSources"></a>

```python
event_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_users`<sup>Required</sup> <a name="event_users" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUsers"></a>

```python
event_users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta_data`<sup>Required</sup> <a name="meta_data" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.metaData"></a>

```python
meta_data: DataOpentelekomcloudCesEventDetailsV1MetaDataList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList">DataOpentelekomcloudCesEventDetailsV1MetaDataList</a>

---

##### `event_level_input`<sup>Optional</sup> <a name="event_level_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventLevelInput"></a>

```python
event_level_input: str
```

- *Type:* str

---

##### `event_name_input`<sup>Optional</sup> <a name="event_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventNameInput"></a>

```python
event_name_input: str
```

- *Type:* str

---

##### `event_source_input`<sup>Optional</sup> <a name="event_source_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSourceInput"></a>

```python
event_source_input: str
```

- *Type:* str

---

##### `event_state_input`<sup>Optional</sup> <a name="event_state_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventStateInput"></a>

```python
event_state_input: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `event_user_input`<sup>Optional</sup> <a name="event_user_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUserInput"></a>

```python
event_user_input: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.fromInput"></a>

```python
from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.toInput"></a>

```python
to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `event_level`<sup>Required</sup> <a name="event_level" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventLevel"></a>

```python
event_level: str
```

- *Type:* str

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

---

##### `event_source`<sup>Required</sup> <a name="event_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSource"></a>

```python
event_source: str
```

- *Type:* str

---

##### `event_state`<sup>Required</sup> <a name="event_state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventState"></a>

```python
event_state: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `event_user`<sup>Required</sup> <a name="event_user" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUser"></a>

```python
event_user: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCesEventDetailsV1Config <a name="DataOpentelekomcloudCesEventDetailsV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_name: str,
  event_type: str,
  event_level: str = None,
  event_source: str = None,
  event_state: str = None,
  event_user: str = None,
  from: typing.Union[int, float] = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  to: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventName">event_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_name DataOpentelekomcloudCesEventDetailsV1#event_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_type DataOpentelekomcloudCesEventDetailsV1#event_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventLevel">event_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_level DataOpentelekomcloudCesEventDetailsV1#event_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventSource">event_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_source DataOpentelekomcloudCesEventDetailsV1#event_source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventState">event_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_state DataOpentelekomcloudCesEventDetailsV1#event_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventUser">event_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_user DataOpentelekomcloudCesEventDetailsV1#event_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.from">from</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#from DataOpentelekomcloudCesEventDetailsV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#id DataOpentelekomcloudCesEventDetailsV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#limit DataOpentelekomcloudCesEventDetailsV1#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.to">to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#to DataOpentelekomcloudCesEventDetailsV1#to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_name DataOpentelekomcloudCesEventDetailsV1#event_name}.

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_type DataOpentelekomcloudCesEventDetailsV1#event_type}.

---

##### `event_level`<sup>Optional</sup> <a name="event_level" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventLevel"></a>

```python
event_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_level DataOpentelekomcloudCesEventDetailsV1#event_level}.

---

##### `event_source`<sup>Optional</sup> <a name="event_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventSource"></a>

```python
event_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_source DataOpentelekomcloudCesEventDetailsV1#event_source}.

---

##### `event_state`<sup>Optional</sup> <a name="event_state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventState"></a>

```python
event_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_state DataOpentelekomcloudCesEventDetailsV1#event_state}.

---

##### `event_user`<sup>Optional</sup> <a name="event_user" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventUser"></a>

```python
event_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_user DataOpentelekomcloudCesEventDetailsV1#event_user}.

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#from DataOpentelekomcloudCesEventDetailsV1#from}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#id DataOpentelekomcloudCesEventDetailsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#limit DataOpentelekomcloudCesEventDetailsV1#limit}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#to DataOpentelekomcloudCesEventDetailsV1#to}.

---

### DataOpentelekomcloudCesEventDetailsV1EventInfo <a name="DataOpentelekomcloudCesEventDetailsV1EventInfo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfo()
```


### DataOpentelekomcloudCesEventDetailsV1EventInfoDetail <a name="DataOpentelekomcloudCesEventDetailsV1EventInfoDetail" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetail.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetail()
```


### DataOpentelekomcloudCesEventDetailsV1MetaData <a name="DataOpentelekomcloudCesEventDetailsV1MetaData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaData.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaData()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList <a name="DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference <a name="DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventLevel">event_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventState">event_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventUser">event_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetail">DataOpentelekomcloudCesEventDetailsV1EventInfoDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `event_level`<sup>Required</sup> <a name="event_level" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventLevel"></a>

```python
event_level: str
```

- *Type:* str

---

##### `event_state`<sup>Required</sup> <a name="event_state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventState"></a>

```python
event_state: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `event_user`<sup>Required</sup> <a name="event_user" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventUser"></a>

```python
event_user: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCesEventDetailsV1EventInfoDetail
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetail">DataOpentelekomcloudCesEventDetailsV1EventInfoDetail</a>

---


### DataOpentelekomcloudCesEventDetailsV1EventInfoList <a name="DataOpentelekomcloudCesEventDetailsV1EventInfoList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference <a name="DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.detail">detail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList">DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventId">event_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventName">event_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventSource">event_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.time">time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfo">DataOpentelekomcloudCesEventDetailsV1EventInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.detail"></a>

```python
detail: DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList">DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList</a>

---

##### `event_id`<sup>Required</sup> <a name="event_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventId"></a>

```python
event_id: str
```

- *Type:* str

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

---

##### `event_source`<sup>Required</sup> <a name="event_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventSource"></a>

```python
event_source: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.time"></a>

```python
time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCesEventDetailsV1EventInfo
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfo">DataOpentelekomcloudCesEventDetailsV1EventInfo</a>

---


### DataOpentelekomcloudCesEventDetailsV1MetaDataList <a name="DataOpentelekomcloudCesEventDetailsV1MetaDataList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference <a name="DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_event_details_v1

dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.total">total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaData">DataOpentelekomcloudCesEventDetailsV1MetaData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `total`<sup>Required</sup> <a name="total" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCesEventDetailsV1MetaData
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaData">DataOpentelekomcloudCesEventDetailsV1MetaData</a>

---



