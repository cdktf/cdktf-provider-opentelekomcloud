# `dataOpentelekomcloudCesMetricDataV1` Submodule <a name="`dataOpentelekomcloudCesMetricDataV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCesMetricDataV1 <a name="DataOpentelekomcloudCesMetricDataV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1 opentelekomcloud_ces_metric_data_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metric_data_v1

dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dim0: str,
  filter: str,
  from: str,
  metric_name: str,
  namespace: str,
  period: typing.Union[int, float],
  to: str,
  dim1: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dim0">dim0</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#dim0 DataOpentelekomcloudCesMetricDataV1#dim0}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#filter DataOpentelekomcloudCesMetricDataV1#filter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#from DataOpentelekomcloudCesMetricDataV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#metric_name DataOpentelekomcloudCesMetricDataV1#metric_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#namespace DataOpentelekomcloudCesMetricDataV1#namespace}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#period DataOpentelekomcloudCesMetricDataV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#to DataOpentelekomcloudCesMetricDataV1#to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dim1">dim1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#dim1 DataOpentelekomcloudCesMetricDataV1#dim1}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#id DataOpentelekomcloudCesMetricDataV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dim0`<sup>Required</sup> <a name="dim0" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dim0"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#dim0 DataOpentelekomcloudCesMetricDataV1#dim0}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#filter DataOpentelekomcloudCesMetricDataV1#filter}.

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.from"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#from DataOpentelekomcloudCesMetricDataV1#from}.

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#metric_name DataOpentelekomcloudCesMetricDataV1#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#namespace DataOpentelekomcloudCesMetricDataV1#namespace}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.period"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#period DataOpentelekomcloudCesMetricDataV1#period}.

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.to"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#to DataOpentelekomcloudCesMetricDataV1#to}.

---

##### `dim1`<sup>Optional</sup> <a name="dim1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dim1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#dim1 DataOpentelekomcloudCesMetricDataV1#dim1}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#id DataOpentelekomcloudCesMetricDataV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetDim1">reset_dim1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_dim1` <a name="reset_dim1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetDim1"></a>

```python
def reset_dim1() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCesMetricDataV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metric_data_v1

dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metric_data_v1

dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metric_data_v1

dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metric_data_v1

dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudCesMetricDataV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudCesMetricDataV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudCesMetricDataV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCesMetricDataV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.datapoints">datapoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList">DataOpentelekomcloudCesMetricDataV1DatapointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0Input">dim0_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1Input">dim1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.toInput">to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0">dim0</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1">dim1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.to">to</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `datapoints`<sup>Required</sup> <a name="datapoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.datapoints"></a>

```python
datapoints: DataOpentelekomcloudCesMetricDataV1DatapointsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList">DataOpentelekomcloudCesMetricDataV1DatapointsList</a>

---

##### `dim0_input`<sup>Optional</sup> <a name="dim0_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0Input"></a>

```python
dim0_input: str
```

- *Type:* str

---

##### `dim1_input`<sup>Optional</sup> <a name="dim1_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1Input"></a>

```python
dim1_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.toInput"></a>

```python
to_input: str
```

- *Type:* str

---

##### `dim0`<sup>Required</sup> <a name="dim0" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0"></a>

```python
dim0: str
```

- *Type:* str

---

##### `dim1`<sup>Required</sup> <a name="dim1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1"></a>

```python
dim1: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.to"></a>

```python
to: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCesMetricDataV1Config <a name="DataOpentelekomcloudCesMetricDataV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metric_data_v1

dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dim0: str,
  filter: str,
  from: str,
  metric_name: str,
  namespace: str,
  period: typing.Union[int, float],
  to: str,
  dim1: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim0">dim0</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#dim0 DataOpentelekomcloudCesMetricDataV1#dim0}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#filter DataOpentelekomcloudCesMetricDataV1#filter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#from DataOpentelekomcloudCesMetricDataV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#metric_name DataOpentelekomcloudCesMetricDataV1#metric_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#namespace DataOpentelekomcloudCesMetricDataV1#namespace}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#period DataOpentelekomcloudCesMetricDataV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#to DataOpentelekomcloudCesMetricDataV1#to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim1">dim1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#dim1 DataOpentelekomcloudCesMetricDataV1#dim1}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#id DataOpentelekomcloudCesMetricDataV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dim0`<sup>Required</sup> <a name="dim0" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim0"></a>

```python
dim0: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#dim0 DataOpentelekomcloudCesMetricDataV1#dim0}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#filter DataOpentelekomcloudCesMetricDataV1#filter}.

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#from DataOpentelekomcloudCesMetricDataV1#from}.

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#metric_name DataOpentelekomcloudCesMetricDataV1#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#namespace DataOpentelekomcloudCesMetricDataV1#namespace}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#period DataOpentelekomcloudCesMetricDataV1#period}.

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.to"></a>

```python
to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#to DataOpentelekomcloudCesMetricDataV1#to}.

---

##### `dim1`<sup>Optional</sup> <a name="dim1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim1"></a>

```python
dim1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#dim1 DataOpentelekomcloudCesMetricDataV1#dim1}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metric_data_v1#id DataOpentelekomcloudCesMetricDataV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudCesMetricDataV1Datapoints <a name="DataOpentelekomcloudCesMetricDataV1Datapoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metric_data_v1

dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCesMetricDataV1DatapointsList <a name="DataOpentelekomcloudCesMetricDataV1DatapointsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metric_data_v1

dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference <a name="DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metric_data_v1

dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.average">average</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.sum">sum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.timestamp">timestamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.variance">variance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints">DataOpentelekomcloudCesMetricDataV1Datapoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `average`<sup>Required</sup> <a name="average" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.average"></a>

```python
average: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sum`<sup>Required</sup> <a name="sum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.sum"></a>

```python
sum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.timestamp"></a>

```python
timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `variance`<sup>Required</sup> <a name="variance" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.variance"></a>

```python
variance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCesMetricDataV1Datapoints
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints">DataOpentelekomcloudCesMetricDataV1Datapoints</a>

---



