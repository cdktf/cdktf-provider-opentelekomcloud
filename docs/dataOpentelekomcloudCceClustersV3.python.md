# `dataOpentelekomcloudCceClustersV3` Submodule <a name="`dataOpentelekomcloudCceClustersV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCceClustersV3 <a name="DataOpentelekomcloudCceClustersV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3 opentelekomcloud_cce_clusters_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str = None,
  cluster_type: str = None,
  enterprise_project_id: str = None,
  id: str = None,
  name: str = None,
  region: str = None,
  status: str = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#cluster_id DataOpentelekomcloudCceClustersV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#cluster_type DataOpentelekomcloudCceClustersV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#enterprise_project_id DataOpentelekomcloudCceClustersV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#id DataOpentelekomcloudCceClustersV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#name DataOpentelekomcloudCceClustersV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#region DataOpentelekomcloudCceClustersV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#status DataOpentelekomcloudCceClustersV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#vpc_id DataOpentelekomcloudCceClustersV3#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#cluster_id DataOpentelekomcloudCceClustersV3#cluster_id}.

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.clusterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#cluster_type DataOpentelekomcloudCceClustersV3#cluster_type}.

---

##### `enterprise_project_id`<sup>Optional</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.enterpriseProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#enterprise_project_id DataOpentelekomcloudCceClustersV3#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#id DataOpentelekomcloudCceClustersV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#name DataOpentelekomcloudCceClustersV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#region DataOpentelekomcloudCceClustersV3#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#status DataOpentelekomcloudCceClustersV3#status}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#vpc_id DataOpentelekomcloudCceClustersV3#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetClusterType">reset_cluster_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetEnterpriseProjectId">reset_enterprise_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_cluster_type` <a name="reset_cluster_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetClusterType"></a>

```python
def reset_cluster_type() -> None
```

##### `reset_enterprise_project_id` <a name="reset_enterprise_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetEnterpriseProjectId"></a>

```python
def reset_enterprise_project_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCceClustersV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudCceClustersV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudCceClustersV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudCceClustersV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCceClustersV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.clusters">clusters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList">DataOpentelekomcloudCceClustersV3ClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.clusterTypeInput">cluster_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.enterpriseProjectIdInput">enterprise_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.clusters"></a>

```python
clusters: DataOpentelekomcloudCceClustersV3ClustersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList">DataOpentelekomcloudCceClustersV3ClustersList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_type_input`<sup>Optional</sup> <a name="cluster_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.clusterTypeInput"></a>

```python
cluster_type_input: str
```

- *Type:* str

---

##### `enterprise_project_id_input`<sup>Optional</sup> <a name="enterprise_project_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.enterpriseProjectIdInput"></a>

```python
enterprise_project_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `enterprise_project_id`<sup>Required</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCceClustersV3Clusters <a name="DataOpentelekomcloudCceClustersV3Clusters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Clusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Clusters.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Clusters()
```


### DataOpentelekomcloudCceClustersV3ClustersCertificateClusters <a name="DataOpentelekomcloudCceClustersV3ClustersCertificateClusters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClusters()
```


### DataOpentelekomcloudCceClustersV3ClustersCertificateUsers <a name="DataOpentelekomcloudCceClustersV3ClustersCertificateUsers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsers()
```


### DataOpentelekomcloudCceClustersV3ClustersEndpoints <a name="DataOpentelekomcloudCceClustersV3ClustersEndpoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpoints()
```


### DataOpentelekomcloudCceClustersV3ClustersMasters <a name="DataOpentelekomcloudCceClustersV3ClustersMasters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMasters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMasters.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMasters()
```


### DataOpentelekomcloudCceClustersV3Config <a name="DataOpentelekomcloudCceClustersV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str = None,
  cluster_type: str = None,
  enterprise_project_id: str = None,
  id: str = None,
  name: str = None,
  region: str = None,
  status: str = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#cluster_id DataOpentelekomcloudCceClustersV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#cluster_type DataOpentelekomcloudCceClustersV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#enterprise_project_id DataOpentelekomcloudCceClustersV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#id DataOpentelekomcloudCceClustersV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#name DataOpentelekomcloudCceClustersV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#region DataOpentelekomcloudCceClustersV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#status DataOpentelekomcloudCceClustersV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#vpc_id DataOpentelekomcloudCceClustersV3#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#cluster_id DataOpentelekomcloudCceClustersV3#cluster_id}.

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#cluster_type DataOpentelekomcloudCceClustersV3#cluster_type}.

---

##### `enterprise_project_id`<sup>Optional</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#enterprise_project_id DataOpentelekomcloudCceClustersV3#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#id DataOpentelekomcloudCceClustersV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#name DataOpentelekomcloudCceClustersV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#region DataOpentelekomcloudCceClustersV3#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#status DataOpentelekomcloudCceClustersV3#status}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/cce_clusters_v3#vpc_id DataOpentelekomcloudCceClustersV3#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList <a name="DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference <a name="DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.certificateAuthorityData">certificate_authority_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClusters">DataOpentelekomcloudCceClustersV3ClustersCertificateClusters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_data`<sup>Required</sup> <a name="certificate_authority_data" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.certificateAuthorityData"></a>

