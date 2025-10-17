# `dataOpentelekomcloudCesMetricsV1` Submodule <a name="`dataOpentelekomcloudCesMetricsV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCesMetricsV1 <a name="DataOpentelekomcloudCesMetricsV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1 opentelekomcloud_ces_metrics_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dim: str = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  metric_name: str = None,
  namespace: str = None,
  order: str = None,
  start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.dim">dim</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#dim DataOpentelekomcloudCesMetricsV1#dim}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#id DataOpentelekomcloudCesMetricsV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#limit DataOpentelekomcloudCesMetricsV1#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#metric_name DataOpentelekomcloudCesMetricsV1#metric_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#namespace DataOpentelekomcloudCesMetricsV1#namespace}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.order">order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#order DataOpentelekomcloudCesMetricsV1#order}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#start DataOpentelekomcloudCesMetricsV1#start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dim`<sup>Optional</sup> <a name="dim" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.dim"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#dim DataOpentelekomcloudCesMetricsV1#dim}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#id DataOpentelekomcloudCesMetricsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#limit DataOpentelekomcloudCesMetricsV1#limit}.

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#metric_name DataOpentelekomcloudCesMetricsV1#metric_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#namespace DataOpentelekomcloudCesMetricsV1#namespace}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.order"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#order DataOpentelekomcloudCesMetricsV1#order}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.Initializer.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#start DataOpentelekomcloudCesMetricsV1#start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetDim">reset_dim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetStart">reset_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_dim` <a name="reset_dim" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetDim"></a>

```python
def reset_dim() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.resetStart"></a>

```python
def reset_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCesMetricsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudCesMetricsV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudCesMetricsV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudCesMetricsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCesMetricsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.metaData">meta_data</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList">DataOpentelekomcloudCesMetricsV1MetaDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList">DataOpentelekomcloudCesMetricsV1MetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.dimInput">dim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.dim">dim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.start">start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `meta_data`<sup>Required</sup> <a name="meta_data" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.metaData"></a>

```python
meta_data: DataOpentelekomcloudCesMetricsV1MetaDataList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList">DataOpentelekomcloudCesMetricsV1MetaDataList</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.metrics"></a>

```python
metrics: DataOpentelekomcloudCesMetricsV1MetricsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList">DataOpentelekomcloudCesMetricsV1MetricsList</a>

---

##### `dim_input`<sup>Optional</sup> <a name="dim_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.dimInput"></a>

```python
dim_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `dim`<sup>Required</sup> <a name="dim" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.dim"></a>

```python
dim: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.start"></a>

```python
start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCesMetricsV1Config <a name="DataOpentelekomcloudCesMetricsV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dim: str = None,
  id: str = None,
  limit: typing.Union[int, float] = None,
  metric_name: str = None,
  namespace: str = None,
  order: str = None,
  start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.dim">dim</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#dim DataOpentelekomcloudCesMetricsV1#dim}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#id DataOpentelekomcloudCesMetricsV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#limit DataOpentelekomcloudCesMetricsV1#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#metric_name DataOpentelekomcloudCesMetricsV1#metric_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#namespace DataOpentelekomcloudCesMetricsV1#namespace}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.order">order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#order DataOpentelekomcloudCesMetricsV1#order}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#start DataOpentelekomcloudCesMetricsV1#start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dim`<sup>Optional</sup> <a name="dim" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.dim"></a>

```python
dim: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#dim DataOpentelekomcloudCesMetricsV1#dim}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#id DataOpentelekomcloudCesMetricsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#limit DataOpentelekomcloudCesMetricsV1#limit}.

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#metric_name DataOpentelekomcloudCesMetricsV1#metric_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#namespace DataOpentelekomcloudCesMetricsV1#namespace}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.order"></a>

```python
order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#order DataOpentelekomcloudCesMetricsV1#order}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Config.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/ces_metrics_v1#start DataOpentelekomcloudCesMetricsV1#start}.

---

### DataOpentelekomcloudCesMetricsV1MetaData <a name="DataOpentelekomcloudCesMetricsV1MetaData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaData.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaData()
```


### DataOpentelekomcloudCesMetricsV1Metrics <a name="DataOpentelekomcloudCesMetricsV1Metrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Metrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Metrics.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Metrics()
```


### DataOpentelekomcloudCesMetricsV1MetricsDimensions <a name="DataOpentelekomcloudCesMetricsV1MetricsDimensions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCesMetricsV1MetaDataList <a name="DataOpentelekomcloudCesMetricsV1MetaDataList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesMetricsV1MetaDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCesMetricsV1MetaDataOutputReference <a name="DataOpentelekomcloudCesMetricsV1MetaDataOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.marker">marker</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.total">total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaData">DataOpentelekomcloudCesMetricsV1MetaData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `marker`<sup>Required</sup> <a name="marker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.marker"></a>

```python
marker: str
```

- *Type:* str

---

##### `total`<sup>Required</sup> <a name="total" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaDataOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCesMetricsV1MetaData
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetaData">DataOpentelekomcloudCesMetricsV1MetaData</a>

---


### DataOpentelekomcloudCesMetricsV1MetricsDimensionsList <a name="DataOpentelekomcloudCesMetricsV1MetricsDimensionsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference <a name="DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensions">DataOpentelekomcloudCesMetricsV1MetricsDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCesMetricsV1MetricsDimensions
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensions">DataOpentelekomcloudCesMetricsV1MetricsDimensions</a>

---


### DataOpentelekomcloudCesMetricsV1MetricsList <a name="DataOpentelekomcloudCesMetricsV1MetricsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCesMetricsV1MetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCesMetricsV1MetricsOutputReference <a name="DataOpentelekomcloudCesMetricsV1MetricsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_ces_metrics_v1

dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList">DataOpentelekomcloudCesMetricsV1MetricsDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Metrics">DataOpentelekomcloudCesMetricsV1Metrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.dimensions"></a>

```python
dimensions: DataOpentelekomcloudCesMetricsV1MetricsDimensionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsDimensionsList">DataOpentelekomcloudCesMetricsV1MetricsDimensionsList</a>

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1MetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCesMetricsV1Metrics
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricsV1.DataOpentelekomcloudCesMetricsV1Metrics">DataOpentelekomcloudCesMetricsV1Metrics</a>

---



