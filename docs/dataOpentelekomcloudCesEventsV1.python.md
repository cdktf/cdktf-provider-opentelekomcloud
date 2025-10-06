# `dataOpentelekomcloudCesEventsV1` Submodule <a name="`dataOpentelekomcloudCesEventsV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCesEventsV1 <a name="DataOpentelekomcloudCesEventsV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1 opentelekomcloud_ces_events_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_name: str = None,
  event_type: str = None,
  from: typing.Union[int, float] = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  to: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.eventName">event_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#event_name DataOpentelekomcloudCesEventsV1#event_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#event_type DataOpentelekomcloudCesEventsV1#event_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.from">from</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#from DataOpentelekomcloudCesEventsV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#id DataOpentelekomcloudCesEventsV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#limit DataOpentelekomcloudCesEventsV1#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.to">to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#to DataOpentelekomcloudCesEventsV1#to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `event_name`<sup>Optional</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.eventName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#event_name DataOpentelekomcloudCesEventsV1#event_name}.

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.eventType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#event_type DataOpentelekomcloudCesEventsV1#event_type}.

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.from"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#from DataOpentelekomcloudCesEventsV1#from}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#id DataOpentelekomcloudCesEventsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#limit DataOpentelekomcloudCesEventsV1#limit}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.to"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#to DataOpentelekomcloudCesEventsV1#to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetEventName">reset_event_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetEventType">reset_event_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetTo">reset_to</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_event_name` <a name="reset_event_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetEventName"></a>

```python
def reset_event_name() -> None
```

##### `reset_event_type` <a name="reset_event_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetEventType"></a>

```python
def reset_event_type() -> None
```

##### `reset_from` <a name="reset_from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetTo"></a>

```python
def reset_to() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCesEventsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudCesEventsV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudCesEventsV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudCesEventsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCesEventsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.events">events</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList">DataOpentelekomcloudCesEventsV1EventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.metaData">meta_data</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList">DataOpentelekomcloudCesEventsV1MetaDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventNameInput">event_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.fromInput">from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.toInput">to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventName">event_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.from">from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.to">to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.events"></a>

```python
events: DataOpentelekomcloudCesEventsV1EventsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList">DataOpentelekomcloudCesEventsV1EventsList</a>

---

##### `meta_data`<sup>Required</sup> <a name="meta_data" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.metaData"></a>

```python
meta_data: DataOpentelekomcloudCesEventsV1MetaDataList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList">DataOpentelekomcloudCesEventsV1MetaDataList</a>

---

##### `event_name_input`<sup>Optional</sup> <a name="event_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventNameInput"></a>

```python
event_name_input: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.fromInput"></a>

```python
from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.toInput"></a>

```python
to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCesEventsV1Config <a name="DataOpentelekomcloudCesEventsV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_name: str = None,
  event_type: str = None,
  from: typing.Union[int, float] = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  to: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.eventName">event_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#event_name DataOpentelekomcloudCesEventsV1#event_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#event_type DataOpentelekomcloudCesEventsV1#event_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.from">from</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#from DataOpentelekomcloudCesEventsV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#id DataOpentelekomcloudCesEventsV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#limit DataOpentelekomcloudCesEventsV1#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.to">to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#to DataOpentelekomcloudCesEventsV1#to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `event_name`<sup>Optional</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#event_name DataOpentelekomcloudCesEventsV1#event_name}.

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#event_type DataOpentelekomcloudCesEventsV1#event_type}.

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#from DataOpentelekomcloudCesEventsV1#from}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#id DataOpentelekomcloudCesEventsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#limit DataOpentelekomcloudCesEventsV1#limit}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_events_v1#to DataOpentelekomcloudCesEventsV1#to}.

---

### DataOpentelekomcloudCesEventsV1Events <a name="DataOpentelekomcloudCesEventsV1Events" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Events"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Events.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Events()
```


### DataOpentelekomcloudCesEventsV1MetaData <a name="DataOpentelekomcloudCesEventsV1MetaData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaData.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaData()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCesEventsV1EventsList <a name="DataOpentelekomcloudCesEventsV1EventsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesEventsV1EventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCesEventsV1EventsOutputReference <a name="DataOpentelekomcloudCesEventsV1EventsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventCount">event_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventName">event_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.latestEventSource">latest_event_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.latestOccurTime">latest_occur_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Events">DataOpentelekomcloudCesEventsV1Events</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_count`<sup>Required</sup> <a name="event_count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventCount"></a>

```python
event_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `latest_event_source`<sup>Required</sup> <a name="latest_event_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.latestEventSource"></a>

```python
latest_event_source: str
```

- *Type:* str

---

##### `latest_occur_time`<sup>Required</sup> <a name="latest_occur_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.latestOccurTime"></a>

```python
latest_occur_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCesEventsV1Events
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Events">DataOpentelekomcloudCesEventsV1Events</a>

---


### DataOpentelekomcloudCesEventsV1MetaDataList <a name="DataOpentelekomcloudCesEventsV1MetaDataList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesEventsV1MetaDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCesEventsV1MetaDataOutputReference <a name="DataOpentelekomcloudCesEventsV1MetaDataOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_events_v1

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.total">total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaData">DataOpentelekomcloudCesEventsV1MetaData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `total`<sup>Required</sup> <a name="total" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCesEventsV1MetaData
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaData">DataOpentelekomcloudCesEventsV1MetaData</a>

---