```python
certificate_authority_data: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCceClustersV3ClustersCertificateClusters
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClusters">DataOpentelekomcloudCceClustersV3ClustersCertificateClusters</a>

---


### DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList <a name="DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference <a name="DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.clientCertificateData">client_certificate_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.clientKeyData">client_key_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsers">DataOpentelekomcloudCceClustersV3ClustersCertificateUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate_data`<sup>Required</sup> <a name="client_certificate_data" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.clientCertificateData"></a>

```python
client_certificate_data: str
```

- *Type:* str

---

##### `client_key_data`<sup>Required</sup> <a name="client_key_data" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.clientKeyData"></a>

```python
client_key_data: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCceClustersV3ClustersCertificateUsers
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsers">DataOpentelekomcloudCceClustersV3ClustersCertificateUsers</a>

---


### DataOpentelekomcloudCceClustersV3ClustersEndpointsList <a name="DataOpentelekomcloudCceClustersV3ClustersEndpointsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference <a name="DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpoints">DataOpentelekomcloudCceClustersV3ClustersEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCceClustersV3ClustersEndpoints
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpoints">DataOpentelekomcloudCceClustersV3ClustersEndpoints</a>

---


### DataOpentelekomcloudCceClustersV3ClustersList <a name="DataOpentelekomcloudCceClustersV3ClustersList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCceClustersV3ClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCceClustersV3ClustersMastersList <a name="DataOpentelekomcloudCceClustersV3ClustersMastersList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference <a name="DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMasters">DataOpentelekomcloudCceClustersV3ClustersMasters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCceClustersV3ClustersMasters
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMasters">DataOpentelekomcloudCceClustersV3ClustersMasters</a>

---


### DataOpentelekomcloudCceClustersV3ClustersOutputReference <a name="DataOpentelekomcloudCceClustersV3ClustersOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cce_clusters_v3

dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.billingMode">billing_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.certificateClusters">certificate_clusters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList">DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.certificateUsers">certificate_users</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList">DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.containerNetworkCidr">container_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.containerNetworkType">container_network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList">DataOpentelekomcloudCceClustersV3ClustersEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.eniSubnetCidr">eni_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.eniSubnetId">eni_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.kubeConfigRaw">kube_config_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.masters">masters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList">DataOpentelekomcloudCceClustersV3ClustersMastersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.serviceNetworkCidr">service_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Clusters">DataOpentelekomcloudCceClustersV3Clusters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_mode`<sup>Required</sup> <a name="authentication_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

---

##### `billing_mode`<sup>Required</sup> <a name="billing_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.billingMode"></a>

```python
billing_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate_clusters`<sup>Required</sup> <a name="certificate_clusters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.certificateClusters"></a>

```python
certificate_clusters: DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList">DataOpentelekomcloudCceClustersV3ClustersCertificateClustersList</a>

---

##### `certificate_users`<sup>Required</sup> <a name="certificate_users" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.certificateUsers"></a>

```python
certificate_users: DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList">DataOpentelekomcloudCceClustersV3ClustersCertificateUsersList</a>

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `container_network_cidr`<sup>Required</sup> <a name="container_network_cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.containerNetworkCidr"></a>

```python
container_network_cidr: str
```

- *Type:* str

---

##### `container_network_type`<sup>Required</sup> <a name="container_network_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.containerNetworkType"></a>

```python
container_network_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.endpoints"></a>

```python
endpoints: DataOpentelekomcloudCceClustersV3ClustersEndpointsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersEndpointsList">DataOpentelekomcloudCceClustersV3ClustersEndpointsList</a>

---

##### `eni_subnet_cidr`<sup>Required</sup> <a name="eni_subnet_cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.eniSubnetCidr"></a>

```python
eni_subnet_cidr: str
```

- *Type:* str

---

##### `eni_subnet_id`<sup>Required</sup> <a name="eni_subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.eniSubnetId"></a>

```python
eni_subnet_id: str
```

- *Type:* str

---

##### `enterprise_project_id`<sup>Required</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kube_config_raw`<sup>Required</sup> <a name="kube_config_raw" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.kubeConfigRaw"></a>

```python
kube_config_raw: str
```

- *Type:* str

---

##### `masters`<sup>Required</sup> <a name="masters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.masters"></a>

```python
masters: DataOpentelekomcloudCceClustersV3ClustersMastersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersMastersList">DataOpentelekomcloudCceClustersV3ClustersMastersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `service_network_cidr`<sup>Required</sup> <a name="service_network_cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.serviceNetworkCidr"></a>

```python
service_network_cidr: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3ClustersOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudCceClustersV3Clusters
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClustersV3.DataOpentelekomcloudCceClustersV3Clusters">DataOpentelekomcloudCceClustersV3Clusters</a>

---



