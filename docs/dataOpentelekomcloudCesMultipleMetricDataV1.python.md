# `dataOpentelekomcloudCesMultipleMetricDataV1` Submodule <a name="`dataOpentelekomcloudCesMultipleMetricDataV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCesMultipleMetricDataV1 <a name="DataOpentelekomcloudCesMultipleMetricDataV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1 opentelekomcloud_ces_multiple_metric_data_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str,
  from: typing.Union[int, float],
  metrics: IResolvable | typing.List[DataOpentelekomcloudCesMultipleMetricDataV1Metrics],
  period: str,
  to: typing.Union[int, float],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#filter DataOpentelekomcloudCesMultipleMetricDataV1#filter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.from">from</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#from DataOpentelekomcloudCesMultipleMetricDataV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.metrics">metrics</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>]</code> | metrics block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.period">period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#period DataOpentelekomcloudCesMultipleMetricDataV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.to">to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#to DataOpentelekomcloudCesMultipleMetricDataV1#to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#id DataOpentelekomcloudCesMultipleMetricDataV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#filter DataOpentelekomcloudCesMultipleMetricDataV1#filter}.

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.from"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#from DataOpentelekomcloudCesMultipleMetricDataV1#from}.

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.metrics"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#metrics DataOpentelekomcloudCesMultipleMetricDataV1#metrics}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.period"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#period DataOpentelekomcloudCesMultipleMetricDataV1#period}.

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.to"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#to DataOpentelekomcloudCesMultipleMetricDataV1#to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#id DataOpentelekomcloudCesMultipleMetricDataV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.putMetrics">put_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metrics` <a name="put_metrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.putMetrics"></a>

```python
def put_metrics(
  value: IResolvable | typing.List[DataOpentelekomcloudCesMultipleMetricDataV1Metrics]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.putMetrics.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCesMultipleMetricDataV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudCesMultipleMetricDataV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudCesMultipleMetricDataV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudCesMultipleMetricDataV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCesMultipleMetricDataV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.fromInput">from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.metricsInput">metrics_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.toInput">to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.from">from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.to">to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.metrics"></a>

```python
metrics: DataOpentelekomcloudCesMultipleMetricDataV1MetricsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.fromInput"></a>

```python
from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.metricsInput"></a>

```python
metrics_input: IResolvable | typing.List[DataOpentelekomcloudCesMultipleMetricDataV1Metrics]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>]

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.toInput"></a>

```python
to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCesMultipleMetricDataV1Config <a name="DataOpentelekomcloudCesMultipleMetricDataV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str,
  from: typing.Union[int, float],
  metrics: IResolvable | typing.List[DataOpentelekomcloudCesMultipleMetricDataV1Metrics],
  period: str,
  to: typing.Union[int, float],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#filter DataOpentelekomcloudCesMultipleMetricDataV1#filter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.from">from</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#from DataOpentelekomcloudCesMultipleMetricDataV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.metrics">metrics</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>]</code> | metrics block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.period">period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#period DataOpentelekomcloudCesMultipleMetricDataV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.to">to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#to DataOpentelekomcloudCesMultipleMetricDataV1#to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#id DataOpentelekomcloudCesMultipleMetricDataV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#filter DataOpentelekomcloudCesMultipleMetricDataV1#filter}.

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#from DataOpentelekomcloudCesMultipleMetricDataV1#from}.

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.metrics"></a>

```python
metrics: IResolvable | typing.List[DataOpentelekomcloudCesMultipleMetricDataV1Metrics]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#metrics DataOpentelekomcloudCesMultipleMetricDataV1#metrics}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.period"></a>

```python
period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#period DataOpentelekomcloudCesMultipleMetricDataV1#period}.

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#to DataOpentelekomcloudCesMultipleMetricDataV1#to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#id DataOpentelekomcloudCesMultipleMetricDataV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudCesMultipleMetricDataV1Metrics <a name="DataOpentelekomcloudCesMultipleMetricDataV1Metrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics(
  dimensions: IResolvable | typing.List[DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions],
  metric_name: str,
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#metric_name DataOpentelekomcloudCesMultipleMetricDataV1#metric_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#namespace DataOpentelekomcloudCesMultipleMetricDataV1#namespace}. |

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.dimensions"></a>

```python
dimensions: IResolvable | typing.List[DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#dimensions DataOpentelekomcloudCesMultipleMetricDataV1#dimensions}

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#metric_name DataOpentelekomcloudCesMultipleMetricDataV1#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#namespace DataOpentelekomcloudCesMultipleMetricDataV1#namespace}.

---

### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints()
```


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#name DataOpentelekomcloudCesMultipleMetricDataV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#value DataOpentelekomcloudCesMultipleMetricDataV1#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#name DataOpentelekomcloudCesMultipleMetricDataV1#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_multiple_metric_data_v1#value DataOpentelekomcloudCesMultipleMetricDataV1#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.average">average</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.sum">sum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.timestamp">timestamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.variance">variance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `average`<sup>Required</sup> <a name="average" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.average"></a>

```python
average: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum`<sup>Required</sup> <a name="sum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.sum"></a>

```python
sum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.timestamp"></a>

```python
timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `variance`<sup>Required</sup> <a name="variance" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.variance"></a>

```python
variance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints</a>

---


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>]

---


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>

---


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsList <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataOpentelekomcloudCesMultipleMetricDataV1Metrics]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>]

---


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_multiple_metric_data_v1

dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: IResolvable | typing.List[DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.datapoints">datapoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datapoints`<sup>Required</sup> <a name="datapoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.datapoints"></a>

```python
datapoints: DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.dimensions"></a>

```python
dimensions: DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList</a>

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: IResolvable | typing.List[DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataOpentelekomcloudCesMultipleMetricDataV1Metrics
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>

---



